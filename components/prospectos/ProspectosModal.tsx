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
import { ProspectosForm } from "./ProspectosForm"
import { useState } from "react";

export const ProspectosModal = () => {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button><CirclePlus className="w-4 h-4 mr-2" /> Agregar prospecto</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="uppercase">Agregar prospecto</DialogTitle>
                    <DialogDescription>
                        Llena los campos para agregar a un prospecto que haya contactado para pedir información.
                    </DialogDescription>
                </DialogHeader>
                <ProspectosForm setOpen={setOpen} />
            </DialogContent>
        </Dialog>
    )
}