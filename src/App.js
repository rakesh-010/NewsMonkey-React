import "./App.css";

import React, { useState } from "react";
import NaviBar from "./Components/NaviBar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";

import { Routes, Route } from "react-router-dom";

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <NaviBar />
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              setProgress={setProgress}
              key="general"
              pg={6}
              country={"in"}
              category="general"
            />
          }
        />
        <Route
          exact
          path="/business"
          element={
            <News
              setProgress={setProgress}
              key="business"
              pg={6}
              country={"in"}
              category="business"
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <News
              setProgress={setProgress}
              key="science"
              pg={6}
              country={"in"}
              category="science"
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <News
              setProgress={setProgress}
              key="sports"
              pg={6}
              country={"in"}
              category="sports"
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              key="entertainment"
              pg={6}
              country={"in"}
              category="entertainment"
            />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <News
              setProgress={setProgress}
              key="technology"
              pg={6}
              country={"in"}
              category="technology"
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <News
              setProgress={setProgress}
              key="health"
              pg={6}
              country={"in"}
              category="health"
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
