import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IData, IFile } from './Interfaces';
import { obj2 } from './mock-json';

@Injectable({
    providedIn: 'root',
})
export class FileService {
    private data: IData = {
        files: [],
        currentFile: 0,
    };

    constructor() {}

    getFile(): Observable<IFile> {
        const output = of(this.data.files[this.data.currentFile]);

        return output;
    }

    addFile(addData: IFile) {
        this.data.files.push(addData);

        this.data.currentFile = this.data.files.indexOf(addData);
    }

    getFileNames(): Observable<string[]> {
        const output = of(this.data.files.map((value) => value.name));

        return output;
    }

    selectFile(name: string) {
        this.data.files.forEach((value, index) => {
            console.log(value.name.trim());

            if (value.name.trim() === name.trim()) {
                console.log(
                    `INSIDE IF WITH ${value.name.trim()} AND ${name.trim()}`
                );

                this.data.currentFile = index;
                return;
            }
        });
        console.log(`COULDNT SELECT FILE ${name.trim()}`);
    }
}
