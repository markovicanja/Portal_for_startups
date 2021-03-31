import { Investor } from "./investor.model";
import { Startup } from "./startup.model";

export class News {
    name: string;
    text: string;
    category: string;
    date: string;
    time: string;
    author: string;
    visibility: string;
    deleted: boolean;
    selectedStartups: Array<Startup>;
    selectedInvestors: Array<Investor>;
}