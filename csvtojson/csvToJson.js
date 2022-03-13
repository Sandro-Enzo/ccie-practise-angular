"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convert(csv, title) {
    // Every line in the csv is a question
    var questions = csv.split(/\r?\n/);
    // First line is the template, and therefor shouldn't be included
    questions = questions.slice(1, questions.length);
    // Initialize output
    var output = {
        name: title,
        currentQuestion: 0,
        questions: [],
        currentQuestionInputOrDiv: [],
        input: [],
    };
    for (var _i = 0, questions_1 = questions; _i < questions_1.length; _i++) {
        var question = questions_1[_i];
        // If the line is empty, continue
        if (!question)
            continue;
        // Template: Titel;Type;Instruction;Format;Answers
        // Example input: Binary;General;How?;Number,Power2;1,2,2,4,3,8,4,16,5,32,6,64,7,128
        var entries = question.split(';'); // ['Binary', 'General', 'How?', 'Number,Power2', '1,2,32,4,3,8,4,16,5,32,6,64,7,128']
        var format = entries[3].split(','); // ['Number', 'Power2'']
        var tempAnswers = entries[4].split(','); // ['1,2,2,4,3,8,4,16,5,32,6,64,7,128']
        // All the rows
        var answers = [];
        // Loop over every row
        // let i = 0; i < 14; i += 2
        for (var i = 0; i < tempAnswers.length; i += format.length) {
            answers.push([]);
            // Loop over every column
            for (var j = 0; j < format.length; j++) {
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
exports.default = convert;
