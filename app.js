let left_btn = document.getElementsByClassName('bi-chevron-left')[0];
let right_btn = document.getElementsByClassName('bi-chevron-right')[0];
let cards = document.getElementsByClassName('cards')[0];

left_btn.addEventListener('click', ()=>
{
    cards.scrollLeft -= 140;
})

right_btn.addEventListener('click', ()=>
{
    cards.scrollLeft +=140;
})
