function sum(num) {
    let result = 0;

    function f(num){
        const _num = +num;
        if (_num === _num){
            result += _num;
            return f;
        } else if (num !== undefined){
            return f;
        } else {
            return result;
        }
    }

    return f(num);
}
