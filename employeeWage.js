console.log("Welcome to employee wage problem");

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
}

let result = new Employee().attendance();
console.log(result);