class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Submit");
        this.grettings = createElement("h1");
        
        
    }

    hide(){
        this.input.hide();
        this.buttin.hide();
        this.button.hide();
    }


display(){
   
    this.button.position(displayWidth/2-50,250);
    this.input.position(displayWidth/2-50, 200);
    
    
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.grettings.html("HI VIVAAN, FINDING PLAYERS...");
    
        this.grettings.position(600, displayHeight/2-200)
    })
    
}
}