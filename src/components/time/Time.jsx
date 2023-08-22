import React from 'react';
import moment from 'moment';
import { Box, Typography } from '@mui/material';
import { Week } from '../week/Week';
import { Months } from '../months/Months';
import { Square } from '../square/Square';
import db from '../../db/CG.json';

const weekDays = {
  0: 'Пн',
  2: 'Ср',
  4: 'Пт',
};

export const Time = () => {
  const date = [moment().add(-365, 'days'), moment()];
  const totalDays = Math.abs(date[0].diff(date[1], 'days'));
  const arrOfSquares = Array.from(new Array(totalDays + 1));
  const arrOfWeeks = Array.from(new Array(7));
  const arrOfMonths = Array.from(new Array(Math.floor(totalDays / 7)));
  const dateStart = date[0];
  const dataArr = Object.entries(db);
  const data = dataArr.map((val) => {
    return {
      date: val[0],
      value: val[1],
    };
  });
  const max = Math.max(...data.map((d) => d.value));
  const min = Math.min(0, ...data.map((d) => d.value));
  const color = 2 / (max - min);
  return (
    <Box sx={{ mt: 5 }}>
      <Box sx={{ display: 'flex', paddingLeft: '20px', mb: '7px' }}>
        {arrOfMonths.map((_, index) => (
          <Months key={index} month={index} dateStart={dateStart} />
        ))}
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Box
          sx={{
            display: 'inline-flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {arrOfWeeks.map((_, index) => (
            <Week key={index} week={weekDays[index]} dateStart={dateStart} />
          ))}
        </Box>
        <Box
          sx={{
            display: 'inline-flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            height: '136px',
          }}
        >
          {arrOfSquares.map((_, index) => {
            const date = moment(dateStart).add(index, 'day');
            const dayToDay = `${date.format('MMM')}, ${date.format(
              'dddd'
            )} ${date.format('D')}, ${date.format('Y')}`;
            const result = data.find(
              (d) =>
                moment(date).format('DDMMYYYY') ===
                moment(d.date).format('DDMMYYYY')
            );
            const colorV = color * result?.value;
            return (
              <Square
                key={index}
                square={index}
                date={dayToDay}
                colorV={colorV}
                contributions={result?.value ? result?.value : `No`}
              />
            );
          })}
        </Box>
      </Box>
      <Box sx={{ mt: '10px', display: 'flex', alignItems: 'center' }}>
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: 400,
            color: '#959494',
            ml: '21px',
            mr: '5px',
          }}
        >
          Меньше
        </Typography>
        <Square contributions={`No`} />
        <Square colorV={0.10256410256410256} contributions={`1-9`} />
        <Square colorV={0.3692307692307693} contributions={`10-19`} />
        <Square colorV={0.7692307692307693} contributions={`20-29`} />
        <Square colorV={2} contributions={`30+`} />
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: 400,
            color: '#959494',
            ml: '5px',
          }}
        >
          Больше
        </Typography>
      </Box>
    </Box>
  );
};
