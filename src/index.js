import { Provider } from "react-redux";
import { applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import React from "react";
import App from "./App";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { productReducer, productCategories } from "./reducers/products";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme/Theme";
import { createRoot } from "react-dom/client";
const store = configureStore(
  { reducer: { productReducer, productCategories } },
  compose(applyMiddleware(thunk))
);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
