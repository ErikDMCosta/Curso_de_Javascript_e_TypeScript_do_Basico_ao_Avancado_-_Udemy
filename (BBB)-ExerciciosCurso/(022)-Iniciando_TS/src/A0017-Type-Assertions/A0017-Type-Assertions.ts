/* Recomendado */
// Condicional
const body1 = document.querySelector('body');
// body.style.background = 'red';
if (body1) body1.style.background = 'red';

// Type Assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement
// HTML.. (Autocomplete)
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

/* Não Recomendado */
// Type Assertion (Unknown)
// const body4 = document.querySelector('body') as number;
const body4 = document.querySelector('body') as unknown as number;

// Non-Null Assertion (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';
