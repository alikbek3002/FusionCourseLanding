import { createFileRoute } from "@tanstack/react-router";
import "@/v2/v2.css";
import { Aurora, ProgressBar } from "@/v2/components/primitives";
import { Nav } from "@/v2/components/Nav";
import {
  Author,
  FinalCTA,
  Footer,
  Format,
  Hero,
  Marquee,
  Outcomes,
  Pain,
  Program,
  WhyNow,
} from "@/v2/sections/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ИИнутый — офлайн-курс по ИИ от Fusion AI · Бишкек" },
      {
        name: "description",
        content:
          "Офлайн-курс по ИИ «ИИнутый» от Fusion AI. 14 уроков, 4 недели, Технопарк Бишкек. Реальный код, реальные задачи, без воды.",
      },
      { property: "og:title", content: "ИИнутый — курс по ИИ от Fusion AI" },
      {
        property: "og:description",
        content:
          "Офлайн-курс по ИИ «ИИнутый» от Fusion AI. 14 уроков, 4 недели, Технопарк Бишкек.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="v2-page">
      <Aurora />
      <ProgressBar />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Pain />
        <WhyNow />
        <Program />
        <Outcomes />
        <Author />
        <Format />
        <FinalCTA />
      </main>
      <Footer />
      <div className="noise" />
    </div>
  );
}
