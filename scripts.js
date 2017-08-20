//When user clicks on the button a function will be called that will add the task to a list
function add(){
    const item = document.getElementById("input").value;
    if(item ===""){
        alert("Please enter a task!");
    }else{
    const t = document.createTextNode(item);
    const newItem = document.createElement("li");
    const label = document.createElement("label"); 
    const checked = document.createElement("input");  //Created input
    checked.type = "checkbox";  //Changed input type to checkbox
    newItem.appendChild(checked); 
    newItem.appendChild(label);
    label.appendChild(t);
    const done = document.createElement("button");  //Create Delete Button for added item
    const txt = document.createTextNode("\u00D7");  //Create Delete Button for added item
    done.className = "btn"; //Done classname placeholder
    done.appendChild(txt);
    newItem.appendChild(done);
    document.getElementById("list").appendChild(newItem);
    document.getElementById("input").value='';    
    console.log("Task Added!");
    clickDel();
    }
};
//Creates a delete button for the premade tasks
function del(){
    let elements = document.getElementsByTagName("li");
    let i;
    for(i = 0; i < elements.length; i++){
        const done = document.createElement("button");
        const txt = document.createTextNode("\u00D7");
        done.className = "btn";
        done.appendChild(txt);
        elements[i].appendChild(done);
    };
};
del();
//When user clicks on the delete button the checked items will be deleted
function clickDel(){
    const del = document.getElementsByClassName("btn");
    let i;
    for (i = 0; i < del.length; i++) {
      del[i].onclick = function() {
        const div = this.parentElement;
        div.style.display = "none";
        console.log("Task Deleted!");
      }
    }

};
clickDel();