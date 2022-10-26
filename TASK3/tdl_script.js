let input = document.querySelector('.enter-items')
let addbtn = document.querySelector('.add-items')
let task = document.querySelector('.task-list')

//disable add button

input.addEventListener('keyup', () => {
    if(input.value.trim() != 0){
        addbtn.classList.add('active')
    }
    else{
        addbtn.classList.remove('active')
    }
})

//add new items to the list

addbtn.addEventListener('click',() => {
    let newdiv = document.createElement('div');
    if(input.value.trim() != 0){
        
        newdiv.classList.add('task-items');
        newdiv.innerHTML = `
        <p> ${input.value} </p>
        <div class="item-btn">
            <i id="w1" onClick="edittask(this)" class="fas fa-edit"></i>
            <i id="w2" class="fa fa-check-circle"></i>
            <i id="w3" class="fa fa-times-circle"></i>
        </div>
        `
        task.appendChild(newdiv);
        input.value = ' ';
    }
    else{
        alert('This webapp requires you to enter a task!!!')
    }
})

//delete an item from the list

task.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-times-circle')) {
        e.target.parentElement.parentElement.remove();
    }

})

//mark item as completed

task.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-check-circle')) {
        e.target.parentElement.parentElement.classList.toggle('completed');
        e.target.classList.toggle('completed');
    }
})


//edit a task 

let edittask = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};
