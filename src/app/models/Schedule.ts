import { Time } from "@angular/common";
import { Audit } from "./audit";

export class Schedule extends Audit {
    days: number[];
    time: Time;
    canNotify: boolean;
}