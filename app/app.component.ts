/**
 * Created by Namita Malik on 4/5/16.
 */

import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>Enter To Do Items Below:</h2>
    <input (keyup.enter)="onKey(todo)" #todo>
    <div *ngIf="toDoList.length>0">
        <p>Your To Do Items:</p>
    </div>
    <div style="padding: 10px 0 0 0">
    <table width="300" border="1" cellpadding="5" style="text-align: center">
        <tr>
            <th>Index</th>
            <th>To Do Item</th>
        </tr>
        <tr *ngFor="let toDo of toDoList, let i=index, let last=last, let odd=odd, let even=even"  [ngClass]="{'odd-color':odd, 'even-color':even, 'last-color' : last }">
            <td>{{i}}</td>
            <td>{{toDo}}</td>
        </tr>
    </table>
    </div>
    `
})

export class AppComponent {
    toDo = {
        item: ''
    };
    title = 'My To Do List';
    toDoList = [];

    onKey(todo) {
        this.toDoList.push(todo.value);
        todo.value = '';
    }
}