const notesContainer=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");

let notes=document.querySelectorAll(".input-box");

//function to display saved data
function showNotes()
{
    notesContainer.innerHTML=localStorage.getItem("notes");
}
showNotes();

//function to store the content of "notesContainer" in local browser
function updateStorage()
{
    localStorage.setItem("notes",notesContainer.innerHTML);
}

//to create new 'text box' field(notes container box)
createBtn.addEventListener("click", ()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="./delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

//to remove 'text box' field(notes container box)
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG")
    {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P")
    {
        //this will update the storage whenever we will type anything in <p> tag
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                updateStorage();
            }
        })
    }
})

//if we will press "Enter" key on our keyboard, this function will add a line break in the 'p' tag
document.addEventListener("keydown", event=>{
    if(event.key === "Enter")
    {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})