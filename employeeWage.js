console.log("Welcome to employee wage problem");

let IS_FULL_TIME = 1;
let IS_PART_TIME = 2;

let Emp_Rate_Per_Hr = 20;
let IS_ABSENT = 0;
let empHrs = 0;
let empWage = 0;
let Working_Day_Per_Hour = 20;


class Employee{

    constructor(){}

    monthlyWages(){
        for(let day=0 ; day< Working_Day_Per_Hour; day++){
            let empCheck = Math.floor(Math.random() * 3);
            switch(empCheck){
            case IS_FULL_TIME:
                empHrs = 8;
                break;

            case IS_PART_TIME:
                empHrs = 4;
                break;

            default:
                empHrs = 0;
                break;
            } 
        empWage = empHrs * Emp_Rate_Per_Hr;
        let monthlyWage =+ empWage;
        return monthlyWage;
        }
    }   
}

let result = new Employee().monthlyWages();

console.log(`monthly Wages ${result}`);
