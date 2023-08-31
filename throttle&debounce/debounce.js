function debounce(func, delay) {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// 创建一个防抖函数，延迟 300 毫秒执行
const debouncedFunction = debounce(() => {
    doSth();
}, 300);

function doSth() {
    console.log("do sth");
}


doSth();
debouncedFunction(); // 这个调用不会立即执行函数
debouncedFunction(); // 这个调用也不会立即执行函数

setTimeout(() => {
    debouncedFunction();
}, 400);