function calc() {
  var w = document.getElementById("weight").value;
  var h = document.getElementById("height").value;
  var r = w/(h*h);
  document.getElementById("result").textContent="あなたのBMIは"+r+"です";
}