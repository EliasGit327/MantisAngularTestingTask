import { isDevMode } from '@angular/core';

interface ILocalStorageValueParams {
  key: string;
  rule?: (value: any) => boolean;
  stringify?: boolean;
}

export class LocalStorageValue {
  private readonly key: string;
  private readonly rule?: (value: any) => boolean;
  private readonly stringify?: boolean;

  constructor(parameters: ILocalStorageValueParams) {
    this.key = parameters.key;
    this.rule = parameters.rule;
    this.stringify = parameters.stringify;
  }

  set value(value: any) {
    let valueInput = value;
    if (this.stringify) {
      valueInput = JSON.stringify(value);
    }
    if (this.rule) {
      if (this.rule(valueInput)) {
        window.localStorage.setItem(this.key, valueInput);
      } else {
        this.messageOnlyForDevs(
          `LOCAL STORAGE SET OPERATION - Rule for value: '${valueInput}' with key: ${this.key} has been violated!`
        );
      }
    } else {
      window.localStorage.setItem(this.key, valueInput);
    }
  }

  get value(): any {
    let locValue = window.localStorage.getItem(this.key);
    if (locValue === undefined || locValue === null) {
      return;
    }
    if (this.stringify) {
      locValue = JSON.parse(locValue);
    }
    if (this.rule) {
      if (this.rule(locValue)) {
        return locValue;
      } else {
        window.localStorage.removeItem(this.key);
        this.messageOnlyForDevs(
          `LOCAL STORAGE GET OPERATION - Rule for value: '${locValue}' with key: ${this.key} has been violated!`
        );
        return;
      }
    }
    return locValue;
  }

  messageOnlyForDevs(message: string): void {
    if (isDevMode()) {
      console.warn(message);
    }
  }
}
