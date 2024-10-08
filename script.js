$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Author", "Developer", "Gamer", "Athlete"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Author", "Developer", "Gamer", "Athlete"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

let isOriginal = true;
function onClickButton() {
    if (isOriginal) {
        document.getElementById("about-profile").src = "./images/Game-Profile.jpg";
        document.getElementById("description").innerHTML = `
            I also go by Nyakorare as my In-Game name and I play lots of games, particularly on the genre of Cozy, Tower Defense, and Story-Driven Singleplayers.
            <br><br>
            I'm an active Co-op guy who likes to goof around with friends in different types of games, more particularly on the genre of Horror, RPGs, and Survival.
            <br><br>
            I also play Online Shooters (excluding Valorant), and I love to trash talk lots of people(even teammates) when it comes to these type of games.
            `;
        document.getElementById("game").innerHTML = "Game Persona";
    } else {
        document.getElementById("about-profile").src = "./images/profile-1.jpg";
        document.getElementById("description").innerHTML = `
            I am currently a 3rd Year Computer Science Student studying at Technological University of the Philippines, and
            I am an aspiring Full Stack Developer with a passion for creating beautiful and functional systems.
            <br><br>
            I also have the passion for Game Development, especially on the platform "Roblox" which ignited my passion for programming in 6th Grade.
            <br><br>
            And as for my hobbies, I like creating fictional stories tackling mostly on drama, tragedy, Seinen, philosophical and science-fiction (Lost World Category) genres.
            I also enjoy playing sports such as Volleyball & Badminton.
            <br><br>
            <i><strong>I believe in the sayings:</strong></i>
            <br>
            &rarr; <q>The best way to predict the future is to create it</q>
            <br>
            &rarr; <q>If you're used to pain, there are people who would be hurt by watching you get hurt.</q>
            <br>
            &rarr; <q>People usually don't look back to see how far they've come while they're still walking. But when they come to a standstill, the more progress they've made, the more betrayed they feel by their expectations.</q>
            <br>
            &rarr; <q>Excuses are meaningless. The tougher things get, the more likely people are to come to their own conclusions.</q>
        `;
        document.getElementById("game").innerHTML = "Real Persona";
    }
    isOriginal = !isOriginal;
}