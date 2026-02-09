// let count = 1; 
// count++;

// module.exports = count;


function add(a, b) {
    return a + b;
}

function average(a, b) {
    return add(a, b) / 2;
}

let x = average(10, 20);


const a=()=>{
    b();
    console.log("Function A");
};
const b=()=>{
    console.log("Function B");
};

a();

const login = async()=>{
    await checkHeader();
    await checkpassword();
}