export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  voteUp() {
    this.votes++;
  }

  voteDown() {
    this.votes--;
  }

  getDomain(): string {
    try {
      const domainPath: string = this.link.split('//')[1];
      return domainPath.split('/')[0];
    } catch (error) {
      return null;
    }
  }

}

