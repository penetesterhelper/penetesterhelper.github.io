function createMail() {
  let person = prompt("Mail Id Name: ", "helloWorld");
  if (person != null) {
   fatch(person) 
   //SaveDataToLocalStorage(person)
  }
}

function SaveDataToLocalStorage(data)
{
    var a = [];
    a = JSON.parse(localStorage.getItem('session')) || [];
    a.push(data);
    localStorage.setItem('session', JSON.stringify(a));
    localStorage.setItem('selectMail', data);
    window.location.replace("listMail.html");
}

if(localStorage.getItem('session')!=null){
  let list = document.getElementById("myList");
  JSON.parse(localStorage.getItem('session')).forEach((item)=>{
  let li = document.createElement("li");
  li.setAttribute("class", "list-group-item");
  li.setAttribute("id", 'mailList');
  li.setAttribute("style", 'background-color: white;');
  li.setAttribute("value", item);
  li.innerText = item;
  list.appendChild(li);
})
}


var createMailId = document.getElementById('createMailId');
// var myList = document.getElementById('mailList');

createMailId.onclick = function(){
  createMail();
}

var listElements = document.querySelectorAll('#myList li');
console.log(listElements);
for (var i = 0; i < listElements.length; i++) {
  listElements[i].onclick = function() {
    console.log('Clicked element: ' + this.innerText);
    localStorage.setItem('selectMail', event.target.textContent);
    window.location.replace("listMail.html");
    // Do something else in response to the click event
  };
}

function fatch(person) {
 fetch("https://us-central1-pentesterhelper.cloudfunctions.net/tempMailCreate")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    //console.log(data);
    SaveDataToLocalStorage(person+data[0]['MailId'])
   // displayCocktail(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));
}

function displayCocktail(data) {
  console.log(data[0]['MailId'])
}   
