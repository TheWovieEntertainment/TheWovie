//   广告栏上滑消失
  $(document).ready(function(){
    setTimeout(function(){$("#ad").slideUp(600);
    },1200);
    
});

// 广告栏随机背景颜色
function bg(){
    var r=Math.floor(Math.random()*150+50);
    var g=Math.floor(Math.random()*150+50);
    var b=Math.floor(Math.random()*150+50);
    return  "rgb("+r+','+g+','+b+")";
}
function change(){
    // var bgcolor = Array("black","aqua","cadetblue","indianred","lightblue","#560764","#1D3E53","#B1D056","#1C1124","#EF9037");
    // var rand = parseInt(Math.random() * 10);
    // document.getElementById("ad").style.backgroundColor = bgcolor[rand];
    document.getElementById("ad").style.backgroundColor = bg();
}


// 二级菜单
$(document).ready(function(){
    $(".user").click(function(){
        if($(".menu").attr("one") == "hide"){
            $(".menu").css("display","block");
            $(".menu").attr("one","show");
        }else{
            $(".menu").css("display","none");
            $(".menu").attr("one","hide");
        }
            
    });
});

//点击 加载更多
$(document).ready(function(){
    $(".loadMore").click(function(){
        $(".wrapper").css("height","2000px");
        $(".cover").css("display","block");
        $(".loadMore").css("display","none");
    });
});


