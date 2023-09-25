import React from 'react';

const Props = (props) => {
  const { foodName } = props;

  return (
    <h1>
      제가 제일 좋아하는 음식은
      <span style={{ color: 'red' }}>{foodName}</span> 입니다.
    </h1>
  );
};

Props.defaultProps = {
  foodName: '떡볶이',
};

export default Props;
