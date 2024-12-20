import { expect, test } from '@playwright/test'
import { UserBuilder, CompanyBuilder, ApiClient } from '../src/helpers'
import { step } from 'allure-js-commons';


test.describe('API тесты', async () => {
   let apiClient, testUser, testCompany, response;

   test.beforeEach(async ({ request }) => {
      apiClient = new ApiClient();
      testUser = new UserBuilder().generate();
      testCompany = new CompanyBuilder().generate();
   });

   test('Пользователь может зарегистрироваться в системе заполнив обязательные поля', async ({ request }) => {
      let expectName = testUser.userName;

      response = await apiClient.apiService.doRegister(request,
         testUser.userEmail,
         testUser.userName,
         testUser.userPassword
      );
      let actualName = await response.name;

      await step(`Проверяем имя пользователя в ответе`, async () => {
         expect(actualName).toEqual(expectName);
      })
   });

   test('Пользователь не может зарегистрироваться в системе без Email', async ({ request }) => {
      let expectMessage = 'Параметр email является обязательным!';

      response = await apiClient.apiService.doRegister(request,
         null,
         testUser.userName,
         testUser.userPassword
      )

      let actualMessage = await response.message;
      await step(`Проверяем текст ошибки`, async () => {
         expect(actualMessage).toEqual(expectMessage);
      })
   });

   test('Пользователь не может зарегистрироваться в системе без Name', async ({ request }) => {
      let expectMessage = 'Параметр name является обязательным!';

      response = await apiClient.apiService.doRegister(request,
         testUser.userEmail,
         null,
         testUser.userPassword
      )

      let actualMessage = await response.message;
      await step(`Проверяем текст ошибки`, async () => {
         expect(actualMessage).toEqual(expectMessage);
      })
   });

   test('Пользователь не может зарегистрироваться в системе без Password', async ({ request }) => {
      let expectMessage = 'Параметр password является обязательным!';

      response = await apiClient.apiService.doRegister(request,
         testUser.userEmail,
         testUser.userName,
         null
      )

      let actualMessage = await response.message;
      await step(`Проверяем текст ошибки`, async () => {
         expect(actualMessage).toEqual(expectMessage);
      })
   });

   test('Пользователь может создать новую компанию', async ({ request }) => {
      let expectType = 'success';

      response = await apiClient.apiService.сreateCompany(request,
         testCompany.companyName,
         testCompany.companyType,
         testCompany.companyUsers,
         testCompany.ownerEmail
      );

      let actualType = await response.type;
      await step(`Проверяем текст ошибки`, async () => {
         expect(actualType).toEqual(expectType);
      })
   });

});