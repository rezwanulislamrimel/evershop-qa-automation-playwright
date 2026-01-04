import { RegistrationObjects } from "./RegObjects";
export class Registraiton {
  constructor(page) {
    this.page = page;
    this.locator = new RegistrationObjects(page);
  }

  async ClickOnAccountIcon() {
    await this.locator.AccountIcon.Click();
  }
  async ClickOnRegistrationIcon() {
    await this.locator.CreateAccountLink.Click();
  }

  async EnterFullName() {
    await this.locator.emailInput.fill("rezwanul");
  }
  async EnterEmail() {
    await this.locator.emailInput.fill("rezwanul@gmail.com");
  }
  async EnterPassword() {
    await this.locator.passwordInput.fill("password123");
  }
  async ClickSignUpButton() {
    await this.locator.buttonSignUp.click();
  }
}
