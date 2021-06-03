import { HeaderData } from './../footer/header-data.mode';

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

    private _headerData = new BehaviorSubject<HeaderData>({


    title: 'Inicio',
    icon: 'home',
    routeUrl: ''
  })

  constructor() { }

  get headerData(): HeaderData{
    return this._headerData.value
  }

  set headerData(headerData: HeaderData){
    this._headerData.next(headerData)
  }

}
