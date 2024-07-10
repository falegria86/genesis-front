const url = process.env.API_URL;

export const getAlumnos = async () => {
    const resp = await fetch(`${url}/alumnos`);
    const data = await resp.json();

    return data;
}