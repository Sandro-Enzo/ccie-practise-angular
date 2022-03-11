import { Component, OnInit } from '@angular/core';
import { IFile } from './Interfaces';
import { obj } from './mock-json';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    data: IFile = obj;

    ngOnInit(): void {
        console.log(`NGONINIT IN APPCOMPONENT`);

        // Randomly remove one div from each row and replace it with an input
        for (
            let i = 0;
            i < this.data.questions[this.data.currentQuestion].answers.length;
            i++
        ) {
            this.data.currentQuestionInputOrDiv.push([]);

            const rowLength =
                this.data.questions[this.data.currentQuestion].answers[0]
                    .length;

            this.data.currentQuestionInputOrDiv[i].length = rowLength;
            this.data.currentQuestionInputOrDiv[i].fill(1);

            const randnum = Math.floor(Math.random() * rowLength);

            this.data.currentQuestionInputOrDiv[i][randnum] = 0;
        }
    }

    submit(event: MouseEvent) {
        this.data.currentQuestion =
            (this.data.currentQuestion + 1) % this.data.questions.length;
        this.ngOnInit();
    }
}
