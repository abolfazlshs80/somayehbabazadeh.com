
$("#banner-title").fadeOut(0);
$(document).ready(function () {

    $(document).scroll(function () {
        //    $("body").css("background-color", "red");

        if (window.scrollY == 0) {
            $("#menu").css("background-color", "transparent");
        }
        else {
            $("#menu").css("background-color", "#4D565D");
        }
    });
    let over = false;
    /*   $("#v-pills-tab>button").hover(function () {
           $(this).css("background-color", "#F8F8F8");
               
           }, function () {
               $(this).css("background-color", "#ffffff");
           }
       );*/
    $("#banner-title").fadeIn(5000);



    $("#v-pills-tab>button").click(function (e) {
        $("#v-pills-tab>button").css("background-color", "#ffffff");
        $(this).css("background-color", "#F8F8F8");

    });

    let i = 0;
    let person = document.querySelector(".number").textContent;
    let number = parseInt(person);
    function changenumber() {


        i = i + 1;
        if (i >= number) {
            document.querySelector(".number").textContent = number;
        }
        else {
            document.querySelector(".number").textContent = i;
        }


    }
    setInterval(function () {
        changenumber();
    }, 100);
});

// https://www.youtube.com/watch?v=SftSleFVYhE#t=27s




var text = document.getElementById('text');
var newDom = '';
var animationDelay = 6;

for (let i = 0; i < text.innerText.length; i++) {
    newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i]) + '</span>';
}

text.innerHTML = newDom;
var length = text.children.length;

for (let i = 0; i < length; i++) {
    text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
}

