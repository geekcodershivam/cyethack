import React from 'react';
import { Table, Tag } from 'antd';
import Link from 'antd/es/typography/Link';
import {
  DownOutlined
} from "@ant-design/icons";

const tag = ({ color, value }) => {
  return <Tag style={{
    margin: '0',
    borderRadius: '0',
    padding: '5px',
    color: 'black',
    backgroundColor: `${color}`,
  }} color={color}>{value}</Tag>

}
const TableComponent = ({ students, handleRowClick }) => {
  const columns = [
    {
      title: 'Scan Name',
      dataIndex: 'scanName',
      key: 'scanName',
      width: '25%',
      render: (text) => (
        <span>
          <Link>
            {text}
          </Link>
          <DownOutlined style={{ marginLeft: "10px" }} />
        </span>

      )
    },
    {
      title: 'Target url',
      dataIndex: 'url',
      key: 'url',
      width: '20%',
      render: (text) => (
        <Link href={text} target="_blank">
          {text}
        </Link>
      )
    },
    {
      title: 'Scan Engine',
      dataIndex: 'scanEngine',
      key: 'scanEngine',
      width: '15%',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: '10%',
    },
    {
      title: 'Risk Score',
      dataIndex: 'riskScore',
      key: 'riskScore',
      width: '5%',
    },
    {
      title: 'Total Vulnerabilities',
      dataIndex: 'totalVulnerabilities',
      key: 'totalVulnerabilities',
      width: '10%',
    },
    {
      title: 'severity',
      dataIndex: 'severity',
      key: 'severity',
      width: '15%',
      render: (severity) => (
        <div>
          {tag({ color: 'red', value: severity?.critical })}
          {tag({ color: 'orange', value: severity?.high })}
          {tag({ color: 'yellow', value: severity?.medium })}
          {tag({ color: 'green', value: severity?.low })}
        </div>
      ),
    },

    {
      title: '',
      dataIndex: 'severity',
      key: 'link',
      width: '5',
      render: (_, record) => (
        <span style={{ cursor: "pointer" }} onClick={() => handleRowClick(record.item_id)}>
          ...
        </span>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={students.map(student => ({ ...student, key: student.item_id }))}
      pagination={false}
      style={{ margin: "15px" }}
    />
  );
};

export default TableComponent;
