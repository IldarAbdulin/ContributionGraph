import React from 'react';
import { Box } from '@mui/material';

export const Square = ({ colorV, contributions, date }) => {
  return (
    <>
      <Box
        className="square"
        sx={{
          margin: '2px',
          height: '15px',
          width: '15px',
          backgroundColor: colorV ? `rgba(0, 106, 200, ${colorV})` : '#EDEDED',
          cursor: 'pointer',
          ':hover': {
            border: '1px solid #00000080',
            margin: '1px',
          },
        }}
      >
        <Box className={date ? 'square-info-small' : 'square-info'}>
          <p
            style={{ color: '#EDEDED', letterSpacing: '1px', fontSize: '12px' }}
          >
            {contributions} contributions
          </p>
          {date && <p style={{ color: '#7C7C7C' }}>{date}</p>}
        </Box>
      </Box>
    </>
  );
};
