var qsimCtrl = $.mvc.controller.create("qsim", {
   // views:["../views/hello.tpl","../views/world.tpl"], //These are the views we will use with the controller
    views: {
        "hello_tpl": "views/hello.tpl",
        "world_tpl": "views/world.tpl" 
    },
    world:function(){
        //This is the action "world".  We will load the "world.js" view.
        //When loading views, you must reference the folder path and file name.
        $("#main").html($.template('world_tpl'));
    },
    init:function(){
        //Here we can run any initializing code for this controller/
    },
    default:function(){
        //Let's load the "hello.js" view as th default.
        $("#main").html($.template("hello_tpl"));
        console.log("default");
    },
     save:function(){
        alert("save");
        //console.log($("#main").html());
        //console.log($.template("world_tpl"));
        $("#save-wrapper").html($.template("world_tpl"));
        //var str=$.template("world_tpl");
		//$("#main").append($(str));
    }
});
