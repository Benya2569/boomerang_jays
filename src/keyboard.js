// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const keypress = require("keypress");

// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.

const keyboard = {
  e: () => console.log("e"),
  r: () => console.log("r"),
  t: () => console.log("t"),
  y: () => console.log("y"),
  u: () => console.log("u"),
  i: () => console.log("i"),
  o: () => console.log("o"),
  p: () => console.log("p"),
  left: (hero) => hero.moveLeft(),
  s: () => console.log("s"),
  right: (hero) => hero.moveRight(),
  f: () => {
    console.log("========>ПОЗДРАВЛЯЕМ 3 ФАЗУ<============");
    process.exit();
  },
  g: () => console.log("g"),
  h: () => console.log("h"),
  j: () => console.log("j"),
  k: () => console.log("k"),
  l: () => console.log("l"),
  z: () => console.log("z"),
  x: () => console.log("x"),
  c: () => console.log("c"),
  v: () => console.log("v"),
  b: () => console.log("b"),
  m: () => console.log("m"),
};

// Какая-то функция.

function runInteractiveConsole(hero) {
  keypress(process.stdin);
  process.stdin.on("keypress", (ch, key) => {
    if (key) {
      // Вызывает команду, соответствующую нажатой кнопке.
      if (key.name in keyboard) {
        keyboard[key.name](hero);
      }
      // Прерывание программы.
      if (key.name === "space") {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
}

// Давай попробуем запустить этот скрипт!
// key.ctrl && key.name === 'c'
// runInteractiveConsole();

module.exports = runInteractiveConsole;
