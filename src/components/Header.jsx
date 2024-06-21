import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";
import { message, Menu, Button, Avatar, Dropdown, Typography } from "antd";
import {
  BellOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    message.success("Logged out successfully!");
    navigate("/");
  };

  const menuItems = [
    {
      key: "profile",
      icon: <UserOutlined />,
      content: "Profile",
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      content: "Logout",
      onClick: logoutHandler,
    },
  ];


  const menu = (
    <Menu>
      {menuItems.map((item) => (
        <Menu.Item key={item.key} icon={item.icon} onClick={item.onClick}>
          {item.content}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Fragment>
      <Text strong style={{ color: "#ffffff", fontSize: "1.5rem" }}>Cyethack</Text>
      <div>
        <Button type="text" icon={<BellOutlined />} />
        <Dropdown overlay={menu} placement="bottomRight">
          <Button type="text" icon={<Avatar icon={<UserOutlined />} />} />
        </Dropdown>
      </div>
    </Fragment>
  );
};

export default Header;