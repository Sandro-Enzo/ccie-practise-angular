import { IFile } from './Interfaces';

export const obj: IFile = {
    name: 'new.csv',
    currentQuestion: 0,
    questions: [
        {
            meta: {
                title: 'Huts',
                type: 'A',
                instruction: 'Niffo',
            },
            format: ['Doe', 'Normaal', 'A', 'Niffo'],
            answers: [
                ['Krullen (Krullen)', 'Op (Op)', 'Me (Me)', 'Hoofd (Hoofd)'],
                ['En (En)', 'Ik (Ik)', 'Space (Space)', 'A (A)'],
                ['Niffo (Niffo)', 'Huts (Huts)', 'Huts (Huts)', 'Huts (Huts)'],
            ],
        },
        {
            meta: {
                title: 'a',
                type: 'b',
                instruction: 'c',
            },
            format: ['d (d)'],
            answers: [['e']],
        },
    ],
};
