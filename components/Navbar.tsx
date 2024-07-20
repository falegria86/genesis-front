"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs"

export const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="flex justify-between border-b pb-3 border-gray-300">
            <ul className="flex gap-16 text-sm font-medium">
                <Link href="/">
                    <li className={`${pathname === '/' ? 'bg-purple-700 text-white' : 'bg-transparent text-neutral-950'} font-normal py-2 px-4 rounded-full`}>
                        Prospectos
                    </li>
                </Link>
                <Link href="/alumnos">
                    <li className={`${pathname === '/alumnos' ? 'bg-purple-700 text-white' : 'bg-transparent text-neutral-950'} font-normal py-2 px-4 rounded-full`}>
                        Alumnos
                    </li>
                </Link>
            </ul>
            <UserButton afterSwitchSessionUrl="/sign-in" />
        </nav>

    )
}