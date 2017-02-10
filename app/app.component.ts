import {Component} from 'angular2/core';
import {FloorsComponent} from './floors.component'
import {AuthorsComponent} from './authors.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>Floors plan</h1>
        <floors></floors>
        <authors></authors>
        `,
    directives: [FloorsComponent, AuthorsComponent]
})
export class AppComponent { }