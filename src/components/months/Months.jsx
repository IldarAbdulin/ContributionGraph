import React from 'react';
import { Box } from '@mui/material';
import moment from 'moment';

export const Months = ({ dateStart, month }) => {
  let date = moment(dateStart).add(month * 7, 'day');
  const nameMonth = date.format('MMM');
  return (
    <>
      <Box
        sx={{
          width: '10px',
          margin: '2px',
          color: '#959494',
          fontSize: '12px',
          fontWeight: 400,
        }}
        className={nameMonth}
      >
        {nameMonth}
      </Box>
    </>
  );
};
