console.log("Welcome to employee wage problem");

let IS_FULL_TIME = 1;
let IS_PART_TIME = 2;
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
    
        calculateWage(){
            let empHrs = 0;
            let empWage = 0;
            if(empCheck == IS_PART_TIME)
            {
                empHrs = 8;
            }
            else if (empCheck == IS_FULL_TIME) {
                empHrs = 4;
                
            } else {
                
                empHrs = 0;
            }
            empWage = empHrs * Emp_Rate_Per_Hr;
            console.log(`Employee wages are : ${empWage}`);
        }
}

let result = new Employee().calculateWage();
