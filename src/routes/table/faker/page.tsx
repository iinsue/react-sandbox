import { useMemo, useState } from "react";
import { makeData } from "./components/makeData";
import {
  flexRender,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { columns } from "./components/columns";

const FakerPage = () => {
  const [data, setData] = useState(() => makeData(100));
  const tableColumns = useMemo(() => columns, []);

  const table = useReactTable({
    /* 필수 값 */
    data,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),

    /* 초기 데이터 PageSize 설정 */
    initialState: {
      pagination: {
        pageSize: 20,
      },
    },

    /* pagination 을 위한 함수 기본 pageSize=10 */
    getPaginationRowModel: getPaginationRowModel(),
    /* Debug 모드 설정 : console 출력 */
    debugTable: true,
  });

  return (
    <>
      <div>
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : (
                        <>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FakerPage;
