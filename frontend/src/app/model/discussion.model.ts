export class Discussion {
    title: string;
    text: string;    
    category: string;
    publishDate: string;
    publishTime: string;
    author: string;
    visibility: string;
    archived: boolean;
    deleted: boolean;
    replays: [{
        fullName: string;
        replay: string;
        date: string;
        time: string;
    }];
}