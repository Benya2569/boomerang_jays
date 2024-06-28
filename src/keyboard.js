// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const keypress = require('keypress');

// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.

const keyboard = {
  q: (hero) => hero.moveLeft(),
  w: () => console.log('w'),
  e: () => console.log('e'),
  r: () => console.log('r'),
  t: () => console.log('t'),
  y: () => console.log('y'),
  u: () => console.log('u'),
  i: () => console.log('i'),
  o: () => console.log('o'),
  p: () => console.log('p'),
  a: () => console.log('a'),
  s: () => console.log('s'),
  d: () => console.log('d'),
  f: () => console.log('f'),
  g: () => console.log('g'),
  h: () => console.log('h'),
  j: () => console.log('j'),
  k: () => console.log('k'),
  l: () => console.log('l'),
  z: () => console.log('z'),
  x: () => console.log('x'),
  c: () => console.log('c'),
  v: () => console.log('v'),
  b: () => console.log('b'),  
  m: () => console.log('m'),
 space : () => console.log(' '),


 

};

// Какая-то функция.

function runInteractiveConsole(hero) {
  keypress(process.stdin);
  process.stdin.on('keypress', (ch, key) => {
    if (key) {
      // Вызывает команду, соответствующую нажатой кнопке.
      if (key.name in keyboard) {
        keyboard[key.name](hero);
      }
      // Прерывание программы.
      if (key.ctrl && key.name === 'c') {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
}

// Давай попробуем запустить этот скрипт!

runInteractiveConsole();
