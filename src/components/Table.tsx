import { useState, useEffect } from "react";
import { StyledTable } from "./table.styled";
import { format } from "date-fns";

// fetching services
import { fetchData } from "../services/fetchData";

const TableData = () => {
  const [tableData, setTableData] = useState([] as any);

  useEffect(() => {
    fetchData()
      .then((data: any) => {
        if (data) {
          setTableData(data);
        } else {
          console.log("no data found");
        }
      })
      .catch(function (error: any) {
        console.log("error : ", error);
      });
  }, []);

  const keys = Object.keys(tableData[0] || {});

  return (
    <>
      {tableData && (
        <StyledTable aria-label="table-component">
          <thead>
            {tableData && Object.keys(tableData) ? (
              <tr>
                {keys.slice(1).map((title, index) => (
                  <th key={index}>{title}</th>
                ))}
              </tr>
            ) : null}
          </thead>
          <tbody>
            {tableData.map((item: any) => (
              <tr key={item.id}>
                <td>{item.merchant}</td>
                <td>{`£ ${item.amount}`}</td>
                <td>{item.description}</td>
                <td>{format(item.date, "MMMM d")}</td>
                <td>{item.category}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      )}
    </>
  );
};

export default TableData;
