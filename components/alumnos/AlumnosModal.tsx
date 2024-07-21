"use client";

import { CirclePlus } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { AlumnosForm } from "./AlumnosForm"
import { useState } from "react";

export const AlumnosModal = () => {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button><CirclePlus className="w-4 h-4 mr-2" /> Registrar alumno</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="uppercase">Agregar alumno</DialogTitle>
                    <DialogDescription>
                        Llena los campos para agregar a un alumno ya inscrito.
                    </DialogDescription>
                </DialogHeader>
                <AlumnosForm setOpen={setOpen} />
            </DialogContent>
        </Dialog>
    )
}