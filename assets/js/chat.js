var sendBtn = document.getElementById("send")
var message = document.querySelector(".msg")
var messages = document.querySelector("#messages")

let chats = []
let errors = null

sendBtn.addEventListener("click", function(){
    var msg = message.value
    if(msg !== ""){
        chats.push(msg)
        message.value = ""
        message.focus()
        
        let newLi = document.createElement("li")
        let newMsg = document.createTextNode(msg)
        newLi.appendChild(newMsg)
        newLi.classList.add("message")
        messages.appendChild(newLi)
    }else{
        errors = "Please type a message"
    }

    // console.log(chats + '\n Errors: ' + errors)
})


// var chats = []

// chats.push("Hello")
// chats.push("Hi")
// chats.push("What'sup")

// console.log(chats)

// for, for in, for of, forEach, do, do while

// for(let i = 0; i < chats.length; i++){
//     console.log(chats[i])
// }