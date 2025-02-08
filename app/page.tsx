import Aim from "@/components/aim/Aim";
import BackedBy from "@/components/backed-by/BackedBy";
import Hero from "@/components/hero/Hero";
import Installation from "@/components/installation-section/Installation";
import MenuList from "@/components/menu-list/MenuList";
import Objective from "@/components/objectives/Objective";
import SidebarMenu from "@/components/sample/Sample";
import Stats from "@/components/stats/Stats";

export default function Home() {
  return (
    <main>
      <MenuList />
      <Hero />
      <BackedBy />
      <Aim />
      <Stats />
      <Objective />
      <Installation />
      {/* <SidebarMenu /> */}
    </main>
  );
}
