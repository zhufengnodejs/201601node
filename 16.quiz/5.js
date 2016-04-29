var s  = (function (f) {
    return typeof f();
})(function () {
    return 1;
});

console.log(s);
