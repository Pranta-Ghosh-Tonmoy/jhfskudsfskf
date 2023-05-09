$(function () {
   'use strict';

// Sidebar Toggle
   $('#sidebar_toggler').on('click', function(){
    $('#sidebar').toggleClass('sidebar_collapse');
    $('#main_page').toggleClass('main_show');
   })


// Back To Top
$(window).on(`scroll` , function (){
   var scrollsize = $(window).scrollTop()

   if (scrollsize > 400) {
    $(`.backtotop`).slideDown()
   }
   else {
    $(`.backtotop`).slideUp()
   }
})


$(`.backtotop`).on(`click` , function () {
    $(`html, body`).animate({
        scrollTop:0
    },0)
})



})

const ps = new PerfectScrollbar('#nav');

let checkAll = document.getElementById('check-all')
let otherCheckboxes = document.querySelectorAll('#user_table input[type=checkbox]:not(#check-all)')

checkAll.addEventListener('change', onCheckAllChange)
otherCheckboxes.forEach(input => input.addEventListener('change', onOtherCheckboxChange))

function onCheckAllChange() {
  otherCheckboxes.forEach((input) => input.checked = checkAll.checked)
}

function onOtherCheckboxChange() {
  let allChecked = Array.from(otherCheckboxes).every(input => input.checked);
  checkAll.checked = allChecked;
}









// On click button color change

const btn = document.querySelector('.test');

btn.addEventListener('click', () => {
  btn.style.backgroundColor = 'linear-gradient(180deg, #FFD700 0%, #FDBB12 100%)';
  btn.classList.toggleClass(`test`);
});