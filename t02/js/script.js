class Timer {
    constructor(id, delay, stopCount) {
        this.delay = delay;
        this.title = id;
        this.stopCount = stopCount;
    }
    start() {
        let timerId_1 = setInterval(() => {
            this.stopCount--;
            this.tick();
            if (this.stopCount == 0) {
                this.stop();
            }
        }, this.delay);
        this.timerId = timerId_1;
    }
    tick = function () {
        console.log("Timer " + this.title + " Ticks | cycles left " + this.stopCount);
    }
    stop() {
        clearInterval(this.timerId);
        return;
    }
}
function runTimer(id, delay, counter) {
    var a = new Timer(id, delay, counter);
    a.start();
}

runTimer("Try", 1000, 4);
