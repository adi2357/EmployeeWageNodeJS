const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const TOTAL_MONTHLY_WORKING_DAYS = 20;
const TOTAL_MONTHLY_WORKING_HOURS = 160;

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
let totalWorkingDays = 0;
while(totalEmployeeHours <= TOTAL_MONTHLY_WORKING_HOURS && 
      totalWorkingDays <= TOTAL_MONTHLY_WORKING_DAYS) {
    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    totalEmployeeHours += getWorkingHours(employeeCheck);
    totalWorkingDays++;
}

let totalEmployeeWage = totalEmployeeHours * WAGE_PER_HOUR;
console.log("Total Days : " + (totalWorkingDays-1) + "\t" 
          + "Total Working Hours : " 
          + (totalEmployeeHours > 160 ? 160 : totalEmployeeHours));
console.log("Monthly Employee Wage : Rs " + totalEmployeeWage);

