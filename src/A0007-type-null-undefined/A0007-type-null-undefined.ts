let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string, // abertura da função
  lastName?: string,
): {
  firstName: string; // type annotation
  lastName?: string;
} {
  return {
    firstName, // corpo da função
    lastName,
  };
}

export function squareOf(x: any): number | null {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoString = squareOf('2');

if (squareOfTwoString === null) {
  console.log('Conta inválida');
} else {
  console.log(squareOfTwoString * 100);
}
