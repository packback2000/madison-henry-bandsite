let shows = [
  {Date: "Mon Sept 06 2021", Venue: "Ronald Lane", Location: "San Francisco, CA", Book: "BUY TICKETS"},
  {Date: "Tue Sept 21 2021", Venue: "Pier 3 East", Location: "San Francisco, CA", Book: "BUY TICKETS"},
  {Date: "Fri Oct 15 2021", Venue: "View Lounge", Location: "San Francisco, CA", Book: "BUY TICKETS"},
  {Date: "Sat Nov 06 2021", Venue: "Hyatt Agency", Location: "San Francisco, CA", Book: "BUY TICKETS"},
  {Date: "Fri Nov 26 2021", Venue: "Moscow Center", Location: "San Francisco, CA", Book: "BUY TICKETS"},
  {Date: "Wed Dec 15 2021", Venue: "Press Club", Location: "San Francisco, CA", Book: "BUY TICKETS"}
]

axios.get('https://project-1-api.herokuapp.com/showdates/?api_key=%3C167b4438-552a-474e-99d1-e58c0520dcef%3E')
.then(resp => { 
function makeTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);

      th.classList.add('table-head');

      th.appendChild(text);
      row.appendChild(th);
  }
}

function makeTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let newCell = row.insertCell();
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
      let dates = document.createTextNode(key);
      newCell.appendChild(dates)
    }
    
  }
}

let table = document.querySelector('table');
let data = Object.keys(shows[1]);
makeTable(table, shows);
makeTableHead(table, data);
console.log(resp.data)
})

.catch(err => {
  console.log(err)
})
