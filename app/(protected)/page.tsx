import { Prospecto } from "@/interfaces/prospectosInterface";
import { getProspectos } from "@/actions/prospectosActions";
import { ProspectosModal } from "@/components/prospectos/ProspectosModal";
import { ProspectosComponent } from "@/components/prospectos/ProspectosComponent";

export default async function ProspectosPage() {
  const prospectos: Prospecto[] = await getProspectos();

  return (
    <>
      <div className="flex justify-between items-center mt-8">
        <h3 className="font-bold text-center uppercase">Prospectos</h3>
        <ProspectosModal />
      </div>

      <ProspectosComponent data={prospectos} />
    </>
  );
}