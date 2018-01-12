$(function(){
	var str=$("#info").html();
    var f=_.template(str);
    var url="json/list.json";
    $.get(url,function(json){
    	
    	var arr=json;
    	var h=f(arr);
        var oTbody=document.getElementsByTagName("tbody")[0];
        oTbody.innerHTML+=h;
        $(".delBtn").click(function(){
    	   $(this).parent().parent().remove();
        })
        chooseAll();
        delmore();
    })
    
})
	
function chooseAll(){
	$("#allChoose").click(function(){
		if($("#allChoose").prop("checked")==true){
			$(".choose").prop("checked",true);
		}else{
			$(".choose").prop("checked",false);
		}
	})
	$(".choose").click(function(){
		var count=0;
		for (var i = 0; i < $(".choose").length; i++) {
			
			if($(".choose").eq(i).prop("checked")==true){
				count++;
			}
		}
		if(count==$(".choose").length){
				$("#allChoose").prop("checked",true);
		}else if(count<$(".choose").length){
				$("#allChoose").prop("checked",false);
		}
	})
}

function delmore(){
	$("#delBtn").click(function(){
		for (var i = 0; i < $(".choose").length; i++) {
			if($(".choose").eq(i).prop("checked")==true){
				$(".choose").eq(i).parent().parent().hide();
			}
		}
	})
}

function updateInfo(){
	$(".updateBtn").click(function(){
		$('#addHtml').html();
	})
}
