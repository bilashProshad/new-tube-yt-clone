import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import MainSection from "./main-section";

export default function HomeSidebar() {
  return (
    <Sidebar className="pt-16 z40 border-none">
      <SidebarContent className="bg-background">
        <MainSection />
      </SidebarContent>
    </Sidebar>
  );
}
