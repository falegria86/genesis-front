"use client";

import { useState } from "react"
import { Prospecto } from "@/interfaces/prospectosInterface"
import { DataTableProspectos } from "../DataTableProspectos"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ProspectosEditForm } from "./ProspectosEditForm";

export const ProspectosComponent = ({ data }: { data: Prospecto[] }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [prospectoData, setProspectoData] = useState<Prospecto | null>(null);

    const handleModal = (prospecto: Prospecto) => {
        setProspectoData(prospecto)
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="uppercase">Editar prospecto</DialogTitle>
                        <DialogDescription>
                            Edita la información del prospecto.
                        </DialogDescription>
                    </DialogHeader>
                    <ProspectosEditForm prospectoData={prospectoData} handleCloseModal={handleCloseModal} />
                </DialogContent>
            </Dialog>

            <DataTableProspectos data={data} handleModal={handleModal} />
        </>
    )
}