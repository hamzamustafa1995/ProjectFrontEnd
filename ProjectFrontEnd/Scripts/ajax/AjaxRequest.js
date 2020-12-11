var url = "https://jsonplaceholder.typicode.com/todos";

async function GetData() {
    let response = await fetch(url);// wait the request and excute the code 
    let json = await response.json(); // wait the request and response the data 
    return json;

     //its like the 
    //fetch(url)
    //    .then(function (response) {
    //        return response.json()
    //    })
    //    .then((x) => {
    //        console.log(x);
    //    })
    //    .catch(function (error) {
    //        console.log(error);
    //    });
}
//callBack

async function main() {
    try {
        let json = await GetData();
        console.log(json);
    }
    catch (error) {
        console.log(error);
    }
}

// its like
//GetData(function (data, error) {
//    if (error) {
//        console.log(error);
//    }
//    else {
//        console.log(data);
//    }
//});
