"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getPaginationRowModel,
    SortingState,
    getSortedRowModel,
    ColumnFiltersState,
    getFilteredRowModel,
} from "@tanstack/react-table"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { deleteProspecto } from "@/actions/prospectosActions";
import { useToast } from "../ui/use-toast";
import { Alumno } from "@/interfaces/alumnosInterface";
import { deleteAlumno } from "@/actions/alumnosActions";

export function DataTableAlumnos({
    data,
    handleModal,
}: {
    data: Alumno[],
    handleModal: (prospecto: Alumno) => void;
}) {
    const router = useRouter();
    const { toast } = useToast();

    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

    const columns: ColumnDef<Alumno>[] = [
        {
            accessorKey: "nombre",
            header: ({ column }) => {
                return (
                    <div className="flex gap-2 items-center">
                        <div>Nombre</div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        >
                            <ArrowUpDown className="h-3 w-3" />
                        </Button>
                    </div>
                )
            },
        },
        {
            accessorKey: "ap_paterno",
            header: ({ column }) => {
                return (
                    <div className="flex gap-2 items-center">
                        <div>Apellido Paterno</div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        >
                            <ArrowUpDown className="h-3 w-3" />
                        </Button>
                    </div>
                )
            },
        },
        {
            accessorKey: "ap_materno",
            header: ({ column }) => {
                return (
                    <div className="flex gap-2 items-center">
                        <div>Apellido Materno</div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        >
                            <ArrowUpDown className="h-3 w-3" />
                        </Button>
                    </div>
                )
            },
        },
        {
            accessorKey: "email",
            header: ({ column }) => {
                return (
                    <div className="flex gap-2 items-center">
                        <div>Email</div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        >
                            <ArrowUpDown className="h-3 w-3" />
                        </Button>
                    </div>
                )
            },
        },
        {
            accessorKey: "telefono",
            header: ({ column }) => {
                return (
                    <div className="flex gap-2 items-center">
                        <div>Teléfono</div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        >
                            <ArrowUpDown className="h-3 w-3" />
                        </Button>
                    </div>
                )
            },
        },
        {
            accessorKey: "carrera",
            header: ({ column }) => {
                return (
                    <div className="flex gap-2 items-center">
                        <div>Carrera/Curso</div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        >
                            <ArrowUpDown className="h-3 w-3" />
                        </Button>
                    </div>
                )
            },
            cell: ({ row }) => {
                return (
                    <div className="capitalize">{row.original.carrera.split('_').join(' ')}</div>
                )
            }
        },
        {
            id: "actions",
            cell: ({ row }) => {
                const eliminarAlumno = async (id: string) => {
                    const resp = await deleteAlumno(id);

                    toast({
                        title: "¡Éxito!",
                        description: resp,
                    })

                    // console.log(resp)

                    router.refresh();
                }

                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Abrir menú</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleModal(row.original)}>Editar</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => eliminarAlumno(row.original.id)}>Eliminar</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },
    ];

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters,
        },
    })

    return (
        <div className="mt-16">
            <div className="flex gap-5 items-center py-4">
                <Input
                    placeholder="Buscar por nombre"
                    value={(table.getColumn("nombre")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("nombre")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <Input
                    placeholder="Buscar por apellido paterno"
                    value={(table.getColumn("ap_paterno")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("ap_paterno")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <Input
                    placeholder="Buscar por apellido materno"
                    value={(table.getColumn("ap_materno")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("ap_materno")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
            </div>
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                Sin resultados.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    <ArrowLeft className="w-4 h-4" />
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    )
}