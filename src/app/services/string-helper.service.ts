import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class StringHelperService {

  constructor() { }

  static hasText(text: string) {
    if (isNullOrUndefined(text))
      return false;
    let nonWhiteSpaceContent = text.replace(/(?:\r\n|\r|\n)/g, '');
    return (nonWhiteSpaceContent != "" && !isNullOrUndefined(nonWhiteSpaceContent));
  }
}
