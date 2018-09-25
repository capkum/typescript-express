import express from 'express';
import { IndexRoute } from './category';

// apps
// app들의 라우터를 한곳에 모음
export class Apps {
  protected router: express.Router;

  constructor (router: express.Router) {
    this.router = router;
  }

  // app을 한곳에
  public apps () {
    IndexRoute.createRoute(this.router);
  }

}
