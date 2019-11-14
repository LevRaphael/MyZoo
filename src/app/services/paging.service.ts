import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagingService {

  public currentPanel = 'birds'
  constructor() { }
}