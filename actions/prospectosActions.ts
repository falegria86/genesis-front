import { CreateProspecto } from "@/interfaces/prospectosInterface";

const url = process.env.API_URL;

export const getProspectos = async () => {
    const resp = await fetch(`${url}/prospectos`, { cache: 'no-store' });
    const data = await resp.json();

    return data;
}

export const postProspecto = async (body: CreateProspecto) => {
    const resp = await fetch(`https://genesis-api-production.up.railway.app/api/prospectos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });

    const data = await resp.json();
    return data.message;
}

export const deleteProspecto = async (id: string) => {
    const resp = await fetch(`https://genesis-api-production.up.railway.app/api/prospectos/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await resp.json();
    return data.message;
}