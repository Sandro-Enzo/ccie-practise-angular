export interface IData {
    files: IFile[];
    currentFile: number;
}

export interface IFile {
    name: string;
    currentQuestion: number;
    questions: IQuestion[];
}

export interface IQuestion {
    meta: IMeta;
    format: string[];
    answers: string[][];
}

export interface IMeta {
    title: string;
    type: string;
    instruction: string;
}
