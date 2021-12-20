const key = {"api_key":"167b4438-552a-474e-99d1-e58c0520dcef"}

let comments = [
    {name:"Connor Walton", time:"02/17/2021", comment:"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."},
    {name:"Emilie Beach", time:"01/09/2021", comment:"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."},
    {name:"Miles Acosta", time:"12/20/2020", comment:"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."},
];

const form = document.getElementById('my-form')

function displayComments(commentObj) {

    let commentList = document.querySelector('.comment-list');
    const date = new Date();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();
    
    fullDate = day + "/" + month + "/" + year;
    
    for (i = 0; i < comments.length; i++) {
        
    let userImage = document.createElement('img');
    let newListItem = document.createElement('ul');
    let userName = document.createElement('li');
    let timeStamp = document.createElement('li')
    let userComment = document.createElement('li');
        
    userName.classList.add('user-name');
    userComment.classList.add('user-comment');
    userImage.classList.add('user-image');
    timeStamp.classList.add('user-timestamp');
    
    userName.innerHTML = comments[i].name;
    userComment.innerHTML = comments[i].comment;
    timeStamp.innerHTML = comments[i].time;
    
    newListItem.appendChild(userImage)
    newListItem.appendChild(userName);
    newListItem.appendChild(timeStamp)
    newListItem.appendChild(userComment);
    
    commentList.appendChild(newListItem);
    }
};
    
axios.get('https://project-1-api.herokuapp.com/comments/?api_key=%3C167b4438-552a-474e-99d1-e58c0520dcef%3E')
.then (resp => {
    displayComments()
})


form.addEventListener('submit', function (event) {
    event.preventDefault();
    let newCommentText = {
        name: event.target.name.value, 
        time: fullDate, 
        comment: event.target.message.value
    };
    form.reset();
    document.getElementById('comment-list').innerHTML = " ";
    comments.unshift(newCommentText);
    displayComments()

    axios.post('https://project-1-api.herokuapp.com/comments/?api_key=%3C167b4438-552a-474e-99d1-e58c0520dcef%3E', {
        name: comments[0].name,
        comment:  comments[0].comment,
    })
    .then (resp => {
        console.log(resp.data);
        header('Content-Type: application/json');
    })
    
    .catch(err => {
        console.log(err);
    }); 
})

