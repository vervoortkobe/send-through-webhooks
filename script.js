function send() {
      
  let webhook_url = document.getElementById("webhook_url").value;
  let username = document.getElementById("username").value;
  let avatar_url = document.getElementById("avatar_url").value;
  let msg = document.getElementById("msg").value;
      
  if(!webhook_url || !username || !avatar_url || !msg) return alert("❌ You didn't fill in some of the credentials!");
  document.getElementById("send").style.borderColor = "#ff0000";
      
  if(avatar_url.includes(".png") || avatar_url.includes(".jpg") || avatar_url.includes(".jpeg")) {

    var request = new XMLHttpRequest();
    request.open("POST", `${webhook_url}`);

    request.setRequestHeader('Content-Type', 'application/json');

    var params = {
      username: `${username}`,
      avatar_url: `${avatar_url}`,
      content: `${msg}`
    }

    try {
      request.send(JSON.stringify(params));
      alert("✔️ Successfully sent!");
      document.getElementById("send").innerHTML = "✔️ Send";
      document.getElementById("send").style.borderColor = "#00ff00";
    } catch(err) {
      return alert("❌ ERROR: The webhook URL you entered is invalid!");
      document.getElementById("send").style.borderColor = "#ff0000";
    }
  } else {
    return alert("❌ ERROR: The avatar URL you entered is incorrect!\nA correct avatar URL has .png, .jpg or .jpeg at its end.");
    document.getElementById("send").style.borderColor = "#ff0000";
  } 
}
