/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function(){
    
    var method;
    var noop=function () {};
    var methods = [
        'assert','clear','count','debug','dir','dirxml','error',
        'exception','group','groupCollapsed','groupEnd','info','log',
        'markTimeline','profile','profileEnd','table','time','timeEnd',
        'timeline','timelineEnd','timeStamp','trace','warn'
    ];
    
    var length=methods.length;
    var console=(window.console=window.console || {});
    while(length--){
        
        method =methods[length];
        
        if(!console[method]){
            
            console[method] = noop;
        }
    } 
 
}());

    //Slider JS





    
