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
    backgroundImg: string;
    employees = [];
    floors = [];

    selectedFloor: Floor = new Floor(9);

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

    constructor(employeeService: EmployeeService, floorsService: FloorsService)
    {
        floorsService
            .getFloors()
            .subscribe(x => this.floors = x);

        employeeService
            .getEmployee(this.selectedFloor.Number)
            .subscribe(x => {
                this.employees = x.Employees;
                this.backgroundImg = x.Map;
            });
    }
}