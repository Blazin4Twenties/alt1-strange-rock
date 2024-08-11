// Check if Alt1 is initialized and usable
if (window.alt1) {
  alt1.identifyAppUrl("./appconfig.json");
} else {
  alert("Alt1 is not available");
}

// Define the keyword to listen for in the chat
const keyword = "strange rock";

// Load the notification sound
const notificationSound = new Audio('notification.mp3');

// Function to read the chat
function checkChat() {
  const chatbox = a1lib.getTextEx();
  for (const chatLine of chatbox) {
    if (chatLine.text.toLowerCase().includes(keyword)) {
      notify();
      break;
    }
  }
}

// Function to notify the user
function notify() {
  alt1.overLayTextEx("Strange Rock Obtained!", 0xffff00, 32, 2000, 0.5, 0.5);
  notificationSound.play();
}

// Set an interval to regularly check the chat
setInterval(checkChat, 1000);
