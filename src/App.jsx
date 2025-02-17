import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const Page1 = React.lazy(() => import("./pages/Page1"));
const Page2 = React.lazy(() => import("./pages/Page2"));
const Page3 = React.lazy(() => import("./pages/Page3"));
const Page4 = React.lazy(() => import("./pages/Page4"));
const Page5 = React.lazy(() => import("./pages/Page5"));

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h1>Lazy Loaded Pages</h1>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Routes>
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="/page4" element={<Page4 />} />
            <Route path="/page5" element={<Page5 />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
