import React from 'react';
import { useState } from 'react';

function Result({ Text, backgroundColor, TextColor, Fruit }) {
  return (
    <div style={{ display: 'block' }}>
      <img src={`${Fruit}.png`} width={100} height={100} />

      <div
        style={{
          padding: '10px',
          marginTop: '10px',
          backgroundColor: backgroundColor,
          color: TextColor,
        }}
      >
        {Text}
      </div>
    </div>
  );
}

export default Result;
