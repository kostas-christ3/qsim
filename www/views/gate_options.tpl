<div class="panel button-grouped vertical">
    <a class="button" onclick="$.mvc.route('/input/edit_gate_form/{{=it.gate_id}}');">Edit</a>
    <a class="button" onclick="$.mvc.route('/input/delete_line/{{=it.gate_id}}');">Delete Line</a>
    <a class="button" onclick="$.mvc.route('/input/move_line_up/{{=it.gate_id}}');">Move Line Up</a>
    <a class="button" onclick="$.mvc.route('/input/move_line_down/{{=it.gate_id}}');">Move Line Down</a>
    <a class="button" onclick="$.mvc.route('/input/set_starting_state_panel/{{=it.gate_id}}');">Set Starting State</a>

	<a class="button" onclick="$.mvc.route('/input/cancel_button');">Cancel</a>
<div>
