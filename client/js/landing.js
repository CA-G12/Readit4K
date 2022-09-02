const posts=document.querySelector('.posts')
const userName=document.querySelector('.name')
const userEmail=document.querySelector('.email')
const userPassword=document.querySelector('.password')
const userConfirm=document.querySelector('.confirm')
const userImg=document.querySelector('.img')
const signUpBtn=document.querySelector('.sign-up')

signUpBtn.addEventListener('click',(e)=>{
  e.preventDefault()
  console.log(userPassword);
  signUp()
})

fetch('/get-posts').then(res=>res.json()).then(posts=>handelPosts(posts))

function createPost(item) {
  const article =document.createElement('article')
  const post =document.createElement('p')
  const star =document.createElement('p')
  const comments=document.createElement('ul')
  posts.appendChild(article)

  if(item.img){
    const img =document.createElement('img')
    img.src=item.img
    article.appendChild(img)

  }
  article.appendChild(post)
  article.appendChild(star)
  article.appendChild(comments)
  star.textContent=item.s

  item.comments.forEach(e=>{
    const comment =document.createElement('li')
    comments.appendChild(comment)
    comment.textContent=e.comment
  })

  post.textContent=item.post

}

function handelPosts(posts) {
  posts.forEach(post => {
    createPost(post)
  });
}

function signUp(){
const userInfo={
  name:userName.value ,
  email:userEmail.value ,
  password:userPassword.value ,
  userConfirm: userConfirm.value,
  img:userImg.value 
}
fetch('/sign-up', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(userInfo),

})
}
