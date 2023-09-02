import React, { useMemo } from "react";
import { useTable } from "react-table";
import { Table } from "@themesberg/react-bootstrap";
import CustomPagination from "./pagination/pagination";

export function RcTable({
  columns: Columns = [],
  data: Data = [],
  enablePagination: Pagination = false,
  totalCount = 8,
  currentPage = 1,
  pageSize = 5,
  pageChange:pageChangeHandler
}) {
  const columns = useMemo(() => Columns, [Columns]);
  return (
    <Tables
      columns={columns}
      data={Data}
      pagination={Pagination}
      totalCount={totalCount}
      currentPage={currentPage}
      pageSize={pageSize ? pageSize : 5}
      onPageChange={pageChangeHandler}
    />
  );
}
function Tables({
  columns,
  data,
  pagination,
  totalCount,
  currentPage,
  pageSize,
  onPageChange
}) {
  const { getTableBodyProps, getTableProps, rows, prepareRow, headerGroups } =
    useTable({ columns, data });
  return (
    <>
      <Table
        responsive
        className="align-items-center table-flush"
        {...getTableProps()}
      >
        {" "}
        <thead className="thead-light">
          {" "}
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {" "}
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {" "}
                  {column.render("Header")}{" "}
                </th>
              ))}{" "}
            </tr>
          ))}{" "}
        </thead>{" "}
        <tbody {...getTableBodyProps()}>
          {" "}
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {" "}
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  );
                })}{" "}
              </tr>
            );
          })}{" "}
        </tbody>{" "}
      </Table>

      {pagination ? (
        <div className="px-3 border-0 d-lg-flex align-items-center justify-content-between mt-3">
          <small className="fw-bold">
            Showing <b>{pageSize}</b> out of <b>{totalCount}</b> entries
          </small>
          <CustomPagination currentPage={currentPage} totalCount={totalCount} pageSize={pageSize} onPageChange={(page) => onPageChange(page)}  />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
