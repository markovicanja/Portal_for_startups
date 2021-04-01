export class Survey {
    name: string;
    questions: [
        {
            question: string,
            answers: Array<string>
        }
    ];
    public: boolean;
    author: string;
    filled: [
        {
            startup: string;
            answers: Array<string>
        }
    ]
}