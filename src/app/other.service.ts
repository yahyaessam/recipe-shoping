import { Injectable } from '@angular/core';

@Injectable()
export class OtherService {

  constructor() { }

  logFromOther(param : string) {
    console.log(param);
  }

}
