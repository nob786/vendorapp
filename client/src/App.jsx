import React from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./views/Homepage/Homepage";
import Login from "./views/Login/Login";
// import "../src/assets/scss/_buttons.scss"
function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="login" element={<Login />} /> */}
      {/* <Route index element={<Homepage />} /> */}
      {/* <Route path="dashboard" element={<Dashboard />} /> */}

      {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
      {/* <Route path="*" element={<NoMatch />} /> */}
      {/* </Route> */}
    </Routes>
  );
}

export default App;
