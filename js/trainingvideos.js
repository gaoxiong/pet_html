
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
             type:'get',//jquey�ǲ�֧��post��ʽ�����
             async:false,
             url:http_host+"/app/login?mobile=13810426366",//���������URL
             dataType:'jsonp',
             //���ݸ�������������Ի��jsonp�ص��������Ĳ�����(Ĭ��Ϊ:callback)
             jsonp:'jsonpcallback',
             //�Զ����jsonp�ص��������ƣ�Ĭ��ΪjQuery�Զ����ɵ����������
             jsonpCallback:"success_jsonpCallback",
             //�ɹ���ȡ����������ϵ�json���ݺ�,�ᶯִ̬�����callback����
             success:function(result){
                 //alert(result.mobile);
             }
         });
     });