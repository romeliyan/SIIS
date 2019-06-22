import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginRegister from "./components/general_components/Login-Register-Root";
import AdminHome from "./components/admin_components/Home-Root";
import InstructorHome from "./components/instructor_components/Home-Root";
import StudentHome from "./components/student_components/Home-Root";
import ProtectedRoute from "./middleware/protected_route";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Alert from "./components/general_components/Alerts";

import "core-js";

const alertOptions = {
  timeout: 3000,
  position: "top center"
};

function App() {
  return (
    <BrowserRouter>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Alert />
        <div className="App">
          <Switch>
            <Route exact path="/" component={LoginRegister} />
            <Route exact path="/SignUp" component={LoginRegister} />
            <ProtectedRoute exact path="/AdminHome" component={AdminHome} />
            <ProtectedRoute
              exact
              path="/InstructorHome"
              component={InstructorHome}
            />
            <ProtectedRoute exact path="/StudentHome" component={StudentHome} />
            <Route path="*" component={() => "404 Not Found"} />
          </Switch>
        </div>
      </AlertProvider>
    </BrowserRouter>
  );
}

export default App;
