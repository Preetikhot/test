
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JavaService {

  constructor(private http : HttpClient) { }
  gethtmlquestion(){
    return this.http.get<any>("assets/htmlquestions.json");
}
}
