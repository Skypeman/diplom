import { BasePage } from "./base.page.js";
import { step } from "allure-js-commons"

class LoginPage extends BasePage {
   constructor(page) {
      super(page);
      this.loginButton = this.page.getByRole('button', { name: 'Авторизоваться' });
      this.registerButton = this.page.getByRole('button', { name: 'Зарегистрироваться' });
      this.loginField = this.page.locator('input[name="login"]');
      this.emailField = this.page.locator('input[name="email"]');
      this.nameField = this.page.locator('input[name="name"]');
      this.loginPasswordField = this.page.locator('//form[@action="/user/login/index.html"]//input[@name="password"]');
      this.registerPasswordField = this.page.locator('//form[@action="/user/register/index.html"]//input[@name="password"]');
   }

   async loginUser(email = 'manager@mail.ru', password = '1') {
      await step(`Авторизуемся`, async () => {
         await this.fillField(this.loginField, email);
         await this.fillField(this.loginPasswordField, password);
         await this.loginButton.click();
      });
   }

   async registerUser(name = '', email = '', password = '') {
      await step(`Регистрируемся`, async () => {
         await this.fillField(this.nameField, name);
         await this.fillField(this.emailField, email);
         await this.fillField(this.registerPasswordField, password);
         await this.registerButton.click();
      });
   }

}
export { LoginPage }