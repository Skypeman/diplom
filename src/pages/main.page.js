import { BasePage } from "./base.page.js";
import { step } from "allure-js-commons"

class MainPage extends BasePage {
   constructor(page) {
      super(page);
      this.loginButton = this.page.getByRole('link', { name: 'Войти' });
      this.searchField = this.page.locator('input[name="q"]');
      this.nameCell = this.page.locator('//table/tbody/tr[1]/td[2]');
      this.userButton = this.page.locator('//table/tbody/tr[1]/td[7]/a');
      this.userMenu = this.page.locator('a.dropdown-toggle');
      this.logoutButton = this.page.locator('a[href="/user/logout.html"]');
   }

   async search(query) {
      await step(`Производим поиск по запросу ${query}`, async () => {
         await this.fillField(this.searchField, query);
         await this.searchField.press('Enter');
      });
   }

   async goToUserPage() {
      await step(`Переходим на страницу пользователя ${await this.getUserName()}`, async () => {
         await this.userButton.click();
      });
   }

   async goToLogin() {
      await step(`Переходим на страницу авторизации`, async () => {
         await this.loginButton.click();
      })
   }

   async logout() {
      await step(`Разлогиниваемся`, async () => {
         await this.userMenu.click();
         await this.logoutButton.click();
      })
   }

}
export { MainPage }