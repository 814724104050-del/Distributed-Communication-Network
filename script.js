function sendMessage() {

    let sender = document.getElementById("sender").value;
    let receiver = document.getElementById("receiver").value;
    let message = document.getElementById("message").value;

    if (message === "") {
        alert("Enter a message");
        return;
    }

    let log = document.getElementById("logBox");

    log.innerHTML +=
        `<p>📨 ${sender} → ${receiver} : ${message}</p>`;

    document.getElementById("message").value = "";
}


function broadcastMessage() {

    let sender = document.getElementById("sender").value;
    let message = document.getElementById("message").value;

    if (message === "") {
        alert("Enter a message");
        return;
    }

    let log = document.getElementById("logBox");

    log.innerHTML +=
        `<p>📢 ${sender} → ALL : ${message}</p>`;

    document.getElementById("message").value = "";
}