export class RegistrationObjects {
  constructor(page) {
    this.page = page;
    (this.AccountIcon = this.page.getByRole("button", { name: "login" })),
      (this.CreateAccountLink = this.page.getByRole("text", {
        name: register,
      }));
    this.fullNameInput = this.page.getByRole("text", { name: "full_name" });
    this.emailInput = this.page.getByRole("text", { name: "Email" });
    this.passwordInput = this.page.getByRole("text", { name: "Password" });
    this.button = this.page.getByRole("button", { name: "Sign Up" });
  }
}
