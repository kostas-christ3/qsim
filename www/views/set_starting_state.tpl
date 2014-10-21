<div class="formGroupHead"></div>
<form>
    <div class="input-group">
        <select id="starting_state_select">
            <option id="zero" value="0" {{if(it.QS.starting_state[it.gate_id]==0){}}selected{{}}}>0</option>
            <option id="one" value="1" {{if(it.QS.starting_state[it.gate_id]==1){}}selected{{}}}>1</option>
        </select>
        <a class="button" onclick="$.mvc.route('/input/set_starting_state/{{=it.gate_id}}');">Set Starting State</a>
    </div>
</form>
</div>