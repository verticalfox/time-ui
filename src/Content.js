import React from "react";
import classNames from "classnames";
import { Container , Table} from "reactstrap";
import { BrowserRouter ,Routes ,Switch, Route, Link } from "react-router-dom";
import SubMenu from "./SubMenu";
import Topbar from "./Topbar";
import Login from "./Login";
import ProjectView , {TaskView}from "./components/ProjectView";
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
function UsersView() {
  return(<div  color="light"
  className="navbar shadow-sm p-3 mb-5 bg-white rounded"
  expand="md">
    <h2>here list of users will appear</h2> </div> );
}

function ReportView() {
  return(<div  color="light"
  className="navbar shadow-sm p-3 mb-5 bg-white rounded"
  expand="md">
    <h2>this is reports page</h2> </div> );
}




function TrackerView() {
  return (
    <div  color="light"
    className="navbar shadow-sm p-3 mb-5 bg-white rounded"
    expand="md">
    <table>
      <tr>
      <th>Task </th>
      <th>Description</th>
      <th>Start time</th>
      <th>End time</th>
      </tr>
      <tr>
      <td> <input type="text" placeholder="enter your project name"/></td>
      <td> <input type="text" placeholder="enter your task name"/></td>
      <td><input type="text" placeholder="start time "/></td>
      <td><input type="text" placeholder="end time "/></td>
      </tr>
      </table>
  </div>

  );
}

function DashboardView() {
  return (
 

      <div  color="light"
      
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand="md">
        <h4> 
          this is dashboard view !!
        </h4>
      </div>
  );
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
