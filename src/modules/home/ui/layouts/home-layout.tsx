import { SidebarProvider } from "@/components/ui/sidebar";
import HomeNavbar from "../components/home-navbar";
import HomeSidebar from "../components/home-sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export function HomeLayout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="w-full">
        <HomeNavbar />
        <div className="flex min-h-screen pt-[4rem]">
          <HomeSidebar />
          <main className="flex-1 overflow-y-auto w-full">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
