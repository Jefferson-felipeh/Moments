import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }

  private subjectAction = new BehaviorSubject<any>(1);
  emitterData$: Observable<any> = this.subjectAction.asObservable();

  getUpdated = (datasLabel:any) => this.subjectAction.next({...datasLabel});

  getValues = () => console.log('acesso ao service');

}
