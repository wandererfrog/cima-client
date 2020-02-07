import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import config from "./config";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({ uri: config.CMS_API });

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<ApolloApp apollo={client} />, document.getElementById("root"));
