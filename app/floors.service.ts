import { Injectable } from 'angular2/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response, HTTP_PROVIDERS } from 'angular2/http';

import 'rxjs/add/operator/map';

@Injectable()
export class FloorsService
{
    private employeeUrl = 'http://localhost:50605/api/floor';

    constructor (private http: Http) {}

    getFloors() : Observable<Floor[]>
    {
        return this.http.get(this.employeeUrl)
                        .map(this.mapData);
    }

    private mapData(res: Response)
    {
        let floors = res.json().map(x => new Floor(x));

        return floors || { };
    }
}

export class Floor
{
    constructor(num: number)
    {
        this.Number = num;
    }

    Number: number;
}