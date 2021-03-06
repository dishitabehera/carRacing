class Game{
    constructor(){

    }
//anonymous functions - functions without name
    getState(){
        var ref = db.ref('gameState');
        ref.on("value",function(data){
            gameState = data.val();
        })
    }

    update(value){
        var ref = db.ref('/')
        ref.update({
            gameState: value
        })
    }

    start(){
        if(gameState === 0){
            console.log("Inside start")
            player = new Player()
            player.getCount();
            form = new Form();
            form.display();
        }

        car1 = createSprite(200,350)
        car1.addImage("car1IMG", car1Img)
        car2 = createSprite(400,350)
        car2.addImage("car2IMG", car2Img)
        cars = [car1, car2] // cars[0]-----> car1  cars[1]-------> car2
        
    }

    play(){
        /*
WE have 2 cars car1 and car2 and also 2 players player1 and player2
car1 to player1
car2 to player2
cars[0] ------ player1
cars[1]     player2
        */
       //image(var, x,y,width,height)
       background("grey")
       image(trackImg,0,-4* displayHeight,displayWidth, displayHeight*5 )
        form.hide();
        Player.getPlayerInfo();
        
        var aIndex = 0;
        var x = 130, y;
        
        for (var p in  allPlayers){
            aIndex = aIndex + 1
            x = x + 200;
            y = displayHeight - allPlayers[p].distance
            
            cars[aIndex -1].x = x
            cars[aIndex - 1].y = y

            if(aIndex === player.index){
                cars[aIndex - 1].shapeColor = "red"
                camera.position.x = displayWidth/2;
                camera.position.y = cars[aIndex-1].y
            } 
            /*else{
                cars[aIndex - 1].shapeColor ="black"
            }// player1  or player2
            //text(allPlayers[p].name+":" + allPlayers[p].distance , 150,displayPos)
            displayPos = displayPos + 50  */          
        }


        if(keyIsDown(UP_ARROW) && player.index != null && player.ended === false){
            player.distance = player.distance + 50
            player.update();
        }
        if(player.distance>5000){
            player.ended =  true
        }
        drawSprites()
    }





}