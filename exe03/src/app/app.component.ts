import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'app';
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('AngularJS', 'http://angular.io', 55),
      new Article('VueJS', 'http://vuejs.io', 75),
      new Article('EmberJS', 'http://ember.com', 25),
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    console.log(title.value, link.value);
    if (title.value) {
      this.articles.push(new Article(title.value, link.value));
      // reset les values dans les inputs du form
      title.value = '';
      link.value = '';
    }
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

}
