for (let i = 0; i < document.getElementsByTagName("li").length; i++) {
    if (document.getElementsByTagName("li")[i].hasAttribute("class") === false) {
        document.getElementsByTagName("li")[i].setAttribute("class", "unknown");
    }
    if (document.getElementsByTagName("li")[i].hasAttribute("data-element") === false) {
        document.getElementsByTagName("li")[i].setAttribute("data-element", "none");
    }
}

var li = document.getElementsByTagName("li");
for (let ind = 0; ind < li.length; ind++) {
    let li_par = li[ind].getAttribute("data-element");
    if (li_par != "none") {
        let arr = li_par.split(' ');
        var div_1 = document.createElement("div");
        for (let jnd = 0; jnd < arr.length; jnd++) {
            var elem = document.createElement("div");
            elem.className = "elem " + arr[jnd];
            div_1.appendChild(elem);
        }
        li[ind].appendChild(div_1);
    }
    else {
        var elem_1 = document.createElement("div");
        elem_1.className = "elem";
        var elem_2 = document.createElement("div");
        elem_2.className = "line";
        elem_1.appendChild(elem_2);
        var div_2 = document.createElement("div");
        div_2.appendChild(elem_1);
        li[ind].appendChild(div_2);
    }
}