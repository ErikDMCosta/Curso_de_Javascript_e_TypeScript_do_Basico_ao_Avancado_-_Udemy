// Component
export abstract class ValidatorComponent {
  abstract validate(value: unknown): boolean;
}

// Leaf
export class ValidateEmail extends ValidatorComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /@/.test(value);
  }
}

export class ValidateString extends ValidatorComponent {
  validate(value: unknown): boolean {
    // if (typeof value !== 'string') return false;
    return typeof value === 'string';
  }
}

export class ValidateNumber extends ValidatorComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /\d+/.test(value);
  }
}

// Composite
// export abstract class ValidatorComposite extends ValidatorComponent {
export class ValidatorComposite extends ValidatorComponent {
  private readonly children: ValidatorComponent[] = [];

  validate(value: unknown): boolean {
    for (const child of this.children) {
      const validation = child.validate(value);
      if (!validation) return false;
    }
    return true;
  }

  add(...validations: ValidatorComponent[]): void {
    validations.forEach((validation) => this.children.push(validation));
  }

  remove(validation: ValidatorComponent): void {
    const validationIndex = this.children.indexOf(validation);
    if (validationIndex !== -1) this.children.splice(validationIndex, 1);
  }
}

const validateEmail = new ValidateEmail();
const validateString = new ValidateString();
const validateNumber = new ValidateNumber();
const validatorComposite = new ValidatorComposite();

// validatorComposite.add(validateString);
// validatorComposite.add(validateEmail);
// validatorComposite.add(validateNumber);
validatorComposite.add(validateString, validateEmail, validateNumber);

// console.log(validatorComposite.validate('1@1'));
// console.log(validatorComposite.validate(1));
// console.log(validatorComposite.validate('1'));
console.log(validatorComposite.validate('user123@email.com'));
