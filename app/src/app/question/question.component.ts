import {
    AfterViewInit,
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
import { IFile } from '../Interfaces';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit, AfterViewInit {
    @Input() file: IFile = {
        name: '',
        currentQuestion: 0,
        questions: [],
        currentQuestionInputOrDiv: [],
        input: [],
        currentQuestionColours: [],
    };

    @ViewChild('container') container!: ElementRef<HTMLDivElement>;

    @Output() submitEvent = new EventEmitter<MouseEvent>();
    @Output() hintEvent = new EventEmitter<MouseEvent>();

    constructor() {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        this.container.nativeElement.style.setProperty(
            '--columns',
            this.file.questions[
                this.file.currentQuestion
            ].answers[0].length.toString()
        );
    }

    submit(event: MouseEvent): void {
        this.submitEvent.emit(event);
        this.ngAfterViewInit();
    }

    hint(event: MouseEvent): void {
        this.hintEvent.emit(event);
    }
}
