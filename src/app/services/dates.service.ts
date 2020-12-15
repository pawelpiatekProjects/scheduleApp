import {EventEmitter} from "@angular/core";

export interface Day {
  name: string;
  date: string;
  events: any[];
}

export function onGetDate(date: string, separator: string): Date {
  let dateArr;
  if(separator === '.') {
    dateArr = date.split(separator).map(el => parseInt(el));
  } else if (separator === '-') {
    dateArr = date.split(separator).map(el => parseInt(el)).reverse();
  }

  return  new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);
}

export class DatesService {

  daysName = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  constructor() { }

  setWeek(date: Date): Day[] {
    const daysArray: Day[] = [];
    const dayNumber = date.getDay();
    console.log('day number', dayNumber)

    const monday =  new Date(date);
    if(dayNumber !== 1) {
      monday.setDate(monday.getDate() - dayNumber + 1);
    }
    for(let i = 0; i <7 ; i++) {
      let currentDay = new Date(monday);
      const nextDay = new Date(currentDay);
      nextDay.setDate(nextDay.getDate() + i);
      daysArray.push({name: this.daysName[i], date:nextDay.toLocaleDateString(), events: []})
      currentDay = new Date(nextDay);
    }

    return daysArray;
  }







}
