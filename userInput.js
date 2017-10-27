var todos=[];
window.onload = function() {
    var key = 1;
    var input = document.getElementById('inp');
    var btn = document.getElementById('btn');
    var parent = document.getElementById('opt');
    var complete_button = document.getElementById('opt');
    var todo_element = document.getElementById('opt');
    var status = 0;//uncompleted_task  1-->completed_task

    btn.onclick = function () {
        var task_name = input.value;
        input.value="";
        if (task_name != "") {
            todos.push(task_name);
            addItem(task_name, status);
            displayItem();
            //parent.innerText="";
            //Object.keys(todos).forEach(function (key){
            todo_element = document.createElement("div");
            todo_element.id = key;
            todo_element.style.textAlign = "center";
            todo_element.style.color = "blue";
            todo_element.style.backgroundColor = "yellow";
            var paragraph = document.createElement("Paragraph");
            var para_key = key * 100;
            todo_element.innerHTML = '<p contenteditable="false" id=' + para_key + '>' + key + '.   ' + task_name + '</p>' + '<hr><button id="complete_button" onclick="complete_function(' + key + ')">Complete</button>' +
                '<button id="delete_button" onclick="delete_function(' + key + ')">Delete</button>' +
                '<button id="edit_button" onclick="edit_function(' + key + ')">Edit</button>';
            parent.appendChild(todo_element);
            key++;
            // });
        }

else
    {
        window.alert("Please provide input");
    }
}}
function complete_function(id)
{
    console.log(id);
    var todo_element=document.getElementById(id);
    todo_element.style.backgroundColor="green";
    console.log("COMPLETE BUTTON PRESSED"+todo_element)
}

function delete_function(id)
{
    console.log(id);
    var answer=window.confirm("Are you sure you want to delete!!");
    console.log(answer);
    if(answer==true)
    {
        var todo_element=document.getElementById(id);
        todo_element.innerText="";
    }
    console.log("DELETE BUTTON PRESSED"+todo_element)
}
function edit_function(id)
{
    console.log(id);
    var todo_element=document.getElementById(id);
    var edit_content=document.createElement("Input");
    edit_content.placeholder="Add Task";
    var edit_button=document.createElement("Button");
    edit_content.id=id+30;
    var edit_button_text = document.createTextNode("SUBMIT");
    edit_button.appendChild(edit_button_text);
    todo_element.appendChild(edit_content);
    todo_element.appendChild(edit_button);
    edit_button.onclick=function(){
        document.getElementById(id*100).innerHTML=id+".   "+edit_content.value;
        todo_element.removeChild(edit_content);
        todo_element.removeChild(edit_button);
        todos.splice(id,1);
        todos.push(edit_content.value);
    }
    console.log("EDIT BUTTON PRESSED"+todo_element)
}

