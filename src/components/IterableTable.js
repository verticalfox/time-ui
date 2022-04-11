import React from "react";
import PrintTable from "./PrintTable";
function IterableTable(tableEntry) {
    return (
        <PrintTable 
        key={tableEntry.id}
        id={tableEntry.id}
        title={tableEntry.title}
        description={tableEntry.description}
        time={tableEntry.time}    
        />
    );
}

export default IterableTable;