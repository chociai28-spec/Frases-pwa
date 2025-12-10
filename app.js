if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js");

document.getElementById("notifyBtn").onclick = async () => {
  const perm = await Notification.requestPermission();
  if (perm === "granted") {
    alert("Notificações ativadas!");
    setInterval(sendNotification, 3600000);
  } else alert("Permita notificações.");
};

function sendNotification(){
  if(document.visibilityState==="visible"){
    alert("Sua frase: Continue indo em frente!");
  } else {
    navigator.serviceWorker.ready.then(reg=>{
      reg.showNotification("Frase do dia",{
        body:"Continue indo em frente!",
        icon:"icon-192.png"
      });
    });
  }
}
