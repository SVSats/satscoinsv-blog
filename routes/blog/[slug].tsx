import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { getPost, Post } from "../../utils/posts.ts";

export const handler: Handlers<Post | null> = {
  async GET(_req, ctx) {
    const post = await getPost(ctx.params.slug);
    if (!post) return ctx.renderNotFound();
    return ctx.render(post);
  },
};

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${parseInt(day)} ${months[parseInt(month) - 1]}, ${year}`;
}

export default function BlogPost({ data: post }: PageProps<Post>) {
  return (
    <>
      <Head>
        <title>{post.title} | Starting with your technological freedom.</title>
        <meta name="description" content={post.description} />
      </Head>
      <div class="container">
        <header>
          <a class="site-title" href="/">starting with your technological freedom.</a>
          <nav>
            <a href="/">home</a>
            <a href="/blog" class="active">blog</a>
          </nav>
        </header>
        <main>
          <h1>{post.title}</h1>
          <p class="post-meta">{formatDate(post.date)}</p>
          <div
            class="post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div style="margin-top: 3rem;">
            <a href="/blog">← volver al blog</a>
          </div>
        </main>
        <footer>
          <p>
            built with{" "}
            <a href="https://fresh.deno.dev" target="_blank" rel="noopener">deno fresh</a>
            {" · "}
            <a href="https://bearblog.dev" target="_blank" rel="noopener">bear spirit ʕ•ᴥ•ʔ</a>
            {" · "}
            stack sats, stay sovereign
          </p>
        </footer>
      </div>
    </>
  );
}
