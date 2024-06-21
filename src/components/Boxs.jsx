/** @jsx jsx */
import { css, jsx  } from '@emotion/react';
import { Card, Typography } from "antd";

const { Title } = Typography;

const Boxs = ({ data }) => {
  const boxContainerStyles = css`
    display: flex;
    margin: 15px;
    gap: 20px;
  `;

  const boxStyles = css`
    width: 25%;
    text-align: center;
  `;

  const cardStyles = (color) => css`
    width: 100%;
    border: 1px solid;
    text-align: center;
    background-color: ${color};
    border-radius: 0;
    font-size: 30px;
    color: white;
  `;

  const titleStyles = css`
    border: 1px solid;
    font-size: 20px !important;
  `;

  return (
    <div css={boxContainerStyles}>
      {data.map((ele, idx) => (
        <div key={idx} css={boxStyles}>
          <Card css={cardStyles(ele.color)}>{ele.value}</Card>
          <Title css={titleStyles}>{ele.label}</Title>
        </div>
      ))}
    </div>
  );
};

export default Boxs;
