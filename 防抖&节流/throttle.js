function throttle(func, delay) {
    let lastExecTime = 0;
    let timeoutId;

    return function (...args) {
        const now = Date.now();

        if (now - lastExecTime < delay) {
            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                lastExecTime = now;
                func.apply(this, args);
            }, delay);
        } else {
            lastExecTime = now;
            func.apply(this, args);
        }
    };
}

// 创建一个节流函数，间隔 300 毫秒执行
const throttledFunction = throttle(() => {
    dosth();
}, 300);

function dosth() {
    console.log("do sth");

}

dosth();
throttledFunction(); // 第一次调用会立即执行函数
throttledFunction(); // 在 300 毫秒内的调用都不会执行函数

// 300 毫秒后，函数可以再次执行
setTimeout(() => {
    throttledFunction();
}, 400);
