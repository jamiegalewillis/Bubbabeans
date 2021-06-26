var employees=['']
console.log(employees)

function Employee(name, Jobtitle, Salary, jobStatus ){
    this.name= name;
    this.Jobtitle = Jobtitle;
    this.Salary = Salary;
    this.jobstatus =jobStatus
    this.Status = function(){
        console.log(this.jobstatus)
    }

}
var newEmployee1 = new Employee ("Carlos", "Supervisor", "$54,000","full-time")
console.log (newEmployee1)
var newEmployee2 = new Employee("Patricia", "Secretary", "$33,000","full-time")
console.log (newEmployee2)
var newEmployee3 = new Employee("Joeseph", "Operator", "$40,000", "contractor")
console.log (newEmployee3)
