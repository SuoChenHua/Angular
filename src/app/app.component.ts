import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  wordCount = 0;
  constructor() {
  }
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title = 'The Will Will Web';
    }
  }
  countWords(inputString: string) {
    this.wordCount = inputString.length;

  }
  cleanInput(event: any) {
    if (event.key == "Escape") {
      event.target.value = "";
      this.wordCount = 0;
    }
  }
}
