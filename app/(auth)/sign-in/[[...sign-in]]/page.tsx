import { UserButton, SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export default function Page() {
    return (
        <div className="flex items-center justify-center h-full">
            <SignIn path="/sign-in" />
            <ClerkLoading>
                <Loader2 className="animate-spin" />
            </ClerkLoading>
            <ClerkLoaded />
        </div>
    )
}