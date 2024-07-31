let questions = [
    {
    'que': "which is the following is a markup language",
    'a': "HTML",
    'b': "CSS",
    'c': "JAVASCRIPT",
    'd': "PHP",
    'correct': "a"
},
{
   'que': "What Year was javascript launched",
   'a': "1996",
   'b': "1995",
   'c': "1994",
   'd': "none of the above",
   'correct': "b"
},
{
    'que': "What Does css stand for",
   'a': "Hypertext Markup Language",
   'b': "Cascading style sheet",
   'c': "jason object notation",
   'd': "Helicopter terminal Motorbots lamborginis",
   'correct': "b"
}
]



let index = 0;
let final = questions.length;
let quesBox = document.getElementById("quesBox")
let option = document.querySelectorAll(".opt")
let btn = document.getElementById("btnn")

function loadQuestions(){
    if(index === final){
        return endQuiz();
    }else{
        reset();
   const data = questions[index]
   quesBox.innerHTML = `${index+1} ) ${data.que}`
   option[0].nextElementSibling.innerHTML = data.a;
   option[1].nextElementSibling.innerHTML = data.b;
   option[2].nextElementSibling.innerHTML = data.c;
   option[3].nextElementSibling.innerHTML = data.d;
    }
}

let right = 0;
let wrong = 0;

btn.addEventListener("click",function(){
  let ans =  getAns();
   let data = questions[index];
   if(data.correct === ans){
        right++;
   }else{
    wrong++;
   }
   index++;
   loadQuestions();
})


let getAns = () =>{
    let answer;
     option.forEach((input) =>{
        if (input.checked){
           answer = input.value;
        }
     }
     )
     return answer;
}

let reset = () =>{
    option.forEach((ele) =>{
        ele.checked = false;
    })
}

let endQuiz =() =>{
    document.getElementById("box").innerHTML = `
     <h3>Thank for playing.</h3>
     <h2> Your Score is ${right} / ${index};
    `
    h3.style.color = "red";
}

loadQuestions();