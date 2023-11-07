import { ColumnDef } from "@tanstack/react-table";
import { Posts } from "./makeData";

export const columns: ColumnDef<Posts>[] = [
  { accessorKey: "category" },
  { accessorKey: "title" },
  { accessorKey: "author" },
  { accessorKey: "price" },
  { accessorKey: "createdAt" },
];
