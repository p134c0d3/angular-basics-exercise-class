import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  title: string = 'Whatever you wanna be';
  content: string = 'Only you have control of who you are.';
  isTechRelated: boolean = true;
}
