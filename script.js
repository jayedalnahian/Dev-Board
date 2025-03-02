function dateUpdate() {
    let date = new Date().toString();
    let fullDateTime = date.split(" ");
    let dateName = fullDateTime[0];
    let fullDate = fullDateTime[1] + " " + fullDateTime[2] + " " + fullDateTime[3];

    document.getElementById("dateName").innerText = dateName;
    document.getElementById("today").innerText = fullDate;
}

setInterval(dateUpdate, 1000);

let taskAssigned = parseInt(document.getElementById("comeDown").innerText);
let doneProjects = parseInt(document.getElementById("doneProjects").innerText)
const completedBtn = document.getElementsByClassName("completedBtn");
function time() {
    let date = new Date().toString();
    let fullDateTime = date.split(" ");
    let time = fullDateTime[4];
    return time
}
setInterval(time, 1000);
for (let button of completedBtn) {
    button.addEventListener("click", function () {
        alert("Board updated Successfully.")
        button.classList.remove("bg-blue-500")
        // button.classList.add("bg-gray-600", "text-white", "dis")
        button.disabled = true;
        if (taskAssigned > 0) {
            taskAssigned--
            doneProjects++
            document.getElementById("comeDown").innerText = taskAssigned
            document.getElementById("doneProjects").innerText = doneProjects
        }

        if(taskAssigned === 0){
            alert("Congrates!!! You have completed all the current tasks.")
        }
        

        let history = document.createElement("p");
        history.innerText = `
        You have Complete The ${button.parentElement.previousElementSibling.previousElementSibling.innerText} at ${time()}
        `
        document.getElementById("history").appendChild(history)


    })
}

const themeColorChangeBtn = ["bg-[#0A0A0A]", "bg-[#1A1A1A]", "bg-[#191970]", "bg-[#2F4F4F]", "bg-[#4B0082]", "bg-[#013220]", "bg-[#800000]", "bg-[#004D4D]", "bg-[#000080]", "bg-[#2C3539]"]
let iteration = 0;
document.getElementById("themeColorChangeBtn").addEventListener("click", function () {
    document.querySelector("#body").classList.remove(themeColorChangeBtn[iteration])
    iteration = (iteration + 1) % themeColorChangeBtn.length;
    document.querySelector("#body").classList.add(themeColorChangeBtn[iteration])
})

document.getElementById("clearHistoryBtn").addEventListener("click", function(){
    document.getElementById("history").innerText = "";
})

document.getElementById("discoverBtn").addEventListener("click", function(){
    window.location.href = "second.html"
})