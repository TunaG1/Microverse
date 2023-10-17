const navBtn = document.querySelector(".nav-mobile-button");
const navLine = document.querySelectorAll(".nav-mob-line");
const mobileMenu = document.getElementById("mobile_menu");

navBtn.addEventListener("mouseenter", function(e) {
    e.preventDefault()
    navLine.forEach(function(e) {
        e.classList.toggle('rotate')
    })
})

function myFunc() {
    console.log('tr')
    if (mobileMenu.style.display === "none") {
        mobileMenu.style.display = "block"
    } else {
        mobileMenu.style.display = "none"
    }

}

// Post
const postOne = document.getElementById("post-one");
const postTwo = document.getElementById("post-two");
const postThree = document.getElementById("post-three");
const postFour = document.getElementById("post-four");

// Close Buttons
const closePost = document.getElementById("close-post");
const closePostTwo = document.getElementById("close-post-2");
const closePostThree = document.getElementById("close-post-3");
const closePostFour = document.getElementById("close-post-4");

// Post Cards Expand
const postExpand = document.getElementById("post-1-expand");
const postExpandTWo = document.getElementById("post-2-expand");
const postExpandTHree = document.getElementById("post-3-expand");
const postExpandFOur = document.getElementById("post-4-expand");

// General
const postSect = document.getElementById("post_1");
const bodySec = document.getElementById("body");
const containerCont = document.getElementById("container-cont");






// POST 1 OPEN
postOne.addEventListener("click", function(e) {
    e.preventDefault()
    postOne.style.display = 'none'
    if (postOne.style.display === 'none') {
        postExpand.style.display = 'block';
        postExpand.style.position = 'absolute';
        postExpand.style.animationName = 'post-anime'
        postExpand.style.animationDuration = '1s'
        containerCont.classList.add('body-bg-blur')

        window.scrollTo({
            top: 100,
            behavior: "smooth",
          });
    }
    
})
// POST 1 CLOSE
closePost.addEventListener("click", function() {
    postExpand.style.display = 'none'

    if (postExpand.style.display === 'none') {
        postOne.style.display = 'grid';
        bodySec.style.backgroundColor = '#fff';
        containerCont.classList.remove('body-bg-blur');
    }

    window.scrollTo({
        top: 400,
        behavior: "smooth",
      });
})

// POST 2 OPEN
postTwo.addEventListener("click", function(e) {
    e.preventDefault()
    postTwo.style.display = 'none'

    if (postTwo.style.display === 'none') {
        postExpandTWo.style.display = 'block';
        postExpandTWo.style.position = 'absolute';
        postExpandTWo.style.animationName = 'post-anime'
        postExpandTWo.style.animationDuration = '1s'
        containerCont.classList.add('body-bg-blur')

        window.scrollTo({
            top: 1250,
            behavior: "smooth",
          });
    }
})

// POST 2 CLOSE
closePostTwo.addEventListener("click", function() {
    postExpandTWo.style.display = 'none'

    if (postExpandTWo.style.display === 'none') {
        postTwo.style.display = 'grid';
        bodySec.style.backgroundColor = '#fff';
        containerCont.classList.remove('body-bg-blur');
    }

    window.scrollTo({
        top: 1250,
        behavior: "smooth",
      });
})


// POST 3 OPEN
postThree.addEventListener("click", function(e) {
    e.preventDefault()
    postThree.style.display = 'none'

    if (postThree.style.display === 'none') {
        postExpandTHree.style.display = 'block';
        postExpandTHree.style.position = 'absolute';
        postExpandTHree.style.animationName = 'post-anime'
        postExpandTHree.style.animationDuration = '1s'
        containerCont.classList.add('body-bg-blur')

        window.scrollTo({
            top: 2000,
            behavior: "smooth",
          });
    }
})
// POST 3 CLOSE
closePostThree.addEventListener("click", function() {
    postExpandTHree.style.display = 'none'

    if (postExpandTHree.style.display === 'none') {
        postThree.style.display = 'grid';
        bodySec.style.backgroundColor = '#fff';
        containerCont.classList.remove('body-bg-blur');
    }

    window.scrollTo({
        top: 2700,
        behavior: "smooth",
      });
})

// POST 4 OPEN
postFour.addEventListener("click", function(e) {
    e.preventDefault()
    postFour.style.display = 'none'

    if (postFour.style.display === 'none') {
        postExpandFOur.style.display = 'block';
        postExpandFOur.style.position = 'absolute';
        postExpandFOur.style.animationName = 'post-anime'
        postExpandFOur.style.animationDuration = '1s'
        containerCont.classList.add('body-bg-blur')

        window.scrollTo({
            top: 2700,
            behavior: "smooth",
          });
    }
})
// POST 4 CLOSE
closePostFour.addEventListener("click", function() {
    postExpandFOur.style.display = 'none'

    if (postExpandFOur.style.display === 'none') {
        postFour.style.display = 'grid';
        bodySec.style.backgroundColor = '#fff';
        containerCont.classList.remove('body-bg-blur');
    }

    window.scrollTo({
        top: 2700,
        behavior: "smooth",
      });
})