"use strict";
console.log(" DATE OBJECT ".padStart(23, "#").padEnd(35, "#"));

const today = new Date();

console.log(today);
console.log("Date", today.getDate()); //24
console.log("Day", today.getDay()); // 0-6
console.log("Month", today.getMonth()); // 0-11
console.log("Year", today.getFullYear()); // 2026
console.log("Year", today.getUTCFullYear()); //
console.log("Hour", today.getHours()); // 5(17)
console.log("Minute", today.getMinutes());
console.log("Second", today.getSeconds());
console.log("Millisecond", today.getMilliseconds());
// console.log(today.getTime());

console.log(new Date("02 12 1991")); // month date year
console.log(new Date("02/12/1991 05:45"));

console.log(" STATIC METHODs ".padStart(23, "#").padEnd(30, "#"));
console.log(Date.now());
console.log(Date.parse("1970-01-01T00:00:00Z"));
console.log(Date.UTC());

console.log(new Date(today.setMonth(4)));
console.log(Date.now());
console.log(new Date(today.setMonth(4)).getTime());

console.log(today.toISOString());

console.log(new Date(new Date().getTime()).toISOString());
