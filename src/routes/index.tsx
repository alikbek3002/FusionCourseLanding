import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ScrollProgress } from "@/components/landing/ScrollProgress";
import { LogoMarquee } from "@/components/landing/LogoMarquee";
import { ManifestoScroll } from "@/components/landing/ManifestoScroll";
import { StickyChapter } from "@/components/landing/StickyChapter";
import { Hero } from "@/components/sections/Hero";
import { ForWhom } from "@/components/sections/ForWhom";
import { Practice } from "@/components/sections/Practice";
import { Outcomes } from "@/components/sections/Outcomes";
import { Author } from "@/components/sections/Author";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FullProgram } from "@/components/sections/FullProgram";
import { chapters } from "@/data/chapters";

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
        <ManifestoScroll />
        <ForWhom />
        <div id="program">
          {chapters.map((ch, i) => (
            <div key={ch.id}>
              <StickyChapter chapter={ch} index={i} />
              <div className="px-5 py-10 md:px-6 md:py-14">
                <LogoMarquee ids={ch.tools} speed={28 + i * 4} />
              </div>
            </div>
          ))}
        </div>
        <Practice />
        <FullProgram />
        <Outcomes />
        <Author />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
