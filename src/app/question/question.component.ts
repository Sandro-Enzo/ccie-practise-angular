import { Component, Input, OnInit } from '@angular/core';
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

    constructor() {}

    ngOnInit(): void {}
}
