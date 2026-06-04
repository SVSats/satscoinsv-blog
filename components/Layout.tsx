import { ComponentChildren } from "preact";

interface LayoutProps {
  title?: string;
  children: ComponentChildren;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div class="container">
      <header>
        <a class="site-title" href="/">
          starting with your technological freedom.
        </a>
        <nav>
          <a href="/">home</a>
          <a href="/blog">blog</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>
          built with{" "}
          <a href="https://fresh.deno.dev" target="_blank" rel="noopener">
            deno fresh
          </a>
          {" · "}
          <a href="https://bearblog.dev" target="_blank" rel="noopener">
            bear spirit ʕ•ᴥ•ʔ
          </a>
          {" · "}
          stack sats, stay sovereign
        </p>
      </footer>
    </div>
  );
}
