export interface Alumno {
    id: string;
    nombre: string;
    ap_paterno: string;
    ap_materno: string;
    fec_nacimiento?: Date;
    genero?: string;
    calle: string;
    num_exterior: string;
    num_interior?: string;
    colonia: string;
    cp?: string;
    municipio: string;
    estado: string;
    telefono?: string;
    email?: string;
    carrera: string;
}

export interface CreateAlumno {
    nombre: string;
    ap_paterno: string;
    ap_materno: string;
    fec_nacimiento: Date;
    calle: string;
    colonia: string;
    cp: string;
    municipio: string;
    estado: string;
    telefono: string;
    carrera: string;
}
