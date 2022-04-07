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
import DashboardView from "./components/DashboardView";
function FrontHello() {
  return (<div  color="light"
  className="navbar shadow-sm p-3 mb-5 bg-white rounded"
  expand="md"
  >
    <h2> Welcome Home !</h2>
    </div>);
}
function About() {
  return(<div  color="light"
  className="navbar shadow-sm p-3 mb-5 bg-white rounded"
  expand="md">
    <h2>this is about page from contentjs</h2> </div> );
}


const Content = ({ sidebarIsOpen = false, toggleSidebar = {} }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} /> 
      <Routes>
      <Route path="/" element={<FrontHello/>} />
      <Route path="/project" element={<ProjectView/>} />
      <Route path="/dashboard" element={<DashboardView/>} />
      <Route exact path="/report" element={<ReportView/>} />
      <Route exact path="/tracker" element={<TrackerView/>} />
      <Route exact path="/users" element={<UsersView/>} />
      <Route exact path="/project/view" element={<TaskView/>} />
      </Routes>
  </Container>
);




export default Content;
