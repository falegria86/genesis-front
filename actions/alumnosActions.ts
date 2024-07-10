import { CreateAlumno } from "@/interfaces/alumnosInterface";

const url = process.env.API_URL;

export const getAlumnos = async () => {
    const resp = await fetch(`${url}/alumnos`, { cache: 'no-store' });
    const data = await resp.json();

    return data;
}

export const postAlumno = async (body: CreateAlumno) => {
    const resp = await fetch(`https://genesis-api-production.up.railway.app/api/alumnos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });

    const data = await resp.json();
    return data.message;
}