/** @jsx jsx */
import { css, jsx  } from '@emotion/react';
import { useState } from 'react';
import { Segmented } from 'antd';

const navBarStyle = css`
  margin: 10px;
  .ant-segmented {
    width: 100%;
    .ant-segmented-item-selected {
      background-color: #1876d1 !important;
      color: white !important;
      font-weight: bold;
    }
    .ant-segmented-item {
      color: black;
      padding: 10px;
    }
  }
`;

function NavBar() {
  const [selected, setSelected] = useState('home');

  return (
    <div css={navBarStyle}>
      <Segmented
        options={[
          { label: 'Home', value: 'home' },
          { label: 'Scan Result', value: 'scan', disabled: true },
          { label: 'Report', value: 'report', disabled: true },
        ]}
        value={selected}
        onChange={setSelected}
      />
    </div>
  );
}

export default NavBar;