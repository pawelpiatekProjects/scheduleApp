export class Event {

  constructor(private name, private date, private hour) {}

  get getName() {
    return this.name;
  }

  get getDate() {
    return this.date;
  }

  get getHour() {
    return this.hour;
  }
}
