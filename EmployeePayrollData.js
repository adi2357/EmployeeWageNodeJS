class EmployeePayrollData{

    id;
    salary;

    constructor(id,name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    get name(){
        return this._name;
    }
    set name(name){
        console.log("Setting Name as : " + name);
        this._name = name;
    }

    toString() {
        return "id: " + this.id + ", name: " + this.name + ", salary: " + this.salary + "\n";
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 50000);
console.log(employeePayrollData.toString());

employeePayrollData.id = 0;
employeePayrollData.name = "Jeff";
console.log(employeePayrollData.toString());


