import Link from "next/link"
import { UserButton } from "@clerk/nextjs"

export const Navbar = () => {
    return (
        <nav className="flex justify-between">
            <ul className="flex gap-16 text-sm font-medium">
                <li><Link href="/">Prospectos</Link></li>
                <li><Link href="/alumnos">Alumnos</Link></li>
            </ul>
            <UserButton afterSwitchSessionUrl="/sign-in" />
        </nav>

    )
}