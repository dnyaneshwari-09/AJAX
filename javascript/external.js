function getData(){

//step1:create object of XMLHttpRequest
const xmlHttp=new XMLHttpRequest();

//step2:define a callback function
xmlHttp.onload=function(){
    console.log(this.response)
    let data=this.response;
    document.getElementById("d1").innerHTML=data;
    
}

//step3:create request by using open method
xmlHttp.open("GET","http://localhost:8888/product");
//step4:send a request
xmlHttp.send();
}



function deleteData(){
    const xmlHttp=new XMLHttpRequest();
    let data=document.getElementById("getid").value;
    console.log(data);


   if(window.confirm(`Are u sure to delete the product with ID: ${data}`)){
    xmlHttp.onload=function(){
        window.alert("product deleted succsessfully!!");
    }

    xmlHttp.open("DELETE",`http://localhost:8888/product/${data}`);
    xmlHttp.send();
   }
    
}

function addProduct(){
    const xmlHttp=new XMLHttpRequest();

    let  productObj={
     name:document.getElementById("getname").value,
     price:document.getElementById("getprice").value,
     company:document.getElementById("getcompany").value
    }
   
    console.log(getname,getprice,getcompany);

    xmlHttp.onload=function(){
        window.alert("data added succsessfully!!");
    }


    xmlHttp.open("POST",`http://localhost:8888/product/`);
    xmlHttp.setRequestHeader("Content-type","application/json")
    //convert object data to json
    xmlHttp.send(JSON.stringify(productObj));

}

function editProduct(){
    const xmlHttp=new XMLHttpRequest();

    let id=document.getElementById("getpid").value;
    xmlHttp.onload=function(){
        
        console.log(this.response);
        let data=JSON.parse(this.response);
        document.getElementById("getpname").value=data.name;
        document.getElementById("getpprice").value=data.price;
        document.getElementById("getpcompany").value=data.company;
        
    }

    xmlHttp.open("GET",`http://localhost:8888/product/${id}`);
    xmlHttp.send();


    // xmlHttp.open("PUT",`http://localhost:8888/product/`);
    // xmlHttp.setRequestHeader("Content-type","application/json")
    // xmlHttp.send(JSON.stringify(this.response))

    

}


 function editProduct2(){

    const xmlHttp=new XMLHttpRequest();
    let id=document.getElementById("getpid").value;

    let  productObj={
        name:document.getElementById("getpname").value,
        price:document.getElementById("getpprice").value,
        company:document.getElementById("getpcompany").value
       }
    if(window.confirm(`are u sure to update this product with id:${id}`)){
        xmlHttp.onload=function(){
            window.alert("data updated succsessfully!!");
        }
    
    
        xmlHttp.open("PUT",`http://localhost:8888/product/${id}`);
        xmlHttp.setRequestHeader("Content-type","application/json")
        //convert object data to json
        xmlHttp.send(JSON.stringify(productObj));
    }
    

}