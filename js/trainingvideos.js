
//http_host="http://100.64.82.199:8080";
http_host="http://100.64.73.18:8080";
	$(function(){
         $.ajax({
             type:'get',
             async:false,
             url:http_host+"/app/tutorial/list",
             dataType:'jsonp',
             jsonp:'jsonpcallback',
             jsonpCallback:"success_jsonpCallback",
             success:function(result){
				 generateText="";
                for (i = 0; i < result.length; i++)
                {
					generateText += "<div class='training_unit'>";
					generateText += "<div class='trainig_title'>"+result[i].title+"</div>";
					generateText += "<div class='trainig_level'>"+result[i].level+"</div>";
					if (result[i].level!="BEGINNER")
					{
						generateText += "<div class='trainig_reward'><img src='../img/reward.png' class='reward_img'></div>";
					}
					generateText += "<div class='trainig_desc'>"+result[i].desc+"</div>";
					generateText += "<div id='trainig_course_"+result[i].id+"'></div>";
					generateText += "</div>";
					getCource(result[i].id);
                }
				$("#training_tour").html(generateText);
             }
         });
	});
    function getCource(level) {
         $.ajax({
             type:'get',
             async:false,
             url: http_host + "/app/course/list?tutorialId="+level,
             dataType:'jsonp',
             jsonp:'jsonpcallback',
             jsonpCallback:"success_jsonpCallback",
             success:function(result){
				 generateText="";
				 j=0;
                for (i = 0; i < result.length; i++)
                {
					j = j+1;
					generateText += "<div id='course_unit_"+result[i].id+"' class='training_course' onclick='gotourl("+result[i].id+")'>" + j + ". " + result[i].title;
					generateText += "</div>";
                }
				generateText += "<div class='clear_div'></div>"
				//alert(generateText);
				$("#trainig_course_"+level).html(generateText);
             }
         });
     };

	 function gotourl(id) {
		 document.location.href="../detail/detail.htm?courseId=" +id;
	 }
		
     $("#b02").click(function(){
		 //alert("pets://training_details");
	 });
     $("#b01").click(function(){
         $.ajax({
             type:'get',//jquey是不支持post方式跨域的
             async:false,
             url:http_host+"/app/login?mobile=13810426366",//跨域请求的URL
             dataType:'jsonp',
             //传递给请求处理程序，用以获得jsonp回调函数名的参数名(默认为:callback)
             jsonp:'jsonpcallback',
             //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
             jsonpCallback:"success_jsonpCallback",
             //成功获取跨域服务器上的json数据后,会动态执行这个callback函数
             success:function(result){
                 //alert(result.mobile);
             }
         });
     });