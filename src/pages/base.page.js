import { step } from "allure-js-commons"
const { expect } = require('@playwright/test');

class BasePage {
   constructor(page) {
      this.page = page;
   }

   async open(url) {
      await step(`Переходим на страницу ${url}`, async () => {
         await this.page.goto(url);
      });
   }

   async waitPageLoaded(locator) {
      await step(`Ждём пока локатор ${locator} будет видимым`, async () => {
         await expect(locator).toBeVisible();
      });
   }

   async getElementText(locator) {
      let text;
      await step(`Получаем текст локатора ${locator}`, async () => {
         text = await locator.innerText();
      });
      return text;
   }

   async fillField(locator, text = '') {
      await locator.click();
      await locator.pressSequentially(text);
   }

}
export { BasePage }