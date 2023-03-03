let x= 0
let y = 0



basic.forever(function () {
//y cordinaten instellen
    if (input.acceleration(Dimension.Y)<-500){
        y=0 //blijft war hij is 
    }
    else if (input.acceleration(Dimension.Y)>500){
        y=4  //gaat max stand 

    }
    else{
        y=2
    }
    // x cordinaten instelllen
	if (input.acceleration(Dimension.X)<-500){
        x=0
    }
    else if (input.acceleration(Dimension.X)>500){
        x=4

    }
    else{
        x=2
    }
    //instellen van de led
    basic.clearScreen()
    led.plot(x,y)
})
