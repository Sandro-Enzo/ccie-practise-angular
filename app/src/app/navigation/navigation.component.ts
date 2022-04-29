import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
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
    @Output() selectNewFile = new EventEmitter<string>();

    // @ViewChild('container') container!: ElementRef<HTMLDivElement>;
    @ViewChild('fileSelect') select!: ElementRef<HTMLSelectElement>;

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

        // Switch this to somewhere where it works
        this.select.nativeElement.selectedIndex =
            this.select.nativeElement.querySelectorAll('option').length;
    }

    selectFile(ev: Event) {
        const select = ev.target as HTMLSelectElement;
        const selectedIndex = select.selectedIndex;
        const selectedFileName =
            select.querySelectorAll('option')[selectedIndex].innerText;

        console.log(`innertext = ${selectedFileName}`);

        this.selectNewFile.emit(selectedFileName);
    }
}
