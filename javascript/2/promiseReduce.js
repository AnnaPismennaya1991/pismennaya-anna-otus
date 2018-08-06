const el1 = Promise.resolve(1);

const el2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('4'), 2000);
});

const el3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(10), 1000);
});

const el4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(15), 1000);
});

const array = [ el1, el2, el3, el4 ];

const callback = async (previous, current) => {
    const prevResult = await Promise.resolve(previous);
    let currResult = await current;

    const num = +currResult;
    currResult = num === num ? num : 0;

    const accum = prevResult + currResult;

    return accum;
};

Array.prototype.promiseReduce = async function(callback, init) {
    const result = this.reduce(callback, init);

    const res = await result;
    return res;
};

array.promiseReduce(callback, 0).then((result) => {
    console.log('result: ', result);
});
