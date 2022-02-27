function styling(){

    let window_width = window.outerWidth;
    let window_height = window.outerHeight;

    if(window_height <= 568){
        let welcome_caption = document.getElementsByClassName("team-caption");
        welcome_caption[0].style.marginTop = "-80px";
        welcome_caption[0].style.fontSize = "14pt";
    }
   
}

styling();