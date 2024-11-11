



import React from "react";
import { useTable, useSortBy, useFilters, useGlobalFilter } from "react-table";

// Custom global filter that checks both name and email columns
const globalSearchFilter = (rows, columnIds, filterValue) => {
  if (!filterValue) return rows;

  return rows.filter((row) => {
    const rowValues = columnIds.map((columnId) => row.values[columnId]);
    return rowValues.some((value) =>
      String(value).toLowerCase().includes(filterValue.toLowerCase())
    );
  });
};

const TableDetails = ({ columns, data }) => {
  // const [sortingColumn, setSortingColumn] = useState("name");  
  // const [sortDirection, setSortDirection] = useState(false); 
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        sortBy: [
          {
            // id: sortingColumn,   
            // desc: sortDirection, 
          },
        ],
      },
      globalFilter: globalSearchFilter,
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  const handleSearchChange = (e) => {
    const value = e.target.value || undefined;
    setGlobalFilter(value);
  };

  // Toggle sort direction
  // const handleSortToggle = (columnId) => {
  //   if (sortingColumn === columnId) {
  //     setSortDirection(!sortDirection); // Toggle the sort direction
  //   } else {
  //     setSortingColumn(columnId); // Set the new column to sort by
  //     setSortDirection(false); // Default to ascending when switching columns
  //   }
  // };

  return (
    <div className="overflow-x-auto shadow-xl rounded-lg">
      {/* Search Box */}
      <div className="mb-4">
        <input
          type="text"
          className="p-2 border-2 border-gray-600 rounded-md w-3/4 md:w-2/4"
          placeholder="Search by name or email"
          onChange={handleSearchChange}
        />
      </div>
      
      {/* Sort Control
      <div className="mb-4">
        <button
          onClick={() => handleSortToggle("name")}  // Clicking this will sort the 'name' column
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Sort by Name {sortingColumn === "name" ? (sortDirection ? "🔽" : "🔼") : " ⇕"}
        </button>
      </div> */}
      
      <table {...getTableProps()} className="min-w-full table-auto">
        <thead className="bg-gray-200">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="px-4 py-2 text-[12px] md:text-[15px] text-left font-semibold text-gray-700 cursor-pointer"
                >
                  {column.render("Header")}
                  <span>
                    {/* Show sorting icon */}
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽" // descending
                        : " 🔼" // ascending
                      : " ⇕"} {/* default icon when not sorted */}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="hover:bg-gray-100">
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="px-4 py-2 border-t text-[12px] md:text-[15px]"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableDetails;


