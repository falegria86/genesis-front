import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getAlumnos } from "@/actions/alumnosActions";
import { Alumno } from "@/interfaces/alumnosInterface";

export default async function Home() {
  const alumnos: Alumno[] = await getAlumnos();

  return (
    <main className="py-4 px-8">
      <nav className="flex justify-between">
        <ul className="flex gap-16 text-sm font-medium">
          <li><Link href="/">Prospectos</Link></li>
          <li><Link href="/alumnos">Alumnos</Link></li>
        </ul>
        <UserButton afterSwitchSessionUrl="/" />
      </nav>

      <h2 className="font-bold text-center mt-16 uppercase">Génesis Academia de Belleza</h2>
      <Table className="mt-8">
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Apellido Paterno</TableHead>
            <TableHead>Apellido Materno</TableHead>
            <TableHead>Fecha de nacimiento</TableHead>
            <TableHead>Teléfono</TableHead>
            <TableHead>Carrera</TableHead>
            <TableHead>Calle</TableHead>
            <TableHead>Colonia</TableHead>
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
              <TableCell>{format(alumno.fec_nacimiento, 'dd/MM/yyyy') ?? ''}</TableCell>
              <TableCell>{alumno.telefono}</TableCell>
              <TableCell>{alumno.carrera}</TableCell>
              <TableCell>{alumno.calle}</TableCell>
              <TableCell>{alumno.colonia}</TableCell>
              <TableCell>{alumno.municipio}</TableCell>
              <TableCell>{alumno.estado}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}