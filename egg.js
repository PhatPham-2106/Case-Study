class Egg {
    constructor(x, size, imgSrc) {
        this.x = x;
        this.size = size;
        this.imgSrc = imgSrc
        this.y = -30
    }

    display(paper) {
        let pen = paper.getContext('2d');
        let img = new Image();
        img.src = this.imgSrc;
        pen.drawImage(img, this.x, this.y, 25, 35);

        // console.log(img)

    }
    moveDown() {
        this.y += 2;
    }
}