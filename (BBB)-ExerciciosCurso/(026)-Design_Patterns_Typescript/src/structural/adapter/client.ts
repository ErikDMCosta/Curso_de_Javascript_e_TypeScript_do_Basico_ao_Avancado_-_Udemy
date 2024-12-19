// import isEmail from 'validator/lib/isEmail';

// // const email = 'user@emailcom';
// const email = 'user@email.com';
// if (isEmail(email)) {
//   console.log('É válido');
// } else {
//   console.log('É inválido');
// }

import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/email-validator-protocol';

function validaEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('Email é válido (CLASS)');
  } else {
    console.log('Email é inválido (CLASS)');
  }
}

function validaEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string,
): void {
  if (emailValidator(email)) {
    console.log('Email é válido (FN)');
  } else {
    console.log('Email é inválido (FN)');
  }
}

// validaEmail(new EmailValidatorClassAdapter(), 'user@emailcom');

// const email = 'user@emailcom';
const email = 'user@email.com';

// validaEmailClass(new EmailValidatorClassAdapter(), 'user@email.com');
validaEmailClass(new EmailValidatorClassAdapter(), email);

// validaEmailFn(emailValidatorFnAdapter, 'user@email.com');
validaEmailFn(emailValidatorFnAdapter, email);
