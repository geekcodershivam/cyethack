import React from "react";
import { Typography, Button, Layout } from "antd";
import { RightOutlined } from "@ant-design/icons"; // Import Ant Design icon
import { useNavigate } from "react-router-dom";
import withHeader from "./withHeader";

const { Title } = Typography;
const { Content } = Layout;

const Dashboard = () => {
  const navigate = useNavigate();

  const containerStyles = {
    minHeight: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const contentStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const titleStyles = {
    textAlign: "center",
    fontWeight: "bold",
  };

  const buttonStyles = {
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Layout style={containerStyles}>
      <Content style={contentStyles}>
        <div>
          <Title level={2} style={titleStyles}>
            Hello User !!!
          </Title>
          <Button
            type="primary"
            size="large"
            style={buttonStyles}
            onClick={() => {
              navigate("/list");
            }}
          >
            Go to the Dashboard! <RightOutlined style={{ marginLeft: 8 }} />
          </Button>
        </div>
      </Content>
    </Layout>
  );
};

export default withHeader(Dashboard);