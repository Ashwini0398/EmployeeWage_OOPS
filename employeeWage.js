console.log("Welcome to employee wage problem");

let IS_FULL_TIME = 1;
let IS_PART_TIME = 2;

let Emp_Rate_Per_Hr = 20;
let IS_ABSENT = 0;
let empHrs = 0;
let empWage = 0;
let empCheck = Math.floor(Math.random() * 10 ) % 3;

class Employee{

    constructor(){}
     attendance(){
            if(empCheck == IS_ABSENT)
            {
                console.log("UC1-Employee is ABSENT");
    
            }
            else{
                console.log("UC1-Employee is PRESENT");
             }
            return empCheck;
        }
    
        dailywages(){
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
            return empCheck;
        }

        calculateWage(){
            empWage = empHrs * Emp_Rate_Per_Hr;
            return empWage;
        }
}

let employee = new Employee().dailywages();
let result = new Employee().calculateWage();
console.log(`Employee Wages are ${result}`);
