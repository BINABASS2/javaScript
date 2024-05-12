window.addEventListener("load", function () {
  var cookieHeader = document.querySelector("#cookie-header");
  cookieHeader.style.color = "#f7f16d";
});

window.addEventListener("load", function () {
  var cookieItems = document.querySelectorAll("#cookie-jar li.cookie");
  var cookieCount = cookieItems.length;
  var cookieCountElement = document.querySelector("#cookie-count");
  cookieCountElement.textContent =
    "There are " + cookieCount + " cookie(s) in the cookie jar!";
});

window.addEventListener("load", function () {
  var cookieItems = document.querySelectorAll("#cookie-jar li.cookie");
  var cookieCountElement = document.querySelector("#cookie-count");

  function removeLastCookie() {
    if (cookieItems.length > 0) {
      var lastCookie = cookieItems[cookieItems.length - 1];
      lastCookie.parentNode.removeChild(lastCookie);
      cookieItems = document.querySelectorAll("#cookie-jar li.cookie");
      cookieCountElement.textContent =
        "There are " + cookieItems.length + " cookie(s) in the cookie jar!";
    }
  }

  setInterval(removeLastCookie, 30000);
});
