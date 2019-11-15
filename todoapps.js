/* what is the difference between getElementById and querySelector*/


let input = document.getElementById("inputbox")
let button = document.getElementById("submit")
let span = document.getElementById("clear")
let ul = document.querySelector("ul");


function buttonclick(task){
    let li = document.createElement("li")
    li.innerHTML =`<span class="delete">x</span><span class="edit">Edit Task</span><input type="checkbox"><label id="word">${task}</label>`;   // 
    //li.appendChild(document.createTextNode(input.value.trim()));
    ul.appendChild(li)
    //TO CLEAR THE INPUTBOX
    input.value = ""
    document.querySelector("#usertasks").style.display="block";

}

function textlength(){
    if((input.value.length) > 0) {
        buttonclick(input.value);}
}


function clearlist(e){
    ul.innerHTML = ''
    document.querySelector("#usertasks").style.display="none";
    
}


//delete or tick
function deleteOrOrEditOrTick(e){
    if(e.target.className ==="delete"){
        deletetask(e);
    }
    else if(e.target.className ==="edit"){
        edittask(e);
    }else{
        ticktask(e)
    }
}

//To delete a task
function deletetask(e){
    const li=e.target.parentNode;
    const ul =li.parentNode;
     ul.removeChild(li)
    //  document.querySelector("li").style.display="none";

}

//to tick a task
function ticktask(e){
    const task = e.target.nextSibling;
    if (e.target.checked){
        task.style.textDecoration ="line-through";
        task.style.color = 'red';
    }else{
        task.style.textDecoration = 'none';
        task.style.color = 'black';
		
    }

}

 function edittask(e){
   console.log(e.target.nextSibling.nextSibling)
   const update =e.target.nextSibling.nextSibling.innerHTML
    input.value=update
    deletetask(e)

 }

button.addEventListener("click", textlength)
span.addEventListener("click", clearlist)
ul.addEventListener("click", deleteOrOrEditOrTick)


