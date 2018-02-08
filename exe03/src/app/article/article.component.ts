// CONTROLLER

import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';

  @Input() article: Article;

  constructor() {
    this.article = new Article('My new article', 'http://angular.io', 30);
    // this.votes = 1;
    // this.link = 'http://angular.io';
    // this.title = 'Angular the best framwork of the year';
  }

  voteUp() {
    this.article.voteUp();
    return false;
  }

  voteDown() {
    this.article.voteDown();
    return false;
  }

  getDomain() {
    this.article.getDomain();
    return false;
  }

  ngOnInit() {
  }

}
