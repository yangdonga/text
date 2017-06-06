$(function(){
	var $num=0,
		$len=$("#banner li").size();
	$("#contain").on("swipeLeft",function(){
		$num++;
		if($num>=$len)
		{
			$num=$len-1;
		}
		changeImg($num);
	})
	.on("swipeRight",function(){
		$num--;
		if($num<=0)
		{
			$num=0;
		}
		changeImg($num);
	})
	function changeImg(n)
	{
		$("#banner").css("-webkit-transform","translate3d("+(-n*100)+"%,0,0)");
		$("#btn li").eq(n).find("a").addClass("bg").parent().siblings().find("a").removeClass();
	}
	$("#aBtn").on("click",function(){
		location.href="../当当网/index.html";
	})
})
