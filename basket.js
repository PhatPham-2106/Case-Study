class Basket {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.width = 50
        this.height = 30
        this.imgSrc = 'image/ro.png'
    }
    render(paper) {
        let pen = paper.getContext('2d');
        let img = new Image()
        img.src = this.imgSrc
        pen.drawImage(img, this.x, this.y, 80, 40);
    }

}