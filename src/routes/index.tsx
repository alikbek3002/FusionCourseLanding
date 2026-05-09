import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ScrollProgress } from "@/components/landing/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { ForWhom } from "@/components/sections/ForWhom";
import { ProgramBlock } from "@/components/sections/ProgramBlock";
import { Practice } from "@/components/sections/Practice";
import { Outcomes } from "@/components/sections/Outcomes";
import { Author } from "@/components/sections/Author";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { block1, block2, block3 } from "@/data/lessons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ИИнутый — курс по ИИ от Fusion AI · Технопарк, Бишкек" },
      {
        name: "description",
        content:
          "Офлайн-курс по ИИ от @zholdoshev.ramis. 14 уроков: промпты, ИИ-агенты, контент с ИИ, вайбкодинг. Технопарк, Бишкек.",
      },
      { property: "og:title", content: "ИИнутый — курс по ИИ от Fusion AI" },
      {
        property: "og:description",
        content: "Пока нормальные люди боятся ИИ — ИИнутые на нём зарабатывают. 14 уроков офлайн в Бишкеке.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div style={{ background: "var(--surface-dark-4)", color: "var(--fg-inverse)" }}>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <ForWhom />
        <div id="program">
          <ProgramBlock
            blockNum="01"
            pillLabel="БЛОК 1"
            title="Мозг прокачан."
            lead="С первого урока перестаёшь писать «переформулируй» и начинаешь получать то, что нужно."
            lessons={block1}
          />
          <ProgramBlock
            blockNum="02"
            pillLabel="БЛОК 2"
            title="ИИ-контент."
            lead="Производишь больше контента, чем команда из пяти человек. На одном ноутбуке."
            lessons={block2}
            mirror
          />
          <ProgramBlock
            blockNum="03"
            pillLabel="БЛОК 3"
            title="Вайбкодинг."
            lead="Программируешь, не зная программирования. Просто разговариваешь с кодом."
            lessons={block3}
          />
        </div>
        <Practice />
        <Outcomes />
        <Author />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
