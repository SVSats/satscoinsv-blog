import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Starting with your technological freedom.</title>
        <meta
          name="description"
          content="Entusiasta de Linux, Bitcoin y Nostr. Soberanía individual, dinero duro y herramientas libres."
        />
      </Head>
      <div class="container">
        <header>
          <a class="site-title" href="/">
            starting with your technological freedom.
          </a>
          <nav>
            <a href="/" class="active">home</a>
            <a href="/blog">blog</a>
          </nav>
        </header>
        <main>
          <h1>
            Soy Satscoin <span class="cursor"></span>
          </h1>
          <p class="post-meta">published: 2025-08-25 &nbsp;·&nbsp; 3 min read</p>

          <p>
            Soy un entusiasta de Linux, bitcoin y Nostr. Creo en la soberanía
            individual, el dinero duro y las herramientas libres para construir un
            futuro más justo y resistente a la censura.
          </p>
          <p>
            Vuélvete soberano, vuélvete libre.<br />
            Ejecutando Bitcoin🟠 Nostr🟣 Lightning⚡️
          </p>

          <blockquote>
            <p>
              <a
                href="https://njump.me/nevent1qqsqjkkpnprzqh6jrvlg6uh9sxgm5nqt55w65hh8sfng0cemq56hgzspzamhxue69uhky6t5vdhkjmn9wgh8xmmrd9skctczyp30mkg0ff05y9gg587ywy2mujzsmfu6eqslxnk22sde3kvvss5wqqcyqqqqqqgvj0df7"
                target="_blank"
                rel="noopener"
              >
                Puedes encontrarme en Nostr
              </a>
            </p>
          </blockquote>

          <h2>Un poco de mi historia con Bitcoin</h2>

          <p>
            Mi incursión en Bitcoin comenzó en el año 2019. Un amigo —quien
            además era el contador del lugar donde trabajé durante 15 años— me
            preguntó si ya había invertido en Bitcoin. Yo ya había escuchado algo
            al respecto, pero en ese momento no le di mucha importancia.
          </p>
          <p>
            Me mostró cómo había comprado algunos satoshis a través de un exchange
            y cómo, en un par de años, su inversión había crecido. Aunque en ese
            momento no entendía mucho, esa conversación dejó en mí una semilla de
            curiosidad.
          </p>
          <p>
            Lamentablemente, en 2020 llegó la pandemia. Aun así, esa pequeña
            chispa se mantuvo encendida. Empecé a preguntarme más sobre Bitcoin,
            especialmente al ver que mi amigo había ganado algunos dólares extra
            con él. Así comenzó mi aventura, con un deseo cada vez más fuerte de
            entender qué era realmente Bitcoin.
          </p>
          <p>
            Él y yo teníamos un proyecto en mente relacionado con Bitcoin, incluso
            antes de que fuera ley en El Salvador. Pero tristemente, cayó enfermo
            por culpa del COVID-19 y no logró recuperarse en 2021. Su pérdida fue
            muy dura, pero su influencia fue determinante en mi camino.
          </p>
          <p>
            En mi búsqueda por aprender más, encontré una especie de "madriguera
            del conejo" en un canal de Telegram. Allí descubrí una wallet aún en
            fase beta llamada Blixt Wallet, y con ella a una figura clave en mi
            historia: un usuario conocido como DarthCoin. Él brindaba soporte
            técnico sin pedir nada a cambio. Una gran persona, sin duda.
          </p>
          <p>
            DarthCoin me ayudó a configurar mi primera wallet Lightning y me
            explicó, paso a paso, cómo usarla siendo principiante. Fue un proceso
            de prueba y error, me equivoqué varias veces, pero eso solo despertó
            en mí más curiosidad.
          </p>
          <p>
            Quise ir más allá. Compré por Amazon una Raspberry Pi 4 y monté mi
            primer nodo corriendo Bitcoin Core. Darth me ayudó también en esa
            etapa, pero como él mismo decía: el resto depende de uno mismo, si
            realmente quiere ser libre y soberano.
          </p>
          <p>
            Desde entonces, sigo instruyéndome y ayudando a otros sobre el dinero
            duro y el uso de herramientas libres. Mi objetivo es claro: construir
            un futuro más justo, más resistente a la censura y verdaderamente
            descentralizado.
          </p>

          <blockquote>
            <p>
              La privacidad es necesaria para una sociedad abierta en la era
              electrónica. Privacidad no es secreto. Un asunto privado es algo
              que uno no quiere que sepa todo el mundo, pero un asunto secreto es
              algo que uno no quiere que sepa nadie. La privacidad es el poder de
              revelarse selectivamente al mundo.
            </p>
            <p>— Eric Hughes</p>
          </blockquote>
        </main>
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
    </>
  );
}
