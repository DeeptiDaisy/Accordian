const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

//const accordianBody = document.querySelector(".accordian_body");
const accordianBody = document.getElementsByClassName("accordian_body")[0]
const faqs = [];
showFaq();

function showFaq(c1) {
 let ChangeCss = document.getElementsByClassName(`Answer`);

 for(let i = 0; i < ChangeCss.length; i++){
  console.log(ChangeCss[i].classList);
  if(ChangeCss[i].classList.value == c1){
    console.log(ChangeCss[i].style.display === "flex", "test");

    if (ChangeCss[i].style.display === "flex"){
      ChangeCss[i].style.display = "none";
    }else {
      ChangeCss[i].style.display = "flex";
    }
  }else{
    ChangeCss[i].style.display = "none";
  }
 }
}

function createFaq() {
 faqData.forEach((e)=> {
  let Container = document.createElement("div");
  Container.className = "Container";
  Container.classList.add(`${e.id}`);

  //createing element
  let Answer = document.createElement("div");
  Answer.className = "Answer";
   Answer.classList.add(`${e.id}`);
  Answer.innerHTML = `<div><p>${e.answer}</p></div>`;

  //appending container and answer

  Container.innerHTML = `<div class="Question_div"><p class="Question">${e.question}</p></div> <div onclick="btnStatusUpdate(${e.id})" class = "Button">-</div>`;
  accordianBody.appendChild(Container);
  accordianBody.appendChild(Answer);
 })
}

 

function btnStatusUpdate(key) {
  let AnswerShow = document.getElementsByClassName("Answer");

  for( let i = 0; i< AnswerShow.length; i++){
    if (AnswerShow[i].classList.value === `Answer ${key}`){
      showFaq(AnswerShow[i].classList.value);
    }
  }
}
 

createFaq();
 
