import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
    currentFile: string = 'filename.csv';

    options: string[] = ['file1', 'file2', 'file3'];

    constructor() {}

    ngOnInit(): void {}

    onChange(selectedFile: string): void {}
}
