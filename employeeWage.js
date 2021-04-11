console.log("Welcome to employee wage problem");

let IS_FULL_TIME = 1;
let Emp_Rate_Per_Hr = 20;
let IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10 ) % 2;

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
    
        dailyWage(){
            let empHrs = 0;
            let empWage = 0;
            if(empCheck == IS_FULL_TIME)
            {
                empHrs = 8;
            }
            else{
                empHrs = 0;
            }
            empWage = empHrs * Emp_Rate_Per_Hr;
            console.log(`Daily emplyee wages are : ${empWage}`);
        }
}

let result = new Employee().dailyWage();
