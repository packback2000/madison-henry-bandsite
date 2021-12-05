
/*Start Default Comments*/

let commentArray = [
    {name:"Connor Walton", time:"02/17/2021" ,comment:"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."},
    {name:"Emilie Beach", time:"01/09/2021", comment:"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."},
    {name:"Miles Acosta", time:"12/20/2020", comment:"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."},
]


function generateCommentTableHead(table, data) { /*make table head*/
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) { /*loop through all of the keys*/
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  } /*end table head*/

  function generateCommentTableBody(table, data) { /*make table body */
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) { /*get all of the elements*/
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
        
      }
    }
  } /*finish table body*/

let table = document.querySelector('table'); 
let data = Object.keys(commentArray[0]);
generateCommentTableBody(table,commentArray); /*show the table*/
generateCommentTableHead(table,data)

/*End Default Comments*/

/*Start HTML Form Elements*/

const form = document.getElementById('form')
const date = new Date();
const month = date.getUTCMonth() + 1; //months from 1-12
const day = date.getUTCDate();
const year = date.getUTCFullYear();

fullDate = year + "/" + month + "/" + day;

form.addEventListener('submit', function(event) { /*submit using event listener*/
    event.preventDefault(); /*prevent page from refreshing on submit*/
    const newObj = {name: event.target.name.value, time: fullDate, comment: event.target.comments.value} /*construct new event object*/ 
    form.reset();
    document.getElementById('comments-table').innerHTML = "";
    commentArray.unshift(newObj)    /*push new comment object into array of comments*/
    /*clears all comments from page*/
     /*clear input fields after submitting new comment*/

    generateCommentTableBody(table,commentArray);
    generateCommentTableHead(table,data)/*Re-renders to the page all comments from the comment array, so all of the old comment plus the new button*/
    
    
});


/*End HTML Form Elements*/



/*Start Display Comment Function*/
function displayComment(comment){
  var enteredComment = document.createComment('li');
  var newCommentText = document.createTextNode('comments')
  enteredComment.appendChild(newCommentText);
}
let commentNew = displayComment('allComments')
document.write(commentNew)

/*End Display Comment Functin*/
