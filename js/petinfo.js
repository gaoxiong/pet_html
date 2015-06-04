
	$(function(){
         $.ajax({
             type:'get',
             async:false,
             url:"http://100.64.82.199:8080/app/user/achievement/list?userId=4",
             dataType:'jsonp',
             jsonp:'jsonpcallback',
             jsonpCallback:"success_jsonpCallback",
             success:function(result){
				generateText = "<table class='training_uint' border=0>";
                for (i = 0; i < result.length; i++)
                {
					generateText += "<tr><td><div class='img_clock'><img src='../img/clock.png' class='clock_img'></div>";
		            generateText += "<td colspan='2'>" + result[i].time + "</tr><tr><td>";
					generateText += "<td width='70%'>" + result[i].courseTitle + " - " + result[i].courseLevel;
					if (result[i].status !== "已完成")
					{
					  generateText += "<td width='90px'><span class='training_go' onclick='gotourl(\""+result[i].courseId+"\");'>进入训练</span></tr><tr><td>"
					} else {
					  generateText += "<td width='90px'></tr><tr><td>"
					}
					generateText += "<td colspan='2'>" + "状态：" + result[i].status + "</tr>"
                }
				generateText += "</table>"
				$("#training_history_module").html(generateText);
             }
         });
	});

	function gotourl(courseId) {
		document.location.href="../detail/detail.htm?courseId=" +courseId;
	}