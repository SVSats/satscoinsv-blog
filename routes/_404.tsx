import { Head } from "$fresh/runtime.ts";
import Layout from "../components/Layout.tsx";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 — Página no encontrada</title>
      </Head>
      <Layout>
        <div class="not-found">
          <h1>404</h1>
          <p>Esta página no existe.</p>
          <p>
            <a href="/">← Volver al inicio</a>
          </p>
        </div>
      </Layout>
    </>
  );
}
