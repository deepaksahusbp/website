function a(){
    var b = 10;
    c();
    function c(){
        console.log("hi func c");
    }
}
a();
console.log(b);
