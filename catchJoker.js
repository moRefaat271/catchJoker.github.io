var speed = 920,
    myCounter = 0;
function pos1() {
  //  $('.box1 ,.box2 ,.box3').click(function() {
        $('.box1 ,.box2 ,.box3').css({
            position: "relative",
            backgroundImage: 'url(imgs/4.jpg)',
        });
    $('.box1').animate({
    top: '-240px',
    },speed);    
    $('.box1').animate({
        left: '240px',   
    },speed);
    $('.box1').animate({
    top: '0px',
    },speed);
    $('.box1').animate({
    left: '0px',
    },speed);
    $('.box2').animate({
    top: '240px',
    },speed);    
    $('.box2').animate({
        left: '240px',   
    },speed);
    $('.box2').animate({
    top: '0px',
    },speed);
    $('.box2').animate({
    left: '0px',
    },speed);
       
    $('.box3').animate({
        left: '-240px',   
    },speed);
    $('.box3').animate({
    top: '240px',
    },speed);
    $('.box3').animate({
    left: '0px',
    },speed);
    $('.box3').animate({
    top: '0px',
    },speed); 
//    })
}

function pos2() {
  //  $('.box1 ,.box2 ,.box3').click(function() {
        $('.box1 ,.box2 ,.box3').css({
            position: "relative",
            backgroundImage: 'url(imgs/4.jpg)',
        });
       
    $('.box1').animate({
        left: '240px',   
    },speed);
    $('.box1').animate({
    top: '240px',
    },speed);
    $('.box1').animate({
    left: '0px',
    },speed);
    $('.box1').animate({
    top: '0px',
    },speed); 
    $('.box2').animate({
    top: '240px',
    },speed);    
    $('.box2').animate({
        left: '240px',   
    },speed);
    $('.box2').animate({
    top: '0px',
    },speed);
    
         $('.box3').animate({
         top: '-240px',
    },speed);    
         $('.box3').animate({
        left: '-240px',    
    },speed);
        $('.box3').animate({
        top: '0px',
    },speed);    
//    })
}

function pos3() {
//    $('.box1 ,.box2 ,.box3').click(function() {
        $('.box1 ,.box2 ,.box3').css({
            position: "relative",
            backgroundImage: 'url(imgs/4.jpg)',
        });
    $('.box1').animate({
    left: '240px',
    },speed);    
    $('.box1').animate({
        top: '-240px',   
    },speed);
    $('.box1').animate({
    left: '240px',
    },speed);
    $('.box1').animate({
    top: '0px',
    },speed);
    $('.box1').animate({
        left: '240px',   
    },speed);
         $('.box2').animate({
        top: '-240px',
    },speed);    
         $('.box2').animate({
        left: '-240px',
    },speed);
        $('.box2').animate({
        top: '0px',
    },speed);
    $('.box3').animate({
    top: '240px',
    },speed);    
    $('.box3').animate({
        left: '-240px',   
    },speed);
    $('.box3').animate({
    top: '0px',
    },speed);
         $('.box3').animate({
        left: '0px',    
    },speed);
//    })
}

function pos4() {
  //  $('.box1 ,.box2 ,.box3').click(function() {
        $('.box1 ,.box2 ,.box3').css({
            position: "relative",
            backgroundImage: 'url(imgs/4.jpg)',
        });
    $('.box1').animate({
        left: '240px',   
    },speed);
    
    $('.box2').animate({
    top: '-240px',
    },speed);    
    $('.box2').animate({
        left: '240px',   
    },speed);
    $('.box2').animate({
    top: '0px',
    },speed);
             $('.box3').animate({
             top: '240px',
    },speed);    
             $('.box3').animate({
             left: '-480px',    
    },speed);
             $('.box3').animate({
             top: '0px',
    },speed);    
//    })
}

function pos5() {
  //  $('.box1 ,.box2 ,.box3').click(function() {
        $('.box1 ,.box2 ,.box3').css({
            position: "relative",
            backgroundImage: 'url(imgs/4.jpg)',
        });
     $('.box1').animate({
        top: '-240px',
    },speed);    
    $('.box1').animate({
        left: '480px',   
    },speed);
     $('.box1').animate({
        top: '0px',
    },speed); 
    $('.box2').animate({
    top: '240px',
    },speed);    
    $('.box2').animate({
        left: '-240px',   
    },speed);
    $('.box2').animate({
    top: '0px',
    },speed);
    $('.box3').animate({
     left: '-240px',    
    },speed);
//    })
}
function pos6() {
   // $('.box1 ,.box2 ,.box3').click(function() {
        $('.box1 ,.box2 ,.box3').css({
            position: "relative",
            backgroundImage: 'url(imgs/4.jpg)',
        });
    $('.box1').animate({
        top: '-240px',
    },speed);    
    $('.box1').animate({
        left: '480px',
    },speed);
    $('.box1').animate({
        top: '0px',
    },speed);    
       
    $('.box2').animate({
        left: '240px',   
    },speed);
    $('.box2').animate({
    top: '240px',
    },speed);
    $('.box2').animate({
    left: '0px',
    },speed);    
        $('.box2').animate({
         top: '0px',
    },speed); 
        
            $('.box3').animate({
            top: '240px',
    },speed);    
            $('.box3').animate({
            left: '-480px',    
    },speed);
            $('.box3').animate({
            top: '0px',
    },speed);    
            
//    })
}
var a = [pos1, pos2 ,pos3 ,pos4 ,pos5 ,pos6];


document.getElementById('b').onclick = function () {
    'use strict';
     speed = speed - 40 ;
    if (speed == 120) {
        speed = speed + 40 ;
    }
    myCounter = myCounter + 1 ;
    console.log(speed);
    document.getElementById('count').innerHTML = myCounter;
for (var i = 0 ; i < 300; i++) {
var posI = a[Math.floor(Math.random()*a.length)];
break;
    }
    setTimeout(function show() {
        'use strict';
        $(document).ready(function () {
       $('.box1 ,.box2 ,.box3').css({
        backgroundImage: '',   
    });
        });
    },0);
    setTimeout(function show() {
        'use strict';
        $(document).ready(function () {
       $('.box1 ,.box2 ,.box3').css({
        backgroundImage: 'url(imgs/4.jpg)',   
    });
        });
    },100);
    $(document).ready(posI);
}


document.getElementById('f').onclick = function () {
    'use strict';
   speed = speed +40 ;
    document.getElementById('trials').removeChild(document.getElementById('trials').firstElementChild);
   $(document).ready(function () {
       $('.box1 ,.box2 ,.box3').css({
        backgroundImage: '',
    });
       if (document.getElementById('trials').childNodes.length == 4) {
    $(document).ready(function () {
        $('.container').fadeOut(1000,function () {
            var  over = document.createElement('div'),
         text = document.createTextNode('Game Over');
                                        
        over.appendChild(text);
        document.body.appendChild(over);
        over.style.position = 'fixed';
        over.style.left ='35%';
        over.style.top = '40%';
        over.style.color = 'red';
        over.style.fontSize = '70px';
    
        over.classList.add('overStyle');
        for (var i = 0 ; i < 9999; i++) {
        $('.overStyle').animate({ fontSize: '100px'},1000);
        $('.overStyle').animate({ fontSize: '70px'},1000);
};
        });
    
    });
};
});
};
document.getElementById('c').onclick = function () {
    'use strict';
    speed = speed +40 ;
   document.getElementById('trials').removeChild(document.getElementById('trials').firstElementChild); 
   $(document).ready(function () {
       $('.box1 ,.box2 ,.box3').css({
        backgroundImage: '',    
    });
      if (document.getElementById('trials').childNodes.length == 4) {
    $(document).ready(function () {
        $('.container').fadeOut(1000,function () {
            var  over = document.createElement('div'),
         text = document.createTextNode('Game Over Fatima');
                                        
        over.appendChild(text);
        document.body.appendChild(over);
        over.style.position = 'fixed';
        over.style.left ='35%';
        over.style.top = '40%';
        over.style.color = 'red';
        over.style.fontSize = '70px';
    
        over.classList.add('overStyle');
        $('.overStyle').fadeIn(1000,function() {
            
        })    
        for (var i = 0 ; i < 9999; i++) {
        $('.overStyle').animate({ fontSize: '100px'},1000);
        $('.overStyle').animate({ fontSize: '70px'},1000);
};
        });
    
    });
};
   });
}; 