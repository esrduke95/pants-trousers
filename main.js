

let images= ["https://bit.ly/2Z5Popq","https://bit.ly/2LsBSnI","https://bit.ly/2LwrFqG"];
x = 0;

function changeImage()
{
    var img = document.querySelector(".carousel");
    console.log(img);
    img.src = images[x];
    x++;

    if(x >= images.length){
        x = 0;
    } 

    fadeImg(img, 1000, true);
    setTimeout("changeImage()", 10000);
}

function fadeImg(el, val, fade){
    if(fade === true){
        val--;
    }else{
        val ++;
    }

    if(val > 0 && val < 100){
        el.style.opacity = val / 100;
        setTimeout(function(){fadeImg(el, val, fade);}, 10);
    }
}


const init = ( ) =>{

setTimeout("changeImage()", 1000);
}



init();