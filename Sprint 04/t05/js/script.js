var yell = document.getElementById('yell');

yell.onmousedown = function (e) {
    if (red.style.borderStyle !== "dashed") {
        var coords = getCoords(yell);
        var shiftX = e.pageX - coords.left;
        var shiftY = e.pageY - coords.top;

        yell.style.position = 'absolute';
        document.body.appendChild(yell);
        moveAt(e);

        yell.style.zIndex = 1000; // над другими элементами

        function moveAt(e) {
            yell.style.left = e.pageX - shiftX + 'px';
            yell.style.top = e.pageY - shiftY + 'px';
        }

        document.onmousemove = function (e) {
            moveAt(e);
        };

        yell.onmouseup = function () {
            document.onmousemove = null;
            yell.onmouseup = null;
        };
    }
}

yell.ondragstart = function () {
    return false;
};

var red = document.getElementById('red');

red.onmousedown = function (e) {
    if (red.style.borderStyle === "dashed") {
        var coords = getCoords(red);
        var shiftX = e.pageX - coords.left;
        var shiftY = e.pageY - coords.top;

        red.style.position = 'absolute';
        document.body.appendChild(red);
        moveAt(e);

        red.style.zIndex = 1000; // над другими элементами

        function moveAt(e) {
            red.style.left = e.pageX - shiftX + 'px';
            red.style.top = e.pageY - shiftY + 'px';
        }

        document.onmousemove = function (e) {
            moveAt(e);
        };

        red.onmouseup = function () {
            document.onmousemove = null;
            red.onmouseup = null;
        };
    }

}

red.ondragstart = function () {
    return false;
};

var blue = document.getElementById('blue');

blue.onmousedown = function (e) {
    if (blue.style.borderStyle !== "dashed") {
        var coords = getCoords(blue);
        var shiftX = e.pageX - coords.left;
        var shiftY = e.pageY - coords.top;

        blue.style.position = 'absolute';
        document.body.appendChild(blue);
        moveAt(e);

        blue.style.zIndex = 1000; // над другими элементами

        function moveAt(e) {
            blue.style.left = e.pageX - shiftX + 'px';
            blue.style.top = e.pageY - shiftY + 'px';
        }

        document.onmousemove = function (e) {
            moveAt(e);
        };

        blue.onmouseup = function () {
            document.onmousemove = null;
            blue.onmouseup = null;
        };
    }
}

blue.ondragstart = function () {
    return false;
};

var gren = document.getElementById('gren');

gren.onmousedown = function (e) {
    if (gren.style.borderStyle !== "dashed") {
        var coords = getCoords(gren);
        var shiftX = e.pageX - coords.left;
        var shiftY = e.pageY - coords.top;

        gren.style.position = 'absolute';
        document.body.appendChild(gren);
        moveAt(e);

        gren.style.zIndex = 1000; // над другими элементами

        function moveAt(e) {
            gren.style.left = e.pageX - shiftX + 'px';
            gren.style.top = e.pageY - shiftY + 'px';
        }

        document.onmousemove = function (e) {
            moveAt(e);
        };

        gren.onmouseup = function () {
            document.onmousemove = null;
            gren.onmouseup = null;
        };
    }
}

gren.ondragstart = function () {
    return false;
};

function getCoords(elem) {   // кроме IE8-
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}