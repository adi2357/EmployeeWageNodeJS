const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function getWorkingHours(employeeCheck) {
    switch(employeeCheck){
        case IS_PART_TIME :
            console.log("Employee is PRESENT.");
            return PART_TIME_HOURS;
        case IS_FULL_TIME :
            console.log("Employee is PRESENT.");
            return FULL_TIME_HOURS;
        default :
            console.log("Employee is ABSENT.");
            return 0;
    }
}

let employeeHours = 0;
let employeeCheck = Math.floor(Math.random() * 10) % 3;
employeeHours = getWorkingHours(employeeCheck);
let employeeWage = employeeHours * WAGE_PER_HOUR;
console.log("Employee Wage : Rs " + employeeWage);

