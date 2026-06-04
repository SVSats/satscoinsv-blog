import { type PageProps } from "$fresh/server.ts";
import BitcoinWidget from "../islands/BitcoinWidget.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html lang="es">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5" />
        <title>Starting with your technological freedom.</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Rajdhani:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div class="site-layout">
          <div class="site-layout__main">
            <Component />
          </div>
          <div class="site-layout__sidebar">
            <BitcoinWidget />
          </div>
        </div>
      </body>
    </html>
  );
}
