import { Startup } from "./startup.model";

export class Ad {
    title: string;
    text: string;
    publishDate: string;
    publishTime: string;
    expireDate: string;
    expireTime: string;
    author: string;
    sendTo: string;
    startups: Array<Startup>;
    businessType: string;
    deleted: boolean;
}