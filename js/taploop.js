home = document.getElementById("home");
credits = document.getElementById("credits");
homeButton = document.getElementById("homeButton");
creditsButton = document.getElementById("creditsButton");

function goHome() {
  home.style.display = "block";
  credits.style.display = "none";
  homeButton.classList.add("active");
  creditsButton.classList.remove("active");
}
function goCredits() {
  home.style.display = "none";
  credits.style.display = "block";
  homeButton.classList.remove("active");
  creditsButton.classList.add("active");
}
