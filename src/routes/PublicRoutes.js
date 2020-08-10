import React from "react";
import { Switch, Route } from "react-router-dom";
import LayoutComponent from "../Components/Layouts/LayoutComponent";

const PublicRoutes = () => (
  <Switch>
    <Route exact path={["/fetch-bank-list/", "/fetch-bank-list"]}>
      <LayoutComponent path={"HOME"} />
    </Route>
    <Route exact path={"/banks"}>
      <LayoutComponent path={"BANKS"} />
    </Route>
    <Route exact path={"/favourite"}>
      <LayoutComponent path={"FAVOURITE"} />
    </Route>
    <Route>
      <LayoutComponent />
    </Route>
  </Switch>
);

export default PublicRoutes;
