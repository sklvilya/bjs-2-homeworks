// тут вы можете вызывать функции из task.js

let phoneAlarm = new AlarmClock();

phoneAlarm.addClock("15:37", () => console.log("Пора вставать!"), 1);

phoneAlarm.addClock("09:01", () => console.log("Давай, вставай уже!"), 2);

phoneAlarm.addClock("09:03", () => console.log("Иди умываться"), 4);

phoneAlarm.addClock("09:02", () => {
    console.log("Вставай, а то проспишь");

    phoneAlarm.printAlarms()
}, 3);

phoneAlarm.addClock("09:05", () => {
    console.log("Вставай, а то проспишь");
    phoneAlarm.printAlarms();
    phoneAlarm.stop();
    phoneAlarm.removeClock();
    phoneAlarm.start()
}, 9);