import React from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';

const { Search } = Input;

function SearchBar() {
  return (
    <div style={{
      display: "flex",
      gap: "10px",
      margin: "15px",
    }}>
      <Search
        placeholder="Search something.."
        allowClear
        enterButton={<SearchOutlined />}
        size="large"
        style={{ width: '100%' }}
      />
      <Button
        type="primary"
        icon={<PlusOutlined />}
        size="large"
        style={{ width: '20%' }}
      >
        Add New Profile
      </Button>
    </div>
  );
}

export default SearchBar;
