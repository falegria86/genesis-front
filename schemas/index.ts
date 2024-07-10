import { z } from 'zod';

const phoneNumberRegex = /^\d{10}$/;

export const AlumnoSchema = z.object({
    nombre: z.string().min(3, {
        message: 'Nombre es requerido'
    }),
    ap_paterno: z.string().min(3, {
        message: 'Apellido Paterno es requerido'
    }),
    ap_materno: z.string().min(3, {
        message: 'Apellido Materno es requerido'
    }),
    fec_nacimiento: z.date(),
    genero: z.string(),
    carrera: z.string().min(3, {
        message: 'Carrea es requerida'
    }),
    telefono: z.string().regex(phoneNumberRegex, { message: "El número debe contener 10 dígitos" }),
    email: z.string(),
    calle: z.string().min(3, {
        message: 'Calle es requerida'
    }),
    num_exterior: z.string().min(1, {
        message: 'Número exterior es requerido'
    }),
    num_interior: z.string(),
    colonia: z.string().min(3, {
        message: 'Colonia es requerida'
    }),
    cp: z.string(),
    municipio: z.string().min(3, {
        message: 'Municipio es requerido'
    }),
    estado: z.string().min(3, {
        message: 'Estado es requerido'
    }),
});

export const ProspectoSchema = z.object({
    nombre: z.string().min(3, {
        message: 'Nombre es requerido'
    }),
    ap_paterno: z.string().min(3, {
        message: 'Apellido Paterno es requerido'
    }),
    ap_materno: z.string().min(3, {
        message: 'Apellido Materno es requerido'
    }),
    genero: z.string(),
    plataforma: z.string(),
    curso: z.string().min(3, {
        message: 'Carrea es requerida'
    }),
    telefono: z.string().regex(phoneNumberRegex, { message: "El número debe contener 10 dígitos" }),
    email: z.string(),
    municipio: z.string(),
    estado: z.string(),
});