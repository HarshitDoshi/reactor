import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Loading from "./Components/Loading";

// const Header = React.lazy(() => import("./Components/Pages/Header"));
// const Main = React.lazy(() => import("./Components/Pages/Main"));
// const Footer = React.lazy(() => import("./Components/Pages/Footer"));

const Home = React.lazy(() => import("./Components/Pages/Home"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <div className="flex flex-col h-screen">
          {/* <Header /> */}
          {/* <Main> */}
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          {/* </Main> */}
          {/* <Footer /> */}
        </div>
      </Router>
    </Suspense >
  );
}

export default App;
