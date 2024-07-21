import { getAlumnos } from "@/actions/alumnosActions";
import { Alumno } from "@/interfaces/alumnosInterface";
import { AlumnosModal } from "@/components/alumnos/AlumnosModal";
import { AlumnosComponent } from "@/components/alumnos/AlumnosComponent";

export default async function AlumnosPage() {
    const alumnos: Alumno[] = await getAlumnos();

    return (
        <>
            <div className="flex justify-between items-center mt-8">
                <h4 className="font-semibold text-center uppercase">Alumnos</h4>
                <AlumnosModal />
            </div>
            <AlumnosComponent data={alumnos} />
        </>
    );
}