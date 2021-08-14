class Game {
    constructor() {
        this.basket = new Basket(200, 560);
        this.score = 0;
        this.losegame=new Audio()
        this.wingame=new Audio()
        this.wingame.src='audio/ting.mp3';
        this.losegame.src='audio/lose.wav'
    }
    createBasket(paper) {
        this.basket.render(paper);
    }
    moveLeft() {
        this.basket.x -= 12;
        //alert(this.basket.y)
    }
    moveRight() {
        this.basket.x += 12;
    }

    createEgg(number) {
        for (let i = 0; i < number; i++) {
            let x = this.randomNumber(0, 400)
            let egg = new Egg(x, 30, 'image/egg.png')
            console.log(egg.x)
            egg.display(paper)
            eggs.push(egg);
        }
    }
    createEggLimited(number) {
        for (let i = 0; i < number; i++) {
            let x = this.randomNumber(0, 400)
            let egg = new Egg(x, 30, 'image/iconegg.png')
            console.log(egg.x)
            egg.display(paper)
            eggs.push(egg);
        }
    }
    createEggLimited2(number) {
        for (let i = 0; i < number; i++) {
            let x = this.randomNumber(0, 400)
            let egg = new Egg(x, 30, 'image/trungvang.png')
            console.log(egg.x)
            egg.display(paper)
            eggs.push(egg);
        }
    }
    ifCrash(obj1, obj2) {
        let left1 = obj1.x;
        let right1 = obj1.x + obj1.width + 18;
        let top1 = obj1.y;

        let left2 = obj2.x;
        let top2 = obj2.y;
        let right2 = obj2.x + 10;


        if ((top1 == top2) && (left1 < left2) && (right1 > right2)) {
            return true;
        } else if (top1 < top2) {
            return false;
        }
    }
    upScore() {
        this.score++
        document.getElementById('score').innerText = 'Score: ' + this.score
    }
    checkCrash() {
        for (let i = 0; i < eggs.length; i++) {
            if (this.ifCrash(this.basket, eggs[0]) == true) {
                this.wingame.play()
                eggs.splice(i, 1)
                this.upScore()
                if (this.score % 15 == 0) {
                    this.createEggLimited(1)
                    this.score += 4
                    return
                }
                else if (this.score % 10 != 0) {
                    this.createEgg(1)
                    return;
                }else  if (this.score % 50 == 0) {
                    this.createEggLimited2(1)
                    this.score += 9
                    return
                }
                
                else {
                    this.createEgg(1);
                    return;
                
            }
        }
            if (this.ifCrash(this.basket, eggs[0]) == false) {
                this.losegame.play()
                return false;
            }

        }
        // console.log(this.ifCrash(this.basket, eggs[0]))
    }
    checkout() {
        for (let i = 0; i < eggs.length; i++) {
            if (eggs[i].y == 700) {
                this.createEgg(1);
                eggs.splice(i, 1)
                return;
            }
        }
    }
    randomNumber(max, min) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    clearScreen(paper) {
        paper.getContext('2d').clearRect(0, 0, paper.width, paper.height);
    }

    moveEggs() {
        for (let i = 0; i < eggs.length; i++) {
            eggs[i].moveDown();
            //  console.log(eggs[i].y)
        }

    }
    displayEggs() {
        for (let i = 0; i < eggs.length; i++) {
            eggs[i].display(paper);
        }
    }
}