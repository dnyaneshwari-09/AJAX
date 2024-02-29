function getData(){

    const xmlHttp=new XMLHttpRequest();

   

    xmlHttp.onload=function(){

        let data=JSON.parse(this.response);
        console.log(data)
       for(let d of data){
        var parentEl=document.getElementById("ul1");s
        let newEl = document.createElement("tr");
        newEl.innerHTML = `<td>${d.empId}</td>
        <td>${d.empName}</td><td>${d.empPost}</td><td>${d.empSalary}</td><td>${d.empAddress}</td>`
       parentEl.appendChild(newEl)
    }
       
      

        document.getElementById("mytable").innerHTML=data;
    }


    xmlHttp.open("GET","http://localhost:8889/Employee");
   
    xmlHttp.send();

}


function deleteData(){

    
}