	//------------------------------------------
	// Initialize Firebase
	// TODO: Replace with your project's customized code snippet
	var config = {
		databaseURL: "https://selist-b33d9.firebaseio.com/"
	};
	firebase.initializeApp(config);
	//------------------------------------------
	function addTF(str)
	{
	　document.faceForm.face.value += str;
	}
	$(document).ready(function() {
		svn = localStorage.getItem("servername");
		usname = localStorage.getItem("username");
		$("#servername").val(svn);
		$("#name").val(usname);
		svn==""?resetRef("kyuuen"):resetRef(svn);
		$("#servername").on("change",function(){
			$("#servername").val()==""?$("#servername").val(svn):svn=$("#servername").val();
			localStorage.setItem("servername", svn);
			resetRef(svn);
		});
	});
	//
	
	//
    // データベースの参照を準備
	var db;
	console.log(firebase.database());
	db = firebase.database();
    var ref;
	var onchecked = false;
	// 既存メッセージを表示
	
	function resetRef(svn){
		if(ref) ref.off('child_added');
		ref = db.ref(svn); // ... 2
		$("#wrap").empty();
		ref.on('child_added', function(snapshot) { // ... 3
			var msg = snapshot.val();
			$('<li class="btn gl">').html('<a href="' +msg.name+ '" rel="lightbox[plants]" title="説明文 '+msg.month+'\/'+msg.date+' '+msg.hours+':'+msg.minutes+' #1"><img class="smallimage" src="' +msg.body+ '" alt="代替テキスト" /></a><button id="'+snapshot.key+'" style="z-index:500;">x</button>' ).prependTo('#wrap');
//			$('<div class="chatlog">').html('<div type="button" class="btn ripple" data-clipboard-text="' +msg.body+ '"><span id="'+snapshot.key+'" style="position: relative;z-index:500;top:5px;"><span class="material-icons orange600">clear</span></span><span class="chatname">' +msg.name+ '</span><span class="date"> ('+msg.month+'\/'+msg.date+' '+msg.hours+':'+msg.minutes+')</span><span class="btn2">' +msg.body+ '</span></div></button><hr>' ).prependTo('#messages');
			//chatsound();
			$('.btn #'+snapshot.key).on('click', function(){
				ref.child(snapshot.key).remove();
				resetRef(svn);
				$("#myTable").trigger("update");
				});
			loadEmoji();
			$("#myTable").trigger("update");
		});
		onchecked=true;
		$("#myTable").trigger("update");
	}
    $('#send').click(function() {
		svn = $('#servername').val();
		ref = db.ref(svn);
		localStorage.setItem("servername" ,$("#servername").val());
        localStorage.setItem("username" ,$("#name").val());
		var date = new Date();
        var mo = date.getMonth() + 1;
        var da = date.getDate();
        var mi = date.getMinutes();
        var ho = date.getHours();
        // 新規メッセージを投稿
        ref.push({
			month: mo,
			date: da,
			minutes: mi,
			hours: ho,
			name: $('#name').val(),
			body: $('#message').val()
        });
        $('#message').val("");
		$("#myTable").trigger("update");
    });
    var clipboard = new Clipboard('.btn');
    clipboard.on('success', function(e) {
        //成功時の処理
    });
    clipboard.on('error', function(e) {
      //失敗時の処理
    });
/*    function chatsound() {
    	document.getElementById("ChatSound").play();
    };
    */

