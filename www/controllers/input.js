var inputCtrl = $.mvc.controller.create("input", {
    views: {
        "input_tpl": "views/input.tpl",
        "input_gates_tpl": "views/input_gates.tpl",
        "step_transition_tpl": "views/step_transition.tpl",
        "gate_options_tpl": "views/gate_options.tpl",
        "gate_edit_form_tpl": "views/gate_edit_form.tpl",
    },
    
    init:function(){
        //Here we can run any initializing code for this controller/
    },
    default:function(){       
        
        QS.currentStep = 1;
        $("#input-page-wrapper").html($.template("input_tpl", {
				QS : QS
		}));
		$("#inputheader h1").html('Step ' + QS.currentStep);	

    },
    
    add_gate:function(){
		//$("#input-wrapper").append($.template("input_gates_tpl"));
		var step = QS.currentStep - 1;
		QS.addGate(step);
		
		$.ui.loadContent("#input-page",false,false,"pop");
		$("#input-page-wrapper").html($.template("input_tpl", {
				QS : QS
		}));
		
	},
	
    add_step:function(){
		QS.addStep();
		$("#input-page-wrapper").html($.template("input_tpl", {
				QS : QS
		}));
		
		console.log(QS);
	},
	
	next_step:function(){
		QS.currentStep++;
		
		$.ui.loadContent("#loadingPage",false,false,"slide");
		$("#loadingPage-wrapper").html($.template("step_transition_tpl"));
		$.ui.loadContent("#input-page",false,false,"slide");
		
		$("#input-page-wrapper").html($.template("input_tpl", {
				QS : QS
		}));
		$("#inputheader h1").html('Step ' + QS.currentStep);
	},
    previous_step:function(){
		QS.currentStep--;
		
		$.ui.loadContent("#loadingPage",false,false,"slide");
		$("#loadingPage-wrapper").html($.template("step_transition_tpl"));
		$.ui.loadContent("#input-page",false,false,"slide");
		
		$("#input-page-wrapper").html($.template("input_tpl", {
				QS : QS
		}));
		$("#inputheader h1").html('Step ' + QS.currentStep);
		
		
	},
	
    add_gate_form:function(){
		$.ui.loadContent("#gateEdit",false,false,"pop");
		$("#gateEdit").html($.template("input_gates_tpl"));
	},
	
    edit_gate_form:function(gate_id){
		$.ui.loadContent("#gateEdit",false,false,"pop");
		$("#gateEdit").html($.template("gate_edit_form_tpl", {
			QS: QS,
			gate_id: gate_id
		}));
	},
	
    edit_gate:function(current_step, gate_id){
		var e = document.getElementById("gate_type");
		var new_name = e.options[e.selectedIndex].value;
		var new_value = e.options[e.selectedIndex].id;
		
		QS.board[current_step-1].gates[gate_id].name = new_name;
		QS.board[current_step-1].gates[gate_id].name = new_value;
		
		$.ui.loadContent("#input-page",false,false,"pop");
		$("#input-page-wrapper").html($.template("input_tpl", {
				QS : QS
		}));
	},
	
    delete_gate:function(gate_id){
		QS.board[QS.currentStep-1].gates.splice(gate_id, 1);
		for(var i=0; i<QS.board[QS.currentStep-1].gates.length; i++)
		{
			QS.board[QS.currentStep-1].gates[i].gate_id = i;
		}
		
		$.ui.loadContent("#input-page",false,false,"pop");
		$("#input-page-wrapper").html($.template("input_tpl", {
				QS : QS
		}));
	},
	
    delete_step:function(gate_id){
		
		var del_step = QS.currentStep-1;
		
		if(QS.board.length == 1)
			return;
		
		
		QS.board.splice(del_step, 1);
		for(var i=0; i<QS.board.length; i++)
		{
			QS.board[i].id = i;
		}
		
		
		if(QS.currentStep == 1)
		{
			$.ui.loadContent("#loadingPage",false,false,"slide");
			$("#loadingPage-wrapper").html($.template("step_transition_tpl"));
			$.ui.loadContent("#input-page",false,false,"slide");
			
			$("#input-page-wrapper").html($.template("input_tpl", {
					QS : QS
			}));
			$("#inputheader h1").html('Step ' + QS.currentStep);
		}
		else
		{
			$.mvc.route('/input/previous_step');
		}
	},
	
    select_gate:function(gate){
		//$("#input-wrapper").append($.template("input_gates_tpl"));
		$("#inputheader h1").html('Step ' + QS.currentStep);
		//alert(gate);
	},
	
	options:function(gate_id){
		$.ui.loadContent("#gateOptions",false,false,"pop");
		$("#gateOptions").html($.template("gate_options_tpl", {
			gate_id: gate_id
		}));
    },
    
	simulate:function(gate_id){
		
		$.ajax({
		    type:"GET",
		    url:"http://www.wcl.ece.upatras.gr/gateway/qs_index.php?board=2_1n0_0n1n1n0_n0_n",
		    success:function(data){
			
				$.ui.loadContent("#results",false,false,"pop");
				$("#results").html(data);
			}
		});
		
		
    }
	
});
