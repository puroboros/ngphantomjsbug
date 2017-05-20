import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titles: SelectItem[] = [];
  booksLoaded = false;
  style = { 'color': 'red' };
  title = 'app works!';
  ngOnInit() {
    console.log('style: ' + JSON.stringify(this.style));
  }
}
