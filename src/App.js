import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import PublicRoutes from "./routes/PublicRoutes";
import { Provider } from "react-redux";
import store from './stores/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <PublicRoutes />
      </Router>
    </Provider>
  );
}

export default App;
