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

function createShiftBlock(startDate, dayStartTime, dayEndTime, nightStartTime, nightEndTime, line, employee_id) {
  const day1 = {
    id: uuid.v4(),
    description: `${line} Day Shift #1`,
    start_time: dayStartTime.format('HH:mm'),
    end_time: dayEndTime.format('HH:mm'),
    start_date: startDate.format('MMM-DD-YYYY'),
    employee_id
  };
  const day2 = {
    id: uuid.v4(),
    description: `${line} Day Shift #2`,
    start_time: dayStartTime.format('HH:mm'),
    end_time: dayEndTime.format('HH:mm'),
    start_date: startDate.clone().add(1, 'days').format('MMM-DD-YYYY'),
    employee_id

  };
  const night1 = {
    id: uuid.v4(),
    description: `${line} Night Shift #1`,
    start_time: nightStartTime.format('HH:mm'),
    end_time: nightEndTime.format('HH:mm'),
    start_date: startDate.clone().add(2, 'days').format('MMM-DD-YYYY'),
    employee_id

  };
  const night2 = {
    id: uuid.v4(),
    description: `${line} Night Shift #2`,
    start_time: nightStartTime.format('HH:mm'),
    end_time: nightEndTime.format('HH:mm'),
    start_date: startDate.clone().add(3, 'days').format('MMM-DD-YYYY'),
    employee_id

  };
  return [day1, day2, night1, night2];
}

for (let date = startDate; date < endDate; date.add(recurringInterval, 'days')) {
  const pinkBlock = createShiftBlock(date, dayStartTime, dayEndTime, nightStartTime, nightEndTime, 'Pink', '0201cf73-8a86-4358-b232-2abaa23f09af')
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
