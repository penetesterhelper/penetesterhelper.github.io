var MailId = localStorage.getItem('selectMail');
document.getElementById("p1").innerHTML = MailId;
var backCreate = document.getElementById('backCreate');

backCreate.onclick = function(){
     window.location.replace("index.html");
}

fatch(MailId)
function fatch(MailId) {
 fetch("https://us-central1-pentesterhelper.cloudfunctions.net/tempMail?mail="+MailId)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
     let list = document.getElementById("myList");

     for(var i=0;i<data.length;i++){
             let li = document.createElement("li");

              li.setAttribute("class", "list-group-item");
              li.setAttribute("id", 'mailList');
              li.setAttribute("value", data[i]['id']);
              //console.log(data[i]['from']);
              li.innerHTML = '<a href="mailData.html?mailRead=' + data[i]['id'] + '">'+data[i]['from']+'</a>';
              list.appendChild(li);

       
     }

      

    //console.log(datan);
   // SaveDataToLocalStorage()
   // displayCocktail(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));
}
// var listElements = document.querySelectorAll('#myList');
//    console.log(listElements)
//  listElements.onclick = function(){
//             console.log(listElements)
//   }   