<div class="formGroupHead"></div>
	<form>
		<div class="input-group">
			<select id="gate_type">
				<option id="I" value="0" {{if(it.QS.board[it.QS.currentStep-1].gates[it.gate_id].name=="I"){}}selected{{}}}>I</option>
				<option id="H" value="1" {{if(it.QS.board[it.QS.currentStep-1].gates[it.gate_id].name=="H"){}}selected{{}}}>H</option>
				<option id="Ph" value="2" {{if(it.QS.board[it.QS.currentStep-1].gates[it.gate_id].name=="Ph"){}}selected{{}}}>Ph</option>
				<option id="CNot" value="3" {{if(it.QS.board[it.QS.currentStep-1].gates[it.gate_id].name=="CNot"){}}selected{{}}}>CNot</option>
				<option id="CCNot" value="4" {{if(it.QS.board[it.QS.currentStep-1].gates[it.gate_id].name=="CCNot"){}}selected{{}}}>CCNot</option>
				<option id="Ft1" value="5" {{if(it.QS.board[it.QS.currentStep-1].gates[it.gate_id].name=="Ft1"){}}selected{{}}}>Ft1</option>
				<option id="CPhase" value="6" {{if(it.QS.board[it.QS.currentStep-1].gates[it.gate_id].name=="CPhase"){}}selected{{}}}>CPhase</option>
				<option id="Ft2" value="7" {{if(it.QS.board[it.QS.currentStep-1].gates[it.gate_id].name=="Ft2"){}}selected{{}}}>Ft2</option>
				<option id="Cntr" value="8" {{if(it.QS.board[it.QS.currentStep-1].gates[it.gate_id].name=="Cntr"){}}selected{{}}}>Cntr</option>
			</select>
			<input type="search" placeholder="search">
			<textarea rows="6" placeholder="Enter your address"></textarea>
			<a class="button" onclick="$.mvc.route('/input/edit_gate/{{=it.QS.currentStep}}/{{=it.gate_id}}');">Edit Gate</a>
		</div>
	</form>
</div>
