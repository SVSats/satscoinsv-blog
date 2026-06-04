import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { getPosts, Post } from "../../utils/posts.ts";

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${parseInt(day)} ${months[parseInt(month) - 1]}, ${year}`;
}

export default function BlogIndex({ data: posts }: PageProps<Post[]>) {
  return (
    <>
      <Head>
        <title>Blog | Starting with your technological freedom.</title>
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
          <h1>Blog</h1>
          <ul class="post-list">
            {posts.map((post) => (
              <li key={post.slug}>
                <span class="post-date">{formatDate(post.date)}</span>
                <a href={`/blog/${post.slug}`}>{post.title}</a>
              </li>
            ))}
          </ul>
          <div class="tags">
            <a href="/blog">#potofhoney</a>
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
