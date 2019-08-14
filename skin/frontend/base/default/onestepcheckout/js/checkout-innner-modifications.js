// document.getElementById('first-step-checkout').style.visibility='hidden'

function toggle_methods(process_id){
	if(process_id=='first-step-checkout'){
		document.getElementById('second-step-checkout').style.display='none';
		document.getElementById('first-step-checkout').style.display='block';
	}else if(process_id=='second-step-checkout'){
		document.getElementById('first-step-checkout').style.display='none';
		document.getElementById('second-step-checkout').style.display='block';
	}
}

