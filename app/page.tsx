import Aim from "@/components/aim/Aim";
import BackedBy from "@/components/backed-by/BackedBy";
import Hero from "@/components/hero/Hero";
import Installation from "@/components/installation-section/Installation";
import Notification from "@/components/notification-bar/Notification";
import Objective from "@/components/objectives/Objective";
import Stats from "@/components/stats/Stats";

export default function Home() {
  return (
    <main>
      <Notification />
      <Hero />
      <BackedBy />
      <Aim />
      <Stats />
      <Objective />
      <Installation />
    </main>
  );
}
