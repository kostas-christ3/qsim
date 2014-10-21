<div>{{if(it.QS.currentStep > 1){}}
<a class="button" onclick="$.mvc.route('/input/previous_step');" style="float:left">Previous Step</a>
{{}}}




{{if(it.QS.currentStep < it.QS.getStepsNumber()){}}
<a class="button" onclick="$.mvc.route('/input/next_step');" style="float:right">Next Step</a>
{{}}}
</div>



<ul class="list">

	
	{{ for(var i=0; i<it.QS.getLinesNumber(); i++){}}
		<li onclick="$.mvc.route('/input/options/{{=it.QS.board[it.QS.currentStep-1].gates[i].gate_id}}');">
		<table style="width:100%">
		<tr style="height:30%">
		  <td align="center" style="width:33%">
			{{if(it.QS.currentStep > 1){}}
				{{=it.QS.board[it.QS.currentStep-2].gates[i].name}}
			{{}}}
			{{if(it.QS.currentStep == 1){}}
				{{=it.QS.starting_state[i].value}}
			{{}}}
		  </td>
		  <td align="center" style="width:33%">
			
				{{=it.QS.board[it.QS.currentStep-1].gates[i].name}}
			
		  </td> 
		  <td align="center" style="width:33%">
			{{if(it.QS.currentStep < it.QS.getStepsNumber()){}}
				{{=it.QS.board[it.QS.currentStep].gates[i].name}}
			{{}}}
		  </td>
		  
		</tr>
		</table>
		</li>
	{{}}}
	

	
</ul>

<nav>
	<ul class="list">
		<li class="divider" class="icon home"></li>
		<li>
			<a onclick="$.mvc.route('/input/add_line');">Add Line</a>
		</li>
		<li>
			<a onclick="$.mvc.route('/input/add_step');">Add Step</a>
		</li>
		<li>
			<a onclick="$.mvc.route('/input/delete_step');">Delete Step</a>
		</li>
		<li>
			<a onclick="$.mvc.route('/input/simulate');">Simulate</a>
		</li>
		<li>
			<a href="#uiapi">Preview</a>
		</li>
	 
	</ul>
</nav>
