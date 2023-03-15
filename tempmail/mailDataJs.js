var MailId = localStorage.getItem('selectMail');
document.getElementById("p1").innerHTML = 'To: '+MailId;
var backCreate = document.getElementById('backCreate');

backCreate.onclick = function(){
     window.location.replace("listMail.html");
}

var id = parseURLParams(window.location.href)['mailRead'][0];
console.log(window.location.href)
fatch(MailId,id)
function fatch(MailId,id) {
 fetch("https://us-central1-pentesterhelper.cloudfunctions.net/tempMailRead?mail="+MailId+"&id="+id)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    document.getElementById("sub").innerHTML = 'Subject: '+data['subject']
    document.getElementById("from").innerHTML = 'From: '+data['from']
    document.getElementById("date").innerHTML = 'Date: '+data['date']
    document.getElementById("body").innerHTML = data['htmlBody']
   // document.getElementById("attachment").innerHTML = data['attachments']
    //console.log(data['attachments'][0]['filename'] + ' '+ data['attachments'][0]['filename']) 
     // for(var i=0;i<data.length;i++){
             // let li = document.createElement("li");
             //  li.setAttribute("class", "list-group-item");
             //  li.setAttribute("id", 'mailList');
             //  li.setAttribute("value", data[i]['id']);
             //  //console.log(data[i]['from']);
             //  li.innerHTML = '<a href="mailData.html?mailRead=' + data[i]['id'] + '">'+data[i]['from']+'</a>';
             //  list.appendChild(li);

       
     // }

      

    console.log(data);
   // SaveDataToLocalStorage()
   // displayCocktail(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));
}

function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}

// var listElements = document.querySelectorAll('#myList');
//    console.log(listElements)
//  listElements.onclick = function(){
//             console.log(listElements)
//   }   