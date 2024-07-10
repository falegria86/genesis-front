import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Prospecto } from "@/interfaces/prospectosInterface";
import { getProspectos } from "@/actions/prospectosActions";
import { ProspectosModal } from "@/components/prospectos/ProspectosModal";

export default async function ProspectosPage() {
  const prospectos: Prospecto[] = await getProspectos();

  return (
    <>
      <h2 className="font-bold text-center mt-16 uppercase">Génesis Academia de Belleza</h2>
      <div className="flex justify-between items-center mt-8">
        <h4 className="font-semibold text-center uppercase">Prospectos</h4>
        <ProspectosModal />
      </div>
      <Table className="w-[1800px] overflow-x-auto">
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Apellido Paterno</TableHead>
            <TableHead>Apellido Materno</TableHead>
            <TableHead>Teléfono</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Género</TableHead>
            <TableHead>Curso</TableHead>
            <TableHead>Plataforma</TableHead>
            <TableHead>Municipio</TableHead>
            <TableHead>Estado</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {prospectos.map(prospecto => (
            <TableRow key={prospecto.id}>
              <TableCell>{prospecto.nombre}</TableCell>
              <TableCell>{prospecto.ap_paterno}</TableCell>
              <TableCell>{prospecto.ap_materno}</TableCell>
              <TableCell>{prospecto.telefono}</TableCell>
              <TableCell>{prospecto.email}</TableCell>
              <TableCell>{prospecto.genero}</TableCell>
              <TableCell>{prospecto.curso}</TableCell>
              <TableCell>{prospecto.plataforma}</TableCell>
              <TableCell>{prospecto.municipio}</TableCell>
              <TableCell>{prospecto.estado}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}