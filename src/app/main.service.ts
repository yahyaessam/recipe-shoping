import { Injectable } from '@angular/core';
import { OtherService } from './other.service';
import { environment } from './../environments/environment';
@Injectable()
export class MainService {
  globalURL = "http://yahyaessam.eb2a.com";
  
  constructor(private otherService: OtherService) { }

  logMyName(name: string) {
    console.log(name);
  }
  onOtherService(param: string) {
    this.otherService.logFromOther(param);
  }
}
