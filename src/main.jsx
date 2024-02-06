import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "./18n";
import { Loading } from "./components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <HelmetProvider>
      <React.StrictMode>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </React.StrictMode>
    </HelmetProvider>
  </BrowserRouter>
);
