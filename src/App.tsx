import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import AppWrapper from "components/AppWrapper";
import Home from "pages/Home";
import Gallery from "pages/Gallery";
import Experience from "pages/Experience";
import NotFound from "pages/NotFound";
import Contact from "pages/Contact";
import CONSTANT from "constant";
import * as smoothscroll from "smoothscroll-polyfill";
import "styles/index.css";

export default function App(): React.FunctionComponentElement<null> {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return <BrowserRouter>{isMobile ? <Wrapper /> : <NotFound />}</BrowserRouter>;
}

function Wrapper() {
  const {
    INTERNAL_LINKS: { gallery, experience, contact },
  } = CONSTANT;

  return (
    <AppWrapper>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path={gallery}>
          <Gallery />
        </Route>
        <Route exact path={experience}>
          <Experience />
        </Route>
        <Route exact path={contact}>
          <Contact />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </AppWrapper>
  );
}
