// Factory design patern
function Employee() {
    this.name = '';
    this.type = '';
}

function Developer(name) { this.name = name; this.type = 'developer'; }
Developer.prototype = new Employee();

function Tester(name) { this.name = name; this.type = 'tester'; }
Tester.prototype = new Employee();

function Other(name) { this.name = name; this.type = 'housekeeper'; }
Other.prototype = new Employee();

function EmployeeFactory() {
    this.createEmployee= function(name, type) {
        switch(type) {
            case 1:
                return new Developer(name);
                break;
            case 2:
                return new Tester(name);
                break;
            default:
                return new Other(name);
                break;
        }
    }
}

function tester(t) {
    let employees= [];
    let f = new EmployeeFactory();
    employees.push(f.createEmployee('James', 1));
    employees.push(f.createEmployee('David', 1));
    employees.push(f.createEmployee('Waynee', 1));
    employees.push(f.createEmployee('Cathy', 2));
    employees.push(f.createEmployee('Make', 2));
    employees.push(f.createEmployee('Jenny', 2));
    employees.push(f.createEmployee('Tom', 0));
    employees.push(f.createEmployee('Tonny', 0));
    employees.forEach((e)=>{
       t.call(e,'');
    })
}

module.exports = {
    FactoryDesignPaternTester: tester
}
