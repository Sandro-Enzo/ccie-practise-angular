import { IFile } from './Interfaces';

export default function convert(csv: string, title: string): IFile {
    // Every line in the csv is a question
    let questions = csv.split(/\r?\n/);

    // First line is the template, and therefor shouldn't be included
    questions = questions.slice(1, questions.length);

    // Initialize output
    let output: IFile = {
        name: title,
        currentQuestion: 0,
        questions: [],
        currentQuestionInputOrDiv: [],
        input: [],
    };

    for (const question of questions) {
        // If the line is empty, continue
        if (!question) continue;

        // Template: Titel;Type;Instruction;Format;Answers
        // Example input: Binary;General;How?;Number,Power2;1,2,2,4,3,8,4,16,5,32,6,64,7,128
        const entries = question.split(';'); // ['Binary', 'General', 'How?', 'Number,Power2', '1,2,32,4,3,8,4,16,5,32,6,64,7,128']
        const format = entries[3].split(','); // ['Number', 'Power2'']
        const tempAnswers = entries[4].split(','); // ['1,2,2,4,3,8,4,16,5,32,6,64,7,128']

        // All the rows
        let answers: string[][] = [];

        // Loop over every row
        // let i = 0; i < 14; i += 2
        for (let i = 0; i < tempAnswers.length; i += format.length) {
            answers.push([]);

            // Loop over every column
            for (let j = 0; j < format.length; j++) {
                // answers[0 / 2].push(tempAnswers[0 + 0])
                // answers[0].push(tempAnswers[0])
                // ---------------------------------------
                // answers[0 / 2].push(tempAnswers[0 + 1])
                // answers[0].push(tempAnswers[1])
                // ---------------------------------------
                // answers[2 / 2].push(tempAnswers[2 + 0])
                // answers[1].push(tempAnswers[2])
                // ---------------------------------------
                // answers[2 / 2].push(tempAnswers[2 + 1])
                // answers[1].push(tempAnswers[3])
                // etc...
                answers[i / format.length].push(tempAnswers[i + j]);
            }
        }

        // Add to the questions array
        output.questions.push({
            meta: {
                title: entries[0],
                type: entries[1],
                instruction: entries[2],
            },
            format: format,
            answers: answers,
        });
    }

    return output;
}
