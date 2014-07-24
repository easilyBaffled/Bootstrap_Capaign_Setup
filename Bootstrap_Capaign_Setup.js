$(function() {
	var campaign_counter = 3;
	$('#datetimepicker1').datetimepicker();
	$('#datetimepicker2').datetimepicker();
	var element_ids = ["#total_budget", "#start_date_time", "#end_date_time"];
	$(".side_bar_campaign").click(function(){
		var current_id = "#"+this.id;
		var campaign_name = $("a."+this.id+" #campaign_name").text()
		$("input#campaign_name").val(campaign_name);
		element_ids.forEach(function(id){
			var display_element = $(current_id + " .info_display"+id);
			var input_element =  $("input" +id);
			input_element.val(display_element.text());
		});
	});

	
	$('#sidebar > a').on('click', function (e) {
	    e.preventDefault();
	    var current = $(this)
	    if (!$(this).hasClass("active")) {
	        var lastActive = $(this).closest("#sidebar").children(".active");
	        current.addClass("active");
	        current.next('div').collapse('show');
	    } else {
	        current.removeClass("active");
	        current.next('div').collapse('hide');
	    }
	})
});

function add_target_selector(selection){
	var value = selection.value;
	if(value == "Zip"){
		$(".target_selector").append("<div class='form-group'><label class='col-sm-4 col-xs-12 control-label' for='Zip'>Zip Code</label><div class='col-sm-4 col-xs-8'><div class='input-group'><input class='form-control campaign_creation_form_input' id='zip' name='Zip'  type='text' placeholder='00000'><span class='input-group-addon glyphicon glyphicon-remove'></span></div></div></div>");
	}
	else if(value == "Gender"){
		$(".target_selector").append("<div class='form-group'><label class='col-sm-4 col-xs-12 control-label' for='Gender'>Gender</label><div class='col-sm-4 col-xs-8'><div class='input-group'><label class='radio-inline' for='Gender-0'><input class='campaign_creation_form_input' type='radio' name='Gender' id='gender-female' value='1' checked='checked'>Female</label><label class='radio-inline' for='Gender-1'><input class='campaign_creation_form_input' type='radio' name='Gender' id='gender-male' value='2'>Male</label><span class='input-group-addon glyphicon glyphicon-remove'></span></div></div></div>");
	}
	else if(value == "Device"){
		$(".target_selector").append("<div class='form-group'><label class='col-sm-4 col-xs-12 control-label' for='Devices'>Devices</label><div class='col-sm-4 col-xs-8'><div class='input-group'><label class='checkbox-inline' for='Devices-0'><input class='campaign_creation_form_input' type='checkbox' name='Devices' id='Devices-mac' value='1'>Mac </label><label class='checkbox-inline' for='Devices-1'><input class='campaign_creation_form_input' type='checkbox' name='Devices' id='Devices-pc' value='2'>PC </label><label class='checkbox-inline' for='Devices-2'><input class='campaign_creation_form_input' type='checkbox' name='Devices' id='devices-ios' value='3'>iOS </label><label class='checkbox-inline' for='Devices-3'><input class='campaign_creation_form_input' type='checkbox' name='Devices' id='devices-android' value='4'>Android </label><span class='input-group-addon glyphicon glyphicon-remove'></span></div></div></div>");
	}
	selection.selectedIndex = 0;
	$('.target_selector').on('click', '.glyphicon-remove',function(){
		$(this).closest('.form-group').remove();
	});
}
