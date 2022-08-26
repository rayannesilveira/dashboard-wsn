import React, { useEffect, useState } from "react";
import { StyleTableContent } from './style';
import { getAllDataRequest } from "../../../../utils/home/getAllDataRequest"

const TableContent = () => {
  const [allData, setAllData] = useState([]);



  async function getAllData() {
    const dataJson = await getAllDataRequest();
    console.log(dataJson)
    setAllData(dataJson);
  }

  useEffect(() => {
    const id = setInterval(getAllData, 1000);
    return () => clearInterval(id);

    //getAllData();
  }, []);

  return (
    <StyleTableContent>
      <div className="tableContent">
        <table>
          <thead>
            <tr>
              <th scope="col">Node</th>
              <th scope="col">Sensor</th>
              <th scope="col">Value</th>
              <th scope="col">Received At</th>
            </tr>
          </thead>

          <tbody>
            {allData.map(dataSample => (
              <tr key={dataSample.id}>
                <td>{dataSample.nodeId}</td>
                <td>{dataSample.typeDataId}</td>
                <td>{dataSample.value}</td>
                <td>{dataSample.created_at}</td>
              </tr>
            ))}

          </tbody>

        </table>
      </div>

    </StyleTableContent>

  );
}


export { TableContent }