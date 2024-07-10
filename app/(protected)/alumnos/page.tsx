import { format } from "date-fns";
import { CirclePlus } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { getAlumnos } from "@/actions/alumnosActions";
import { Alumno } from "@/interfaces/alumnosInterface";
import { Button } from "@/components/ui/button";
import { AlumnosForm } from "@/components/alumnos/AlumnosForm";
import { AlumnosModal } from "@/components/alumnos/AlumnosModal";

export default async function AlumnosPage() {
    const alumnos: Alumno[] = await getAlumnos();

    return (
        <div>
            <h2 className="font-bold text-center mt-16 uppercase">Génesis Academia de Belleza</h2>
            <div className="flex justify-between items-center mt-8">
                <h4 className="font-semibold text-center uppercase">Alumnos</h4>
                <AlumnosModal />
            </div>
            <Table className="w-[1800px] overflow-x-auto">
                <TableHeader>
                    <TableRow>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Apellido Paterno</TableHead>
                        <TableHead>Apellido Materno</TableHead>
                        <TableHead>Fecha de nacimiento</TableHead>
                        <TableHead>Género</TableHead>
                        <TableHead>Teléfono</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Carrera</TableHead>
                        <TableHead>Calle</TableHead>
                        <TableHead>No. exterior</TableHead>
                        <TableHead>No. interior</TableHead>
                        <TableHead>Colonia</TableHead>
                        <TableHead>Código Postal</TableHead>
                        <TableHead>Municipio</TableHead>
                        <TableHead>Estado</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {alumnos.map(alumno => (
                        <TableRow key={alumno.id}>
                            <TableCell>{alumno.nombre}</TableCell>
                            <TableCell>{alumno.ap_paterno}</TableCell>
                            <TableCell>{alumno.ap_materno}</TableCell>
                            <TableCell>{alumno.fec_nacimiento ? format(alumno.fec_nacimiento, 'dd/MM/yyyy') : ''}</TableCell>
                            <TableCell>{alumno.genero}</TableCell>
                            <TableCell>{alumno.telefono}</TableCell>
                            <TableCell>{alumno.email}</TableCell>
                            <TableCell>{alumno.carrera}</TableCell>
                            <TableCell>{alumno.calle}</TableCell>
                            <TableCell className="text-center">{alumno.num_exterior}</TableCell>
                            <TableCell className="text-center">{alumno.num_interior}</TableCell>
                            <TableCell>{alumno.colonia}</TableCell>
                            <TableCell>{alumno.cp}</TableCell>
                            <TableCell>{alumno.municipio}</TableCell>
                            <TableCell>{alumno.estado}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}