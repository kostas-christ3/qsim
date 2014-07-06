var todoCtrl = $.mvc.controller.create('todo', {
    views: {
        "list_tpl": "views/list.tpl",
    },
   
    
    default:function() {
        todo.fetchAll(function(all) {
			
			
			if(QS.getStepsNumber() == 0)
			{
				QS.addStep();
				
			}
			
			console.log(QS);
            $("#first-page-wrapper").html($.template('list_tpl'));
            
        });

    },
    /* This is executed when the controller is created.  It assumes the views are loaded, but can not interact with models
     * This is useful for wiring up page events, etc.
     */
    init: function() {
		
    }
});
