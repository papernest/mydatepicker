import { IMyDate } from "../interfaces/my-date.interface";
import { IMyDateRange } from "../interfaces/my-date-range.interface";
import { IMyMonth } from "../interfaces/my-month.interface";
import { IMyMonthLabels } from "../interfaces/my-month-labels.interface";
import { IMyMarkedDates } from "../interfaces/my-marked-dates.interface";
import { IMyMarkedDate } from "../interfaces/my-marked-date.interface";
import { IMyDateFormat } from "../interfaces/my-date-format.interface";
export declare class UtilService {
    weekDays: Array<string>;
    isDateValid(dateStr: string, dateFormat: string, minYear: number, maxYear: number, disableUntil: IMyDate, disableSince: IMyDate, disableWeekends: boolean, disableWeekDays: Array<string>, disableDays: Array<IMyDate>, disableDateRanges: Array<IMyDateRange>, monthLabels: IMyMonthLabels, enableDays: Array<IMyDate>): IMyDate;
    getDateValue(dateStr: string, dateFormat: string, delimeters: Array<string>): Array<IMyDateFormat>;
    getMonthNumberByMonthName(df: IMyDateFormat, monthLabels: IMyMonthLabels): number;
    getNumberByValue(df: IMyDateFormat): number;
    getDateFormatDelimeters(dateFormat: string): Array<string>;
    parseDefaultMonth(monthString: string): IMyMonth;
    formatDate(date: IMyDate, dateFormat: string, monthLabels: IMyMonthLabels): string;
    preZero(val: number): string;
    isDisabledDay(date: IMyDate, minYear: number, maxYear: number, disableUntil: IMyDate, disableSince: IMyDate, disableWeekends: boolean, disableWeekDays: Array<string>, disableDays: Array<IMyDate>, disableDateRanges: Array<IMyDateRange>, enableDays: Array<IMyDate>): boolean;
    isMarkedDate(date: IMyDate, markedDates: Array<IMyMarkedDates>, markWeekends: IMyMarkedDate): IMyMarkedDate;
    isHighlightedDate(date: IMyDate, sunHighlight: boolean, satHighlight: boolean, highlightDates: Array<IMyDate>): boolean;
    getWeekNumber(date: IMyDate): number;
    isMonthDisabledByDisableUntil(date: IMyDate, disableUntil: IMyDate): boolean;
    isMonthDisabledByDisableSince(date: IMyDate, disableSince: IMyDate): boolean;
    isInitializedDate(date: IMyDate): boolean;
    isSameDate(d1: IMyDate, d2: IMyDate): boolean;
    getTimeInMilliseconds(date: IMyDate): number;
    getDayNumber(date: IMyDate): number;
    getWeekDays(): Array<string>;
    getWeekdayIndex(wd: string): number;
}
