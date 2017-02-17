import { Injectable } from 'angular2/core';
import { Http, Response, HTTP_PROVIDERS } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeeService
{
    private employeeUrl = 'https://virtserver.swaggerhub.com/alexzaitzev/stages/1.0.2/floors/10';

    constructor (private http: Http) {}

    getEmployee() : Observable<Employee[]>
    {
        return this.http.get(this.employeeUrl)
                        .map(this.mapData);

        // return [
        //     {
        //         Id: 1,
        //         Photo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTWQd6S3Ua282NvPgUIiY_xuI49vjw1wsnEhxbl8OWUanJ4gbg8",
        //         Location: { X: 344, Y: 197}
        //     },
        //     {
        //         Id: 2,
        //         Photo: "https://blog.interviewmocha.com/wp-content/uploads/2016/01/Scott-Hanselman-150x150.jpeg",
        //         Location: { X: 479, Y: 197}
        //     },
        //     {
        //         Id: 3,
        //         Photo: "https://pbs.twimg.com/profile_images/378800000550413574/1bda93983b282cc4572e4ae7f1fae3f4_400x400.jpeg",
        //         Location: { X: 623, Y: 197}
        //     }
        // ];
    }

    private mapData(res: Response) {
        let people = res.json().employees.map(x => new Employee(x));

        return people || { };
    }
}

export class Employee
{
    constructor(o) {
        this.Id = o.id;
        this.Photo = o.photo;
        this.Location = o.location;
        this.Opened = false;
    }

    Id: number;
    Photo: string;
    Location: Coordinates;
    Opened: boolean;
}

export class Coordinates
{
    X: number;
    Y: number;
}