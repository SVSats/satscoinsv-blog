export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
}

// Parse simple frontmatter (--- key: value ---)
function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
  const meta: Record<string, string> = {};
  if (!raw.startsWith("---")) return { meta, body: raw };

  const end = raw.indexOf("---", 3);
  if (end === -1) return { meta, body: raw };

  const fm = raw.slice(3, end).trim();
  const body = raw.slice(end + 3).trim();

  for (const line of fm.split("\n")) {
    const colon = line.indexOf(":");
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    const value = line.slice(colon + 1).trim();
    meta[key] = value;
  }

  return { meta, body };
}

// Minimal Markdown → HTML converter
function markdownToHtml(md: string): string {
  const lines = md.split("\n");
  const html: string[] = [];
  let inBlockquote = false;
  let inParagraph = false;

  const closeParagraph = () => {
    if (inParagraph) { html.push("</p>"); inParagraph = false; }
  };
  const closeBlockquote = () => {
    if (inBlockquote) { html.push("</blockquote>"); inBlockquote = false; }
  };

  const inline = (text: string): string =>
    text
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/`(.+?)`/g, "<code>$1</code>")
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Blank line
    if (trimmed === "") {
      closeParagraph();
      closeBlockquote();
      continue;
    }

    // Headings
    if (trimmed.startsWith("### ")) {
      closeParagraph(); closeBlockquote();
      html.push(`<h3>${inline(trimmed.slice(4))}</h3>`);
      continue;
    }
    if (trimmed.startsWith("## ")) {
      closeParagraph(); closeBlockquote();
      html.push(`<h2>${inline(trimmed.slice(3))}</h2>`);
      continue;
    }
    if (trimmed.startsWith("# ")) {
      closeParagraph(); closeBlockquote();
      html.push(`<h1>${inline(trimmed.slice(2))}</h1>`);
      continue;
    }

    // Horizontal rule
    if (trimmed === "---") {
      closeParagraph(); closeBlockquote();
      html.push("<hr />");
      continue;
    }

    // Blockquote
    if (trimmed.startsWith("> ")) {
      closeParagraph();
      if (!inBlockquote) { html.push("<blockquote>"); inBlockquote = true; }
      html.push(`<p>${inline(trimmed.slice(2))}</p>`);
      continue;
    }

    // Regular paragraph
    closeBlockquote();
    if (!inParagraph) { html.push("<p>"); inParagraph = true; }
    else html.push("<br />");
    html.push(inline(trimmed));
  }

  closeParagraph();
  closeBlockquote();

  return html.join("\n");
}

// Read all posts from /posts directory
export async function getPosts(): Promise<Post[]> {
  const posts: Post[] = [];

  for await (const entry of Deno.readDir("./posts")) {
    if (!entry.isFile || !entry.name.endsWith(".md")) continue;

    const slug = entry.name.replace(/\.md$/, "");
    const raw = await Deno.readTextFile(`./posts/${entry.name}`);
    const { meta, body } = parseFrontmatter(raw);

    posts.push({
      slug,
      title: meta.title ?? slug,
      date: meta.date ?? "",
      description: meta.description ?? "",
      content: markdownToHtml(body),
    });
  }

  // Sort newest first
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

// Read a single post by slug
export async function getPost(slug: string): Promise<Post | null> {
  try {
    const raw = await Deno.readTextFile(`./posts/${slug}.md`);
    const { meta, body } = parseFrontmatter(raw);
    return {
      slug,
      title: meta.title ?? slug,
      date: meta.date ?? "",
      description: meta.description ?? "",
      content: markdownToHtml(body),
    };
  } catch {
    return null;
  }
}
