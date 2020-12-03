
export interface Day {
  name: string;
  date: string;
}
export class DatesService {

  daysName = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  constructor() { }

  setWeek(date: Date): Day[] {
    const daysArray: Day[] = [];
    const dayNumber = date.getDay();
    console.log('day number', dayNumber)
    const today = new Date()
    const monday =  new Date(today);
    if(dayNumber !== 1) {
      monday.setDate(monday.getDate() - dayNumber + 1);
    }
    for(let i = 0; i <7 ; i++) {
      let currentDay = new Date(monday);
      const nextDay = new Date(currentDay);
      nextDay.setDate(nextDay.getDate() + i);
      daysArray.push({name: this.daysName[i], date:nextDay.toLocaleDateString()})
      currentDay = new Date(nextDay);
    }

    return daysArray;
  }
}
