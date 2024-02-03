import dotenv from 'dotenv';
dotenv.config();

import './src/database';

import express from 'express';
import homeRoutes from './src/routes/homeRoutes';

class App {
  constructor() {
    this.App = Express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.App.use(express.urlencoded({ extended: true }));
    this.App.use(express.json());
  }

  routes() {
    this.App.use('/', homeRoutes);
  }
}

export default new App().App;
