let moon = document.querySelector('#moon');
let center_text = document.querySelector('#center_text');
let progress_bar = document.querySelector('#progress_bar');
let toggle_btn = document.querySelector('#toggle_btn');
let menu_ul = document.querySelector('.menu ul');

let toggle = false;
toggle_btn.addEventListener('click',function(){
    if(toggle == false){
        this.style.transform = 'rotate(180deg)';
        toggle = true;
    }else{
        this.style.transform = 'rotate(0deg)';
        toggle = false;
    }
    menu_ul.classList.toggle('active_menu');
});
window.addEventListener('scroll', function(){
    let scrollTop = window.scrollY;
    let doc_height = document.body.offsetHeight;
    let win_height = window.innerHeight;
    let scroll_percent = scrollTop / (doc_height - win_height);
    let main_scroll_percent = Math.round(scroll_percent * 100);
    progress_bar.style.width = main_scroll_percent + '%';
    moon.style.left = scrollTop + 'px';
    if(scrollTop > 70){
        center_text.style.opacity = 0.7;
    }else{
        center_text.style.opacity = 0;
    }
})