import { Audit } from "./audit";

export class ListItem extends Audit {
    text: string;
    checked: boolean;
}