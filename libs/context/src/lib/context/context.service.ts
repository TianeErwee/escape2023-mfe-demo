import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContextService {
  private _myContextWord: string;

  constructor() {
    console.log('constructing');
    this._myContextWord = '';
  }

  get myContextWord(): string {
    return this._myContextWord;
  }

  set myContextWord(newContext: string) {
    this._myContextWord = newContext;
  }
}
