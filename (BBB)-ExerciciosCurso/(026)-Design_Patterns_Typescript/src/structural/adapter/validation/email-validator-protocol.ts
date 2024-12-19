export interface EmailValidatorProtocol {
  // isEmail(value: string): boolean;
  isEmail: EmailValidatorFnProtocol;
}

export interface EmailValidatorFnProtocol {
  (value: string): boolean;
}
