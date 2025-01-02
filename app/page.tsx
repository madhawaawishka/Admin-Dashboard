
import NavbarComponent from "./components/Navbar";
import { SidebarMenu } from "./components/Sidebar";


export default function Home() {
  return (
    <div>
      <NavbarComponent/>
      <div className="flex">
                <div className="hidden sm:block">
                    <SidebarMenu/>
                </div>
                
            </div>
    </div>
  );
}
