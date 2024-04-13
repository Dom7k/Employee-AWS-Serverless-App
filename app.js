// Add your API endpoint here
API_ENDPOINT = "APIendpoint=https://vo7mlf3cw9.execute-api.us-west-2.amazonaws.com/dev"


// AJAX POST request to save employee data
document.getElementById("savesemployee").onclick = function(){
    var inputData = {
        "employeeid": $('#employeeid').val(),
        "name": $('#name').val(),
        "role": $('#role').val(),
        "age": $('#age').val()
    };
    $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data:  JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            document.getElementById("employeeSaved").innerHTML = "Employee Data Saved!";
        },
        error: function () {
            alert("Error saving employee data.");
        }
    });
}

// AJAX GET request to retrieve all employees
document.getElementById("getemployees").onclick = function(){  
    $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            $('#employeeTable tr').slice(1).remove();
            jQuery.each(response, function(i, data) {          
                $("#employeeTable").append("<tr> \
                    <td>" + data['employeeid'] + "</td> \
                    <td>" + data['name'] + "</td> \
                    <td>" + data['role'] + "</td> \
                    <td>" + data['age'] + "</td> \
                    </tr>");
            });
        },
        error: function () {
            alert("Error retrieving employee data.");
        }
    });
}