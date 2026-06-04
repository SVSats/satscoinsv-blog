import { useEffect, useState } from "preact/hooks";

interface BitcoinData {
  price: string;
  sats: string;
  blockHeight: string;
  status: "loading" | "live" | "error";
}

export default function BitcoinWidget() {
  const [data, setData] = useState<BitcoinData>({
    price: "---",
    sats: "---",
    blockHeight: "---",
    status: "loading",
  });

  async function fetchData() {
    setData((d) => ({ ...d, status: "loading" }));
    try {
      const [priceRes, blockRes] = await Promise.all([
        fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
        ),
        fetch("https://mempool.space/api/blocks/tip/height"),
      ]);

      const priceData = await priceRes.json();
      const blockHeight = await blockRes.text();
      const currentPrice = priceData.bitcoin.usd;

      const formattedPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      }).format(currentPrice);

      const satsPerDollar = Math.floor(100_000_000 / currentPrice);
      const formattedSats = new Intl.NumberFormat("en-US").format(satsPerDollar);

      setData({
        price: formattedPrice,
        sats: formattedSats + " sats",
        blockHeight: new Intl.NumberFormat("en-US").format(parseInt(blockHeight)),
        status: "live",
      });
    } catch {
      setData((d) => ({ ...d, status: "error" }));
    }
  }

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30_000);
    return () => clearInterval(interval);
  }, []);

  const statusColor =
    data.status === "live"
      ? "#00ffb4"
      : data.status === "error"
      ? "#ff4444"
      : "#556";

  const statusLabel =
    data.status === "live"
      ? "live feed"
      : data.status === "error"
      ? "error"
      : "connecting...";

  return (
    <aside class="btc-widget">
      <div class="btc-widget__header">
        <span class="btc-widget__symbol">₿</span>
        <span class="btc-widget__title">BITCOIN</span>
        <span
          class="btc-widget__dot"
          style={{ background: statusColor, boxShadow: data.status === "live" ? `0 0 6px ${statusColor}` : "none" }}
        />
      </div>

      <div class="btc-widget__body">
        <div class="btc-widget__row">
          <span class="btc-widget__label">Price</span>
          <span class="btc-widget__value btc-widget__value--gold">{data.price}</span>
        </div>
        <div class="btc-widget__row">
          <span class="btc-widget__label">Sats / $1</span>
          <span class="btc-widget__value">{data.sats}</span>
        </div>
        <div class="btc-widget__row">
          <span class="btc-widget__label">1 BTC</span>
          <span class="btc-widget__value">100,000,000 sats</span>
        </div>
        <div class="btc-widget__row">
          <span class="btc-widget__label">Block</span>
          <span class="btc-widget__value btc-widget__value--green">{data.blockHeight}</span>
        </div>
      </div>

      <div class="btc-widget__footer">
        <span
          class="btc-widget__status-dot"
          style={{ background: statusColor }}
        />
        <span class="btc-widget__status-text">{statusLabel}</span>
        <button class="btc-widget__btn" onClick={fetchData} title="Actualizar">
          ↻
        </button>
      </div>

      <div class="btc-widget__source">coingecko · mempool.space</div>
    </aside>
  );
}
