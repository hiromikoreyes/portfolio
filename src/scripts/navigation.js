function scrollToAbout(){
    const about = document.getElementById("center-div");
    about.scrollIntoView({ block: "center" });
}

function scrollToProjects(){
    const about = document.getElementById("projects");
    about.scrollIntoView({ block: "end" });
}

function scrollToMusic(){
    /* not here yet */
}
function scrollToContact(){
    /* not here yet */
}




export{scrollToAbout, scrollToProjects, scrollToMusic, scrollToContact}