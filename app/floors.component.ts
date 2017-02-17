import {Component}          from 'angular2/core'
import {EmployeeService}    from './employee.service'
import {AutoGrowDirective}  from './auto-grow.directive'
import {HTTP_PROVIDERS}     from 'angular2/http';

@Component({
    selector: 'floors',
    styleUrls: ['app/styles.css'],
    templateUrl: 'app/templates/floor.template.html',
    providers: [EmployeeService, HTTP_PROVIDERS],
    directives: [AutoGrowDirective]
})

export class FloorsComponent
{
    backgroundImg: string = "https://s-media-cache-ak0.pinimg.com/originals/86/71/9f/86719f83b01c5e253426be7078658c1a.jpg";
    employees = [];
    errorMessage;

    onFaceClick(o) {
        this.employees.filter(e => e.Id === o.Id)[0].Opened = !o.Opened;
        console.log(o);
    }

    constructor(employeeService: EmployeeService)
    {
        employeeService
            .getEmployee()
            .subscribe(x => this.employees = x);
    }
}