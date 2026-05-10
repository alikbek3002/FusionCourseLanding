import type { Lesson } from "./lessons";
import { block1, block2, block3 } from "./lessons";

export type Outcome = { title: string; desc: string };
export type StoryRef = { type: "video" | "image"; label: string; src?: string };

export type Chapter = {
  id: string;
  num: string;
  pill: string;
  title: string;
  lead: string;
  outcomes: Outcome[];
  tools: string[];
  stories: StoryRef[];
  lessons: Lesson[];
  accent: string;
};

export const chapters: Chapter[] = [
  {
    id: "brain",
    num: "01",
    pill: "Глава 1 · Мозг",
    title: "Ты заставляешь ИИ работать на себя.",
    lead: "С первого урока перестаёшь писать «переформулируй» — и собираешь своего первого ИИ-сотрудника, который продаёт за тебя 24/7.",
    outcomes: [
      { title: "Промпт с первого раза", desc: "Получаешь нужный ответ, а не «попробуй ещё раз»." },
      { title: "Свой ИИ-агент", desc: "Чат-бот, который консультирует и квалифицирует лиды." },
      { title: "ИИ-продажник в CRM", desc: "Дожимает сделки, пока ты занят чем-то другим." },
    ],
    tools: ["chatgpt", "claude", "gemini", "fusion", "perplexity"],
    stories: [
      { type: "image", label: "Диалог с твоим ботом" },
      { type: "video", label: "ИИ-агент в Fusion AI" },
    ],
    lessons: block1,
    accent: "#7C5CFF",
  },
  {
    id: "content",
    num: "02",
    pill: "Глава 2 · Контент",
    title: "Один ноутбук = контент-фабрика.",
    lead: "Делаешь больше контента, чем команда из пяти человек. Твой ИИ-аватар ведёт сторис, пока ты спишь.",
    outcomes: [
      { title: "30 визуалов за час", desc: "Под бренд, формат и площадку." },
      { title: "Видео без камеры", desc: "От текста до готового ролика — без съёмок." },
      { title: "ИИ-аватар + формула рилс", desc: "Твоё лицо работает без тебя." },
    ],
    tools: ["midjourney", "heygen", "sora", "veo", "runway", "suno", "eleven"],
    stories: [
      { type: "video", label: "Рилс с ИИ-аватаром" },
      { type: "image", label: "Креатив для рекламы" },
      { type: "video", label: "ИИ-видео из текста" },
    ],
    lessons: block2,
    accent: "#A855F7",
  },
  {
    id: "vibe",
    num: "03",
    pill: "Глава 3 · Вайбкодинг",
    title: "Программируешь, не зная программирования.",
    lead: "Просто разговариваешь с кодом — и получаешь рабочий лендинг, приложение или агента под свою задачу.",
    outcomes: [
      { title: "Лендинг на Lovable", desc: "От идеи до рабочей страницы за один урок." },
      { title: "Своё приложение", desc: "Инструмент или агент, который реально работает." },
      { title: "Монетизация", desc: "Упаковка, цена и первые клиенты на ИИ-навыки." },
    ],
    tools: ["lovable", "claudecode", "codex", "cursor"],
    stories: [
      { type: "image", label: "Лендинг, собранный на уроке" },
      { type: "video", label: "Демо ИИ-приложения" },
    ],
    lessons: block3,
    accent: "#5B2BFF",
  },
];