export class Survey {
    name: string;
    questions: [
        {
            question: string,
            answers: [
                {
                    answer: string,
                    counter: number
                }
            ]
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