import React, { createContext, useContext, useState } from 'react'

const DEFAULT_VALUE = "1234"

const WorkspaceContext = createContext(DEFAULT_VALUE);

export const WorkspaceProvider = (props) => {
  const [workspaceId, setWorkspaceId] = useState(DEFAULT_VALUE)
 const settingWorkspaceId = (data)=>{
    setWorkspaceId(data);
  }
  return (
    <WorkspaceContext.Provider value={{workspaceId ,settingWorkspaceId}}>
        {props.children}
    </WorkspaceContext.Provider>
  );
}

export const useWorkspaceContext = () => useContext(WorkspaceContext);

export default WorkspaceContext;