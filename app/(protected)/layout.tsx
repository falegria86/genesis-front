import { Navbar } from "@/components/Navbar";
import Image from "next/image";

interface ProtectedLayoutProps {
    children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
    return (
        <div className="py-4 px-8 h-full">
            <div className="max-w-[1800px] mx-auto">
                <Navbar />
                <Image
                    src="/genesis-logo-white.svg"
                    alt="Genesis logo"
                    width={400}
                    height={0}
                    className="mx-auto mt-16"
                />
                {children}
            </div>
        </div>
    )
}
export default ProtectedLayout