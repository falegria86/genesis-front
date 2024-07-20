import { Prospecto } from "@/interfaces/prospectosInterface";
import { getProspectos } from "@/actions/prospectosActions";
import { ProspectosModal } from "@/components/prospectos/ProspectosModal";
import { DataTableProspectos } from "@/components/DataTableProspectos";

export default async function ProspectosPage() {
  const prospectos: Prospecto[] = await getProspectos();

  return (
    <>
      <h2 className="font-bold text-center mt-16 uppercase">Génesis Academia de Belleza</h2>
      <div className="flex justify-between items-center mt-8">
        <h3 className="font-bold text-center uppercase">Prospectos</h3>
        <ProspectosModal />
      </div>

      <DataTableProspectos data={prospectos} />
    </>
  );
}