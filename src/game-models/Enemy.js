// Враг.

class Enemy {
  constructor() {
    this.generateSkin();
    this.position = 50
  }

  generateSkin() {
    const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    if (this.position > 0){
    this.position -= 1;}
  }

  die() {
    this.position = '?';
    console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
