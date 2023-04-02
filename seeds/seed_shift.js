/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

//tools
const moment = require('moment');
const uuid = require('uuid');

//schedule variables
const schedule = [];
const startDate = moment('2023-04-01');
const endDate = moment('2023-08-01');
const recurringInterval = 9; //days

//day shift
const dayStartTime = moment('07:30', 'HH:mm');
const dayEndTime = moment(dayStartTime).clone().add(12, 'hours');

//night shift
const nightStartTime = moment('19:30', 'HH:mm');
const nightEndTime = moment(nightStartTime).clone().add(12, 'hours');

function createShiftBlock(startDate, dayStartTime, dayEndTime, nightStartTime, nightEndTime, line, employee = []) {
  const day1 = {
    id: uuid.v4(),
    description: `${line} Day Shift #1`,
    start_time: dayStartTime.format('HH:mm'),
    end_time: dayEndTime.format('HH:mm'),
    start_date: startDate.format('MMM-DD-YYYY'),
    employees: employee
  };
  const day2 = {
    id: uuid.v4(),
    description: `${line} Day Shift #2`,
    start_time: dayStartTime.format('HH:mm'),
    end_time: dayEndTime.format('HH:mm'),
    start_date: startDate.clone().add(1, 'days').format('MMM-DD-YYYY'),
    employees: employee

  };
  const night1 = {
    id: uuid.v4(),
    description: `${line} Night Shift #1`,
    start_time: nightStartTime.format('HH:mm'),
    end_time: nightEndTime.format('HH:mm'),
    start_date: startDate.clone().add(2, 'days').format('MMM-DD-YYYY'),
    employees: employee

  };
  const night2 = {
    id: uuid.v4(),
    description: `${line} Night Shift #2`,
    start_time: nightStartTime.format('HH:mm'),
    end_time: nightEndTime.format('HH:mm'),
    start_date: startDate.clone().add(3, 'days').format('MMM-DD-YYYY'),
    employees: employee

  };
  return [day1, day2, night1, night2];
}

for (let date = startDate; date < endDate; date.add(recurringInterval, 'days')) {
  const pinkBlock = createShiftBlock(date, dayStartTime, dayEndTime, nightStartTime, nightEndTime, 'Pink', employee = [
    '😃'
    // '0201cf73-8a86-4358-b232-2abaa23f09af',
    // '0a81c4f9-b80d-45a7-a4fd-9191453815a1',
    // '1cd6dc64-01a9-4379-9cfd-1a7167ba1bb1',
    // '3569d265-bd27-44d8-88e8-82fb0a848374',
    // '36bfefd0-e0bb-4d11-be98-d1ef6117a77a',
    // '3db6dc51-b461-4fa4-a6e4-b1ff352221c5',
  ]);
  schedule.push(...pinkBlock);
}

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return knex('shift')
    .del()
    //then add these ones
    .then(() => {
      return knex('shift').insert(
        schedule)
    })
};
