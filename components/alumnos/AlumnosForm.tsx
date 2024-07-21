"use client";

import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { CirclePlus, CalendarIcon, Save } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { AlumnoSchema } from "@/schemas";
import { CalendarComponent } from "../ui/calendar";
import { postAlumno } from "@/actions/alumnosActions";
import { estados } from "@/lib/estados";
import { cursos } from "@/lib/cursos";

export const AlumnosForm = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
    const router = useRouter();
    const form = useForm<z.infer<typeof AlumnoSchema>>({
        resolver: zodResolver(AlumnoSchema),
        defaultValues: {
            nombre: "",
            ap_paterno: "",
            ap_materno: "",
            fec_nacimiento: new Date(),
            genero: "",
            carrera: "",
            telefono: "",
            email: "",
            calle: "",
            num_exterior: "",
            num_interior: "",
            colonia: "",
            cp: "",
            municipio: "",
            estado: "",
        }
    });

    const onSubmit = async (values: z.infer<typeof AlumnoSchema>) => {
        // console.log(values);

        const resp = await postAlumno(values);
        console.log(resp)
        setOpen(false);
        router.refresh();
    }

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <FormField
                                control={form.control}
                                name="nombre"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nombre</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                // disabled={isPending}
                                                placeholder="Nombre o nombres"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div>
                            <FormField
                                control={form.control}
                                name="ap_paterno"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Apellido Paterno</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                // disabled={isPending}
                                                placeholder="Apellido Paterno..."
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div>
                            <FormField
                                control={form.control}
                                name="ap_materno"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Apellido Materno</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                // disabled={isPending}
                                                placeholder="Apellido Materno..."
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div>
                            <FormField
                                control={form.control}
                                name="fec_nacimiento"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel className="mb-[9px]">Fecha de nacimiento</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "px-3 text-left font-normal h-12 rounded-md",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value ? (
                                                            format(field.value, "dd/MM/yyyy")
                                                        ) : (
                                                            <span>Elige tu fecha de nacimiento</span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent align="start" className="w-auto p-2">
                                                <CalendarComponent
                                                    initialFocus
                                                    mode="single"
                                                    selected={field.value ?? undefined}
                                                    translate="es"
                                                    onSelect={field.onChange}
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div>
                            <FormField
                                control={form.control}
                                name="genero"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Género</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Selecciona género" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="masculino">Masculino</SelectItem>
                                                    <SelectItem value="femenino">Femenino</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div>
                            <FormField
                                control={form.control}
                                name="carrera"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Carrera</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Selecciona carrera..." />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {cursos.map(curso => (
                                                        <SelectItem key={curso.value} value={curso.value}>{curso.curso}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div>
                            <FormField
                                control={form.control}
                                name="telefono"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Teléfono</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                // disabled={isPending}
                                                placeholder="5512345678"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                // disabled={isPending}
                                                placeholder="correo@ejemplo.com"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div>
                            <FormField
                                control={form.control}
                                name="calle"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Calle</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                // disabled={isPending}
                                                placeholder="Calle"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="col-span-1">
                            <FormField
                                control={form.control}
                                name="num_exterior"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Número exterior</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                // disabled={isPending}
                                                placeholder="Número exterior"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div>
                            <FormField
                                control={form.control}
                                name="num_interior"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Número interior</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                // disabled={isPending}
                                                placeholder="Número interior"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div>
                            <FormField
                                control={form.control}
                                name="colonia"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Colonia</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                // disabled={isPending}
                                                placeholder="Colonia"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div>
                            <FormField
                                control={form.control}
                                name="cp"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Código Postal</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                // disabled={isPending}
                                                placeholder="00000"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div>
                            <FormField
                                control={form.control}
                                name="municipio"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Municipio</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                // disabled={isPending}
                                                placeholder="Municipio"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div>
                            <FormField
                                control={form.control}
                                name="estado"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Estado</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Selecciona estado" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {estados.map(estado => (
                                                        <SelectItem key={estado.value} value={estado.value}>{estado.estado}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    <Button className="mt-8" type="submit"><Save className="w-4 h-4 mr-2" />Guardar</Button>
                </form>
            </Form>
        </>
    )
}