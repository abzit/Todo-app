const donebtn=document.querySelector("#done");
const chat=document.querySelector('#chat');
const content=document.querySelector(".content");
const postArray=[];
document.addEventListener('keyup',(e)=>{
  if(e.key==="Enter"&&chat.value){
    updateUI();
  }
})
donebtn.addEventListener('click',()=>{
  if(chat.value){
    updateUI();
  }
});


function updateUI(){
  const post=document.createElement('div');
  post.className='post';
  post.classList.add("inputBox");
  const postText=document.createElement('div');
  postText.className='postText chat-style';
  postText.innerHTML=chat.value;
  const deleteBtn=document.createElement('button');
  deleteBtn.className='delete done-style';
  deleteBtn.innerHTML='DELETE';
  post.append(postText);
  post.append(deleteBtn);
  postArray.push(post);
  content.append(post);
  chat.value="";
  deleteBtn.addEventListener('click',()=>{
    // post.classList.add('thisone');
    // removeThis();
    post.remove();
  })
}
// function removeThis(){
//   const getPost=document.querySelectorAll('.post');
//   getPost.forEach(post=>{
//     if(post.classList.contains('thisone')){
//       post.remove();
//     };
//   });


// }


