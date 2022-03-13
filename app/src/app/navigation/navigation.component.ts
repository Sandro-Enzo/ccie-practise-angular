import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import convert from '../csvToJson';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
    @Input() renderSettings: boolean = false;
    @Output() renderSettingsChange = new EventEmitter<boolean>();

    constructor() {}

    ngOnInit(): void {}

    toggleSettings() {
        this.renderSettings = !this.renderSettings;
        this.renderSettingsChange.emit(this.renderSettings);
    }
}
