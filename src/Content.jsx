import React from "react";
import classNames from "classnames";
import { Container , Table, List, ListInlineItem} from "reactstrap";
import { BrowserRouter ,Routes ,Switch, Route, Link } from "react-router-dom";
import SubMenu from "./SubMenu";
import Topbar from "./Topbar";
import Login from "./Login";
import ProjectView from "./components/ProjectView";
import TaskView from "./components/TaskView"
import TrackerView from "./components/TrackerView";
import UsersView from "./components/UsersView";
import ReportView from "./components/ReportView";
import CreateUser from "./components/CreateUser";
import CreateTask from "./components/CreateTask";
import CreateProject from "./components/CreateProject";
import CreateWorkspace from "./components/CreateWorkspace";
import ProtectedRoutes, { ProtectedRoutesAdmin, ProtectedRoutesUser } from "./ProtectedRoutes";
import UnauthorizedView from "./components/UnauthorizedView";
function HomeView() {

  return (<div  color="light"
  className="navbar shadow-sm p-3 mb-5 bg-white rounded"
  expand="md"
  >
    <h2> Welcome Home !</h2>
  
    </div>);
}
const Content = ({ sidebarIsOpen = false, toggleSidebar = {} }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} /> 
      <Routes>
      <Route path="/" element={<HomeView/>} />
      <Route element={<ProtectedRoutesUser/>}>
     
      <Route exact path="/tracker" element={<TrackerView/>} />
      </Route>




      <Route element={<ProtectedRoutesAdmin/>}> 
  
      <Route path="/projects" element={<ProjectView/>} />
      <Route exact path="/reports" element={<ReportView/>} />
    
      <Route exact path="/users" element={<UsersView/>} />
      <Route exact path="/projects/:id/view" element={<TaskView/>} />
      {/* <Route exact path="/users/:id/edit" element={<CreateUser/>} /> */}
      <Route exact path="/users/create" element={<CreateUser/>} />
      <Route exact path="/projects/view/edit" element={<CreateTask/>} />
      <Route exact path="/projects/create" element={<CreateProject/>} />
        <Route exact path="/projects/edit" element={<CreateProject/>} />
        </Route>
      </Routes>
  </Container>
);




export default Content;
