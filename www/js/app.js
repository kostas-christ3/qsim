var QS={};

QS.starting_state=[];
QS.board=[];
QS.currentStep = 0;

QS.addStep=function(){
	var stepsNumber = QS.getStepsNumber();
	var gates=[];
	var step = {id:stepsNumber, gates:gates};
	
	if(QS.currentStep == stepsNumber)
	{
		QS.board.push(step);
	}
	else
	{
		var new_index = QS.currentStep;
		QS.board.splice(new_index, 0, step);
		QS.board[new_index].id = new_index;
		
		stepsNumber++;
		for(var i=new_index; i<stepsNumber; i++)
		{
			QS.board[i].id = new_index++;
		}
	}
	
	var lines = QS.getLinesNumber();
	var new_index = QS.currentStep;
	for(var i=0; i<lines; i++)
	{
		QS.addGate(new_index);
	}
	
}

QS.addLine=function(){
	var stepsNumber = QS.getStepsNumber();
	var line = QS.getLinesNumber();
	for(var i=0; i<stepsNumber; i++)
	{
		QS.addGate(i);
	}

    var new_ss = {line:line, value:0};

    QS.starting_state.push(new_ss);
}

QS.addGate=function(stepNo){
	var gate_id = QS.getGatesNumber(stepNo);
	var phase = 0;
	var name = '';
	var inputs = [];
	var outputs = [];
	name = 'null';
	
	var gate = {gate_id:gate_id, phase:phase, name:name, inputs:inputs, outputs:outputs};
	QS.board[stepNo].gates.push(gate);
}

QS.deleteStep=function(){
	var stepsNumber = QS.getStepsNumber();
	var dlt_index = QS.currentStep - 1;
	QS.board.splice(dlt_index, 1);
	
	
	for(var i=dlt_index; i<stepsNumber; i++)
	{
		QS.board[i].id = dlt_index;
	}
}

QS.deleteLine=function(lineNo){
	var stepsNumber = QS.getStepsNumber();
	var lines = QS.getLinesNumber() - 1;
	
	for(var j=0; j<stepsNumber; j++)
	{
		QS.board[j].gates.splice(lineNo, 1);
		for(var i=0; i<lines; i++)
		{
			QS.board[j].gates[i].gate_id = i;
		}
	}
}

QS.set_starting_state=function(lineNo, value)
{
    QS.starting_state[lineNo].value = value;
}

QS.moveLineUp=function(lineNo)
{
	var stepsNumber = QS.getStepsNumber();
	var lines = QS.getLinesNumber();
	lines--;
	
	if(lineNo == 0)
		return;
	if(lineNo > 0)
	{
		for(var i=0; i<stepsNumber; i++)
		{
			lineNo--;
			var first = clone(QS.board[i].gates[lineNo]);
			var second = clone(QS.board[i].gates[++lineNo]);

			QS.board[i].gates.splice(--lineNo,2,second,first);
			
			QS.board[i].gates[lineNo].gate_id = lineNo;
			QS.board[i].gates[++lineNo].gate_id = lineNo;
			
		}

        var curr_ss = QS.starting_state[lineNo].value;
        QS.starting_state[lineNo].value = QS.starting_state[--lineNo].value;
        QS.starting_state[lineNo].value = curr_ss;
	}
}

QS.moveLineDown=function(lineNo)
{
	var stepsNumber = QS.getStepsNumber();
	var lines = QS.getLinesNumber();
	lines--;

	
	if(lineNo == lines)
		return;
	if(lineNo < lines)
	{
		for(var i=0; i<stepsNumber; i++)
		{
			var first = clone(QS.board[i].gates[lineNo]);
			var second = clone(QS.board[i].gates[++lineNo]);

			QS.board[i].gates.splice(--lineNo,2,second,first);
			
			QS.board[i].gates[lineNo].gate_id = lineNo;
			QS.board[i].gates[++lineNo].gate_id = lineNo;
			lineNo--;
		}

        var curr_ss = QS.starting_state[lineNo].value;
        QS.starting_state[lineNo].value = QS.starting_state[++lineNo].value;
        QS.starting_state[lineNo].value = curr_ss;
	}
}


QS.getGatesNumber=function(stepNo)
{
    return QS.board[stepNo].gates.length;
}

QS.getLinesNumber=function()
{
    return QS.board[0].gates.length; // Ola ta step exoun idio ari8mo pylwn
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

function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
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
