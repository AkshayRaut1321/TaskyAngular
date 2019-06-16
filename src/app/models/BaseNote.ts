import { Schedule } from "./Schedule";
import { Image } from "./Image";
import { Tag } from "./Tag";
import { Audit } from "./audit";

export abstract class BaseNote extends Audit  {
    schedule : Schedule;
    images: Image[];
    tags: Tag[];
    title: string;
}