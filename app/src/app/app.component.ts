import { Component, OnInit } from '@angular/core';
import { IFile } from './Interfaces';
import { obj2 } from './mock-json';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    data: IFile = obj2;

    ngOnInit(): void {
        console.log(`NGONINIT IN APPCOMPONENT`);

        this.nextQuestion();
    }

    areEqual2d(arr1: string[][], arr2: string[][]): boolean {
        console.log(arr1);
        console.log(arr2);

        let output = true;

        arr1.forEach((value, i) => {
            value.forEach((string, j) => {
                if (string !== arr2[i][j]) {
                    output = false;
                }
            });
        });

        return output;
    }

    submit(event: MouseEvent): void {
        const inputs: string[][] = [];
        const correctInputs: string[][] = [];

        this.data.input.forEach((row, i) => {
            inputs.push([]);
            row.forEach((column, j) => {
                if (
                    column !== '' &&
                    this.data.currentQuestionInputOrDiv[i][j] === 0
                ) {
                    inputs[i].push(column);
                }
            });
        });

        this.data.questions[this.data.currentQuestion].answers.forEach(
            (row, i) => {
                correctInputs.push([]);
                row.forEach((column, j) => {
                    if (this.data.currentQuestionInputOrDiv[i][j] === 0)
                        correctInputs[i].push(column);
                });
            }
        );

        if (!this.areEqual2d(inputs, correctInputs)) return;

        this.data.currentQuestion =
            (this.data.currentQuestion + 1) % this.data.questions.length;
        this.nextQuestion();
    }

    checkFull(): boolean {
        let output = true;
        this.data.currentQuestionInputOrDiv.forEach((value) => {
            value.forEach((num) => {
                if (num === 0) {
                    output = false;
                }
            });
        });

        return output;
    }

    hint(event: MouseEvent): void {
        if (this.checkFull()) {
            console.log('FULL');
            return;
        }

        let randrow;
        let randcol;

        do {
            randrow = Math.floor(
                Math.random() * this.data.currentQuestionInputOrDiv.length
            );
            randcol = Math.floor(
                Math.random() * this.data.currentQuestionInputOrDiv[0].length
            );
        } while (this.data.currentQuestionInputOrDiv[randrow][randcol] !== 0);

        this.data.currentQuestionInputOrDiv[randrow][randcol] = 1;
    }

    nextQuestion() {
        this.resetCurrentQuestion();

        this.populateCurrentQuestion();
    }

    resetCurrentQuestion(): void {
        this.data.input = [];
        this.data.currentQuestionInputOrDiv = [];
    }

    populateCurrentQuestion(): void {
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

            this.data.input.push([]);

            this.data.input[i].push();
            this.data.input[i].length =
                this.data.questions[
                    this.data.currentQuestion
                ].answers[0].length;
            this.data.input[i].fill('');

            const randnum = Math.floor(Math.random() * rowLength);

            this.data.currentQuestionInputOrDiv[i][randnum] = 0;
        }
    }
}
