import type { Locale, Project } from "@/content";
import { SkillIcon } from "./icons";

type HeroArtProps = {
  code: {
    file: string;
    build: string;
    preview: { url: string; module: string; title: string; progress: string; cta: string };
  };
};

// Cores no estilo One Dark: palavra-chave, função, componente, atributo, variável, texto.
const k = "text-[#c678dd]";
const f = "text-[#61afef]";
const c = "text-[#e5c07b]";
const a = "text-[#d19a66]";
const v = "text-[#e06c75]";
const p = "text-[#abb2bf]";

const codeLines: [string, string][][] = [
  [[ "export default async function ", k], ["CoursePage", f], ["({ ", p], ["params", v], [" }) {", p]],
  [["  const ", k], ["{ id } = ", p], ["await ", k], ["params", v], [";", p]],
  [["  const ", k], ["course = ", p], ["await ", k], ["api.courses.", p], ["get", f], ["(id);", p]],
  [["", p]],
  [["  return ", k], ["(", p]],
  [["    <", p], ["CourseLayout ", c], ["title", a], ["={course.title}>", p]],
  [["      <", p], ["LessonPlayer ", c], ["lesson", a], ["={course.current} />", p]],
  [["      <", p], ["Progress ", c], ["value", a], ["={course.progress} />", p]],
  [["    </", p], ["CourseLayout", c], [">", p]],
  [["  );", p]],
  [["}", p]],
];

/** Ilustração do hero: o código de uma página Next.js, a tela que ela gera e o build passando. */
export function HeroArt({ code }: HeroArtProps) {
  return (
    <div className="relative mx-auto aspect-[1/1.22] w-[min(24rem,92vw)] sm:aspect-[1/1.08] lg:w-[32rem]">
      {/* Fundo: grade pontilhada que some nas bordas e dois brilhos suaves (violeta e azul) */}
      <div
        aria-hidden
        className="absolute -inset-[12%] opacity-40 [mask-image:radial-gradient(closest-side,black,transparent)]"
        style={{
          backgroundImage: "radial-gradient(var(--subtle) 1px, transparent 1.2px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div aria-hidden className="pop absolute left-[8%] top-[16%] size-[60%] rounded-full bg-accent/70 blur-[70px]" />
      <div aria-hidden className="pop absolute bottom-[6%] right-[4%] size-[48%] rounded-full bg-accent-2/55 blur-[70px]" />

      {/* Editor */}
      <div className="float absolute left-0 top-0 w-[94%] overflow-hidden rounded-xl border border-white/10 bg-[#0f1115] shadow-2xl shadow-black/60 sm:w-[90%]">
        <div className="flex items-center border-b border-white/10 bg-[#16181d]">
          <div className="flex items-center gap-1.5 px-4 py-3">
            <span className="size-2.5 rounded-full bg-[#ff5f57]" />
            <span className="size-2.5 rounded-full bg-[#febc2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex h-full items-center gap-2 border-x border-white/10 bg-[#0f1115] px-3 py-2.5">
            <span className="rounded-sm bg-[#3178c6] px-1 font-mono text-[8px] font-bold leading-tight text-white">TS</span>
            <span className="truncate font-mono text-[10px] text-white/70 sm:text-[11px]">{code.file}</span>
          </div>
        </div>
        <pre className="overflow-hidden px-3 py-4 font-mono text-[9.5px] leading-[1.75] sm:px-4 sm:text-[11px] lg:text-[12px]">
          {codeLines.map((line, i) => (
            <div key={i} className="flex">
              <span className="mr-3 w-4 shrink-0 select-none text-right text-white/20 sm:mr-4">{i + 1}</span>
              <span className="whitespace-pre">
                {line.map(([text, color], j) => (
                  <span key={j} className={color}>
                    {text}
                  </span>
                ))}
                {i === 6 && <span className="ml-px inline-block h-[1.1em] w-[2px] translate-y-[2px] animate-pulse bg-accent" />}
              </span>
            </div>
          ))}
        </pre>
      </div>

      {/* Tela renderizada */}
      <div
        className="float absolute bottom-0 right-0 w-[54%] overflow-hidden rounded-xl border border-black/10 bg-white shadow-2xl shadow-black/50 sm:w-[46%]"
        style={{ animationDelay: "-2s" }}
      >
        <div className="flex items-center gap-2 border-b border-black/5 bg-[#f3f4f6] px-3 py-2">
          <span className="flex gap-1">
            <span className="size-1.5 rounded-full bg-black/15" />
            <span className="size-1.5 rounded-full bg-black/15" />
            <span className="size-1.5 rounded-full bg-black/15" />
          </span>
          <span className="flex-1 truncate rounded bg-white px-2 py-0.5 font-mono text-[9px] text-black/50">{code.preview.url}</span>
        </div>
        <div className="p-3 sm:p-4">
          <div className="relative grid aspect-[16/8] place-items-center overflow-hidden rounded-lg bg-gradient-to-br from-[#1e293b] to-[#0f172a]">
            <span aria-hidden className="absolute inset-x-4 top-3 h-1 rounded-full bg-white/10" />
            <span aria-hidden className="absolute left-4 top-6 h-1 w-1/2 rounded-full bg-white/10" />
            <span className="grid size-8 place-items-center rounded-full bg-white/90 text-[#1e293b] shadow">
              <svg aria-hidden viewBox="0 0 24 24" className="ml-0.5 size-3.5" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </div>
          <p className="mt-3 text-[9px] font-bold uppercase tracking-wider text-[#2563eb] sm:text-[10px]">{code.preview.module}</p>
          <p className="mt-0.5 text-[11px] font-bold leading-snug text-[#0f172a] sm:text-[13px]">{code.preview.title}</p>
          <div className="mt-2.5 flex items-center gap-2">
            <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-black/10">
              <span className="block h-full w-[68%] rounded-full bg-[#2563eb]" />
            </span>
            <span className="text-[9px] text-black/50">{code.preview.progress}</span>
          </div>
        </div>
      </div>

      {/* Build */}
      <div
        className="float absolute bottom-[10%] left-0 flex items-center gap-2 rounded-lg border border-white/10 bg-[#0f1115] px-3 py-2 font-mono text-[10px] shadow-xl shadow-black/50 sm:bottom-[14%] sm:text-[11px]"
        style={{ animationDelay: "-1s" }}
      >
        <span className="text-white/40">$</span>
        <span className="text-white/80">next build</span>
        <span className="text-accent">
          ✓<span className="hidden sm:inline"> {code.build}</span>
        </span>
      </div>
    </div>
  );
}

const coverStyle: Record<"whatsapp" | "web" | "ticket" | "database", { from: string; icon: string; tag: string }> = {
  whatsapp: { from: "from-[#25d366]/35", icon: "whatsapp", tag: "WhatsApp · IA" },
  web: { from: "from-[#3b82f6]/35", icon: "globe", tag: "Web app" },
  ticket: { from: "from-[#a855f7]/35", icon: "ticket", tag: "Slack · Jira" },
  database: { from: "from-[#f59e0b]/35", icon: "database", tag: "100.000+ registros" },
};

const mockText = {
  pt: {
    business: "Studio Exemplo",
    service: "Corte + barba · 45 min",
    days: [["Seg", "10"], ["Ter", "11"], ["Qua", "12"], ["Qui", "13"], ["Sex", "14"]],
    cta: "Pagar sinal com Pix · R$ 20",
    paid: "Pix recebido",
  },
  en: {
    business: "Example Studio",
    service: "Haircut + beard · 45 min",
    days: [["Mon", "10"], ["Tue", "11"], ["Wed", "12"], ["Thu", "13"], ["Fri", "14"]],
    cta: "Pay deposit with Pix · R$ 20",
    paid: "Pix received",
  },
};

/** Tela ilustrativa do SaaS de agendamento: página pública de reserva. */
function BookingMockup({ lang }: { lang: Locale }) {
  const m = mockText[lang];
  const slots = ["09:00", "10:00", "11:00", "13:30", "14:00", "15:00", "16:30", "18:00"];
  const taken = new Set(["10:00", "15:00"]);
  // Mesmas cores do Agenda de verdade (verde-azulado), para a capa parecer o sistema.
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#115e59] via-[#0f766e] to-[#14b8a6]">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "linear-gradient(rgb(255 255 255) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative w-[78%] max-w-[290px] rounded-xl bg-white p-3 text-left shadow-2xl shadow-black/30">
        <div className="flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-lg bg-[#0f766e] text-[10px] font-bold text-white">SE</span>
          <div className="leading-tight">
            <p className="text-[11px] font-bold text-[#0f172a]">{m.business}</p>
            <p className="text-[9px] text-[#64748b]">{m.service}</p>
          </div>
        </div>
        <div className="mt-2.5 grid grid-cols-5 gap-1">
          {m.days.map(([d, n], i) => (
            <span
              key={d}
              className={`rounded-md border py-1 text-center leading-tight ${i === 1 ? "border-[#0f766e] bg-[#0f766e] text-white" : "border-[#e2e8f0] text-[#64748b]"}`}
            >
              <span className="block text-[8px]">{d}</span>
              <span className="block text-[10px] font-bold">{n}</span>
            </span>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-4 gap-1">
          {slots.map((h) => (
            <span
              key={h}
              className={`rounded-md border py-0.5 text-center text-[9px] font-semibold tabular-nums ${
                h === "14:00"
                  ? "border-[#0f766e] bg-[#0f766e] text-white"
                  : taken.has(h)
                    ? "border-[#e2e8f0] text-[#cbd5e1] line-through"
                    : "border-[#e2e8f0] text-[#475569]"
              }`}
            >
              {h}
            </span>
          ))}
        </div>
        <p className="mt-2.5 rounded-md bg-[#0f766e] py-1.5 text-center text-[9.5px] font-bold text-white">{m.cta}</p>
      </div>
      <span className="absolute bottom-3 right-3 hidden items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[9px] font-bold text-[#047857] shadow-lg shadow-black/20 sm:inline-flex">
        <span className="grid size-3.5 place-items-center rounded-full bg-[#059669] text-[8px] text-white">✓</span>
        {m.paid}
      </span>
    </div>
  );
}

const pixText = {
  pt: { charge: "Cobrança", paid: "PAGA", log: "webhook · log", recon: "conciliação" },
  en: { charge: "Charge", paid: "PAID", log: "webhook · log", recon: "reconciliation" },
};

/** Tela ilustrativa da API Pix: o mesmo webhook chegando várias vezes e uma única baixa. */
function PixMockup({ lang }: { lang: Locale }) {
  const m = pixText[lang];
  return (
    <div className="relative flex h-full w-full items-center justify-center gap-3 overflow-hidden bg-gradient-to-br from-[#32bcad]/40 to-[#0b0b0b] to-75% px-4 text-left">
      <div className="w-[78%] overflow-hidden rounded-lg border border-white/10 bg-[#0f1115] shadow-xl shadow-black/50 sm:w-[54%]">
        <div className="flex items-center justify-between border-b border-white/10 px-3 py-1.5">
          <span className="font-mono text-[9px] text-white/60">{m.log}</span>
          <span className="size-1.5 animate-pulse rounded-full bg-accent" />
        </div>
        <ul className="space-y-1 p-3 font-mono text-[9px] leading-tight text-white/70">
          <li>
            webhook <span className="text-accent">APLICADO</span>
          </li>
          <li>
            webhook <span className="text-[#e5c07b]">DUPLICADO</span>
          </li>
          <li>
            webhook <span className="text-[#e5c07b]">DUPLICADO</span>
          </li>
          <li className="text-white/40">… ×5</li>
          <li>
            {m.recon} <span className="text-[#e5c07b]">DUPLICADO</span>
          </li>
        </ul>
      </div>
      <div className="hidden w-[38%] rounded-xl bg-white p-3 shadow-2xl shadow-black/50 sm:block">
        <p className="text-[9px] font-medium uppercase tracking-wider text-black/45">{m.charge} Pix</p>
        <p className="mt-1 whitespace-nowrap text-base font-bold leading-none text-[#111]">R$ 25,90</p>
        <span className="mt-2.5 inline-block rounded-full bg-[#32bcad]/15 px-2 py-0.5 text-[9px] font-bold text-[#1f8a7e]">
          ✓ {m.paid}
        </span>
        <p className="mt-2.5 truncate font-mono text-[8px] text-black/40">E00000000202611…</p>
      </div>
    </div>
  );
}

const cliText = {
  pt: { total: "Duração mínima: 7 dias", path: "Caminho crítico:", slack: "folga" },
  en: { total: "Minimum duration: 7 days", path: "Critical path:", slack: "slack" },
};

/** Tela ilustrativa da ferramenta de caminho crítico rodando no terminal. */
function CliMockup({ lang }: { lang: Locale }) {
  const m = cliText[lang];
  const rows: [string, string, boolean][] = [
    ["A", "0", true],
    ["B", "1", false],
    ["C", "0", true],
    ["D", "0", true],
  ];
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#8b5cf6]/40 to-[#0b0b0b] to-75% px-4 text-left">
      <div className="w-[86%] max-w-[340px] overflow-hidden rounded-lg border border-white/10 bg-[#0f1115] shadow-xl shadow-black/50">
        <div className="flex gap-1.5 border-b border-white/10 px-3 py-2">
          <span className="size-2 rounded-full bg-[#ff5f57]" />
          <span className="size-2 rounded-full bg-[#febc2e]" />
          <span className="size-2 rounded-full bg-[#28c840]" />
        </div>
        <div className="space-y-1 p-3 font-mono text-[9.5px] leading-tight text-white/70">
          <p>
            <span className="text-accent">$</span> node src/cli.ts manutencao.json
          </p>
          <p className="text-white">{m.total}</p>
          <p>
            {m.path} <span className="text-[#e5c07b]">A → C → D</span>
          </p>
          <div className="mt-1.5 grid grid-cols-3 gap-x-2 gap-y-0.5 text-white/55">
            {rows.map(([id, folga, critica]) => (
              <span key={id} className="contents">
                <span>{id}</span>
                <span>
                  {m.slack} {folga}
                </span>
                <span className={critica ? "text-[#e06c75]" : ""}>{critica ? "●" : "○"}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const filaText = {
  pt: { queue: "fila", retry: "espera", dead: "mortas", delivered: "entregue ao ERP" },
  en: { queue: "queue", retry: "retry", dead: "dead letter", delivered: "delivered to ERP" },
};

/** Tela ilustrativa do hub: fila principal, filas de espera e fila de mortas. */
function FilaMockup({ lang }: { lang: Locale }) {
  const m = filaText[lang];
  const caixa = "rounded-lg border border-white/10 bg-[#0f1115] px-2.5 py-2 shadow-xl shadow-black/40";
  const msg = (cor: string) => <span className={`h-2 w-5 rounded-sm ${cor}`} />;
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#3730a3] via-[#4f46e5] to-[#7c3aed] px-4">
      <div className="grid w-full max-w-[320px] grid-cols-[1fr_auto_1fr] items-center gap-2 font-mono text-[9px] text-white/80">
        <div className={caixa}>
          <p className="mb-1.5 text-white/50">hub.{m.queue}</p>
          <div className="flex gap-1">{msg("bg-[#60a5fa]")}{msg("bg-[#60a5fa]")}{msg("bg-[#60a5fa]")}</div>
        </div>
        <span className="text-white/60">→</span>
        <div className={`${caixa} text-center`}>
          <p className="text-[#86efac]">✓ {m.delivered}</p>
        </div>
        <div className={caixa}>
          <p className="mb-1.5 text-white/50">{m.retry} 5s · 30s · 2m</p>
          <div className="flex gap-1">{msg("bg-[#fbbf24]")}{msg("bg-[#fbbf24]")}</div>
        </div>
        <span className="text-white/60">↺</span>
        <div className={caixa}>
          <p className="mb-1.5 text-white/50">hub.{m.dead}</p>
          <div className="flex gap-1">{msg("bg-[#f87171]")}</div>
        </div>
      </div>
    </div>
  );
}

const cursoText = {
  pt: { course: "Onboarding de vendas", blocks: ["Vídeo", "Texto", "Quiz"], path: "Rota de aprendizagem", steps: ["Boas-vindas", "Produto", "Negociação"], scorm: "SCORM" },
  en: { course: "Sales onboarding", blocks: ["Video", "Text", "Quiz"], path: "Learning path", steps: ["Welcome", "Product", "Negotiation"], scorm: "SCORM" },
};

/** Capa ilustrativa de uma plataforma de cursos: editor com blocos e rota de aprendizagem (sem marca nem tela real). */
function CursoMockup({ lang }: { lang: Locale }) {
  const m = cursoText[lang];
  return (
    <div className="relative flex h-full w-full items-center justify-center gap-2.5 overflow-hidden bg-gradient-to-br from-[#3b1f63] via-[#5b2d8f] to-[#7c4dbd] px-4 text-left">
      <div className="w-[80%] max-w-[230px] rounded-lg bg-white p-2.5 shadow-2xl shadow-black/30 sm:w-[56%]">
        <div className="flex items-center justify-between">
          <p className="truncate text-[9.5px] font-bold text-[#1f1235]">{m.course}</p>
          <span className="rounded bg-[#a3d977] px-1.5 py-0.5 text-[7.5px] font-bold text-[#1f1235]">{m.scorm}</span>
        </div>
        <div className="mt-2 grid grid-cols-[1fr_2.2fr] gap-1.5">
          <div className="space-y-1">
            {m.blocks.map((b) => (
              <span key={b} className="block rounded border border-[#e9e2f5] bg-[#f6f2fc] px-1.5 py-1 text-[8px] font-medium text-[#5b2d8f]">
                {b}
              </span>
            ))}
          </div>
          <div className="space-y-1 rounded border border-dashed border-[#c9b8e6] p-1.5">
            <span className="block h-7 rounded bg-[#ede5f8]" />
            <span className="block h-1 w-full rounded bg-[#e5e7eb]" />
            <span className="block h-1 w-3/4 rounded bg-[#e5e7eb]" />
            <span className="block rounded bg-[#5b2d8f] py-0.5 text-center text-[7.5px] font-bold text-white">Quiz</span>
          </div>
        </div>
      </div>
      <div className="hidden w-[36%] max-w-[140px] rounded-lg bg-white/95 p-2.5 shadow-2xl shadow-black/30 sm:block">
        <p className="text-[8px] font-semibold uppercase tracking-wider text-[#5b2d8f]">{m.path}</p>
        <ol className="mt-1.5 space-y-1.5">
          {m.steps.map((st, i) => (
            <li key={st} className="flex items-center gap-1.5 text-[8.5px] text-[#1f1235]">
              <span
                className={`grid size-3.5 shrink-0 place-items-center rounded-full text-[7px] font-bold ${i === 0 ? "bg-[#a3d977] text-[#1f1235]" : i === 1 ? "bg-[#5b2d8f] text-white" : "border border-[#c9b8e6] text-[#5b2d8f]"}`}
              >
                {i === 0 ? "✓" : i + 1}
              </span>
              {st}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

const matriculaText = {
  pt: {
    title: "Matrícula online",
    course: "Graduação · Administração",
    fields: ["Dados pessoais", "Documentos", "Contrato"],
    status: "Acompanhar matrícula",
    steps: ["Inscrição recebida", "Documentos aprovados", "Matrícula confirmada"],
  },
  en: {
    title: "Online enrollment",
    course: "Undergraduate · Business",
    fields: ["Personal details", "Documents", "Contract"],
    status: "Track enrollment",
    steps: ["Application received", "Documents approved", "Enrollment confirmed"],
  },
};

/** Capa ilustrativa do fluxo de matrícula: formulário em etapas e acompanhamento (sem marca nem tela real). */
function MatriculaMockup({ lang }: { lang: Locale }) {
  const m = matriculaText[lang];
  return (
    <div className="relative flex h-full w-full items-center justify-center gap-2.5 overflow-hidden bg-gradient-to-br from-[#0f2a4a] via-[#16406e] to-[#1f5d99] px-4 text-left">
      <div className="w-[80%] max-w-[220px] rounded-lg bg-white p-2.5 shadow-2xl shadow-black/30 sm:w-[54%]">
        <p className="text-[9.5px] font-bold text-[#0f2a4a]">{m.title}</p>
        <p className="text-[8px] text-[#64748b]">{m.course}</p>
        <div className="mt-2 space-y-1">
          {m.fields.map((f, i) => (
            <div key={f} className="flex items-center gap-1.5 rounded border border-[#e2e8f0] px-1.5 py-1">
              <span
                className={`grid size-3.5 shrink-0 place-items-center rounded-full text-[7px] font-bold ${i < 2 ? "bg-[#16406e] text-white" : "border border-[#cbd5e1] text-[#64748b]"}`}
              >
                {i < 2 ? "✓" : i + 1}
              </span>
              <span className="text-[8.5px] text-[#334155]">{f}</span>
            </div>
          ))}
        </div>
        <p className="mt-2 rounded bg-[#f2b705] py-1 text-center text-[8.5px] font-bold text-[#0f2a4a]">{m.fields[2]} →</p>
      </div>
      <div className="hidden w-[38%] max-w-[150px] rounded-lg bg-white/95 p-2.5 shadow-2xl shadow-black/30 sm:block">
        <p className="text-[8px] font-semibold uppercase tracking-wider text-[#16406e]">{m.status}</p>
        <ol className="mt-1.5 space-y-1.5">
          {m.steps.map((st, i) => (
            <li key={st} className="flex items-start gap-1.5 text-[8px] leading-tight text-[#0f2a4a]">
              <span className={`mt-0.5 size-2 shrink-0 rounded-full ${i < 2 ? "bg-[#22c55e]" : "border border-[#cbd5e1]"}`} />
              {st}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

const docsText = {
  pt: {
    question: "Quanto é o auxílio home office?",
    answer: "R$ 150,00 por mês, pago na folha de pagamento",
    source: "Manual · pág. 3",
    quote: "Quem está no modelo híbrido recebe um auxílio home office de R$ 150,00 por mês.",
  },
  en: {
    question: "How much is the home office allowance?",
    answer: "R$ 150.00 a month, paid with your salary",
    source: "Handbook · p. 3",
    quote: "Hybrid employees get a home office allowance of R$ 150.00 a month.",
  },
};

/** Tela ilustrativa do assistente: resposta com citação e o trecho da página destacado. */
function DocsMockup({ lang }: { lang: Locale }) {
  const m = docsText[lang];
  // Mesmas cores da tela de verdade (fundo cinza-claro, índigo e marca-texto amarelo).
  return (
    <div className="relative flex h-full w-full items-center justify-center gap-2.5 overflow-hidden bg-gradient-to-br from-[#e0e7ff] via-[#f3f4f7] to-[#c7d2fe] px-4 text-left">
      <div className="w-[80%] max-w-[230px] space-y-1.5 sm:w-[54%]">
        <p className="ml-auto w-fit max-w-full rounded-lg rounded-br-sm bg-[#111827] px-2.5 py-1.5 text-[9px] font-medium text-white shadow-lg shadow-black/20">
          {m.question}
        </p>
        <div className="rounded-lg rounded-bl-sm bg-white p-2.5 shadow-xl shadow-[#3730a3]/15">
          <p className="text-[9.5px] leading-snug text-[#111827]">
            {m.answer}{" "}
            <span className="rounded bg-[#3730a3] px-1 text-[8px] font-bold text-white">1</span>
          </p>
          <p className="mt-1.5 font-mono text-[7.5px] text-[#6b7280]">Textual #1 · Vetorial #1</p>
        </div>
      </div>
      <div className="hidden w-[38%] max-w-[150px] rounded-lg bg-white p-2.5 shadow-2xl shadow-[#3730a3]/20 sm:block">
        <p className="truncate font-mono text-[7.5px] font-semibold text-[#3730a3]">{m.source}</p>
        <div className="mt-1.5 space-y-1">
          <span className="block h-1 w-full rounded bg-[#e5e7eb]" />
          <span className="block h-1 w-4/5 rounded bg-[#e5e7eb]" />
        </div>
        <p className="mt-1.5 text-[8px] leading-snug text-[#111827]">
          <mark className="rounded-sm bg-[#fde68a] px-0.5 text-[#111827]">{m.quote}</mark>
        </p>
        <span className="mt-1.5 block h-1 w-3/5 rounded bg-[#e5e7eb]" />
      </div>
    </div>
  );
}

/** Capa desenhada para projetos sem print público (código de empresa ou projeto em andamento). */
export function ProjectCover({ project, lang }: { project: Project; lang: Locale }) {
  if (project.cover === "curso") return <CursoMockup lang={lang} />;
  if (project.cover === "matricula") return <MatriculaMockup lang={lang} />;
  if (project.cover === "docs") return <DocsMockup lang={lang} />;
  if (project.cover === "booking") return <BookingMockup lang={lang} />;
  if (project.cover === "pix") return <PixMockup lang={lang} />;
  if (project.cover === "cli") return <CliMockup lang={lang} />;
  if (project.cover === "fila") return <FilaMockup lang={lang} />;
  const s = coverStyle[project.cover];
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br ${s.from} to-[#0b0b0b] to-70%`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(255 255 255 / .5) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / .5) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative flex flex-col items-center gap-3 text-white">
        <span className="grid size-16 place-items-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur">
          <SkillIcon name={s.icon} className="size-8" />
        </span>
        <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 font-mono text-[11px] tracking-wide">
          {s.tag}
        </span>
      </div>
    </div>
  );
}

/** Ilustração do contato: celular flutuando com a sombra embaixo. */
export function PhoneArt() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="float relative h-56 w-28 -rotate-12 rounded-[1.6rem] border-4 border-[#1f1f1f] bg-[#0b0b0b] shadow-2xl shadow-black/50">
        <div className="absolute left-1/2 top-2 h-1.5 w-10 -translate-x-1/2 rounded-full bg-[#1f1f1f]" />
        <div className="absolute inset-x-2.5 top-7 space-y-2">
          <div className="ml-auto h-5 w-14 rounded-lg rounded-br-sm bg-accent/90" />
          <div className="h-5 w-16 rounded-lg rounded-bl-sm bg-white/15" />
          <div className="h-8 w-[4.5rem] rounded-lg rounded-bl-sm bg-white/15" />
          <div className="ml-auto h-5 w-12 rounded-lg rounded-br-sm bg-accent/90" />
        </div>
        <div className="absolute inset-x-2.5 bottom-3 h-5 rounded-full bg-white/10" />
      </div>
      <div className="h-6 w-28 rounded-[100%] bg-black/60 blur-[2px]" />
    </div>
  );
}
