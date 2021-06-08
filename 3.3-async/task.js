"use strict"

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    // addClock - добавляет новый звонок в коллекцию существующих.
    addClock(time, callback, id) {

        if (id === undefined) {
            throw new Error('error text');
        }

        if (this.alarmCollection.find(element => element.id === id)) {
            console.error();
            return null        
        }

        this.alarmCollection.push({
            id: id,
            time: time,
            callback: callback(),
        });
    }

    removeClock(id) {
        this.alarmCollection = this.alarmCollection.filter((element) => element.id !== id);
        return this.alarmCollection.includes(id);
    }

    getCurrentFormattedTime() {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        return `${hours}:${minutes}`;
    }

    start() {
        let checkClock = (bell) => {
            if (bell.time === this.getCurrentFormattedTime()) {
                return bell.callback();
            };
        };

        if (!this.timerId) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(bell => checkClock(bell));
            }, 1000);
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
      this.alarmCollection.forEach(value => console.log(`Будильник № ${value.id}, заведён на ${value.time}`))     
    }

    clearAlarms() {
        clearInterval(this.timerId);
        this.alarmCollection.splice(0);
    }

}

/*
let clock;
clock = new AlarmClock();
clock.addClock("09:00", () => console.log("Пора вставать"), 1);
clock.addClock("09:01", () => { console.log("Давай, вставай уже!"); clock.removeClock(2)}, 2);
clock.addClock("09:01", () => console.log("Иди умываться!"));

clock.addClock("09:02", () => {
    console.log("Вставай, а то проспишь!");
    clock.clearAlarms();
    clock.printAlarms();
}, 3);

clock.addClock("09:05", () => console.log("Вставай, а то проспишь!"), 1); 

clock.printAlarms();

clock.start();
*/