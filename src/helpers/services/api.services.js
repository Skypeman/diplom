import { step } from "allure-js-commons";

class ApiService {
   constructor() {
      this.URL = 'http://users.bugred.ru/tasks/rest/';
   }
   async doRegister(request, email = '', name = '', password = '') {
      return step("Регистрируемся в системе", async () => {
         let response = await request.post(`${this.URL}/doRegister`, {
            data: {
               "email": email,
               "name": name,
               "password": password
            }
         }
         );
         return await response.json();
      });
   }

   async сreateCompany(request, companyName = '', companyType = '', companyUsers = [], emailOwner = '') {
      return step("Создаём компанию", async () => {
         let response = await request.post(`${this.URL}/createcompany`, {
            data: {
               "company_name": companyName,
               "company_type": companyType,
               "company_users": companyUsers,
               "email_owner": emailOwner
            }
         });
         return await response.json();
      });
   }

}
export { ApiService };