// const add = (a, b) => 
//     {return a + b;};

// const subtract = (a, b) =>
//     {return a - b;}

// module.exports = add;
// module.exports.subtract = subtract;




const fetchData = new Promise((resolve, reject) =>{
    const success = false;

    if(success){
        resolve("Data fetched Successfully");
        console.log("data fetched")
    }else {
        reject("No data found");
        console.log("data is not fetched");
    }
});

fetchData
    .then((message)=>{
        console.log(message);
    })
    .catch((err)=>{
    console.log(err);
});


const sample = async ()=>{
    console.log("Started");

    await fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then((json) => console.log(json))

    console.log("Finished");

};
console.log("sample ~ started 1");
 sample();
 console.log("sample ~ started 2");



