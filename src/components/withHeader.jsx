import React, { Fragment } from "react";
import { Layout, } from "antd";
import Header from "./Header";

const { Header: AntHeader } = Layout;

const withHeader = (WrappedComponent) => {

  return (props) => {

    return (
      <Fragment>
        <AntHeader
          style={{
            display: "flex",
            backgroundColor: "#1876d1",
            padding: "0 20px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Header />
        </AntHeader>
        <WrappedComponent {...props} />
      </Fragment>
    );
  };
};



export default withHeader;
