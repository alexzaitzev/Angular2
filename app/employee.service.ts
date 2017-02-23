import { Injectable } from 'angular2/core';
import { Http, Headers, Response, HTTP_PROVIDERS } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class EmployeeService
{
    private employeeUrl = 'http://localhost:50605/api/employee/';

    constructor (private http: Http) {}

    getEmployee(floor: number) : Observable<Employees>
    {
        return this.http.get(`${this.employeeUrl}${floor}`)
                        .map(this.mapData);
    }

    private mapData(res: Response)
    {
        let people = new Employees(res.json());

        return people || { };
    }
}

export class Employees
{
    constructor(o)
    {
        this.Number = o.number;
        this.Map = o.scheme;
        o.employees.forEach(e => this.Employees.push(new Employee(e)));
    }
    
    Number: number;
    Map: string;
    Employees: Employee[] = [];
}

export class Employee
{
    constructor(o)
    {
        this.Id = o.id;
        this.Name = o.name;
        this.Role = o.role;
        this.Email = o.email;
        this.Photo = o.photo;
        this.Location = new Coordinates(o.location);
        o.socials.forEach(x => this.Socials.push(new Social(x)));
        this.Opened = false;
    }

    Id: number;
    Name: number;
    Email: string;
    Role: string;
    Photo: string;
    Location: Coordinates;
    Socials: Social[] = [];

    Opened: boolean;
}

export class Social
{
    constructor(o)
    {
        this.Name = o.name;
        this.Link = o.link;
    }

    Name: string;
    Link: string;
}

export class Coordinates
{
    constructor(o)
    {
        this.X = o.x;
        this.Y = o.y;
    }

    X: number;
    Y: number;
}