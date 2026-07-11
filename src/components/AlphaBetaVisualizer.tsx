import { useState } from "preact/hooks";

function erf(x: number): number {
  const sign = x < 0 ? -1 : 1;
  const ax = Math.abs(x);
  const t = 1 / (1 + 0.3275911 * ax);
  const y =
    1 -
    ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t +
      0.254829592) *
      t *
      Math.exp(-ax * ax);
  return sign * y;
}

function normCDF(z: number): number {
  return 0.5 * (1 + erf(z / Math.SQRT2));
}

function pdf(x: number, mu: number, sigma: number): number {
  const d = (x - mu) / sigma;
  return Math.exp(-0.5 * d * d) / (sigma * Math.sqrt(2 * Math.PI));
}

export default function AlphaBetaVisualizer() {
  const [mu0, setMu0] = useState(0);
  const [mu1, setMu1] = useState(1.5);
  const [sigma, setSigma] = useState(1);
  const [c, setC] = useState(1);

  const alpha = 1 - normCDF((c - mu0) / sigma);
  const beta = normCDF((c - mu1) / sigma);
  const power = 1 - beta;

  const W = 640;
  const H = 320;
  const m = { top: 20, right: 20, bottom: 40, left: 20 };
  const plotW = W - m.left - m.right;
  const plotH = H - m.top - m.bottom;
  const baseY = m.top + plotH;

  const pad = 4 * sigma;
  const xMin = Math.min(mu0, mu1) - pad;
  const xMax = Math.max(mu0, mu1) + pad;
  const yMax = (1 / (sigma * Math.sqrt(2 * Math.PI))) * 1.08;

  const scaleX = (v: number) => m.left + ((v - xMin) / (xMax - xMin)) * plotW;
  const scaleY = (p: number) => baseY - (p / yMax) * plotH;

  const N = 280;
  const h0: { x: number; p: number }[] = [];
  const h1: { x: number; p: number }[] = [];
  for (let i = 0; i <= N; i++) {
    const x = xMin + (i / N) * (xMax - xMin);
    h0.push({ x, p: pdf(x, mu0, sigma) });
    h1.push({ x, p: pdf(x, mu1, sigma) });
  }

  const areaPath = (pts: { x: number; p: number }[]) => {
    if (pts.length === 0) return "";
    let d = `M ${scaleX(pts[0].x).toFixed(2)} ${baseY}`;
    for (const pt of pts) d += ` L ${scaleX(pt.x).toFixed(2)} ${scaleY(pt.p).toFixed(2)}`;
    d += ` L ${scaleX(pts[pts.length - 1].x).toFixed(2)} ${baseY} Z`;
    return d;
  };

  const rightOf = (pts: { x: number; p: number }[], bound: number) =>
    pts.filter((pt) => pt.x >= bound);
  const leftOf = (pts: { x: number; p: number }[], bound: number) =>
    pts.filter((pt) => pt.x <= bound);

  const pct = (v: number) => `${(v * 100).toFixed(2)}%`;

  const slider = (
    label: string,
    value: number,
    min: number,
    max: number,
    step: number,
    set: (v: number) => void,
  ) => (
    <label class="flex flex-col gap-1">
      <span class="flex items-center justify-between text-xs font-medium">
        <span>{label}</span>
        <span class="font-mono text-cream-600 dark:text-cream-400">
          {value.toFixed(2)}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onInput={(e) => set((e.currentTarget as HTMLInputElement).valueAsNumber)}
        class="w-full accent-brand-500"
      />
    </label>
  );

  return (
    <div class="my-8 rounded-xl border border-cream-300 bg-cream-50/60 p-5 dark:border-white/10 dark:bg-white/5">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        class="w-full text-cream-800 dark:text-cream-200"
        role="img"
        aria-label="Normal distributions under the null and alternative hypotheses, with the Type I and Type II error regions shaded"
      >
        {/* Rejection region under H0 (alpha) */}
        <path d={areaPath(rightOf(h0, c))} fill="rgba(245, 158, 11, 0.45)" />
        {/* Non-rejection region under H1 (beta) */}
        <path d={areaPath(leftOf(h1, c))} fill="rgba(59, 130, 246, 0.45)" />
        {/* Full H0 curve (light) */}
        <path d={areaPath(h0)} fill="rgba(245, 158, 11, 0.16)" />
        {/* Full H1 curve (light) */}
        <path d={areaPath(h1)} fill="rgba(59, 130, 246, 0.16)" />

        {/* H0 outline */}
        <path
          d={h0
            .map((pt, i) =>
              `${i === 0 ? "M" : "L"} ${scaleX(pt.x).toFixed(2)} ${scaleY(pt.p).toFixed(2)}`,
            )
            .join(" ")}
          fill="none"
          stroke="rgb(245, 158, 11)"
          stroke-width="2"
        />
        {/* H1 outline */}
        <path
          d={h1
            .map((pt, i) =>
              `${i === 0 ? "M" : "L"} ${scaleX(pt.x).toFixed(2)} ${scaleY(pt.p).toFixed(2)}`,
            )
            .join(" ")}
          fill="none"
          stroke="rgb(59, 130, 246)"
          stroke-width="2"
        />

        {/* Baseline */}
        <line
          x1={m.left}
          y1={baseY}
          x2={W - m.right}
          y2={baseY}
          stroke="currentColor"
          stroke-opacity="0.3"
        />
        {/* Critical value line */}
        <line
          x1={scaleX(c)}
          y1={m.top}
          x2={scaleX(c)}
          y2={baseY}
          stroke="currentColor"
          stroke-opacity="0.6"
          stroke-dasharray="5 4"
        />
        <text
          x={scaleX(c)}
          y={m.top - 6}
          text-anchor="middle"
          font-size="12"
          fill="currentColor"
          fill-opacity="0.7"
        >
          c = {c.toFixed(2)}
        </text>

        {/* Legend */}
        <text x={m.left + 6} y={m.top + 14} font-size="12" fill="rgb(245, 158, 11)">
          H₀ (μ₀ = {mu0.toFixed(2)})
        </text>
        <text
          x={m.left + 6}
          y={m.top + 30}
          font-size="12"
          fill="rgb(59, 130, 246)"
        >
          H₁ (μ₁ = {mu1.toFixed(2)})
        </text>
      </svg>

      <div class="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
        {slider("μ₀ (null)", mu0, -3, 3, 0.05, setMu0)}
        {slider("μ₁ (alt)", mu1, -3, 3, 0.05, setMu1)}
        {slider("σ", sigma, 0.2, 3, 0.05, setSigma)}
        {slider("c (critical)", c, -5, 5, 0.05, setC)}
      </div>

      <div class="mt-5 grid grid-cols-3 gap-3 text-center">
        <div class="rounded-lg bg-amber-500/10 p-3">
          <div class="text-xs font-medium text-cream-600 dark:text-cream-400">
            α (Type I)
          </div>
          <div class="mt-1 font-mono text-lg">{pct(alpha)}</div>
        </div>
        <div class="rounded-lg bg-blue-500/10 p-3">
          <div class="text-xs font-medium text-cream-600 dark:text-cream-400">
            β (Type II)
          </div>
          <div class="mt-1 font-mono text-lg">{pct(beta)}</div>
        </div>
        <div class="rounded-lg bg-emerald-500/10 p-3">
          <div class="text-xs font-medium text-cream-600 dark:text-cream-400">
            Power (1 − β)
          </div>
          <div class="mt-1 font-mono text-lg">{pct(power)}</div>
        </div>
      </div>
    </div>
  );
}
