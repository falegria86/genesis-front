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
import { Prospecto } from "@/interfaces/prospectosInterface";
import { deleteProspecto } from "@/actions/prospectosActions";
import { useToast } from "../ui/use-toast";

export function DataTableProspectos({
    data,
    handleModal,
}: {
    data: Prospecto[],
    handleModal: (prospecto: Prospecto) => void;
}) {
    const router = useRouter();
    const { toast } = useToast();

    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

    const columns: ColumnDef<Prospecto>[] = [
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
            accessorKey: "genero",
            header: ({ column }) => {
                return (
                    <div className="flex gap-2 items-center">
                        <div>Género</div>
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
                    <div className="capitalize">{row.original.genero}</div>
                )
            }
        },
        {
            accessorKey: "curso",
            header: ({ column }) => {
                return (
                    <div className="flex gap-2 items-center">
                        <div>Curso</div>
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
            accessorKey: "plataforma",
            header: ({ column }) => {
                return (
                    <div className="flex gap-2 items-center">
                        <div>Plataforma</div>
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
                    <div className="capitalize">{row.original.plataforma}</div>
                )
            }
        },
        {
            accessorKey: "municipio",
            header: ({ column }) => {
                return (
                    <div className="flex gap-2 items-center">
                        <div>Municipio</div>
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
                    <div className="capitalize">{row.original.municipio}</div>
                )
            }
        },
        {
            accessorKey: "estado",
            header: ({ column }) => {
                return (
                    <div className="flex gap-2 items-center">
                        <div>Estado</div>
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
                    <div className="capitalize">{row.original.estado.split('_').join(' ')}</div>
                )
            }
        },
        {
            id: "actions",
            cell: ({ row }) => {
                const eliminarProspecto = async (id: string) => {
                    const resp = await deleteProspecto(id);

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
                            <DropdownMenuItem onClick={() => eliminarProspecto(row.original.id)}>Eliminar</DropdownMenuItem>
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