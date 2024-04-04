import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { SideBar } from "./SideBar";


const MobileSideBar = () => {
    return (
        <div className="">
            <Sheet >
                <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition"><Menu className="" /></SheetTrigger>
                <SheetContent side="left" className="p-0 bg-white">
                    <SideBar />
                </SheetContent>
            </Sheet>


        </div>
    );
}

export default MobileSideBar;