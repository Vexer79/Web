function MyMathPower(b, n) {
    let r = b;
    for (let i = 1; i < n; i++) {
        r *= b;
    }
    console.log(`The ${n}th power of ${b} equals ${r}`);
    return r;
}

function MyMathPowerDefault1(b, n) {
    b = b || 2;
    n = n || 3;
    return MyMathPower(b, n);
}

function MyMathPowerDefault2(b = 2, n = 3){
    return MyMathPower(b, n);
}