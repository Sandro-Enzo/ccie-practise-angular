import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import convert from '../csvToJson';
import { FileService } from '../file.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
    @Input() renderSettings: boolean = false;
    @Output() renderSettingsChange = new EventEmitter<boolean>();
    @Output() updateFiles = new EventEmitter();

    fileNames: string[] = [];

    constructor(private fileService: FileService) {
        fileService.getFileNames().subscribe((value) => {
            this.fileNames = value;
        });
    }

    ngOnInit(): void {}

    toggleSettings() {
        this.renderSettings = !this.renderSettings;
        this.renderSettingsChange.emit(this.renderSettings);
    }

    async newFile(event: Event) {
        let fileData = await (
            (event.target as HTMLInputElement).files as FileList
        )[0].text();

        let title = ((event.target as HTMLInputElement).files as FileList)[0]
            .name;

        let fileJson = convert(fileData, title);

        this.fileService.addFile(fileJson);

        this.updateFiles.emit();

        this.fileService.getFileNames().subscribe((value) => {
            this.fileNames = value;
        });

        console.log(this.fileNames);
    }

    selectFile(ev: Event) {
        console.log(ev.target);
    }
}
