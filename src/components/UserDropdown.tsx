'use client';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { LogOut } from "lucide-react";
import NavItems from "./NavItems";

const UserDropdown = () => {
    const router = useRouter();
    const handleSignOut = async () => {
        router.push('/sign-in');
    }

    const user = { name: 'Eduard', email: 'eduard@darulifta.com' };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-3 text-gold-500 hover:text-gold-400">
                    <Avatar className="h-8 w-8">
                        {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                        <AvatarFallback className="bg-gold-500 text-green-900 text-sm font-bold">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="hidden md:flex flex-col items-start">
                        <span className="text-base font-medium text-gold-500">
                            {user.name}
                        </span>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-gold-500">
                <DropdownMenuLabel>
                <div className="flex relative items-center gap-3 py-2">
                    <Avatar className="h-10 w-10">
                        {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                        <AvatarFallback className="bg-gold-500 text-green-900 text-sm font-bold">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col ">
                        <span className="text-base font-medium text-gold-500">
                            {user.name}
                        </span>
                        <span className="text-sm text-gold-500">{user.email} </span>
                    </div>
                </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gold-500"/>
                <DropdownMenuItem onClick={handleSignOut} className="text-gold-500 text-md font-medium focus:bg-transparent focus:text-gold-500 transition-colors cursor-pointer">
                    <LogOut className="h-4 w-4 mr-2 hidden sm:block" />
                    Logout
                </DropdownMenuItem>
                <DropdownMenuSeparator className="hidden sm:block bg-gold-500"/>
                <nav className="sm:hidden">
                    <NavItems />    
                </nav>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserDropdown;
