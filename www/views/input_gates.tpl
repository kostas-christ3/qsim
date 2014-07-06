<div class="formGroupHead">Grouping</div>
	<form>
		<div class="input-group">
			<select id="gate_type" onchange="$.mvc.route('/input/select_gate/'+this.value);">
				<option id="I" value="0">I</option>
				<option id="H" value="1">H</option>
				<option id="Ph" value="2">Ph</option>
				<option id="CNot" value="3">CNot</option>
				<option id="CCNot" value="4">CCNot</option>
				<option id="Ft1" value="5">Ft1</option>
				<option id="CPhase" value="6">CPhase</option>
				<option id="Ft2" value="7">Ft2</option>
				<option id="Cntr" value="8">Cntr</option>
			</select>
			<input type="search" placeholder="search">
			<textarea rows="6" placeholder="Enter your address"></textarea>
			<a class="button" onclick="$.mvc.route('/input/add_gate');">Add Gate</a>
		</div>
	</form>
</div>


