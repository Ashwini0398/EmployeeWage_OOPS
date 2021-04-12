
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOUR = 4;
    const FULL_TIME_HOUR = 8;
    const WAGE_PER_HOUR = 20;
    const WORKING_HOURS = 20;
    const MAX_HR_IN_MONTH = 160;
    const NUM_OF_WORKING_DAYS =20;
    let empHrs = 0;   
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    let empDailyWAgeArr = new Array();
    let dailyCntr = 0;
    let mapDayWithWageArr;
    
  class employee  {
      constructor(){}
    
        getWorkingHours =(empCheck)=>{     
           
           switch(empCheck)
            {
                case IS_PART_TIME:
                     empHrs = PART_TIME_HOUR;
                     break;
                
                case IS_FULL_TIME:
                     empHrs = FULL_TIME_HOUR;
                     break;
                 default:
                    empHrs = 0 ;
                    break;
            }
            return empCheck;
        }

        calDailyWage=(empHrs)=> {
            return empHrs * WAGE_PER_HOUR;
        }

      
        calDailyHRs(dailyHrs){
            let totalEmpHrs = 0;
                totalEmpHrs += dailyHrs;
                return totalEmpHrs;
        }

        mapDayWithWage(dailyWage){
            dailyCntr++;
            return dailyCntr + "=" + dailyWage;
        }

        calWages=() =>{
       
        while(totalEmpHrs <= MAX_HR_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
            totalWorkingDays++;
            let empCheck = Math.floor(Math.random()*10) % 3;
            totalEmpHrs = totalEmpHrs + this.getWorkingHours(empCheck);
            empDailyWAgeArr.push(this.calDailyWage(totalEmpHrs));

        }

        let empWage = this.calDailyWage(totalEmpHrs);
        console.log("Total Days: " + totalWorkingDays +" Employee Hours: " + totalEmpHrs +" Emp Wage: "+ empWage);4
    
        empDailyWAgeArr.forEach(this.calDailyHRs);
        console.log(`total working hours are: ${totalEmpHrs}`);

        let mapDayWithWageArr = empDailyWAgeArr.map(this.mapDayWithWage);
        console.log("Total emp wage " +mapDayWithWageArr);

        }
        
    }

const result = new employee().calWages();
