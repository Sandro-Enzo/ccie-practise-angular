import { Component } from '@angular/core';
import { IFile } from './Interfaces';
import { obj } from './mock-json';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    data: IFile = obj;
}
