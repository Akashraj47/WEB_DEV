var arr = document.querySelectorAll(".drum");
for(var i = 0;i<arr.length;i++){
    arr[i].addEventListener("click",function(){
        var input = this.innerHTML;
        makeSound(input);
        Animation(input);
    });
}

document.addEventListener("keypress",function(event){
    var input = event.key;
    makeSound(input);
    Animation(input);

});

function makeSound(input){
    switch (input) {
        case 'w':
            var sound = new Audio("sounds\\tom-1.mp3");
            sound.play();
            break;
    
        case 'a':
            var sound = new Audio("sounds\\tom-2.mp3");
            sound.play();
            break;
    
        case 's':
            var sound = new Audio("sounds\\tom-3.mp3");
            sound.play();
            break;
    
        case 'd':
            var sound = new Audio("sounds\\tom-4.mp3");
            sound.play();
            break;
    
        case 'j':
            var sound = new Audio("sounds\\snare.mp3");
            sound.play();
            break;
        
        case 'k':
            var sound = new Audio("sounds\\crash.mp3");
            sound.play();
            break;
    
        case 'l':
            var sound = new Audio("sounds\\kick-bass.mp3");
            sound.play();
            break;
    
        default:
            break;
    }
}

function Animation(input){
    var curr_selected = document.querySelector("."+input);
    curr_selected.classList.add("pressed");
    setTimeout(function (){curr_selected.classList.remove("pressed")},100);
}