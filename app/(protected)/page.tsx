import { Prospecto } from "@/interfaces/prospectosInterface";
import { getProspectos } from "@/actions/prospectosActions";
import { ProspectosModal } from "@/components/prospectos/ProspectosModal";
import { ProspectosComponent } from "@/components/prospectos/ProspectosComponent";

export default async function ProspectosPage() {
  const prospectos: Prospecto[] = await getProspectos();

  return (
    <>
      <div className="block sm:flex justify-between items-center mt-8">
        <h4 className="font-bold text-center uppercase mb-5 sm:mb-0">Prospectos</h4>
        <ProspectosModal />
      </div>

      <ProspectosComponent data={prospectos} />
    </>
  );
}