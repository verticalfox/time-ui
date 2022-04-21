  import React, { useEffect , useState} from "react";
  import { Table } from "reactstrap";
  import axios from 'axios';
  
  function IterableTable2(tableEntry) {
    return (
        <PrintTable2
        key={tableEntry.id}
        id={tableEntry.id}
        name={tableEntry.name}
        totalhours={tableEntry.totalhours} 
        />
    );
  }
  
  const PrintTable2 = (props) => (
                  <tbody>
  
                      <tr>
                          <th scope="row">
                              {props.id}
                          </th>
                          <td>
                              {props.name}
                          </td>
                          <td>
                              {props.totalhours}
                          </td>
                      </tr>
                  </tbody>
      );
  function ReportView() {
      const [ReportData, setReportData] = useState([]);
      useEffect(() => {
          axios.get(`http://localhost:3000/reports`, {
              headers: {
                 'Access-Control-Allow-Origin': '*'
              }
          })
         .then(function (response) {
               setReportData(response.data);
           })
      
     
      }, []);
  
  
  
      return ( <div color="light"
      className="navbar shadow-sm p-3 mb-5 bg-white "
      expand="md">
      <table className="table table-striped">
          <thead>
              <tr>
                  <th>
                      #
                  </th>
                  <th>
                      Employee name 
                  </th>
                  <th>
                      Total Working hours
                  </th>
              </tr>
          </thead>
          {ReportData.map(IterableTable2)}
      </table>
  
  </div>);
    }
  
    
    export default ReportView;











































    // function ReportView() {
//     return(<div  color="light"
//     className="navbar shadow-sm p-3 mb-5 bg-white rounded"
//     expand="md">
//       <h2>this is reports page</h2> </div> );
//   }

  
//   export default ReportView;
