import '../style/tuwen.scss';
import '../style/common.scss';
var btn = document.querySelector('.list-button'), common = document.querySelector('.common')
btn.onclick = function(){
    common.style.display = 'none'
}
var  total =  document.querySelector('.total');
var toggle = document.querySelector('.toggle');
var  hide =  document.querySelector('.hide');
    toggle.onclick = function(){
        hide.classList.toggle('hide');
    }