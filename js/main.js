// let header=document.querySelector('header')
let header=document.getElementById('header')
window.onscroll=function(){
    if(scrollY >=126){
      header.style.background='#fff';
    }
    else{
      header.style.background='none';
    }
    
    
}