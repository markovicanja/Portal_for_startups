import { Startup } from "./startup.model";

export class Notification {
    title: string;
    text: string;
    date: string;
    time: string;
    author: string;
    type: string;
    sendTo: string;
    startups: Array<Startup>;
    businessType: string;
    archived: boolean;
    deleted: boolean;
}