window.onload = function() {

    // object containing configuration options
    let config = {
        type: Phaser.AUTO,
        width: 750,
        height: 460,
    
        physics: {
            default: 'arcade',
            arcade: {
                gravity: {y: 600},
                debug: false
            }
        },
    
        //scene: [mainScene, main2Scene, storyScene, story2Scene, level1]
        scene: [mainScene, storyScene, story2Scene, story3Scene, story4Scene, story5Scene, insScene, 
            goScene, goScene2, goScene3, goScene4, goScene5,
            level1Scene,level2Scene, level3Scene,level4Scene, level5Scene,
            youWonScene, endScene]
    
    };
    game = new Phaser.Game(config);
    window.focus();
    resize();
    window.addEventListener("resize", resize, false);
}


let game = new Phaser.Game(config);


function resize(){
    let canvas = document.querySelector("canvas");
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let windowRatio = windowWidth / windowHeight;
    let gameRatio = game.config.width / game.config.height;
    if(windowRatio < gameRatio){
        canvas.style.width = windowWidth + "px";
        canvas.style.height = (windowWidth / gameRatio) + "px";
    }
    else{
        canvas.style.width = (windowHeight * gameRatio) + "px";
        canvas.style.height = windowHeight + "px";
    }
}