/**
 * Created by SamSung on 2018/1/18.
 */
var num = 0;
for(var i=0; i<24; i++)
{
    var oImg = new Image();
    oImg.onload = function(){//小图
        num++;
        if(num == 48){
            loadSuccess();
        }
    }
    oImg.src="img/thumbs/"+(i+1)+".jpg";
}
for(var i=0; i<24; i++)
{
    var oImg = new Image();
    oImg.onload = function(){//大图
        num++;
        if(num == 48){
            loadSuccess();
        }
    }
    oImg.src="img/"+(i+1)+".jpg";
}
function loadSuccess() {
    for(var i=0;i<24;i++){
        var $oImg=$("<img src='img/thumbs/"+(i+1)+".jpg'/>");
        $oImg.addClass("img");
        $oImg.appendTo($("#content"));
    }
    $(".img").on("tap",function(){
        console.log(111);
        var idx=$(this).index();
        iNow=idx;
        $("#content").hide();
        //$("#img-box").show().css("background-image","url(img/"+(idx+1)+".jpg) ");
        $("#img-box").show().css({
            "background-image": "url(img/"+(idx+1)+".jpg)",
            "background-size" : "contain"
        });
        return false;

    });
    $("#img-box").on("tap",function(){


        $("#content").show();
        //$("#img-box").show().css("background-image","url(img/"+(idx+1)+".jpg) ");
        $("#img-box").hide();
        return false;
    });

    $("#img-box").on("swipeleft",function(){
        iNow++;
        if(iNow==24){
            iNow=0;
        }
        $(this).css({
            "background-image": "url(img/"+(iNow+1)+".jpg)",
            "background-size" : "contain"
        })
    });
    $("#img-box").on("swiperight",function(){
        iNow--;
        if(iNow==-1){
            iNow=23;
        }
        $(this).css({
            "background-image": "url(img/"+(iNow+1)+".jpg)",
            "background-size" : "contain"
        })
    });

}

