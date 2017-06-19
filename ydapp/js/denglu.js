var app=angular.module("app",[]);
app.controller("test",function($scope,$http,$timeout){
			 	 var data = $http.get("users.json");  //Promise对象
			 	 data.then(function(list){
			 	       console.log(list.data);
			 	 	   $scope.list=list.data.users;
			 	 },function(){
			 	 	  alert("fail");
			 	 })
                  $scope.user={"name":"","pass":""};
                  $scope.login=function(){
                  	   var arr=$scope.list;
                  	    for(var i=0;i<arr.length;i++){
                  	    	 if(arr[i].username==$scope.user.name && arr[i].password==$scope.user.pass){
                  	    	 	  $scope.info="登陆成功";
                  	    	 	  $scope.mz="suc";
                  	    	 	  break;
                  	    	 }
                  	    	 else{
                  	    	 	   $scope.info="用户名或密码错误";
                  	    	 	   $scope.mz="fail";
                  	    	 }
                  	    }
                  	    $timeout(function(){
                  	    	 $scope.info="";
                  	    },3000);
                  	    
                  }
                   
			 })