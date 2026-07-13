const { delbtns } = require("./apps");

for (delbtns of delbtns) {
  delbtns.addEventListener("click", function () {
    console.log("button dleleted");
  });
}
