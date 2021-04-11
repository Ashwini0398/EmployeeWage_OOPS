console.log("Welcome to employee wage ");

let IS_FULL_TIME = 1;
let IS_PART_TIME = 2;
let Emp_Rate_Per_Hr = 20;
let IS_ABSENT = 0;
let empHrs = 0;
let totalempWage = 0;
let Working_Day_Per_Hour = 20;
let Max_Hr_in_month = 100;
let Num_of_working_days = 10


class Employee{

    constructor(){}

    getWorking(){
        let totalEmpHRs= 0;
        let totalWorkingDays = 0;
        while(totalEmpHRs <= Max_Hr_in_month && totalWorkingDays< Num_of_working_days ){
            totalWorkingDays++;
        
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
            totalWorkingDays += empHrs;
           
        }
        totalempWage = empHrs * Emp_Rate_Per_Hr;
        console.log(`Total Days: ${totalWorkingDays} employee Hours ${empHrs} employee Wage ${totalempWage}`);

        }
}   

let result = new Employee().getWorking();

