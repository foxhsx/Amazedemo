import '../style/canlender.scss';
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
$('#main tr').each(function(k,v){                   
           $(v).children('td').each(function(m,n){
             // 遍历 tr 的各个 td
            $(n).siblings().css('background-color','');  // 遍历 tr 的各个 td
            $(n).click(function(){
                $(v).siblings().children('td').css('background-color','');
                $(this).siblings().css('background-color','');
                $(this).css('background-color','#ddd'); 
                               
            })     
        });
    });
//  $('#main td').click(function(){
//             $(this).css('background-color','#ddd'); 
//             $(this).siblings().css('background-color','')
//  });