function sum(num) {
    var result = 0;

    function f(num){
        if(num) {
            result += num;
            return f;
        } else {
            return result;
        }
    }

    return f(num);
}
