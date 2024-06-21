import { Button, Form, Input, Typography } from 'antd';
import { Layout } from "antd";
import { Content } from 'antd/es/layout/layout';
/** @jsx jsx */
import { css, jsx  } from '@emotion/react';

const { Title } = Typography; // Destructure Ant Design Typography components

const containerStyles = css`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
opacity: 0.8;
`;


const LoginPage = ({ onFinish, onFinishFailed}) => {
  return (<Layout style={{ minHeight: "100vh" }}>
    <Content style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div css={containerStyles}>
          <div>
            <Title level={2} className="text-center font-bold mb-4">
              Welcome to Cyethack
            </Title>
          </div>

          <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      </div>
      
    </Content>
  </Layout>);

};

export default LoginPage;