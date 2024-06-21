/** @jsx jsx */
import { css, jsx  } from '@emotion/react';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import NavBar from "./NavBar.jsx";
import Boxs from "./Boxs";
import { Vulnerabilities } from '../constants';
import UserData from './UserData.jsx';

const ListDetail = () => {
  const [userData, setUserData] = useState(
    JSON.parse(sessionStorage.getItem("userData")) || null
  );
  const [loading, setLoading] = useState(false);
  const selectedItemId = sessionStorage.getItem("selectedItemId");
  const students = useSelector((state) => state.student.students);

  const sumOfSeverities = () => {
    if (!userData) return 0;
    return (
      userData.severity.critical +
      userData.severity.high +
      userData.severity.medium +
      userData.severity.low
    );
  };

  useEffect(() => {
    if (userData?.item_id?.toString() !== selectedItemId) {
      setLoading(true);
      const user = students.find(
        (student) => student.item_id.toString() === selectedItemId
      );
      if (user) {
        setTimeout(() => {
          setUserData(user);
          sessionStorage.setItem("userData", JSON.stringify(user)); // Save userData in sessionStorage
          setLoading(false);
        }, 1000); // Simulate a 1-second loading delay
      }
    }
  }, [selectedItemId, students, userData]);

  let critical = userData ? userData.severity.critical : 0;
  let high = userData ? userData.severity.high : 0;
  let medium = userData ? userData.severity.medium : 0;
  let low = userData ? userData.severity.low : 0;
  let Risk = userData ? userData.severity.riskScore : 0;

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const styles = {
    container: css`
      width: 100%;
      height: 100%;
    `,
    loadingContainer: css`
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      margin-top: 15rem;
    `,
    riskScoreContainer: css`
      background-color: #fbbf24;
      font-weight: bold;
      font-size: 1.25rem;
      margin-top: 0.25rem;
      text-align: center;
      width: 5rem;
      height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    `,
  };

  return (
    <div css={styles.container}>
      {loading ? (
        <div css={styles.loadingContainer}>
          <Spin indicator={antIcon} />
        </div>
      ) : userData ? (
        <div>
          <NavBar />
          <Boxs
            data={[
              { value: sumOfSeverities(), label: "Total Vulnerabilities", color: "purple" },
              { value: critical, label: "Critical", color: "red" },
              { value: high, label: "High", color: "orange" },
              { value: medium, label: "Medium", color: "#f7bc00" },
              { value: low, label: "Low", color: "green" },
            ]}
          />
          <UserData
            Risk={Risk}
            userData={userData}
            critical={critical}
            high={high}
            medium={medium}
            low={low}
            Vulnerabilities={Vulnerabilities}
          />
        </div>
      ) : (
        <div>No user data available.</div>
      )}
    </div>
  );
};

export default ListDetail;
