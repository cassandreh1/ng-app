import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  brews: Object;
  // dependency injection
  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    // return an obversable therefore you can subscribe to it
    this._http.getBeer().subscribe(data => {
      console.log(data);
      this.brews = data;
    })
  }

}
