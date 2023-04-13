const kaorms = document.querySelectorAll(".kaorm");
const audio = new Audio("../../audio/glass-breaking.mp3");
const choosingAnswer = document.querySelector(".choosing-answer");
const showingAnswer = document.querySelector(".showing-answer");
const showingReward = document.querySelector(".showing-reward");
const startingPage=document.querySelector(".starting-page");
const tippingPage=document.querySelector(".tipping-page");
const buttonClickAudio=new Audio("../../audio/button-click.mp3");
const trackingPlay=document.querySelector(".tracking-play");
let music;
let lastDatePlayed;
let currentDate = new Date().toLocaleDateString();

// All the image that needed to be preloaded
const images = [
  '../../images/gift/ajinomoto.png',
  '../../images/gift/amazon.png',
  '../../images/gift/angkorBeer.png',
  '../../images/gift/canfish.png',
  '../../images/gift/coca.png',
  '../../images/gift/egg.png',
  '../../images/gift/freshy.png',
  '../../images/gift/hoe.png',
  '../../images/gift/koi.png',
  '../../images/gift/kroma.png',
  '../../images/gift/mama.png',
  '../../images/gift/pen.png',
  '../../images/gift/rice.png',
  '../../images/gift/salt.png',
  '../../images/gift/tigerBeer.png',
  '../../images/gift/vital.png',
  '../../images/gif/giphy.gif',
];


// All the audio that needed to be preloaded

const audios=[
  "../../audio/boy-kh.mp3",
  "../../audio/brokeheart.mp3",
  "../../audio/siemreap.mp3",
  "../../audio/ss.mp3",
  "../../audio/ToyToy.mp3",
  "../../audio/Young-Wild-and-Free.mp3",
]

// create an array to store the preloaded audio elements
const preloadedAudio = [];

window.onload=()=>{
  if (localStorage.getItem("playCount") === null) {
    localStorage.setItem("playCount", 0);
  }

  if(localStorage.getItem("lastDatePlayed")===null){
    localStorage.setItem("lastDatePlayed", currentDate);
  }
  else{
    lastDatePlayed = localStorage.getItem('lastDatePlayed');
  }

  if (lastDatePlayed !== currentDate) {
    localStorage.setItem('playCount', 0);
    localStorage.setItem('lastDatePlayed', currentDate);
  }



  // Load all the images

// Loop through the image paths and create new Image objects
images.forEach(path => {
  const img = new Image();
  img.src = path;
});



// loop through the audio files array and create new audio elements for each file
audios.forEach(file => {
  const audio = new Audio();
  audio.src = file;
  preloadedAudio.push(audio);
});
  
}

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
    {title:"ទទួលបាន Tiger ១កំប៉ុង",image:"./images/gift/tigerBeer.png"},
    {title:"ទទួលបាន ពងទា ១ឡូ",image:"./images/gift/egg.png"},
    {title:"ទទួលបាន ប៊ិច ១ដើម",image:"./images/gift/pen.png"},
    {title:"ទទួលបាន មី១កេស",image:"./images/gift/mama.png"},
    {title:"ទទួលបាន អង្ក1Kg",image:"./images/gift/rice.png"},
    {title:"ទទួលបាន ត្រីខ ១កំប៉ុង",image:"./images/gift/canfish.png"},
    {title:"ទទួលបាន ទឹកបរិសុទ្ធ ១ដប",image:"./images/gift/vital.png"},
    {title:"ទទួលបាន ក្រមា១",image:"./images/gift/kroma.png"},
    {title:"ទទួលបាន ចបកាប់១",image:"./images/gift/hoe.png"},
    {title:"ទទួលបាន អំបិល0.5Kg",image:"./images/gift/salt.png"},
    {title:"ទទួលបាន ប៊ីចេង១កញ្ចប់",image:"./images/gift/ajinomoto.png"},
    {title:"ទទួលបាន KOI ១កែវ",image:"./images/gift/ajinomoto.png"},
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
  if(localStorage.getItem('playCount') == 2){
    trackingPlay.classList.add("show");
    
  }

})



// Iterate through all the kaorms with event listeners
kaorms.forEach((k) => {
    k.addEventListener("click", () => {
      if (localStorage.getItem("playCount") === null) {
        localStorage.setItem("playCount", 0);
      }
      count++;
      localStorage.setItem('playCount', parseInt(localStorage.getItem('playCount')) + 1);
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

    console.log(localStorage.getItem('playCount'));
    if(localStorage.getItem('playCount') == 2){
      trackingPlay.classList.add("show");
      
    }
    if(count===5){
      location.reload();
    }
  })



  // Spinner

  const spinner = document.querySelector(".spinner");

setTimeout(() => {
  spinner.classList.add("spinner-hide");
}, 2000);











