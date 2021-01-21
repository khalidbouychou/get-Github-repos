// global variables 

const inputUsername = document.querySelector('.rep-container input');
const getBtn = document.querySelector('.get-btn');
let showData = document.querySelector('.show-data');
    
const getRepos = () =>{
    if (inputUsername.value === "") {
        showData.innerHTML= ` <span> Please write Github username !! </span>`
    } else { 

        fetch(`https://api.github.com/users/${inputUsername.value}/repos`)
        .then((res)=>{
            return res.json()
        })
        .then((repos)=>{
            //empty the container
            showData.innerHTML='';
            // loop on repos 
            repos.forEach(repo => {
                         // create main div
                         let div_main = document.createElement('div');
                         // create node text 
                         let repoName = document.createTextNode(repo.name) ;
                         // append  the text to main div 
                         div_main.appendChild(repoName);
                         //create repo url 
                         let url_repo = document.createElement('a');
                         //create url text 
                         let textUrl = document.createTextNode(" Visit ") ;
                         // append text url to url (a)
                         url_repo.appendChild(textUrl);
                         //add href 
                         url_repo.href = `https://github.com/${inputUsername.value}/${repo.name}`;
                         // set attribute blank
                         url_repo.target = '_blank';
                         // append tag url to div main
                         div_main.appendChild(url_repo);
                         // create count stars span 
                         let spanStars = document.createElement('span');
                         // create text StarsSpan
                         let textSpanStars = document.createTextNode(`Stars : ${repo.stargazers_count}`) ;
                         // add stars count text to stars span 
                         spanStars.appendChild(textSpanStars);
                         // append starsSpan to div main 
                         div_main.appendChild(spanStars)
                         // add class on dib main 
                         div_main.className = 'repo-box';
                         // append the main div to the div show-data
                         showData.appendChild(div_main);
        });
    })
    .catch((err) => console.log(err))
    .catch((err)=>console.log(err)) ;
}}

getBtn.addEventListener('click',getRepos)
    
