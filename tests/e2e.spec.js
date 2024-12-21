import { test, expect } from '@playwright/test'
import { App } from '../src/pages/app'
import { step } from 'allure-js-commons';
import { UserBuilder } from '../src/helpers';

test.describe('E2E тесты', async () => {
   let app, testUser;
   test.beforeEach('Переходим на страницу Users', async ({ page }) => {
      app = new App(page);
      await app.basePage.open('.');
      testUser = new UserBuilder().generate();
   });

   test('Тест на поиск', async ({ }) => {
      let query = 'aa+1@gmail.com';
      let expectName = 'aaa';
      let actualName;

      await app.mainPage.search(query);
      actualName = await app.mainPage.getElementText(app.mainPage.nameCell);
      await step(`Нужный пользователь найден`, async () => {
         expect(actualName).toEqual(expectName);
      })
   });

   test('Тест на регистрацию', async ({ }) => {
      let expectName = (testUser.userName).toLowerCase();
      let actualName;

      await app.mainPage.goToLogin();
      await app.loginPage.registerUser(testUser.userName, testUser.userEmail, testUser.userPassword);
      actualName = await app.mainPage.getElementText(await app.mainPage.userMenu);

      await step(`Пользователь успешно зарегистрирован`, async () => {
         expect(actualName).toEqual(expectName);
      })
   });

   test('Тест на авторизацию', async ({ }) => {
      let expectName = 'Злобный босс';
      let actualName;

      await app.mainPage.goToLogin();
      await app.loginPage.loginUser();
      actualName = await app.mainPage.getElementText(await app.mainPage.userMenu);

      await step(`Пользователь успешно авторизован`, async () => {
         expect(actualName).toEqual(expectName);
      })
   });

   test('Тест на логаут', async ({ }) => {
      await app.mainPage.goToLogin();
      await app.loginPage.loginUser();
      await app.mainPage.logout();

      await step(`Пользователь успешно разлогинен`, async () => {
         await expect(await app.mainPage.userMenu).not.toBeVisible();
      })
   });

   test('Нельзя залогиниться незарегистрированным пользователем', async ({ }) => {
      await app.mainPage.goToLogin();
      await app.loginPage.loginUser(testUser.userEmail, testUser.userPassword);

      await step(`Пользователь остался на странице авторизации`, async () => {
         await expect(await app.loginPage.loginButton).toBeVisible();
      })
   });

});