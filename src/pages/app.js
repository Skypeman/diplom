import { BasePage, MainPage, LoginPage } from './index'
class App {
   constructor(page) {
      this.page = page;
      this.basePage = new BasePage(page);
      this.mainPage = new MainPage(page);
      this.loginPage = new LoginPage(page);
   }
};

export { App };
