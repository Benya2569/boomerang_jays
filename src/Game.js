// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().




const runInteractixveConsole = require("./keyboard.js");
const Hero = require("./game-models/Hero");
const Enemy = require("./game-models/Enemy");
const Boomerang = require('./game-models/Boomerang');
const View = require("./View");


// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero({ position: 0 }); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy();
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = new Array(this.trackLength).fill("_");
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
  }

  play() {
    runInteractixveConsole(this.hero);
   
    setInterval(() => {      

      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
      
      this.enemy.moveLeft()

      
      
    }, 200);
   }
}

module.exports = Game;
