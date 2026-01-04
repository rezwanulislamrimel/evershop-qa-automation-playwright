import { RegistrationObjects } from "./RegObjects";
export class Registraiton {
  constructor(page) {
    this.page = page;
    this.locator = new RegistrationObjects(page);
  }
}
