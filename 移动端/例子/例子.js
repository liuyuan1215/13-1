var iNow=1;
$(document).on('swipeUp',function(){
    $('.page-'+iNow).attr('class','page-'+iNow+' moveToTop');
    $('.page-'+(iNow+1)).attr("class","page-"+(iNow+1)+" moveFromBottom");

    setTimeout(function(){
        $('.page-'+(iNow+1)).children().removeClass('hidden');
        $('.page-'+iNow).children().addClass('hidden');
        iNow++;
    }, 600);
});

$(document).on('swipeDown',function(){
    $('.page-'+iNow).attr('class','page-'+iNow+' moveToBottom');
    $('.page-'+(iNow-1)).attr("class","page-"+(iNow-1)+" moveFromTop");
    setTimeout(function(){
        $('.page-'+(iNow-1)).children().removeClass('hidden');
        $('.page-'+iNow).children().addClass('hidden');
        iNow--;
    }, 600);   
});