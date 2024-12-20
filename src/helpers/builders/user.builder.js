import { faker } from '@faker-js/faker';

class UserBuilder {
   addName() {
      this.userName = faker.person.firstName();
      return this;
   }

   addEmail() {
      this.userEmail = faker.internet.email();
      return this;
   }

   addPassword() {
      this.userPassword = faker.internet.password();
      return this;
   }

   generate() {
      const copied = structuredClone(
         {
            userName: this.userName || faker.company.name(),
            userEmail: this.userEmail || faker.internet.email(),
            userPassword: this.userPassword || faker.internet.password(),
         }
      );
      return copied;
   }
}

export { UserBuilder }