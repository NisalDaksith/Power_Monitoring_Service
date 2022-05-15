$(document).ready(function()
{
	$("#alertSuccess").hide();
	$("#alertError").hide();
});
//SAVE ============================================
$(document).on("click", "#btnSave", function(event)
{
	// Clear alerts---------------------
	 $("#alertSuccess").text("");
	 $("#alertSuccess").hide();
	 $("#alertError").text("");
	 $("#alertError").hide(); 
	 
	// Form validation-------------------
	 var status = validatePowerForm();
	 if (status != true)
		 {
		  $("#alertError").text(status);
		  $("#alertError").show();
		  return;
	 }
	 //If status equals to true
	 var type = ($("#hidPowerIDSave").val() == "") ? "POST" : "PUT";
	 var formData = new FormData($("#formUsers")[0]);
	 console.log(formData);
	 $.ajax(
	 {
		 url : "PowerAPI",
		 type : type,
		 data : formData,
		 enctype : "multipart/form-data",
		 complete : function(response, status)
		 {
			 onUserSaveComplete(response.responseText, status);
		 },
		 processData : false,
		 contentType :false
	 }); 
});

function onPowerSaveComplete(response, status)
{
	if (status == "success")
	 {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success")
		{
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#divUsersGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error")
		{
			 $("#alertError").text(resultSet.data);
			 $("#alertError").show();
		}
	 } else if (status == "error")
	 {
			 $("#alertError").text("Error while saving.");
			 $("#alertError").show();
	 } else
	 {
			 $("#alertError").text("Unknown error while saving..");
			 $("#alertError").show();
	 } 
	
	 $("#hidPowerIDSave").val("");
	 $("#formUsers")[0].reset();
}

//UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{
	
	 $("#name").val($(this).closest("tr").find('td:eq(1)').text());
	 $("#eType").val($(this).closest("tr").find('td:eq(2)').text());
	 $("#cMW").val($(this).closest("tr").find("td:eq(3)").text());
	 $("#status").val($(this).closest("tr").find('td:eq(4)').text());
	 
});

function validateUserForm()
{
	
	if ($("#name").val().trim() == "")
	{
		return "Insert Power Station Name.";
	}
	
	if ($("#eType").val().trim() == "")
	{
		return "Insert Energy Type.";
	}
	
	if ($("#cMW").val().trim() == "")
	{
		return "Insert Mega Watts.";
	}
	
	if ($("#status").val().trim() == "")
	{
		return "Insert status.";
	}
	
	
	
	return true;
}

$(document).on("click", ".btnRemove", function(event)
		{
				$.ajax(
				 {
					 url : "PowerAPI",
					 type : "DELETE",
					 data : "PowerID=" + $(this).data("powerid"),
					 dataType : "text",
					 complete : function(response, status)
					 {
						 onPowerDeleteComplete(response.responseText, status);
					 }
				 });
		});


function onPowerDeleteComplete(response, status)
{
	if (status == "success")
	 {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success")
		{
			 $("#alertSuccess").text("Successfully deleted.");
			 $("#alertSuccess").show();
			 $("#divUsersGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error")
		{
			 $("#alertError").text(resultSet.data);
			 $("#alertError").show();
		}
	 } else if (status == "error")
	 {
			 $("#alertError").text("Error while deleting.");
			 $("#alertError").show();
	 } else
	 {
			 $("#alertError").text("Unknown error while deleting..");
			 $("#alertError").show();
	 }
}


