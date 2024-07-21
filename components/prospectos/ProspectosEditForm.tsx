"use client";

import { useRouter } from "next/navigation";
import { Save } from "lucide-react";
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
import { Button } from "@/components/ui/button";
import { ProspectoSchema } from "@/schemas";
import { Prospecto } from "@/interfaces/prospectosInterface";
import { editProspecto } from "@/actions/prospectosActions";
import { useToast } from "../ui/use-toast";
import { estados } from "@/lib/estados";
import { cursos } from "@/lib/cursos";

export const ProspectosEditForm = ({
    prospectoData,
    handleCloseModal
}:
    {
        prospectoData: Prospecto | null,
        handleCloseModal: () => void
    }) => {
    const router = useRouter();
    const { toast } = useToast();
    const form = useForm<z.infer<typeof ProspectoSchema>>({
        resolver: zodResolver(ProspectoSchema),
        defaultValues: {
            nombre: prospectoData?.nombre ?? '',
            ap_paterno: prospectoData?.ap_paterno ?? '',
            ap_materno: prospectoData?.ap_materno ?? '',
            genero: prospectoData?.genero.toLowerCase() ?? '',
            curso: prospectoData?.curso ?? '',
            telefono: prospectoData?.telefono ?? '',
            email: prospectoData?.email ?? '',
            plataforma: prospectoData?.plataforma.toLowerCase() ?? '',
            municipio: prospectoData?.municipio ?? '',
            estado: prospectoData?.estado ?? '',
        }
    });

    const onSubmit = async (values: z.infer<typeof ProspectoSchema>) => {
        const formToSend = {
            id: prospectoData?.id,
            ...values
        }

        const resp = await editProspecto(formToSend);

        toast({
            title: "¡Éxito!",
            description: resp,
        });

        handleCloseModal();
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
                                name="curso"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Curso</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Selecciona curso..." />
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
                                name="plataforma"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Plataforma</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Seleccione plataforma..." />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="facebook">Facebook</SelectItem>
                                                    <SelectItem value="instagram">Instagram</SelectItem>
                                                    <SelectItem value="tiktok">Tik tok</SelectItem>
                                                    <SelectItem value="whatsapp">Whatsapp</SelectItem>
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