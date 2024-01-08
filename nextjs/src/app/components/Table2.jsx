import { useState, useMemo } from "react";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table";

/**
 * Example Usage:
 * - Note that accessor in header correlates to object fields in tableData
 *
 * const header = [
 *   { Header: "Column 1", accessor: "col1" },
 *   { Header: "Column 2", accessor: "col2" },
 * ]
 *
 * const tableData = [
 *   {
 *     col1: "val1",
 *     col2: "val2",
 *   },
 *   {
 *     col1: "val1",
 *     col2: "val2",
 *   },
 * ]
 *
 * <Table header={header} tableData={tableData} allowSorting={true} />
 */

const Table2 = ({ title, header, tableData, allowSorting }) => {
  const columns = useMemo(() => [...header], []);
  const data = useMemo(() => [...tableData], []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex, globalFilter },
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    { columns, data, initialState: { page: 0, pageSize: 999 } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <>
      <div className="flex justify-between">
        <div className="mb-[1.563rem]">
          <h1 className="text-[1.75rem] text-black uppercase">{title}</h1>
        </div>
      </div>
      <div className="overflow-x-auto w-full table-scroll">
        <table className="min-w-full table-fixed">
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr key={index} className="bg-mdecGreen text-white">
                {headerGroup.headers.map((column, index) => (
                  <th key={index} className="px-11 py-4 sm:py-8 sm:pl-12">
                    <p className="text-left">
                      <span className=" mr-2">{column.render("Header")}</span>
                    </p>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className={index % 2 === 0 ? "bg-white" : "bg-airBlue"}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()} className="py-8 pl-12">
                        {cell.render("Cell")}
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

export default Table2;
