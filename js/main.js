

const aboutme = {firstname:'Eric', lastname:'Sutton',
bio1:"Hi, I’m Eric! I’m a graphic designer from Edmonton, Aberta, with a passion for exploring design in all its forms and the effect it has on the world around us  I want to make things that inspire people, whatever form that happens to take",
bio2: "I consider myself a bit of a generalist, but if I really had to narrow it down I’d say my area of expertise lies more within the realm of web and digital design. I like to dive deep into my projects; learning about new things is fun, and the best design comes from having a complete picture of the problem at hand."
}


document.querySelector('.button1').addEventListener("click",()=>{
    document.querySelector(".Picture1").innerHTML=
    "<img src='img/ERIC.jpg' alt='Logo'>"
    document.querySelector(".Aboutme").innerHTML = '<span><h2>'+aboutme.bio1+'</h2></span> <span><p>'+aboutme.bio2+'</p></span>'
})




window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("header").style.backgroundColor = "#ffffff";
    document.querySelector("header").classList.remove ('now1')
  } else {
    document.querySelector("header").style.backgroundColor = "#ededed";
    document.querySelector("header").classList.add ('now1')
  }
}