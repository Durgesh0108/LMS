

import Logo from "./Logo";
import { SidebarRoutes } from "./SideBarRoutes";

export const SideBar = () => {
    return (
        <div className="sidebar h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
            <div className="p-6">
                <Logo />
            </div>
            <div className="flex flex-col w-full">
                <SidebarRoutes />
            </div>
        </div>
    );
}
