class Form{
    constructor(){
        this.title = createElement('h2')
        this.input = createInput("Name")
        this.button = createButton("Start")
        this.greeting = createElement('h3')

    }

    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()

    }

    display(){
        console.log("inside display form")
        
        this.title.html("Car Racing Game")
        this.title.position(displayWidth/2,10)      

        this.input.position(displayWidth/2,displayHeight/2 - 100)
        this.button.position(displayWidth/2 + 40 ,displayHeight/2)
        //arrow functions   ()=>{}
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            this.greeting.html("Hello  " + this.input.value() + "!" )
            this.greeting.position(displayWidth/2 + 40 ,displayHeight/2)

            playerCount = playerCount + 1;
            player.index = playerCount;
            player.updateCount(playerCount)
            player.name = this.input.value()
            player.update()

        })
    }



}