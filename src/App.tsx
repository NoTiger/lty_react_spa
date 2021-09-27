import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import AppWrapper from "components/AppWrapper";
import Home from "pages/Home";
import Gallery from "pages/Gallery";
import Experience from "pages/Experience";
import NotFound from "pages/NotFound";
import "styles/index.scss";

export default function App(): React.FunctionComponentElement<null> {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
          <Route exact path="/experience">
            <Experience />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </AppWrapper>
    </BrowserRouter>
  );
}
