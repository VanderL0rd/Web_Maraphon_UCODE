let img = document.getElementsByTagName("img");
let cont = 0;
let load = document.getElementById("load");
for (let i = 0; i < img.length; i++) {
    img[i].setAttribute("class", "lazy");
}

!function (window) {
    var $q = function (q, res) {
        if (document.querySelectorAll) {
            res = document.querySelectorAll(q);
        } else {
            var doc = document
                , img = doc.styleSheets[0] || doc.createStyleSheet();
            img.addRule(q, 'f:b');
            for (var l = doc.all, b = 0, c = [], f = l.length; b < f; b++)
                l[b].currentStyle.f && c.push(l[b]);

            img.removeRule(0);
            res = c;
        }
        return res;
    }
        , addEventListener = function (event, func) {
            window.addEventListener
                ? this.addEventListener(event, func, false)
                : (window.attachEvent)
                    ? this.attachEvent('on' + event, func)
                    : this['on' + event] = func;
        }
        , _has = function (obj, key) {
            return Object.prototype.hasOwnProperty.call(obj, key);
        }
        ;

    function loadImage(element, func) {
        var img = new Image()
            , src = element.getAttribute('data-src');
        img.onload = function () {
            if (!!element.parent) {
                element.parent.replaceChild(img, element)

            }

            else
                element.src = src;

            func ? func() : null;
        }
        img.src = src;

    }

    function elementInViewport(element) {
        var rect = element.getBoundingClientRect()
        return (
            rect.top >= 0
            && rect.left >= 0
            && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
        )
    }

    var images = new Array()
        , query = $q('img.lazy')
        , processScroll = function () {
            for (var i = 0; i < images.length; i++) {
                if (elementInViewport(images[i])) {
                    loadImage(images[i], function () {
                        images.splice(i, i);

                    });

                }
            };
        }
        ;
    // Array.prototype.slice.call is not callable under our lovely IE8 
    for (var i = 0; i < query.length; i++) {
        images.push(query[i]);
    };

    processScroll();
    addEventListener('scroll', processScroll);

}(this);





