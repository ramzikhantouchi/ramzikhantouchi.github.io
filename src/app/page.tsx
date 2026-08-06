import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { TeachingTimeline } from "@/components/TeachingTimeline";
import { Visits } from "@/components/Visits";
import { Talks } from "@/components/Talks";
import { Services } from "@/components/Services";
import { Publications } from "@/components/Publications";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <About />
        <Education />
        <TeachingTimeline />
        <Visits />
        <Talks />
        <Services />
        <Publications />
      </div>
      <Footer />
    </>
  );
}
