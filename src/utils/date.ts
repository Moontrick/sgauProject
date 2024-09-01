import {eachDayOfInterval, format, setHours, setMilliseconds, setMinutes, setSeconds} from 'date-fns';

export enum FormatDate {
  DAY_MONTH_YEAR = 'dd.MM.yyyy',
  DAY_MONTH_YEAR_TIME = 'dd.MM.yyyy HH:mm',
  DAY_MONTH_YEAR_FULL_TIME = 'dd.MM.yyyy HH:mm:ss',
  YEAR_MONTH = 'yyyy-MM',
  YEAR_MONTH_DAY = 'yyyy-MM-dd',
  YEAR_MONTH_DAY_TIME = 'yyyy-MM-dd HH:mm',
  YEAR = 'yyyy',
  TIME = 'HH:mm',
  WEEKDAY = 'eeee',
  COUNTER = 'HH:mm:ss',
  MONTH_YEAR = 'MM.yyyy',
}

export const TIME_ZONE_MOSCOW = 'Europe/Moscow';

export const renderDateTime = (dateTime: string | null) => {
  let result = '';
  try {
    if (dateTime) {
      result = formatDateToDateTime(new Date(dateTime));
    }
  } catch (error) {
    return result;
  }
  return result;
};

export const formatDateToYMD = (date?: Date) => {
  if (!date) return '';
  return format(date, FormatDate.YEAR_MONTH_DAY);
};

export const formatDateToYear = (date?: Date) => {
  if (!date) return '';
  return format(date, FormatDate.YEAR);
};

export const dateRange = (dateFrom: Date, dateTo: Date): string[] => {
  return eachDayOfInterval({
    start: dateFrom,
    end: dateTo,
  }).map((d) => formatDateToYMD(d));
};

export const formatRequestTime = (date: Date) => {
  let result = '';
  try {
    result = format(date, FormatDate.TIME);
  } catch (error) {
    return result;
  }
  return result;
};

export const formatDateToDateFullTime = (date: Date): string => format(date, FormatDate.DAY_MONTH_YEAR_FULL_TIME);

export const formatDateToDateTime = (date: Date): string => format(date, FormatDate.DAY_MONTH_YEAR_TIME);

export const formatDateToDayMonthYear = (date?: Date) => (date ? format(date, FormatDate.DAY_MONTH_YEAR) : '');

export const formatDateToWeekday = (date: Date) => format(date, FormatDate.WEEKDAY);

export const formatDateToMonthYear = (date?: Date) => (date ? format(date, FormatDate.MONTH_YEAR) : '');

export const formatDateToYearMonth = (date: Date) => format(date, FormatDate.YEAR_MONTH);

export const formatDateToYearMonthDayTime = (date: Date) => format(date, FormatDate.YEAR_MONTH_DAY_TIME);

export const formatDateToStartDayTime = (date?: Date): Date | null => {
  return date ? setSeconds(setMinutes(setHours(date, 0), 0), 0) : null;
};

export const formatDateToEndDayTime = (date?: Date): Date | null => {
  return date ? setMilliseconds(setSeconds(setMinutes(setHours(date, 23), 59), 59), 999) : null;
};
