// JS CODE FOR NAVIGATION BAR
const action_btn = document.querySelector ('.action_btn')
const action_btnicon = document.querySelector ('.action_btn i')
const dropdown = document.querySelector ('.drop_down')

action_btn.onclick = function (){
    dropdown.classList.toggle('open')

    const opened = dropdown.classList.contains('open')

    action_btnicon.classList = opened
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars'
}

// ENDS HERE