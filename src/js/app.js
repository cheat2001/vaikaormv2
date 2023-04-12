const kaorms = document.querySelectorAll(".kaorm");
const audio = new Audio("../../audio/glass-breaking.mp3");
const choosingAnswer = document.querySelector(".choosing-answer");
const showingAnswer = document.querySelector(".showing-answer");
const showingReward = document.querySelector(".showing-reward");
const startingPage=document.querySelector(".starting-page");
const tippingPage=document.querySelector(".tipping-page");
const buttonClickAudio=new Audio("../../audio/button-click.mp3");
let music;

let count=0;
// Define an array of question objects
const questions = [
    {
      question: "តើបទចម្រៀងនេះមានចំណង់ជើងអ្វីដែរ?",
      audio: "../../audio/brokeheart.mp3",
      options: ["កន្ត្រឹមលាក់ស្នេហ៍", "កន្ត្រឹមបាត់ស្នេហ៍", "កន្ត្រឹមខកស្នេហ៍"],
      answer: "កន្ត្រឹមខកស្នេហ៍"
    },
    {
      question: "តើបទចម្រៀងនេះមានចំណង់ជើងអ្វីដែរ?",
      audio: "../../audio/ToyToy.mp3",
      options: ["រាំទយ", "ទយៗ", "កញ្ញារាំទយ"],
      answer: "ទយៗ"
    },
    {
      question: "តើបទចម្រៀងនេះមានចំណង់ជើងអ្វីដែរ?",
      audio: "../../audio/boy-kh.mp3",
      options: ["កម្លោះស្រុកខ្មែរ", "កម្លោះស្រុកស្រែ", "កម្លោះមានស្នេហ៍"],
      answer: "កម្លោះស្រុកខ្មែរ"
    },
    {
      question: "តើបទចម្រៀងនេះមានចំណង់ជើងអ្វីដែរ?",
      audio: "../../audio/Young-Wild-and-Free.mp3",
      options: ["Young wild and Free", "Ghost", "Enjoy the weekend"],
      answer: "Young wild and Free"
    },
    {
      question: "តើបទចម្រៀងនេះមានចំណង់ជើងអ្វីដែរ?",
      audio: "../../audio/ss.mp3",
      options: ["មនុសមួយសេស", "មនុស្សពិសេស", "មនុស្សបីសេស"],
      answer: "មនុស្សពិសេស"
    },
    {
      question: "តើបទចម្រៀងនេះមានចំណង់ជើងអ្វីដែរ?",
      audio: "../../audio/siemreap.mp3",
      options: ["ចំប៉ាសៀមរាប", "បុប្ផាសៀមរាប", "ចំបុីសៀមរាប"],
      answer: "ចំបុីសៀមរាប"
    }
  ];



  // Define gift array object
  const gifts=[
    {title:"ឆ្លើយអត់ត្រូវផងចង់បានរង្វាន់! 😂",image:"./images/gif/giphy.gif"},
    {title:"ទទួលបាន Coca ១កំប៉ុង",image:"./images/gift/coca.png"},
    {title:"ទទួលបាន Freshy ១កំប៉ុង",image:"./images/gift/freshy.png"},
    {title:"ទទួលបាន Amazon ១កែវ",image:"./images/gift/amazon.png"},
    {title:"ទទួលបាន Zoomer X ១គ្រឿង",image:"./images/gift/zoomer.mampng"},
    {title:"ទទួលបាន Tiger ១កំប៉ុង",image:"./images/gift/tigerBeer.png"},
    {title:"ទទួលបាន កង់១គ្រឿង",image:"./images/gift/bicycle.png"},
    {title:"ទទួលបាន លុយមួយ១មុឺនដុល្លា",image:"./images/gift/dollar.png"},
    {title:"ទទួលបាន iPhone 13 Pro ",image:"./images/gift/iphone.png"},
    {title:"ទទួលបាន Scoopy ១គ្រឿង",image:"./images/gift/scoopy.webp"},
    {title:"ទទួលបាន MacBook Pro",image:"./images/gift/mac.png"},
    {title:"ទទួលបាន ពងទា ១ឡូ",image:"./images/gift/egg.png"},
    {title:"ទទួលបាន Zenvo ST1 ១គ្រឿង",image:"./images/gift/zenvo.png"},
    {title:"ទទួលបាន ប៊ិច ១ដើម",image:"./images/gift/pen.png"},
    {title:"ទទួលបាន Rolls Royce ១គ្រឿង",image:"./images/gift/rollsroyce.png"},
    {title:"ទទួលបាន មី១កេស",image:"./images/gift/mama.png"},
    // {title:"Crush ព្រមស្រឡាញ់",image:"./images/gift/bicycle.png"},
    // {title:"អ្នកនឹងទទួលបានជីវិតដែលរីករាយ",image:"./images/gift/bicycle.png"},
    // {title:"អ្នកនឹកទទួលបានជីវិតដែលជោគជ័យ",image:"./images/gift/bicycle.png"},
    // {title:" ទទួលបាន Girlfriend ១នាក់",image:"./images/gift/bicycle.png"},
    // {title:"ទទួលបាន Boyfriend ១នាក់",image:"./images/gift/bicycle.png"},
    {title:"ទំពាំងបាយជូរ ១ចង្គោម",image:"./images/gift/grapes.png"},
    
]

// Global Index random for gift
let giftIndex=0;

//   Global Index for random question
let index = 0;

// Get references to the HTML elements
const questionElement = document.querySelector(".question");
const optionsContainer = document.querySelector(".answer");
const resultElement = document.getElementById("result");
const checkSelect = document.getElementById("check-select");
const submitButton = document.querySelector(".btn-check-answer");
const btnReward=document.querySelector(".btn-reward");
const btnPlayAgain=document.querySelector(".btn-play-again");
const btnStartPlay=document.querySelector(".btn-start-play");
const btnContinue=document.querySelector(".btn-continue");
const rewardText=document.querySelector(".reward-text");
const rewardImage=document.querySelector(".reward img");

// Get Start The Game

btnStartPlay.addEventListener("click",()=>{
  startingPage.classList.add("hide");
  tippingPage.classList.add("show");
  buttonClickAudio.play();
    
})

btnContinue.addEventListener("click",()=>{
  tippingPage.classList.remove("show");
  buttonClickAudio.play();
})



// Iterate through all the kaorms with event listeners
kaorms.forEach((k) => {
    k.addEventListener("click", () => {
      count++;
      console.log(count);
        k.classList.add("drop-kaorm");
        audio.play();
        choosingAnswer.classList.add("show");
        index=randomIndex();
        setQuestion();

    })
})

// Display a question object on the page
function setQuestion(){   
   music= new Audio(questions[index].audio);
   music.play();
    questionElement.innerHTML=` <h4>${questions[index].question}</h3>`
optionsContainer.innerHTML=`
<label class="radio-button">
<input type="radio" name="options" value="${questions[index].options[0]}">
<span class="checkmark"></span>
${questions[index].options[0]}
</label>
<label class="radio-button">
<input type="radio" name="options" value="${questions[index].options[1]}">
<span class="checkmark"></span>
${questions[index].options[1]}
</label>
<label class="radio-button">
<input type="radio" name="options" value="${questions[index].options[2]}">
<span class="checkmark"></span>
${questions[index].options[2]}
</label>
`
}


// Get random question index

function randomIndex(){
    const randomNumber = Math.floor(Math.random() * questions.length);

    return randomNumber;

}


// Get random index for gift

function randomGiftIndex(){
  const randomNumber = Math.floor(Math.random() * gifts.length);

    return randomNumber;
}

// Set up the event listener for the submit button
submitButton.addEventListener("click", () => {
  buttonClickAudio.play();
    const selectedOption = document.querySelector("input[type=radio]:checked");
    if (!selectedOption) {
      checkSelect.textContent = "Please select an answer!";
      return;
    }
    console.log(selectedOption.value)
    const answer = selectedOption.value;
    if (answer === questions[index].answer) {
      resultElement.textContent = "Great! It's Correct! 🎉";
      choosingAnswer.classList.remove("show");
      questions.splice(index,1);
      showingAnswer.classList.add("show");
      giftIndex=randomGiftIndex();

      rewardImage.src=gifts[giftIndex].image;

      rewardText.textContent=gifts[giftIndex].title;
    } else {
      resultElement.textContent = "Sorry, that's incorrect. 😭🍾";
      choosingAnswer.classList.remove("show");
      questions.splice(index,1);
      showingAnswer.classList.add("show");
      
      rewardImage.src=gifts[0].image;

      rewardText.textContent=gifts[0].title;
    }
  });


  // Set up the event listener for the reward button

  btnReward.addEventListener("click",()=>{
    showingAnswer.classList.remove("show");
    showingReward.classList.add("show");
    buttonClickAudio.play();

  })



  // Set up the event listener for the play again button


  btnPlayAgain.addEventListener("click",()=>{
    showingReward.classList.remove("show");
    buttonClickAudio.play();
    music.pause();
    if(count===5){
      location.reload();
    }
  })



  // Spinner

  const spinner = document.querySelector(".spinner");

setTimeout(() => {
  spinner.classList.add("spinner-hide");
}, 2000);