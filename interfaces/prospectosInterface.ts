export interface Prospecto {
    id: string;
    nombre: string;
    ap_paterno: string;
    ap_materno: string;
    email: string;
    telefono: string;
    genero: string;
    curso: string;
    plataforma: string;
    municipio: string;
    estado: string;
}


export interface CreateProspecto {
    id?: string;
    nombre: string;
    ap_paterno: string;
    ap_materno: string;
    curso: string;
    telefono: string;
    email: string;
    genero: string;
    plataforma: string;
    municipio: string;
    estado: string;
}

