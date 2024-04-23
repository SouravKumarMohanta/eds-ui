var lis = document.querySelectorAll("li");
for (let i = 0; i < lis.length; i++) {
  lis[i].onclick = function() {
    alert(i + 1);
  };
}
