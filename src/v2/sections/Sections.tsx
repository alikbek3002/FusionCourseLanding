import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  BadgeCheck,
  Bookmark,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Send,
  Volume2,
  VolumeX,
} from "lucide-react";
import { v2Config } from "../config";
import {
  ArrowR,
  CTAButton,
  Reveal,
  Scroll3D,
  SeatsMeter,
  WordFlip,
} from "../components/primitives";
import { IconIG, IconTG, IconWA } from "../components/icons";

/* -------- 1. HERO -------- */
export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="grid-bg" />
      <div className="container">
        <div className="hero__content">
          <Reveal>
            <span className="chip">
              <span className="dot" />
              Поток №1 · {v2Config.LOCATION}
            </span>
          </Reveal>
          <h1 className="hero__title">
            <WordFlip text="Стань" />
            <br />
            <WordFlip text="ИИнутым" delay={120} gradient={true} />
            <br />
            <WordFlip text="за 4 недели" delay={240} />
          </h1>
          <Reveal delay={400}>
            <p className="hero__sub">
              Офлайн-курс по ИИ от{" "}
              <strong style={{ color: "var(--v2-text-primary)" }}>
                {v2Config.COMPANY}
              </strong>{" "}
              — 14 уроков, реальная практика, живой код. Без воды, без
              «промпт-инжиниринга для бабушки». Только то, что действительно
              нужно, чтобы встроить ИИ в работу.
            </p>
          </Reveal>
          <Reveal delay={520}>
            <div className="hero__ctas">
              <CTAButton
                source="hero"
                channel="telegram"
                href={v2Config.TELEGRAM_URL}
                variant="primary"
                size="lg"
              >
                Записаться в Telegram <ArrowR />
              </CTAButton>
              <CTAButton
                source="hero"
                channel="phone"
                href={`tel:${v2Config.PHONE_TEL}`}
                target="_self"
                variant="ghost"
                size="lg"
              >
                {v2Config.PHONE}
              </CTAButton>
            </div>
          </Reveal>
          <Reveal delay={640}>
            <div style={{ marginTop: 28 }}>
              <SeatsMeter
                total={v2Config.SEATS_TOTAL}
                left={v2Config.SEATS_LEFT}
              />
            </div>
          </Reveal>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="orb-3d__ring orb-3d__ring--2" />
          <div className="orb-3d__ring" />
          <div className="orb-3d" />
        </div>

        <div className="hero__meta">
          <Reveal delay={100}>
            <div className="hero__meta-item">
              <div className="k">Длительность</div>
              <div className="v">
                <span className="num">14</span> уроков · 4 недели
              </div>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="hero__meta-item">
              <div className="k">Формат</div>
              <div className="v">Офлайн · {v2Config.LOCATION}</div>
            </div>
          </Reveal>
          <Reveal delay={260}>
            <div className="hero__meta-item">
              <div className="k">Группа</div>
              <div className="v">
                до <span className="num">{v2Config.SEATS_TOTAL}</span> человек
              </div>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <div className="hero__meta-item">
              <div className="k">Старт</div>
              <div className="v">
                {v2Config.START_DATE.replace("Старт потока — ", "")}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------- 2. MARQUEE -------- */
export function Marquee() {
  const items = [
    "ChatGPT",
    "Claude",
    "Cursor",
    "n8n",
    "Make.com",
    "Midjourney",
    "v0",
    "Replit",
    "Perplexity",
    "Notion AI",
    "Lovable",
    "Gemini",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {doubled.map((it, i) => (
          <span key={i} className="marquee__item">
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

/* -------- 3. PAIN -------- */
export function Pain() {
  const points = [
    {
      n: "01",
      t: "Боишься, что ИИ заменит",
      d: "Каждый день новости: GPT-5, агенты, vibe-coding. И паника — а я при чём?",
    },
    {
      n: "02",
      t: "Пробовал — не зашло",
      d: "Открыл ChatGPT, спросил «что приготовить», закрыл. Не понял, как это применить к работе.",
    },
    {
      n: "03",
      t: "Курсы — вода и теория",
      d: "Платил за «AI для бизнеса», получил 3 часа презентаций без единой реальной задачи.",
    },
    {
      n: "04",
      t: "Нет коллег, нет среды",
      d: "В Бишкеке сложно найти тех, кто реально пилит на ИИ. Хочется живых людей рядом.",
    },
  ];
  return (
    <section className="section">
      <div className="container">
        <Scroll3D intensity={0.7}>
          <span className="eyebrow">Проблема</span>
        </Scroll3D>
        <Scroll3D>
          <h2 className="s-title">
            ИИ — это уже не <span className="gradient">завтра</span>.<br />А ты
            всё ещё{" "}
            <span className="gradient">читаешь Telegram-каналы</span> о нём.
          </h2>
        </Scroll3D>
        <Reveal>
          <p className="s-lead">
            Узнаешь себя? Это нормально. Большинство людей в Кыргызстане сейчас
            находятся именно в этой точке. Но точка эта временная — окно
            возможностей закрывается быстрее, чем кажется.
          </p>
        </Reveal>
        <div className="pain-grid">
          {points.map((p, i) => (
            <Reveal key={p.n} delay={i * 80}>
              <div className="pain-card">
                <div className="pain-card__num">{p.n}</div>
                <div className="pain-card__title">{p.t}</div>
                <div className="pain-card__desc">{p.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- 4. WHY NOW -------- */
export function WhyNow() {
  const stats = [
    { n: "92%", l: "компаний внедрят ИИ в свои процессы до 2027 года" },
    { n: "×4", l: "выше зарплата у специалистов с подтверждёнными ИИ-навыками" },
    {
      n: "14",
      l: "практических уроков — каждый с реальной задачей и живым кодом",
    },
    { n: "1", l: "поток в полугодие — следующий только осенью 2026" },
  ];
  return (
    <section
      className="section"
      style={{ paddingTop: "clamp(60px, 8vw, 100px)" }}
    >
      <div className="container">
        <Scroll3D intensity={0.6}>
          <span className="eyebrow">Почему сейчас</span>
        </Scroll3D>
        <Scroll3D>
          <h2 className="s-title">
            Те, кто разберётся <span className="gradient">в этом году</span>,
            —<br />
            будут управлять теми, кто разберётся через два.
          </h2>
        </Scroll3D>
        <div className="why-grid">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="why-cell">
                <div className="why-cell__num">{s.n}</div>
                <div className="why-cell__label">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- 5. PROGRAM (sticky 3D stack) -------- */
const PROGRAM_MODULES = [
  {
    tag: "Базис",
    title: "Понять, как это работает",
    desc: "LLM, токены, контекст, промпты — без магии и без матана.",
    lessons: [
      { n: "01", t: "Как устроены LLM" },
      { n: "02", t: "ChatGPT, Claude, Gemini" },
      { n: "03", t: "Токены, контекст, галлюцинации" },
      { n: "04", t: "Рабочие промпты" },
    ],
  },
  {
    tag: "Работа",
    title: "Внедрить в свою профессию",
    desc: "ИИ ускоряет именно твою работу — от текстов до кода.",
    lessons: [
      { n: "05", t: "ИИ для текстов и контента" },
      { n: "06", t: "ИИ для аналитики" },
      { n: "07", t: "ИИ для дизайна" },
      { n: "08", t: "Cursor, v0, vibe-coding" },
    ],
  },
  {
    tag: "Автоматизация",
    title: "Заставить ИИ работать без тебя",
    desc: "Агенты и пайплайны, которые делают рутину сами.",
    lessons: [
      { n: "09", t: "Агенты: что и зачем" },
      { n: "10", t: "n8n + Make: пайплайны" },
      { n: "11", t: "Telegram-боты и голосовые" },
      { n: "12", t: "RAG: своя база знаний" },
    ],
  },
  {
    tag: "Запуск",
    title: "Сделать своё, защитить публично",
    desc: "Свой проект и публичная защита перед группой.",
    lessons: [
      { n: "13", t: "Свой ИИ-проект: идея → прототип" },
      { n: "14", t: "Demo Day: защита перед группой" },
    ],
  },
];

type ProgramModule = (typeof PROGRAM_MODULES)[number];

/**
 * Custom scroll-progress hook for the sticky-stack section.
 * Returns a MotionValue 0..1 that maps directly to scroll within the section's
 * pinning range (top-of-section hits viewport-top → 0; section-bottom hits
 * viewport-bottom → 1). Bypasses framer-motion's `useScroll` offset interpretation
 * which we found inconsistent in v12 with sticky descendants.
 */
function useStickyProgress(ref: React.RefObject<HTMLElement | null>) {
  const progress = useMotionValue(0);
  useEffect(() => {
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const sectionHeight = el.offsetHeight;
      const vh = window.innerHeight;
      const range = sectionHeight - vh;
      if (range <= 0) {
        progress.set(0);
        return;
      }
      const p = (window.scrollY - sectionTop) / range;
      progress.set(Math.max(0, Math.min(1, p)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ref, progress]);
  return progress;
}

export function Program() {
  const ref = useRef<HTMLElement>(null);
  const scrollYProgress = useStickyProgress(ref);
  const total = PROGRAM_MODULES.length;

  return (
    <section id="program" ref={ref} className="program-stack">
      <div className="program-stack__sticky">
        <div className="container program-stack__head">
          <Reveal>
            <span className="eyebrow">Программа · 14 уроков</span>
          </Reveal>
          <Reveal>
            <h2 className="s-title program-stack__title">
              От «что это вообще такое» <br />
              до <span className="gradient">собственного ИИ-проекта</span>
            </h2>
          </Reveal>
        </div>
        <div className="container program-stack__cards-wrap">
          <div className="program-stack__cards">
            {PROGRAM_MODULES.map((m, i) => (
              <ProgramCard
                key={i}
                index={i}
                total={total}
                data={m}
                progress={scrollYProgress}
              />
            ))}
          </div>
          <ProgramIndicator progress={scrollYProgress} total={total} />
        </div>
      </div>
    </section>
  );
}

function ProgramCard({
  index,
  total,
  data,
  progress,
}: {
  index: number;
  total: number;
  data: ProgramModule;
  progress: MotionValue<number>;
}) {
  const segment = 1 / total;
  const start = index * segment;
  const end = (index + 1) * segment;
  const enter = Math.max(0, start - segment * 0.5);
  const exit = Math.min(1, end + segment * 0.4);
  // Keep inputs strictly increasing within [0, 1] for framer-motion / WAAPI
  const startSafe = enter === start ? start + 0.001 : start;
  const endSafe = exit === end ? end - 0.001 : end;

  const opacity = useTransform(
    progress,
    [enter, startSafe, endSafe, exit],
    [0, 1, 1, 0],
  );
  const y = useTransform(
    progress,
    [enter, startSafe, endSafe, exit],
    [120, 0, 0, -180],
  );
  const rotateX = useTransform(
    progress,
    [startSafe, endSafe, exit],
    [0, 0, -22],
  );
  const scale = useTransform(
    progress,
    [enter, startSafe, endSafe, exit],
    [0.94, 1, 1, 0.94],
  );

  return (
    <motion.div
      className="program-card"
      style={{ opacity, y, rotateX, scale }}
    >
      <div className="program-card__top">
        <span className="program-card__num">
          {String(index + 1).padStart(2, "0")}
          <span> / {String(total).padStart(2, "0")}</span>
        </span>
        <span className="program-card__tag">{data.tag}</span>
      </div>
      <h3 className="program-card__title">{data.title}</h3>
      <p className="program-card__desc">{data.desc}</p>
      <ul className="program-card__lessons">
        {data.lessons.map((l) => (
          <li className="program-card__lesson" key={l.n}>
            <span className="program-card__lesson-num">{l.n}</span>
            <span className="program-card__lesson-title">{l.t}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ProgramDot({
  progress,
  start,
  end,
}: {
  progress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const fadeIn = Math.max(0, start - 0.02);
  const fadeOut = Math.min(1, end + 0.02);
  const startSafe = fadeIn === start ? start + 0.001 : start;
  const endSafe = fadeOut === end ? end - 0.001 : end;
  const range = [fadeIn, startSafe, endSafe, fadeOut] as const;

  const opacity = useTransform(progress, [...range], [0.25, 1, 1, 0.25]);
  const scale = useTransform(progress, [...range], [1, 1.4, 1.4, 1]);
  return (
    <motion.span className="program-stack__dot" style={{ opacity, scale }} />
  );
}

function ProgramIndicator({
  progress,
  total,
}: {
  progress: MotionValue<number>;
  total: number;
}) {
  const segment = 1 / total;
  return (
    <div className="program-stack__indicator" aria-hidden="true">
      {Array.from({ length: total }).map((_, i) => (
        <ProgramDot
          key={i}
          progress={progress}
          start={i * segment}
          end={(i + 1) * segment}
        />
      ))}
    </div>
  );
}

/* -------- 6. OUTCOMES -------- */
export function Outcomes() {
  const items = [
    {
      t: "Свой ИИ-стек под задачи",
      d: "У тебя будет 5–7 инструментов, которыми ты пользуешься каждый день. Не «слышал», а реально работаешь.",
      icon: <path d="M3 7h18M3 12h18M3 17h18" />,
    },
    {
      t: "Минус 10 часов в неделю",
      d: "Рутина, которая занимала день, начинает выполняться за час. Это не маркетинг — это арифметика.",
      icon: (
        <g>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </g>
      ),
    },
    {
      t: "Свой работающий проект",
      d: "К Demo Day у тебя будет прототип, который ты покажешь команде, инвестору или клиенту.",
      icon: (
        <g>
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M7 20h10M9 16v4M15 16v4" />
        </g>
      ),
    },
    {
      t: "Среда и нетворк",
      d: "20 человек, которые пройдут с тобой всю эту дорогу. Чат группы остаётся живым после курса.",
      icon: (
        <g>
          <circle cx="9" cy="9" r="3" />
          <circle cx="17" cy="11" r="2.5" />
          <path d="M3 19c1-3 3-5 6-5s5 2 6 5M14 19c.5-2 2-3.5 4-3.5s3 1 3 3" />
        </g>
      ),
    },
    {
      t: "Понимание, куда идёт индустрия",
      d: "Ты перестанешь паниковать от заголовков и начнёшь видеть, что реально меняется, а что — хайп.",
      icon: (
        <g>
          <path d="M3 17l6-6 4 4 8-8" />
          <path d="M14 7h7v7" />
        </g>
      ),
    },
    {
      t: "Сертификат от Fusion AI",
      d: "Подтверждение, что ты прошёл практический трек, а не «послушал курс». Полезно при найме.",
      icon: (
        <g>
          <circle cx="12" cy="9" r="6" />
          <path d="M9 14l-2 7 5-3 5 3-2-7" />
        </g>
      ),
    },
  ];
  return (
    <section id="outcomes" className="section">
      <div className="container">
        <Scroll3D intensity={0.6}>
          <span className="eyebrow">Что ты унесёшь</span>
        </Scroll3D>
        <Scroll3D>
          <h2 className="s-title">
            Не «знания». <br />
            <span className="gradient">Конкретные результаты.</span>
          </h2>
        </Scroll3D>
        <div className="outcomes-grid">
          {items.map((o, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="outcome">
                <div className="outcome__icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {o.icon}
                  </svg>
                </div>
                <div className="outcome__title">{o.t}</div>
                <div className="outcome__desc">{o.d}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div
          style={{ marginTop: 56, display: "flex", justifyContent: "center" }}
        >
          <CTAButton
            source="outcomes"
            channel="telegram"
            href={v2Config.TELEGRAM_URL}
            variant="primary"
            size="lg"
          >
            Хочу такие результаты <ArrowR />
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

/* -------- 7. AUTHOR -------- */
const AUTHOR_STATS = [
  { num: "3+", label: "года в ИИ-продуктах" },
  { num: "20+", label: "внедрений в бизнесе" },
  { num: "10K+", label: "подписчиков в Instagram" },
  { num: "∞", label: "часов в Cursor & Claude" },
];

const RAMIS_HANDLE = "zholdoshev.ramis";
const REEL_URL = "https://www.instagram.com/reel/DXY3TQZjYKM/";

function IgReelCard() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <div className="ig-card">
      <header className="ig-card__head">
        <a
          href={v2Config.RAMIS_INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="ig-card__avatar-ring"
          aria-label={`@${RAMIS_HANDLE} в Instagram`}
        >
          <img
            src="/v2/ramis.png"
            alt=""
            className="ig-card__avatar"
            draggable={false}
          />
        </a>
        <div className="ig-card__user">
          <a
            href={v2Config.RAMIS_INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="ig-card__name"
          >
            {RAMIS_HANDLE}
          </a>
          <BadgeCheck className="ig-card__verified" size={14} />
        </div>
        <button className="ig-card__menu" aria-label="Меню" type="button">
          <MoreHorizontal size={18} />
        </button>
      </header>

      <a
        className="ig-card__media"
        href={REEL_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Открыть Reel в Instagram"
      >
        <video
          ref={videoRef}
          className="ig-card__video"
          src="/v2/ramis-reel.mp4"
          poster="/v2/ramis.png"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <button
          type="button"
          className="ig-card__mute"
          onClick={toggleMute}
          aria-label={muted ? "Включить звук" : "Выключить звук"}
        >
          {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
        </button>
      </a>

      <div className="ig-card__actions">
        <Heart className="ig-card__action" size={22} />
        <MessageCircle className="ig-card__action" size={22} />
        <Send className="ig-card__action" size={22} />
        <Bookmark className="ig-card__action ig-card__action--right" size={22} />
      </div>

      <div className="ig-card__caption">
        <strong>{RAMIS_HANDLE}</strong>
        Про ИИ, бизнес и почему сейчас. #ии #бишкек
      </div>

      <a
        className="ig-card__link"
        href={REEL_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Открыть в Instagram
        <ArrowR />
      </a>
    </div>
  );
}

export function Author() {
  return (
    <section id="author" className="section">
      <div className="container">
        <Scroll3D intensity={0.6}>
          <span className="eyebrow">Кто ведёт</span>
        </Scroll3D>
        <Scroll3D>
          <h2 className="s-title">
            Курс ведёт <span className="gradient">{v2Config.CEO_NAME}</span>
          </h2>
        </Scroll3D>

        <div className="author-card">
          <motion.div
            className="author-card__photo"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="author-card__photo-glow" />
            <img
              src="/v2/ramis.png"
              alt={v2Config.CEO_NAME}
              className="author-card__photo-img"
              draggable={false}
            />
          </motion.div>

          <motion.div
            className="author-card__panel"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <span className="chip">
              <span className="dot" />
              CEO {v2Config.COMPANY}
            </span>
            <h2 className="author-card__name">{v2Config.CEO_NAME}</h2>
            <p className="author-card__title">
              Основатель Fusion AI · {v2Config.LOCATION}
            </p>
            <p className="author-card__desc">
              Внедряет ИИ-агентов для бизнеса в Центральной Азии. Ведёт
              Telegram-канал и публично делает на ИИ всё — от Telegram-ботов до
              полноценных продуктов. «Этот курс — то, что я бы хотел пройти три
              года назад, когда сам разбирался».
            </p>
            <div className="author-card__stats">
              {AUTHOR_STATS.map((s) => (
                <div className="author-card__stat" key={s.num}>
                  <div className="author-card__stat-num">{s.num}</div>
                  <div className="author-card__stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <Reveal>
          <div className="reel">
            <div className="reel__head">
              <span
                className="eyebrow"
                style={{ color: "var(--v2-brand-300)" }}
              >
                Видео-визитка
              </span>
              <h3 className="reel__title">
                Рамис на сцене — про ИИ, бизнес и почему сейчас
              </h3>
              <p className="reel__sub">
                Короткое выступление, чтобы понять, в каком тоне и подаче
                пройдёт курс.
              </p>
            </div>
            <IgReelCard />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------- 8. FORMAT -------- */
export function Format() {
  const cells = [
    {
      k: "Где",
      v: v2Config.LOCATION,
      sub: "Современное пространство, кофе, Wi-Fi, своё рабочее место.",
      icon: (
        <g>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </g>
      ),
    },
    {
      k: "Когда",
      v: v2Config.START_DATE.replace("Старт потока — ", "Старт "),
      sub: "Занятия 2 раза в неделю по вечерам · 4 недели подряд.",
      icon: (
        <g>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 3v4M16 3v4" />
        </g>
      ),
    },
    {
      k: "Сколько",
      v: `до ${v2Config.SEATS_TOTAL} человек`,
      sub: "Камерный формат: каждому — внимание автора. Сейчас осталось 8 мест.",
      icon: (
        <g>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M3 19c0-3 3-5 6-5s6 2 6 5M14 19c0-2 2-3.5 4-3.5s3 1 3 3" />
        </g>
      ),
    },
    {
      k: "Что нужно",
      v: "Только ноутбук",
      sub: "ОС любая. Все аккаунты и инструменты заведём на первом уроке.",
      icon: (
        <g>
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M2 20h20" />
        </g>
      ),
    },
  ];
  return (
    <section id="format" className="section">
      <div className="container">
        <Scroll3D intensity={0.6}>
          <span className="eyebrow">Формат</span>
        </Scroll3D>
        <Scroll3D>
          <h2 className="s-title">
            Живые встречи.{" "}
            <span className="gradient">
              Без записей и потоков на 500 человек.
            </span>
          </h2>
        </Scroll3D>
        <div className="format">
          {cells.map((c, i) => (
            <Reveal key={i} delay={i * 70}>
              <div className="format__cell">
                <div className="format__icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {c.icon}
                  </svg>
                </div>
                <div className="format__k">{c.k}</div>
                <div className="format__v">{c.v}</div>
                <div className="format__sub">{c.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- 9. FINAL CTA -------- */
export function FinalCTA() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal>
          <div className="final">
            <Scroll3D intensity={0.5}>
              <span className="chip" style={{ marginBottom: 24 }}>
                <span className="dot" />
                Осталось {v2Config.SEATS_LEFT} из {v2Config.SEATS_TOTAL} мест
              </span>
            </Scroll3D>
            <Scroll3D>
              <h2 className="final__title">
                Запишись сейчас. <br />
                <span
                  style={{
                    background: "var(--v2-brand-gradient-text)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Через год будет поздно.
                </span>
              </h2>
            </Scroll3D>
            <Reveal>
              <p className="final__sub">
                Напиши в Telegram — задам пару вопросов, расскажу про даты
                следующего потока и пришлю полную программу. Никаких ботов:
                отвечает Айгуль из команды.
              </p>
            </Reveal>
            <Reveal>
              <div className="final__ctas">
                <CTAButton
                  source="final"
                  channel="telegram"
                  href={v2Config.TELEGRAM_URL}
                  variant="primary"
                  size="lg"
                >
                  Написать {v2Config.TELEGRAM_HANDLE} <ArrowR />
                </CTAButton>
                <CTAButton
                  source="final"
                  channel="phone"
                  href={`tel:${v2Config.PHONE_TEL}`}
                  target="_self"
                  variant="ghost"
                  size="lg"
                >
                  Позвонить · {v2Config.PHONE}
                </CTAButton>
              </div>
            </Reveal>
            <Reveal>
              <div className="final__channels">
                <CTAButton
                  source="final"
                  channel="whatsapp"
                  href={v2Config.WHATSAPP_URL}
                  variant="ghost"
                  className="chip-link"
                >
                  <IconWA /> WhatsApp
                </CTAButton>
                <CTAButton
                  source="final"
                  channel="telegram"
                  href={v2Config.TELEGRAM_URL}
                  variant="ghost"
                  className="chip-link"
                >
                  <IconTG /> Telegram
                </CTAButton>
                <a
                  className="chip-link"
                  href={v2Config.RAMIS_INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconIG /> Instagram автора
                </a>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------- FOOTER -------- */
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="nav__logo">
              <img
                src="/v2/fusion-logo.png"
                alt="Fusion AI"
                style={{ height: 26, width: "auto", borderRadius: 6 }}
              />
              <span style={{ opacity: 0.4, fontWeight: 300 }}>·</span>
              <span>{v2Config.COURSE_NAME}</span>
            </div>
            <p className="footer__about">
              Офлайн-курс по ИИ от {v2Config.COMPANY}. {v2Config.LOCATION}. 14
              уроков, 4 недели, живой код и среда людей, которые делают на ИИ.
            </p>
          </div>
          <div className="footer__col">
            <h4>Курс</h4>
            <a href="#program">Программа</a>
            <a href="#outcomes">Результат</a>
            <a href="#format">Формат</a>
            <a href="#author">Автор</a>
          </div>
          <div className="footer__col">
            <h4>Контакты</h4>
            <a
              href={v2Config.TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {v2Config.TELEGRAM_HANDLE}
            </a>
            <a href={`tel:${v2Config.PHONE_TEL}`}>{v2Config.PHONE}</a>
            <a
              href={v2Config.WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              href={v2Config.RAMIS_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram автора
            </a>
          </div>
          <div className="footer__col">
            <h4>Юридическое</h4>
            <a href="#">Договор оферты</a>
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Возврат средств</a>
          </div>
        </div>
        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {v2Config.COMPANY}. Все права защищены.
          </span>
          <span>Сделано в Бишкеке · с любовью к ИИ</span>
        </div>
      </div>
    </footer>
  );
}
