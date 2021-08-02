import { isValidColor } from './colors';

function logWords(results) {
  //   console.log(results[results.length - 1][0].transcript);
}

export function handleResult({ results }) {
  logWords(results);
  const words = results[results.length - 1][0].transcript;
  //   console.log(words);

  //   lowercase everything
  let color = words.toLowerCase();

  //   strip any spaces out
  color = color.replace(/\s/g, '');
  console.log(color);

  // check if its a valid colour
  if (!isValidColor(color)) return;
  // if it is, then show the UI for that
  const colorSpan = document.querySelector(`.${color}`);
  colorSpan.classList.add('got');

  //   Change the background color
  document.body.style.backgroundColor = color;

  // console.log(colorSpan);
  console.log('This is a valid color');
}
