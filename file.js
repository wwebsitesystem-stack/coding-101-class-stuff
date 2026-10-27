function changeName() {
  let greetingText = document.getElementById("greeting");
  greetingText.textContent = "Hello Brody";

  setTimeout(function() {
    greetingText.textContent = "Hello World";
  }, 2000);
}
