$(document).ready(function () {

    $("#ThemeNavWrapper").hide();
	window.historyGoURL="/";
	//活动规则
    let end,round= 2,ms = 150; //round表示转几圈后开始抽奖，ms控制抽奖转圈速度，//end表示抽到的积分或者券

    setTimeout(function () {
        $(".nomal").css({
            height:$(".nomal").width(),
            zIndex:1
        });
        $(".quan-border").css({
            height:$(".quan-border").width()
        });
        $(".quan0").css({"left":"9%","top":'10%'});
        $(".quan0_1").css({"left":"9%","top":'10%'});
        $(".quan1").css({"left":"37%","top":'10%'});
        $(".quan1_1").css({"left":"37%","top":'10%'});
        $(".quan2").css({"left":"65%","top":'10%'});
        $(".quan2_1").css({"left":"65%","top":'10%'});
        $(".quan7").css({"left":"9%","top":'37%'});
        $(".quan7_1").css({"left":"9%","top":'37%'});
        $(".quan3").css({"left":"65%","top":'37%'});
        $(".quan3_1").css({"left":"65%","top":'37%'});
        $(".quan6").css({"left":"9%","top":'64%'});
        $(".quan6_1").css({"left":"9%","top":'64%'});
        $(".quan5").css({"left":"37%","top":'64%'});
        $(".quan5_1").css({"left":"37%","top":'64%'});
        $(".quan4").css({"left":"65%","top":'64%'});
        $(".quan4_1").css({"left":"65%","top":'64%'});
    },200);
    var flag = true;
    $(".chou-tap").click(function (e) {
        console.log('click')
        e.preventDefault();
    	if(!flag){
    		return;
    	}
    	flag = false;
                  //end表示抽到的积分或者券的位子
            end = 5;
        getPrize(0,end,round,ms);
        function getPrize(start,end,round,interval){
            var nowNum = start;
            var myRound = round;
            rotation();
            function rotation(){
                if( myRound > 0 ){
                    setTimeout(function(){
                        nowNum++;
                        if(nowNum > 7){
                            nowNum = 0;
                            myRound--;
                        }
                        // console.log('block',$('.quan'+nowNum+"_1"))
                        $('.quan'+nowNum+"_1").css({"display":"block","zIndex": 2});
                        $('.quan'+nowNum+"_1").siblings().css({"display":"none"});
                        // console.log('nowNum:',nowNum,'myRound:',myRound);
                        rotation();
                    },interval);
                }else if(myRound === 0){
                    setTimeout(function(){

                        // console.log('nowNum:',nowNum,'myRound:',myRound);
                        $('.quan'+nowNum+"_1").css({"display":"block","zIndex": 2});
                        $('.quan'+nowNum+"_1").siblings().css({"display":"none"});
                        if( nowNum != end ){
                            nowNum++;
                            rotation();
                        }else{

                            //这里写弹窗
                            flag = true;

                            return null;
                        }
                    },interval)
                }
            }
        }

    });
});

