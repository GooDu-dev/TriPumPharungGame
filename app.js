
window.onresize = function(){
    checkPos()
}
window.onscroll = function(){
    navAnimation()
}

function checkPos(){
    var container = document.getElementById('home')
    var nav = document.getElementById('nav')
    container.style.height = window.innerHeight + 'px'
    container.style.paddingTop = nav.offsetHeight + 'px'
}
checkPos()

prevY = window.scrollY
function navAnimation(){
    let currentY = window.scrollY
    let nav = document.getElementById("nav")
    // ? scroll Down
    if(prevY < currentY){
        nav.style.top = -10 + 'vw'
    }
    else{
        // ? scroll Up
        nav.style.top = '0px'
    }
    prevY = currentY
}

function randomQuestion(){
    let randQuestion = Math.floor((Math.random()*40)+1)
    let question = document.getElementById('question')
    switch(randQuestion){
        case 1:
            question.innerHTML = 'คำถาม 1'
            break;
        case 2:
            question.innerHTML = 'คำถาม 2'
            break;
        case 3:
            question.innerHTML = 'คำถาม 3'
            break;
        case 4:
            question.innerHTML = 'คำถาม 4'
            break;
        case 5:
            question.innerHTML = 'คำถาม 5'
            break;
        case 6:
            question.innerHTML = 'คำถาม 6'
            break;
        case 7:
            question.innerHTML = 'คำถาม 7'
            break;
        case 8:
            question.innerHTML = 'คำถาม 8'
            break;
        case 9:
            question.innerHTML = 'คำถาม 9'
            break;
        case 10:
            question.innerHTML = 'คำถาม 10'
            break;
        case 11:
            question.innerHTML = 'คำถาม 11'
            break;
        case 12:
            question.innerHTML = 'คำถาม 12'
            break;
        case 13:
            question.innerHTML = 'คำถาม 13'
            break;
        case 14:
            question.innerHTML = 'คำถาม 14'
            break;
        case 15:
            question.innerHTML = 'คำถาม 15'
            break;
        case 16:
            question.innerHTML = 'คำถาม 16'
            break;
        case 17:
            question.innerHTML = 'คำถาม 17'
            break;
        case 18:
            question.innerHTML = 'คำถาม 18'
            break;
        case 19:
            question.innerHTML = 'คำถาม 19'
            break;
        case 20:
            question.innerHTML = 'คำถาม 20'
            break;
        case 21:
            question.innerHTML = 'คำถาม 21'
            break;
        case 22:
            question.innerHTML = 'คำถาม 22'
            break;
        case 23:
            question.innerHTML = 'คำถาม 23'
            break;
        case 24:
            question.innerHTML = 'คำถาม 24'
            break;
        case 25:
            question.innerHTML = 'คำถาม 25'
            break;
        case 26:
            question.innerHTML = 'คำถาม 26'
            break;
        case 27:
            question.innerHTML = 'คำถาม 27'
            break;
        case 28:
            question.innerHTML = 'คำถาม 28'
            break;
        case 29:
            question.innerHTML = 'คำถาม 29'
            break;
        case 30:
            question.innerHTML = 'คำถาม 30'
            break;
        case 31:
            question.innerHTML = 'คำถาม 31'
            break;
        case 32:
            question.innerHTML = 'คำถาม 32'
            break;
        case 33:
            question.innerHTML = 'คำถาม 33'
            break;
        case 34:
            question.innerHTML = 'คำถาม 34'
            break;
        case 35:
            question.innerHTML = 'คำถาม 35'
            break;
        case 36:
            question.innerHTML = 'คำถาม 36'
            break;
        case 37:
            question.innerHTML = 'คำถาม 37'
            break;
        case 38:
            question.innerHTML = 'คำถาม 38'
            break;
        case 39:
            question.innerHTML = 'คำถาม 39'
            break;
        case 40:
            question.innerHTML = 'คำถาม 40'
            break;
    }
    choiceForQuestion(randQuestion)
}
randomQuestion()

function choiceForQuestion(randQuestion){
    let questionNumber = randQuestion;
    let ans1, ans2, ans3, ans4
    switch (questionNumber) {
        case 1:
            ans1 = 'คำตอบ 1-1' 
            ans2 = 'คำตอบ 2-1' 
            ans3 = 'คำตอบ 3-1' 
            ans4 = 'คำตอบ 4-1' 
            break;
        case 2:
            ans1 = 'คำตอบ 1-2' 
            ans2 = 'คำตอบ 2-2' 
            ans3 = 'คำตอบ 3-2' 
            ans4 = 'คำตอบ 4-2' 
            break;
        case 3:
            ans1 = 'คำตอบ 1-3' 
            ans2 = 'คำตอบ 2-3' 
            ans3 = 'คำตอบ 3-3' 
            ans4 = 'คำตอบ 4-3' 
            break;
        case 4:
            ans1 = 'คำตอบ 1-4' 
            ans2 = 'คำตอบ 2-4' 
            ans3 = 'คำตอบ 3-4' 
            ans4 = 'คำตอบ 4-4' 
            break;
        case 5:
            ans1 = 'คำตอบ 1-5' 
            ans2 = 'คำตอบ 2-5' 
            ans3 = 'คำตอบ 3-5' 
            ans4 = 'คำตอบ 4-5' 
            break;
        case 6:
            ans1 = 'คำตอบ 1-6' 
            ans2 = 'คำตอบ 2-6' 
            ans3 = 'คำตอบ 3-6' 
            ans4 = 'คำตอบ 4-6' 
            break;
        case 7:
            ans1 = 'คำตอบ 1-7' 
            ans2 = 'คำตอบ 2-7' 
            ans3 = 'คำตอบ 3-7' 
            ans4 = 'คำตอบ 4-7' 
            break;
        case 8:
            ans1 = 'คำตอบ 1-8' 
            ans2 = 'คำตอบ 2-8' 
            ans3 = 'คำตอบ 3-8' 
            ans4 = 'คำตอบ 4-8' 
            break;
        case 9:
            ans1 = 'คำตอบ 1-9' 
            ans2 = 'คำตอบ 2-9' 
            ans3 = 'คำตอบ 3-9' 
            ans4 = 'คำตอบ 4-9' 
            break;
        case 10:
            ans1 = 'คำตอบ 1-10' 
            ans2 = 'คำตอบ 2-10' 
            ans3 = 'คำตอบ 3-10' 
            ans4 = 'คำตอบ 4-10' 
            break;
        case 11:
            ans1 = 'คำตอบ 1-11' 
            ans2 = 'คำตอบ 2-11' 
            ans3 = 'คำตอบ 3-11' 
            ans4 = 'คำตอบ 4-11' 
            break;
        case 12:
            ans1 = 'คำตอบ 1-12' 
            ans2 = 'คำตอบ 2-12' 
            ans3 = 'คำตอบ 3-12' 
            ans4 = 'คำตอบ 4-12' 
            break;
        case 13:
            ans1 = 'คำตอบ 1-13' 
            ans2 = 'คำตอบ 2-13' 
            ans3 = 'คำตอบ 3-13' 
            ans4 = 'คำตอบ 4-13' 
            break;
        case 14:
            ans1 = 'คำตอบ 1-17' 
            ans2 = 'คำตอบ 2-17' 
            ans3 = 'คำตอบ 3-17' 
            ans4 = 'คำตอบ 4-17' 
            break;
        case 15:
            ans1 = 'คำตอบ 1-15' 
            ans2 = 'คำตอบ 2-15' 
            ans3 = 'คำตอบ 3-15' 
            ans4 = 'คำตอบ 4-15' 
            break;
        case 16:
            ans1 = 'คำตอบ 1-16' 
            ans2 = 'คำตอบ 2-16' 
            ans3 = 'คำตอบ 3-16' 
            ans4 = 'คำตอบ 4-16' 
            break;
        case 17:
            ans1 = 'คำตอบ 1-17' 
            ans2 = 'คำตอบ 2-17' 
            ans3 = 'คำตอบ 3-17' 
            ans4 = 'คำตอบ 4-17' 
            break;
        case 18:
            ans1 = 'คำตอบ 1-18' 
            ans2 = 'คำตอบ 2-18' 
            ans3 = 'คำตอบ 3-18' 
            ans4 = 'คำตอบ 4-18' 
            break;
        case 19:
            ans1 = 'คำตอบ 1-19' 
            ans2 = 'คำตอบ 2-19' 
            ans3 = 'คำตอบ 3-19' 
            ans4 = 'คำตอบ 4-19' 
            break;
        case 20:
            ans1 = 'คำตอบ 1-20' 
            ans2 = 'คำตอบ 2-20' 
            ans3 = 'คำตอบ 3-20' 
            ans4 = 'คำตอบ 4-20' 
            break;
        case 21:
            ans1 = 'คำตอบ 1-21' 
            ans2 = 'คำตอบ 2-21' 
            ans3 = 'คำตอบ 3-21' 
            ans4 = 'คำตอบ 4-21' 
            break;
        case 22:
            ans1 = 'คำตอบ 1-22' 
            ans2 = 'คำตอบ 2-22' 
            ans3 = 'คำตอบ 3-22' 
            ans4 = 'คำตอบ 4-22' 
            break;
        case 23:
            ans1 = 'คำตอบ 1-23' 
            ans2 = 'คำตอบ 2-23' 
            ans3 = 'คำตอบ 3-23' 
            ans4 = 'คำตอบ 4-23' 
            break;
        case 24:
            ans1 = 'คำตอบ 1-24' 
            ans2 = 'คำตอบ 2-24' 
            ans3 = 'คำตอบ 3-24' 
            ans4 = 'คำตอบ 4-24' 
            break;
        case 25:
            ans1 = 'คำตอบ 1-25' 
            ans2 = 'คำตอบ 2-25' 
            ans3 = 'คำตอบ 3-25' 
            ans4 = 'คำตอบ 4-25' 
            break;
        case 26:
            ans1 = 'คำตอบ 1-26' 
            ans2 = 'คำตอบ 2-26' 
            ans3 = 'คำตอบ 3-26' 
            ans4 = 'คำตอบ 4-26' 
            break;
        case 27:
            ans1 = 'คำตอบ 1-27' 
            ans2 = 'คำตอบ 2-27' 
            ans3 = 'คำตอบ 3-27' 
            ans4 = 'คำตอบ 4-27' 
            break;
        case 28:
            ans1 = 'คำตอบ 1-28' 
            ans2 = 'คำตอบ 2-28' 
            ans3 = 'คำตอบ 3-28' 
            ans4 = 'คำตอบ 4-28' 
            break;
        case 29:
            ans1 = 'คำตอบ 1-29' 
            ans2 = 'คำตอบ 2-29' 
            ans3 = 'คำตอบ 3-29' 
            ans4 = 'คำตอบ 4-29' 
            break;
        case 30:
            ans1 = 'คำตอบ 1-30' 
            ans2 = 'คำตอบ 2-30' 
            ans3 = 'คำตอบ 3-30' 
            ans4 = 'คำตอบ 4-30' 
            break;
        case 31:
            ans1 = 'คำตอบ 1-31' 
            ans2 = 'คำตอบ 2-31' 
            ans3 = 'คำตอบ 3-31' 
            ans4 = 'คำตอบ 4-31' 
            break;
        case 32:
            ans1 = 'คำตอบ 1-32' 
            ans2 = 'คำตอบ 2-32' 
            ans3 = 'คำตอบ 3-32' 
            ans4 = 'คำตอบ 4-32' 
            break;
        case 33:
            ans1 = 'คำตอบ 1-33' 
            ans2 = 'คำตอบ 2-33' 
            ans3 = 'คำตอบ 3-33' 
            ans4 = 'คำตอบ 4-33' 
            break;
        case 34:
            ans1 = 'คำตอบ 1-34' 
            ans2 = 'คำตอบ 2-34' 
            ans3 = 'คำตอบ 3-34' 
            ans4 = 'คำตอบ 4-34' 
            break;
        case 35:
            ans1 = 'คำตอบ 1-35' 
            ans2 = 'คำตอบ 2-35' 
            ans3 = 'คำตอบ 3-35' 
            ans4 = 'คำตอบ 4-35' 
            break;
        case 36:
            ans1 = 'คำตอบ 1-36' 
            ans2 = 'คำตอบ 2-36' 
            ans3 = 'คำตอบ 3-36' 
            ans4 = 'คำตอบ 4-36' 
            break;
        case 37:
            ans1 = 'คำตอบ 1-37' 
            ans2 = 'คำตอบ 2-37' 
            ans3 = 'คำตอบ 3-37' 
            ans4 = 'คำตอบ 4-37' 
            break;
        case 38:
            ans1 = 'คำตอบ 1-38' 
            ans2 = 'คำตอบ 2-38' 
            ans3 = 'คำตอบ 3-38' 
            ans4 = 'คำตอบ 4-38' 
            break;
        case 39:
            ans1 = 'คำตอบ 1-39' 
            ans2 = 'คำตอบ 2-39' 
            ans3 = 'คำตอบ 3-39' 
            ans4 = 'คำตอบ 4-39' 
            break;
        case 40:
            ans1 = 'คำตอบ 1-40' 
            ans2 = 'คำตอบ 2-40' 
            ans3 = 'คำตอบ 3-40' 
            ans4 = 'คำตอบ 4-40' 
            break;
    }

    let choices = document.querySelectorAll('.choice-details')
    choices.forEach(choice => {
        choiceNum = choice.getAttribute('choice')
        if(choiceNum == 'a'){
            choice.innerHTML = ans1
        }
        if(choiceNum == 'b'){
            choice.innerHTML = ans2
        }
        if(choiceNum == 'c'){
            choice.innerHTML = ans3
        }
        if(choiceNum == 'd'){
            choice.innerHTML = ans4
        }
    })
}