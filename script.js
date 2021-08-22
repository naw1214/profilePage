var changeUser = document.querySelector(".name-tag") // Targets a class that will allow us to make changes

function change(){                       // Actual function called that changes innerText
    changeUser.innerText = "Not Nate"
}

// var interact = document.querySelector(".user-line")
// var interact2 = document.querySelector(".user-line-2")

// function touch(){
//     interact.remove()
// }
// function touchTwo(){
//     interact2.remove()
// }  First Attempt

var changeRequests = document.querySelector("#requests")
var changeConnections = document.querySelector("#connections")

function accept(id){
    var element = document.querySelector(id)
    element.remove()
    changeRequests.innerText--
    changeConnections.innerText++
}

function deny(id){
    var element = document.querySelector(id)
    element.remove()
    changeRequests.innerText--
}
