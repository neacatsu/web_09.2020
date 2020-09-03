var tab=['picture/1.jpeg','picture/2.jpeg','picture/3.jpeg','picture/4.jpeg'];
var i=0;

window.onload=next;


function next(){
    if(i<tab.length){
        i++;
        document.getElementById("slider").style.backgroundImage="url('picture/"+i+".jpeg')";
    }
    else{
        i=1;
        document.getElementById("slider").style.backgroundImage="url('picture/"+i+".jpeg')";
    }
    
}

function prev(){
    if(i>0){
        document.getElementById("slider").style.backgroundImage="url('picture/"+i+".jpeg')";
        i--;
    }
    else{
        i=tab.length;
        document.getElementById("slider").style.backgroundImage="url('picture/"+i+".jpeg')";
        i--;
    }
    
    
}



