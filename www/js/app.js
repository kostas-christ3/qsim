var QS={};

QS.board=[];
QS.currentStep = 0;

QS.addStep=function(){
	var id = QS.getStepsNumber();
	var gates=[];
	var step = {id:id, gates:gates};
	QS.board.push(step);
}
QS.addGate=function(stepNo){
	var gate_id = QS.getGatesNumber(stepNo);
	var type = '';
	var name = '';
	var inputs = [];
	var outputs = [];
	
	var e = document.getElementById("gate_type");
	type = e.options[e.selectedIndex].value;
	name = e.options[e.selectedIndex].id;
	
	var gate = {gate_id:gate_id, type:type, name:name, inputs:inputs, outputs:outputs};
	QS.board[stepNo].gates.push(gate);
}

QS.deleteStep=function(){

}

QS.deleteGate=function(){

}

QS.getGatesNumber=function(stepNo)
{
    return QS.board[stepNo].gates.length;
}
QS.getStepsNumber=function()
{
	var count = 0;

    for(var prop in QS.board) {
        if(QS.board.hasOwnProperty(prop))
            ++count;
    }

    return count;
}




var app = new $.mvc.app();

app.loadModels("todo");
app.loadControllers("todo");
app.loadControllers("input");
//Routing by hash change
//app.listenHashChange();


$.mvc.addRoute("/archived",function(d){
    console.log("Archive panel switch via hash change",arguments,d);
})

//Try routing to these in the chrome console
$.mvc.addRoute("/foo/bar",function(d){
    console.log("bar",arguments,d);
});

$.mvc.addRoute("/foo/foo",function(){
    console.log("foo",arguments);
});

$.mvc.addRoute("/foo",function(){
    alert("foo");
});

//We wait until app.ready is available to fetch the data, then we wire up the existing data in the templates
app.ready(function(){

    $.mvc.route("/todo");//Load the default todo route
});
