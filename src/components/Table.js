import React, { useState, useEffect } from "react";
import axios from "axios";
import TableDetails from "./Tabledetails";


const Table = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users") 
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        setLoading(false);
      });
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
    ],
    []
  );

  if (loading) return <div className="text-center text-xl font-semibold">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Table</h1>
      <TableDetails columns={columns} data={data} />
    </div>
  );
};

export default Table;