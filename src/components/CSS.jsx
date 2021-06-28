import React from 'react';

const CSS = () => {
  return (
    <div
      style={{
        border: ' 1px solid black',
        background: '#ffd7ac',
        textAlign: 'center',
        height: '100vh',
        display: 'grid',
        gridTemplateColumns: '33.33% 33.33% 33.33%',
        gridTemplateRows: '70%',
      }}
    >
      <div
        style={{
          margin: '10px',
          width: '100px',
          border: '4px solid red',
          background: '#666699',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <h4
          style={{
            fontWeight: 'Poster',
            fontSize: '30px',
          }}
        >
          A0
        </h4>
        <h4
          style={{
            fontWeight: 'Poster',
            fontSize: '30px',
          }}
        >
          AB
        </h4>
      </div>
      <div
        style={{
          width: '100px',
          border: '4px solid blue',
          background: '#666699',
        }}
      >
        <h4
          style={{
            fontWeight: 'Poster',

            fontSize: '30px',
          }}
        >
          A1
        </h4>
      </div>
      <div
        style={{
          margin: '10px',
          width: '100px',

          border: '4px solid green',
          background: '#666699',
        }}
      >
        <h4
          style={{
            fontWeight: 'Poster',

            fontSize: '30px',
          }}
        >
          A2
        </h4>
      </div>
      <div
        style={{
          margin: '10px',
          width: '100px',

          border: '4px solid brown',
          background: '#666699',
        }}
      >
        <h4
          style={{
            fontWeight: 'Poster',

            fontSize: '30px',
          }}
        >
          A3
        </h4>
      </div>
    </div>
  );
};

export default CSS;
