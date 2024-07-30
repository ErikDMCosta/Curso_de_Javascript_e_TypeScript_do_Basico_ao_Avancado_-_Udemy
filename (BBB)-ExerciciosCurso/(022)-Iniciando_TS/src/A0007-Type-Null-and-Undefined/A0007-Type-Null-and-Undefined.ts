let x;
if (typeof x === "undefined") x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: any) {
  if (typeof x === "number") return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf("2");

// squareOfTwoNumber
if (squareOfTwoNumber === null) {
  // console.log("Conta Inválida", squareOfTwoNumber * 2);
  console.log("Conta Inválida");
} else {
  // console.log(squareOfTwoNumber);
  console.log(squareOfTwoNumber * 100);
}

// squareOfTwoString
if (squareOfTwoString === null) {
  // console.log("Conta Inválida", squareOfTwoNumber * 2);
  console.log("Conta Inválida");
} else {
  // console.log(squareOfTwoNumber);
  console.log(squareOfTwoString * 100);
}
