import React from 'react';
import { Box } from '@mui/material';

export const Week = ({ week }) => {
  return (
    <Box
      sx={{
        fontSize: '12px',
        fontWeight: 400,
        height: '12px',
        margin: '2px',
        color: '#959494',
      }}
    >
      {week}
    </Box>
  );
};
