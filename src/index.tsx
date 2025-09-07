import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { QueryClient, QueryClientProvider } from "react-query";
import AppStore from "./store/AppStore";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      /*control refetch when focus on window*/
      refetchOnWindowFocus: false,
      /*Queries that fail are silently retried 3 times, with exponential backoff delay before capturing and displaying an error to the UI if retry = true*/
      retry: false,
      /*default staleTime means queries will not refetch their data as often*/
      // staleTime: 5 * 60 * 1000,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <AppStore>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </AppStore>
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
