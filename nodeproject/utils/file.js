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


/*
https:// -- protocols
.org -- domain
/api/path.html  -- path param
?param1=sample&param2=sample -- query param
#pathdelimeter -- hash param
*/


/*

https://
www.flipkart.com
/asus-expertbook-p1-intel-core-i5-13th-gen-13420h-32-gb-512-gb-ssd-windows-11-home-p1503cva-s71075ws-thin-light-laptop/p/itm097644e9eaec3
?pid=COMHCQ3VGJB8NGRH&lid=LSTCOMHCQ3VGJB8NGRHEJWAFU&marketplace=FLIPKART&store=6bo%2Fb5g&srno=b_1_1&otracker=browse&fm=organic&iid=b02b061c-2793-428f-ba27-368177b274bf.COMHCQ3VGJB8NGRH.SEARCH&ppt=clp&ppn=flipkart-offers-electronics-bau-at-store&ssid=h0e4eyix4w0000001771242202720&ov_redirect=true


*/