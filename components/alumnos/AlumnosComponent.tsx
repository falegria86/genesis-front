"use client";

import { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { DataTableAlumnos } from "./DataTableAlumnos";
import { Alumno } from "@/interfaces/alumnosInterface";
import { AlumnosEditForm } from "./AlumnosEditForm";

export const AlumnosComponent = ({ data }: { data: Alumno[] }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [alumnoData, setAlumnoData] = useState<Alumno | null>(null);

    const handleModal = (prospecto: Alumno) => {
        setAlumnoData(prospecto)
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
                    <AlumnosEditForm alumnoData={alumnoData} handleCloseModal={handleCloseModal} />
                </DialogContent>
            </Dialog>

            <DataTableAlumnos data={data} handleModal={handleModal} />
        </>
    )
}