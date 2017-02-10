import {Component} from 'angular2/core'
import {EmployeeService} from './employee.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
    selector: 'floors',
    styleUrls: ['app/styles.css'],
    templateUrl: 'app/templates/floor.template.html',
    providers: [EmployeeService],
    directives: [AutoGrowDirective]
})

export class FloorsComponent
{
    backgroundImg: string = "https://s-media-cache-ak0.pinimg.com/originals/86/71/9f/86719f83b01c5e253426be7078658c1a.jpg";
    employees;

    onFaceClick(event) {
        console.log(event.target.dataset.id);
    }

    constructor(employeeService: EmployeeService)
    {
        this.employees = employeeService.getEmployee();
    }
}