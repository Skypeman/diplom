import { faker } from '@faker-js/faker';

class CompanyBuilder {
   constructor() {
      this.companyName;
      this.companyType;
      this.companyUsers = ["test_1@mail.com	", "aaa@aa.com"];
      this.ownerEmail;


   }
   addCompanyName() {
      this.companyName = faker.company.name();
      return this;
   }

   addCompanyType() {
      this.companyType = faker.company.catchPhrase();
      return this;
   }

   addOwnerEmail() {
      this.ownerEmail = faker.internet.email();
      return this;
   }

   addCompanyUser() {
      this.companyUsers.push(faker.person.fullName);
      return this;
   }

   generate() {
      const copied = structuredClone(
         {
            companyName: this.companyName || faker.company.name(),
            companyType: this.companyType || "ООО",
            ownerEmail: this.ownerEmail || "manager@mail.ru",
            companyUsers: this.companyUsers
         }
      );
      return copied;
   }
}

export { CompanyBuilder }