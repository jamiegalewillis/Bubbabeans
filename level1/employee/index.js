var employees=[]


function Employee(name, Jobtitle, Salary ){
    this.name= name;
    this.Jobtitle = Jobtitle;
    this.Salary = Salary;
    this.status = "full-time"
}


var newEmployee1 = new Employee ("Carlos", "Supervisor", "$54,000","full-time")

var newEmployee2 = new Employee("Patricia", "Secretary", "$33,000","full-time")

var newEmployee3 = new Employee("Joeseph", "Operator", "$40,000", "contractor")
newEmployee3.status = "part time"
employees.push(newEmployee3)
employees.push(newEmployee2)
employees.push(newEmployee1)
console.log(employees)

function printEmployeeForm(){
    console.log(employees)
}
printEmployeeForm()