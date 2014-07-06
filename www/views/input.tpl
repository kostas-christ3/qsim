{{if(it.QS.currentStep > 1){}}
<a class="button" onclick="$.mvc.route('/input/previous_step');">Previous Step</a>
{{}}}


<a class="button" onclick="$.mvc.route('/input/add_gate_form');">Add Gate</a>
<a class="button" onclick="$.mvc.route('/input/add_step');">Add Step</a>
<a class="button" onclick="$.mvc.route('/input/delete_step');">Delete Step</a>
<a class="button" onclick="$.mvc.route('/input/simulate');">Simulate</a>

{{if(it.QS.currentStep < it.QS.getStepsNumber()){}}
<a class="button" onclick="$.mvc.route('/input/next_step');">Next Step</a>
{{}}}


<ul id="input_wrapper">
	{{ for(var i=0; i<it.QS.board[it.QS.currentStep-1].gates.length; i++){}}
		<li>
			<a class="button" onclick="$.mvc.route('/input/options/{{=it.QS.board[it.QS.currentStep-1].gates[i].gate_id}}');">
				{{=it.QS.board[it.QS.currentStep-1].gates[i].name}}
			</a>
		</li>
	{{}}}
</ul>

