import {Component, Input, Output, EventEmitter}          from 'angular2/core'
import {EmployeeService}        from './employee.service'
import {AutoGrowDirective}      from './auto-grow.directive'
import {HTTP_PROVIDERS}         from 'angular2/http';
import {FloorsService, Floor}   from './floors.service'
import {Observable}             from 'rxjs/Observable';


@Component({
    selector: 'floors',
    styleUrls: ['app/styles.css'],
    templateUrl: 'app/templates/floor.template.html',
    providers: [EmployeeService, FloorsService, HTTP_PROVIDERS],
    directives: [AutoGrowDirective]
})

export class FloorsComponent
{
    private employeeService;
    private backgroundImg: string;
    private employees = [];
    private floors = [];

    onFaceClick(o) {
        this.closeEmployeesCard();
        this.employees.filter(e => e.Id === o.Id)[0].Opened = true;
        console.log(o);
    }

    closeEmployeeCard(o) {
        this.employees.filter(e => e.Id === o.Id)[0].Opened = false;
    }

    closeEmployeesCard() {
        this.employees.forEach(e => e.Opened = false);
    }

    onFloorChange(floor) {
        this.getEmployees(floor);
    }   

    search(query:string){
        console.log(query);
        // var a = this.employees.filter(e => e.Name.toLowerCase().search(query) > 0);
        var a = this.employees.filter(e => e.Name.toLowerCase().indexOf(query) >= 0);
        console.log(a);        
    }

    private getEmployees(floor:number) {
        this.employeeService
            .getEmployee(floor)
            .subscribe(x => {
                this.employees = x.Employees;
                this.backgroundImg = x.Map;
            });
    }

    constructor(employeeService: EmployeeService, floorsService: FloorsService)
    {
        this.employeeService = employeeService;

        floorsService
            .getFloors()
            .subscribe(x => {
                this.floors = x;
                this.getEmployees(this.floors[0].Number);
            });
    }
}