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

    shuffleArray<T>(array: T[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    randomizeQuestionOrder() {
        this.shuffleArray(this.data.questions);

        console.dir(this.data.questions);
    }

    ngOnInit(): void {
        this.randomizeQuestionOrder();

        // nextQuestion method ups the currentQuestion by one, but we want to start at index 0, so we set it to -1 here
        this.data.currentQuestion = -1;
        this.nextQuestion();
    }

    areEqual2d(arr1: string[][], arr2: string[][]): boolean {
        let output = false;

        arr1.forEach((value) => {
            if (value.length > 0) output = true;
        });

        arr1.forEach((value, i) => {
            if (value.length === 0) output = false;
            value.forEach((string, j) => {
                if (string !== arr2[i][j]) {
                    output = false;
                }
            });
        });

        return output;
    }

    areEqual2d2(arr1: string[][], arr2: string[][]): boolean {
        let tempArr1: string[] = [];
        let tempArr2: string[] = [];

        arr1.forEach((stringArr) => {
            if (stringArr.length === 0) tempArr1.push('');
            else stringArr.forEach((value) => tempArr1.push(value));
        });

        arr2.forEach((stringArr) => {
            if (stringArr.length === 0) tempArr2.push('');
            else stringArr.forEach((value) => tempArr2.push(value));
        });

        for (let i = 0; i < tempArr1.length; i++) {
            if (!(tempArr1[i] === tempArr2[i])) return false;
        }

        return true;
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

        if (!this.areEqual2d2(inputs, correctInputs)) return;

        this.nextQuestion();
    }

    checkFull(): boolean {
        let output = true;

        this.data.currentQuestionInputOrDiv.forEach((row, i) => {
            row.forEach((column, j) => {
                if (column === 0 && this.data.input[i][j] === '')
                    output = false;
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
        } while (
            this.data.currentQuestionInputOrDiv[randrow][randcol] !== 0 ||
            this.data.input[randrow][randcol] !== ''
        );

        this.data.currentQuestionInputOrDiv[randrow][randcol] = 1;
        this.data.currentQuestionColours[randrow][randcol] = 1;
    }

    next(): void {
        this.nextQuestion();
    }

    nextQuestion() {
        this.data.currentQuestion =
            (this.data.currentQuestion + 1) % this.data.questions.length;

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
            this.data.currentQuestionColours.push([]);

            const rowLength =
                this.data.questions[this.data.currentQuestion].answers[0]
                    .length;

            this.data.currentQuestionInputOrDiv[i].length = rowLength;
            this.data.currentQuestionInputOrDiv[i].fill(1);

            this.data.currentQuestionColours[i].length = rowLength;
            this.data.currentQuestionColours[i].fill(0);

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
