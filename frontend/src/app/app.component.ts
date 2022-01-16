import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  foo = "baz";

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get<{ foo: string }>("http://localhost:3000/var", {
      observe: 'body',
      responseType: 'json'
    }).subscribe((data) => this.foo = data.foo);
  }
}
