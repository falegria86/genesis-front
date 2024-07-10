import { Navbar } from "@/components/Navbar";

interface ProtectedLayoutProps {
    children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
    return (
        <div className="py-4 px-8">
            <div className="max-w-[1800px] mx-auto">
                <Navbar />
                {children}
            </div>
        </div>
    )
}
export default ProtectedLayout