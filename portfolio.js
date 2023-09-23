let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
let imageindex = 0;
slider();

function openTab(tabname){
    console.log(tabname)
    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function slider(){
    let i;
    let img = document.getElementsByClassName("slide");
    for(i=0; i<img.length; i++){
        img[i].style.display = "none";
    }
    imageindex++;
    if (imageindex > img.length){
        imageindex = 1
    }
    img[imageindex-1].style.display = "block";
    setTimeout(slider, 3000);
}