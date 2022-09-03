const posts=document.querySelector('.posts')
const userName=document.querySelector('.name')
const userEmail=document.querySelector('.email')
const userPassword=document.querySelector('.password')
const userConfirm=document.querySelector('.confirm')
const userImg=document.querySelector('.img')
const signUpBtn=document.querySelector('.sign-up')
const signInBtn=document.querySelector('.sign-in')
const email=document.querySelector('.email-sign-in')
const password=document.querySelector('.password-sign-in')
const rigsterBtn=document.createElement('button')
const signinBtn=document.createElement('button')
const rigsterForm=document.querySelector('.main')
const btnBox=document.querySelector('.buttons-box')
const user=document.createElement('h2')
const imgUser=document.createElement('img')
const chk=document.querySelector('#chk')
//!===================================================================
//* form add post
const addPostBox=document.querySelector('.add-post')
const fromPost=document.createElement('form')
const inputFromPost=document.createElement('textarea')
const addPost=document.createElement('button')
const titleForm=document.createElement('h2')
const imgForm=document.createElement('img')
const signOut=document.querySelector('button')
imgForm.src='./img/logo.png'
imgForm.setAttribute('class','imgForm')
titleForm.textContent='ADD POST'
addPost.textContent='ADD'
fromPost.setAttribute('class','formPost')
fromPost.appendChild(titleForm)
fromPost.appendChild(inputFromPost)
fromPost.appendChild(addPost)
fromPost.appendChild(imgForm)

window.addEventListener('load',()=>{
  document.querySelector('.loading').classList.add('hidden')
})

//!===================================================================
let isChk=false
fetch('/user').then(res=>res.json()).then(res=>{
  if(res.msg){
    btnBox.appendChild(rigsterBtn)
    btnBox.appendChild(signinBtn)
    rigsterBtn.setAttribute('class','btn-grad')
    signinBtn.setAttribute('class','btn-grad')
    rigsterBtn.textContent='SIGN UP'
    signinBtn.textContent='SIGN IN'
  }else{
    user.textContent=res.name
    imgUser.src=res.img
    btnBox.appendChild(user)
    btnBox.appendChild(imgUser)
    btnBox.appendChild(signOut)
    signOut.textContent='Sign Out'
    signOut.setAttribute('class','signOut')
    addPostBox.appendChild(fromPost)

    signOut.addEventListener('click',()=>{
      fetch('/sign-out', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      
      }).then(res=>window.location.href='/')
    })
    addPost.addEventListener('click',(e)=>{
      e.preventDefault()
      const postInfo={
        user_id:res.id,
        post:inputFromPost.value
      }
      fetch('/add-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postInfo),
      
      }).then(res=>res.json()).then(item=>createPost(item,res))
    })
 
  }
  fetch('/get-posts').then(res=>res.json()).then(posts=>handelPosts(posts,res))

})




rigsterBtn.addEventListener('click',()=>{

  if(!isChk){
    
    rigsterForm.classList.add('showForm')
    chk.checked=false

    isChk=true
  }else{
    rigsterForm.classList.remove('showForm')
  isChk=false
  }

})
signinBtn.addEventListener('click',()=>{
  if(!chk.checked){
    rigsterForm.classList.add('showForm')
  chk.checked=true
  }else{
    rigsterForm.classList.remove('showForm')

  chk.checked=false

  }
  
})

posts.addEventListener('click',()=>{
  if (rigsterForm.classList[1]==='showForm') {
    isChk=false
    rigsterForm.classList.remove('showForm')

    chk.checked=false
  }

})
signUpBtn.addEventListener('click',(e)=>{
  e.preventDefault()
  signUp()
})
signInBtn.addEventListener('click',(e)=>{
  e.preventDefault()
  console.log(222);
  signIn()

})
// fetch('/get-posts').then(res=>res.json()).then(posts=>handelPosts(posts))

function createPost(item,res) {
  const article =document.createElement('article')
  article.setAttribute('class','card')
  const post =document.createElement('p')
  const nameUser =document.createElement('h3')
  const star =document.createElement('p')
  const starIcon =document.createElement('i')
  post.textContent=item.post
  post.setAttribute('class','post')
  if(item.user_id===res.id){
    const deleteBtn=document.createElement('button')
    deleteBtn.textContent='X'
    article.appendChild(deleteBtn)
    deleteBtn.setAttribute('class','deleteBtn')
    deleteBtn.addEventListener('click',()=>{
      article.remove()
      const deletePost={
        id:item.id,
        user_id:res.id
      }
      fetch('/delete-post', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(deletePost),
      
      })
    })

  }
  starIcon.setAttribute('class','fa-solid fa-star starIcon ')         


  if(item.nameStar ){
    let islike=item.nameStar.json_agg.some(e=>e.user_id===res.id)
    if(islike){
      starIcon.setAttribute('class','fa-solid fa-star starIcon mystyle')         
    }else{
      starIcon.setAttribute('class','fa-solid fa-star starIcon ')         
    }

  }
  if(res.id){
    starIcon.addEventListener('click',()=>{
      starIcon.classList.toggle('mystyle')
      const isStar={
        user_id:res.id,
        post_id:item.id
      }
      fetch('/is-star', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(isStar),
      
      })



     if( starIcon.classList[3]==='mystyle'){

      star.textContent=+( star.textContent) +1
     }else{
      star.textContent=+( star.textContent) -1
     }  })
  }else{
    starIcon.addEventListener('click',()=>{
  //  isChk=true
  //  rigsterForm.style.bottom='0px'

    })
  }
  
  star.setAttribute('class','starNum')
  const comments=document.createElement('ul')
  const commentInputBox=document.createElement('form')
  const commentInput=document.createElement('input')
  const commentBtn=document.createElement('button')
  nameUser.textContent=item.name||res.name
  posts.appendChild(article)
  if(item.imguser||(res.id===item.user_id)){
    const img =document.createElement('img')
    img.src=item.imguser ||res.img
    img.setAttribute('class','imgUser')
    article.appendChild(img)

  }
  commentInputBox.setAttribute('class','comment-box')
  commentBtn.textContent=`ADD`
  commentInput.placeholder='comment'
 if(res.id){
  commentInputBox.appendChild(commentInput)
  commentInputBox.appendChild(commentBtn)
  commentBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    const commentInfo={
      comment:commentInput.value,
      post_id:item.id,
      user_id:res.id
    }
    commentInput.value=''
    fetch('/add-comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentInfo),
    
    }).then(res=>res.json()).then(res=>handelComment(res,comments))
  })
 }
  article.appendChild(nameUser)
  article.appendChild(starIcon)
  article.appendChild(post)
  article.appendChild(star)
  article.appendChild(commentInputBox)
  article.appendChild(comments)
  star.textContent=item.s|| 0
if(item.comments){
  item.comments.forEach(e=>{
    handelComment(e,comments,res)
  })

}


}
function handelComment(e,comments) {
  const comment =document.createElement('section')
  const box=document.createElement('div')
  const author =document.createElement('h4')
  const imgAuthor =document.createElement('img')
  const content=document.createElement('p')
  author.textContent=e.name
  imgAuthor.src=e.img
  content.textContent=e.comment
  comment.appendChild(box)
  box.appendChild(imgAuthor)
  box.appendChild(author)
  comment.appendChild(content)
  comment.setAttribute('class','comment')
  comments.appendChild(comment)
}

function handelPosts(posts,res) {
  posts.forEach(post => {
    createPost(post,res)
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
  
  }).then(res=>res.json()).then(res=>{
    if(res.msg){
      console.log(false);
    }else{
      window.location.href='/'
    }
  })
  console.log(userInfo);
  }

  function signIn(){
    const userInfo={
      email:email.value ,
      password:password.value ,
    }
    fetch('/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    
    }).then(res=>res.json()).then(res=>{
      if(res.msg){
        console.log(false);
      }else{
        window.location.href='/'
      }
    })
    }
