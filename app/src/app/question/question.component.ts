import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFile } from '../Interfaces';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
    @Input() file: IFile = {
        name: '',
        currentQuestion: 0,
        questions: [],
        currentQuestionInputOrDiv: [],
        input: [],
    };

    @Output() submitEvent = new EventEmitter<MouseEvent>();

    constructor() {}

    ngOnInit(): void {}

    submit(event: MouseEvent): void {
        this.submitEvent.emit(event);
    }
}
