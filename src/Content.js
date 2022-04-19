import React from "react";
import classNames from "classnames";
import { Container , Table, List, ListInlineItem} from "reactstrap";
import { BrowserRouter ,Routes ,Switch, Route, Link } from "react-router-dom";
import SubMenu from "./SubMenu";
import Topbar from "./Topbar";
import Login from "./Login";
import ProjectView , {TaskView}from "./components/ProjectView";
import TrackerView from "./components/TrackerView";
import UsersView from "./components/UsersView";
import ReportView from "./components/ReportView";
import EditUserInfo from "./components/EditUserInfo";
import EditTaskInfo from "./components/EditTaskInfo";
import CreateProject from "./components/CreateProject";
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
    {/* <Routes>
    <Route path="/login" element={<Login/>} />
      </Routes> */}
    <Topbar toggleSidebar={toggleSidebar} /> 
      <Routes>
      <Route path="/" element={<HomeView/>} />
      
      <Route path="/projects" element={<ProjectView/>} />
      <Route exact path="/reports" element={<ReportView/>} />
      <Route exact path="/tracker" element={<TrackerView/>} />
      <Route exact path="/users" element={<UsersView/>} />
      <Route exact path="/projects/view" element={<TaskView/>} />
      <Route exact path="/users/edit" element={<EditUserInfo/>} />
      <Route exact path="/users/create" element={<EditUserInfo/>} />
      <Route exact path="/projects/view/edit" element={<EditTaskInfo/>} />
      <Route exact path="/projects/create" element={<CreateProject/>} />
      <Route exact path="/projects/edit" element={<CreateProject/>} />
      </Routes>
  </Container>
);




export default Content;
