// Bullet

// Use "create" when working with factory functions, avoid when dealing with constructor or classes.
// Do not log the function, then the variables bullets 1 and 2, otherwise, they will be returned as the values for the key-value pairs listed in the function.

// Factory Function

// function createBullet(speed, damage) {
// return {
// speed: speed,
// damage: damage,
// getDetails: function () {
// return `${this.speed}, ${this.damage}`;
// },
// };
// }

// const bullet1 = createBullet(20, 100);
// const bullet2 = createBullet(40, 60);

// console.log (bullet1, bullet2);

// Constructor Function

// function Bullet(speed, damage) {
// this.speed = speed;
// this.damage = damage;
// this.getDetails = function () {
// return `${this.speed}, ${this.damage}`;
// };
// }

// const bullet1 = new Bullet(20, 80);
// const bullet2 = new Bullet(50, 90);

// console.log (bullet1, bullet2);

// Class

class Bullet {
  constructor(speed, damage) {
    this.speed = speed;
    this.damage = damage;
  }

  getDetails() {
    return `${this.speed}, ${this.damage}`;
  }
}

const bullet1 = new Bullet(1000, 2000);
const bullet2 = new Bullet(2, 7);

// console.log(bullet1, bullet2);


//////////////

// Factory Function

// function createShip(hp, speed) {
// return {
// hp: hp,
// speed: speed,
// getDetails: function () {
// return `${this.hp}, ${this.speed}`;
// },
// };
// fireBullet: function () {
//   return new Bullet(1,1);
//   }
// };

// const ship1 = createShip(20, 100);
// const ship2 = createShip(40, 60);

// console.log (ship1, ship2);
// console.log (ship1.fireBullet());

/////////

// Constructor Function


// function ship(hp, speed) {
// this.hp = hp;
// this.speed = speed;
// this.getDetails = function () {
// return '${this.speed}, ${this.damage}'
// };
// this.fireBullet = function () {
// return new Bullet(1, 1);
// }
// }

// const ship1 = new ship(300, 30);
// const ship2 = new ship(25, 250);

// console.log(ship1, ship2);
// console.log(ship1.fireBullet());


////////

// Class

class ship {
  constructor(hp, speed) {
    this.hp = hp;
    this.speed = speed;
  }
  fireBullet() {
    return new Bullet(1, 1);
  }
}
const ship1 = new ship(400, 300);
const ship2 = new ship(30, 40);

// console.log(ship1, ship2);
// console.log(ship1.fireBullet());

/////////////

/// Alien

class alienClass {
  constructor(hp, coords, speeds) {
    this.hp = hp; 
    this.coords = coords; 
    this.speeds = speeds;
  }
    move() {
      this.coords.x += this.speeds.x;
      this.coords.y += this.speeds.y;
    }
    onHit(bullet){
this.hp -= bullet.damage
    }
  }

// const a1 = new alienClass(5, {x: -3, y: 2}, {x: 5, y: -1});
// console.log(a1);
// a1.move();
// console.log(a1);
// a1.move();
// console.log(a1);
// const b = new Bullet(1,1);

// a1.onHit(b);
// console.log(a1);


////// Barrier

class barrierClass {
  constructor(maxHP, currentHP, size, coords) {
    this.maxHP = maxHP; 
    this.currentHP = currentHP;
    this.size = size;
    this.coords = coords; 
  }
    repair() {
      if (this.currentHP >= this.maxHP) {
        this.size++;
      }
      else {
        this.currentHP++;
      }
    }
    break(){
      if (this.currentHP === 0) {
        this.size--;
      } 
      else {
        this.currentHP--;
      }
        }
  }
  const a2 = new barrierClass(5, 2, 42, {x: 5, y: -1});
  console.log(a2);
  a2.repair();
  console.log(a2);
  a2.break();
  console.log(a2);