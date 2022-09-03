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
const loginForm=document.querySelector('.login')
const btnBox=document.querySelector('.buttons-box')
const user=document.createElement('h2')
const imgUser=document.createElement('img')
const chk=document.querySelector('#chk')
const body=document.querySelector('body')
let isChk=false
fetch('/user').then(res=>res.json()).then(res=>{
  if(res.msg){
    btnBox.appendChild(rigsterBtn)
    btnBox.appendChild(signinBtn)
    rigsterBtn.setAttribute('class','btn-grad')
    signinBtn.setAttribute('class','btn-grad')
    rigsterBtn.textContent='REGISTER'
    signinBtn.textContent='SIGN IN'
  }else{
    user.textContent=res.name
    imgUser.src=res.img
    btnBox.appendChild(user)
    btnBox.appendChild(imgUser)
  }
  fetch('/get-posts').then(res=>res.json()).then(posts=>handelPosts(posts,res))

})




rigsterBtn.addEventListener('click',()=>{

  if(!isChk){
  rigsterForm.style.bottom='-80px'
  isChk=true
  console.log( chk.checked);
  }else{
  rigsterForm.style.bottom='1500px'
  isChk=false
  }

})
signinBtn.addEventListener('click',()=>{
  if(!chk.checked){
    rigsterForm.style.bottom='-80px'
  // loginForm.style.transform='translateY(-180px)'

  chk.checked=true
  console.log( chk.checked);
  }else{
    console.log('tt');
  rigsterForm.style.bottom='1500px'
  chk.checked=false

  }
  
})

posts.addEventListener('click',()=>{
  if (rigsterForm.style.bottom=='-80px') {
    isChk=false
    rigsterForm.style.bottom='1500px'
    console.log(isChk);
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
  if(item.user_id===res.id){
    const deleteBtn=document.createElement('button')
    deleteBtn.textContent='X'
    article.appendChild(deleteBtn)
    deleteBtn.setAttribute('class','deleteBtn')
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
  nameUser.textContent=item.name
  posts.appendChild(article)
  if(item.imguser){
    const img =document.createElement('img')
    img.src=item.imguser
    img.setAttribute('class','imgUser')
    article.appendChild(img)

  }
 
  article.appendChild(nameUser)
  article.appendChild(starIcon)
  article.appendChild(post)
  article.appendChild(star)
  article.appendChild(comments)
  star.textContent=item.s|| ' '

  item.comments.forEach(e=>{
    const comment =document.createElement('li')
    comments.appendChild(comment)
    comment.textContent=e.comment
  })

  post.textContent=item.post

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
