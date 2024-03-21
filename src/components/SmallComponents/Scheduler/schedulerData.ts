import { DayProps } from "@aldabil/react-scheduler/views/Day";
import { MonthProps } from "@aldabil/react-scheduler/views/Month";
import { WeekProps } from "@aldabil/react-scheduler/views/Week";

export const MONTH: MonthProps = {
  weekDays: [2, 3, 4, 5, 6, 0, 1],
  weekStartOn: 6,
  startHour: 9,
  endHour: 21,
};

export const WEEK: WeekProps = {
  weekDays: [2, 3, 4, 5, 6, 0, 1],
  weekStartOn: 6,
  startHour: 9,
  endHour: 21,
  step: 60,
};

export const DAY: DayProps = {
  startHour: 9,
  endHour: 21,
  step: 60,
};
