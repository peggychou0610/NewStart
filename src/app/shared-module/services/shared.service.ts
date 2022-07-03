import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class SharedService {
  private siblingMsg = new Subject<any>();
  constructor() { }
  
  public getMessage(): Observable<any> {
    return this.siblingMsg.asObservable();
  }

  public setMessage(message: any): void {
    this.siblingMsg.next(message);
  }
}
