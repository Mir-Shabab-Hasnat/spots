"use client"
import {
    NavigationMenu,
    NavigationMenuList
} from "@/components/ui/navigation-menu"
import { Dialog, DialogClose } from "@radix-ui/react-dialog"
import { BookOpen } from 'lucide-react'
import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi"
import { Button } from "../ui/button"
import { SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import ModeToggle from "../mode-toggle"

export function NavBar() {
    

    

    return (
        <div className="flex items-center min-w-full w-full fixed justify-center p-2 z-10">
            <div className="flex justify-between md:w-[620px] w-[95%] mt-[1rem] border border-gray-400 dark:border-zinc-900 dark:bg-black bg-opacity-10 relative backdrop-filter backdrop-blur-lg bg-white border-opacity-20 rounded-xl p-2 shadow-lg">
                <Dialog>
                    <SheetTrigger className="min-[825px]:hidden p-2 transition">
                        <GiHamburgerMenu />
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader>
                            <SheetTitle>Spots</SheetTitle>
                            <SheetDescription>
                                Get to your nearest study spot in an instant!
                            </SheetDescription>
                        </SheetHeader>
                        <div className="flex flex-col space-y-3 mt-[1rem]">
                            <DialogClose asChild>
                                <Link href="/">
                                    <Button variant="outline" className="w-full">Home</Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="/find">
                                    <Button variant="outline" className="w-full">Dashboard</Button>
                                </Link>
                            </DialogClose>
                        </div>
                    </SheetContent>
                </Dialog>
                <NavigationMenu>
                    <NavigationMenuList className="max-[825px]:hidden ">
                        <Link href="/" className="pl-2">
                            <BookOpen />
                        </Link>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="flex items-center gap-2">
                    <ModeToggle />
                    
                </div>
            </div>
        </div>

    )
}