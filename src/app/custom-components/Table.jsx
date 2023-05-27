import React, { useMemo } from "react";
import { useTable } from "react-table";
import { Table,Nav,Pagination } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft,faChevronRight } from "@fortawesome/free-solid-svg-icons";

export function RcTable({ columns: Columns = [], data: Data = [] }) {
  const columns = useMemo(() => Columns, [Columns]);
  return <Tables columns={columns} data={Data} />;
}
function Tables({ columns, data }) {
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
              <th {...column.getHeaderProps()}> {column.render("Header")} </th>
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
      <div className="px-3 border-0 d-lg-flex align-items-center justify-content-between mt-3">
          
          <small className="fw-bold">
            Showing <b>5</b> out of <b>25</b> entries
          </small>
          <Nav>
            <Pagination className="mb-2 mb-lg-0">
              <Pagination.Prev>
              <FontAwesomeIcon icon={faChevronLeft} />
              </Pagination.Prev>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next>
               <FontAwesomeIcon icon={faChevronRight} />
              </Pagination.Next>
            </Pagination>
          </Nav>
        </div>
  </>
  );
}
