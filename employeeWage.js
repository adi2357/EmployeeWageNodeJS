const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const TOTAL_MONTHLY_WORKING_DAYS = 20;

function getWorkingHours(employeeCheck) {
    switch(employeeCheck){
        case IS_PART_TIME :
            return PART_TIME_HOURS;
        case IS_FULL_TIME :
            return FULL_TIME_HOURS;
        default :
            return 0;
    }
}

let totalEmployeeHours = 0;
for(let day = 0; day < TOTAL_MONTHLY_WORKING_DAYS; day++){
    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    totalEmployeeHours += getWorkingHours(employeeCheck);
}

let totalEmployeeWage = totalEmployeeHours * WAGE_PER_HOUR;
console.log("Monthly Employee Wage : Rs " + totalEmployeeWage);

