import React, { useEffect , useState} from "react";
import axios from 'axios';
import { withAuthenticate } from "../Routes";
import { DateRangePicker } from 'rsuite';
// import 'rsuite/dist/styles/rsuite-default.css';

  function ReportView() {
  return(  <div 
  >




    <DateRangePicker appearance="default" placeholder="Default" style={{ width: 230 }} />
  </div>
  );
}
    
export default withAuthenticate(ReportView);
