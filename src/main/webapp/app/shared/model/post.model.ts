import { Moment } from 'moment';

export interface IPost {
    id?: number;
    title?: string;
    name?: string;
    email?: string;
    contactdate?: Moment;
    comments?: string;
}

export class Post implements IPost {
    constructor(
        public id?: number,
        public title?: string,
        public name?: string,
        public email?: string,
        public contactdate?: Moment,
        public comments?: string
    ) {}
}
