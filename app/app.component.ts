import {Component} from 'angular2/core';
import {FloorsComponent} from './floors.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>SDV workplaces</h1>
        <floors></floors>
        `,
    directives: [FloorsComponent]
})
export class AppComponent { }