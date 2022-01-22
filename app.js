
window.onresize = function(){
    checkPos()
}
window.onscroll = function(){
    navAnimation()
}
window.onload = function(){
    let choices = document.querySelectorAll('.choice')
    choices.forEach(choice => {
        choice.addEventListener('click', function(){
            let choice_details = choice.getElementsByClassName('choice-details')[0]
            let isCorrect = choice_details.getAttribute('correct')
            if(isCorrect){
                correct()
            }
            else{
                nextQuestion()
            }
        })
    })
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

var answeredQuestion = []
var currentCorrectAnswer
function randomQuestion(){
    let randQuestion, newRandQuestion
    let question = document.getElementById('question')
    let correctAns;
    randQuestion = Math.floor((Math.random()*25)+1)
    while(checkAnswered(randQuestion)){
        randQuestion = Math.floor((Math.random()*25)+1)
    }
    console.log('randQuestion is => ' + randQuestion)
    switch(randQuestion){
        case 1:
            question.innerHTML = 'ข้อใดกล่าวไม่ถูกต้องเกี่ยวกับวรรณคดีเรื่องไตรภูมิพระร่วง'
            correctAns = 'a'
            break;
        case 2:
            question.innerHTML = '“ไตรภูมิ” ซึ่งหมายถึง ภูมิทั้งสาม นี้ หมายถึงภูมิใดบ้าง'
            correctAns = 'b'
            break;
        case 3:
            question.innerHTML = 'ทารกที่เกิดตัวเย็น ออกมาแล้วหัวเราะ เกิดมาจากที่ใด'
            correctAns = 'c'
            break;
        case 4:
            question.innerHTML = 'มนุสสาภูมิประกอบด้วย 4 ทวีป ข้อใดที่ไม่ใช่ 1 ใน 4 ทวีป'
            correctAns = 'd'
            break;
        case 5:
            question.innerHTML = 'ข้อใดหมายถึงพยาธิในท้อง'
            correctAns = 'a'
            break;
        case 6:
            question.innerHTML = 'ผู้แต่งคือใครและมีความสัมพันธ์กับพ่อขุนรามคำแหงมหาราชอย่างไร'
            correctAns = 'b'
            break;
        case 7:
            question.innerHTML = 'ฆนะ (ก้อนเนื้อ, แท่งเนื้อ ขนาดเท่าไข่ไก่) เป็นช่วงเกิดที่เท่าไหร่'
            correctAns = 'c'
            break;
        case 8:
            question.innerHTML = 'ข้อใดกล่าวถึงไตรภูมิพระร่วงไม่ถูกต้อง'
            correctAns = 'd'
            break;
        case 9:
            question.innerHTML = 'ข้อใดไม่มีอุปมาโวหาร'
            correctAns = 'a'
            break;
        case 10:
            question.innerHTML = ' ข้อใดใช้อุปมาโวหาร'
            correctAns = 'b'
            break;
        case 11:
            question.innerHTML = 'ข้อใดกล่าวถึงพยาธิในท้อง'
            correctAns = 'c'
            break;
        case 12:
            question.innerHTML = 'ข้อใดไม่ได้อยู่ในดินแดนอบายภูมิ'
            correctAns = 'd'
            break;
        case 13:
            question.innerHTML = 'ข้อใดมีลักษณะเด่นด้านการหลากคำที่มีความเหมือนกัน หรือคล้ายกัน'
            correctAns = 'a'
            break;
        case 14:
            question.innerHTML = 'ไตรภูมิพระร่วงมีที่มาจากเรื่องใด'
            correctAns = 'b'
            break;
        case 15:
            question.innerHTML = 'ชื่อใดเป็นเขาที่ตั้งล้อมรอบเขาพระสุเมรุ'
            correctAns = 'c'
            break;
        case 16:
            question.innerHTML = 'ข้อใดเป็นลักษณะพิเศษของทารกผู้เป็นพระปัจเจกพุทธเจ้า พระอรหันต์ และพระอัครสาวก ลงมาเกิด'
            correctAns = 'd'
            break;
        case 17:
            question.innerHTML = '“ผิแลว่าเมื่อแม่เดินไปก็ดี นอนก็ดี ฟื้นตนก็ดี กุมารอยู่ในท้อง แม่นั้นให้เจ็บเพียงจะตายแลดุจดั่งลูกทรายอันพึ่งออกแล อยู่ธรห้อยผิบ่มิดุจดั่งคนอันเมาเหล้า...” คำว่า “อยู่ธรห้อย” ในบทประพันธ์ข้างต้นหมายถึงอะไร'
            correctAns = 'a'
            break;
        case 18:
            question.innerHTML = '“...ซึ่งอยู่ในท้องแม่อันเป็นที่เหม็นแลที่ออกลูกออกเต้า ที่เถ้า ที่ตายที่เร่ว ฝูงตืดและเอือนทั้งหลายนั้นคนกันอยู่ในท้องแม่...” คำว่า “ที่เร่ว” ในบทประพันธ์ข้างต้นหมายถึงอะไร'
            correctAns = 'b'
            break;
        case 19:
            question.innerHTML = 'ไตรภูมิพระร่วงแต่งในสมัยใด'
            correctAns = 'c'
            break;
        case 20:
            question.innerHTML = 'ข้อใดคือ จุดมุ่งหมายของไตรภูมิพระร่วง'
            correctAns = 'd'
            break;
        case 21:
            question.innerHTML = 'ข้อใดเป็นทัศนะของกวีเกี่ยวกับการเกิดของมนุษย์ในท้องมารดา'
            correctAns = 'a'
            break;
        case 22:
            question.innerHTML = '“สมบัติในนิพพานนันสุขพ้นประมาณ แลว่าหาอันจะเปรียบบมิได้ บมิรู้เป็นอาพาธพยาธิสิ่งใด บมิรู้เถ้า บมิรู้แก่ บมิรู้ตาย บมิรู้ฉิบหาย บมิรู้พลัดพรากจากกันสักอัน”'
            correctAns = 'b'
            break;
        case 23:
            question.innerHTML = 'สวรรค์ชั้นใด เป็นที่อยู่ของพระโพธิสัตว์ก่อนจะมาตรัสรู้เป็นพระพุทธเจ้า'
            correctAns = 'c'
            break;
        case 24:
            question.innerHTML = 'ข้อใดใช้คำสัมผัสคล้องจองทำให้เกิดความงามของภาษา'
            correctAns = 'd'
            break;
        case 25:
            question.innerHTML = 'ผู้ที่มาเกิดข้อใด ขณะเมื่ออยู่ในครรภ์มารดานั้น “บ่ห่อนจะได้หลง”'
            correctAns = 'a'
            break;
    }
    choiceForQuestion(randQuestion, correctAns)
}

function choiceForQuestion(randQuestion, correctAnswer){
    let questionNumber = randQuestion;
    let ans1, ans2, ans3, ans4
    let answer = correctAnswer
    switch (questionNumber) {
        case 1:
            ans1 = 'เป็นผลงานพระราชนิพนธ์ของพญาเลอไทย' 
            ans2 = 'เรียกอีกชื่อหนึ่งว่า เตภูมิกถา ' 
            ans3 = 'กวีทรงพระราชนิพนธ์ขึ้นเพื่อใช้เทศนาโปรด' 
            ans4 = 'พระราชมารดาเป็นวรรณคดีที่มีอิทธิพลต่อความคิดความเชื่อเรื่อง โลกและจักรวาลของคนไทย' 
            break;
        case 2:
            ans1 = 'สวรรค์ มนุษย์ นรก ' 
            ans2 = 'กามภูมิ รูปภูมิ อรูปภูมิ' 
            ans3 = 'สวรรค์ มนุษย์ บาดาล' 
            ans4 = 'กามภูมิ อกามภูมิ นิพพาน' 
            break;
        case 3:
            ans1 = 'มาจากนรก' 
            ans2 = 'มาจากท้องแม่' 
            ans3 = 'มาจากสวรรค์' 
            ans4 = 'มาจากไม้ไผ่' 
            break;
        case 4:
            ans1 = 'อมรโคยานทวีป' 
            ans2 = 'บุรพวิเทหทวีป' 
            ans3 = 'ชมพูทวีป' 
            ans4 = 'ธตรฐภูมิ' 
            break;
        case 5:
            ans1 = 'เอือน' 
            ans2 = 'ห่อน' 
            ans3 = 'อัมพุทะ' 
            ans4 = 'ธรห้อย' 
            break;
        case 6:
            ans1 = 'พระศรีสุนทรโวหาร- หลาน' 
            ans2 = 'พญาลิไท-หลาน' 
            ans3 = 'พระศรีสุนทรโวหาร- เหลน' 
            ans4 = 'พญาลิไท-เหลน' 
            break;
        case 7:
            ans1 = '24วัน' 
            ans2 = '22วัน' 
            ans3 = '21วัน' 
            ans4 = '23วัน' 
            break;
        case 8:
            ans1 = 'ชี้ให้เห็นว่าแดน 3 โลกนี้ไม่น่าอยู่เลย' 
            ans2 = 'ความสุขในอุตรกุรุทวีปเป็นความสุขที่ยิ่งใหญ่เป็นอมตะ' 
            ans3 = 'อนิจจาลักษณะคือความเป็นอนิจจังของสรรพสิ่งในโลก' 
            ans4 = 'ถูกทุกข้อ' 
            break;
        case 9:
            ans1 = 'จะงอยไส้ดือนั้นกลวงขึ้นไปเบื้องบนติดหลังท้องแม่ ' 
            ans2 = 'แลสองแก้มเขานั้นไสร้งามเป็นนวลดั่งแกล้งเอาแป้งผัด ' 
            ans3 = 'ถ้าจะเอามาเปรียบด้วยสมบัตินิพพานนั้นประดุจเอาหิ่งห้อยมาเปรียบด้วยพระจันทร์' 
            ans4 = 'อันว่าสายสะดือแห่งกุมารนั้นกลวงดั่งสายก้านบัวอันมีชื่อว่าอุบล ' 
            break;
        case 10:
            ans1 = 'เมื่อกุมารอยู่ในท้องแม่นั้นลำบากนักหนา พึงเกลียด พึงหน่ายพ้นประมาณนัก ก็ชื้นแลเหม็นกลิ่นตืดและ เอือนอันได้ 80 ครอก' 
            ans2 = 'แลกุมารนั้นเจ็บเนื้อเจ็บตนดั่งคนอันท่านขังไว้ในไหอัน คับแคบนักหนา แค้นเนื้อแค้นใจ แลเดือดเนื้อเดือดใจ นักหนา เหยียดตีนมือบ่มิได้ ดั่งท่านเอาใส่ไว้ในที่คับ' 
            ans3 = 'สิ่งอาหารอันแม่กินเข้าไปในท้องนั้นไหม้และย่อยลง ด้วยอำนาจแห่งไฟธาตุอันร้อนนั้น ส่วนตัวกุมารนั้น บ่มิไหม้' 
            ans4 = 'เมื่อกุมารนั้นคลอดออกจากท้องแม่ ออกแลไปบ่มิพ้นตน ตนเย็นนั้นแลเจ็บเนื้อเจ็บตนนักหนา' 
            break;
        case 11:
            ans1 = 'อัมพุทะนั้นโดยใหญ่ไปทุกวารไสร้ ครั้นได้ถึง 7 วาร ข้นเป็นดั่งตะกั่วอันเชื่อมอยู่ในหม้อเรียกชื่อว่าเปสิ' 
            ans2 = 'จะงอยไส้ดือนั้นกลวงขึ้นไปเบื้องบนติดหลังท้องแม่แลข้าว น้ำอาหารอันใดแม่กินไสร้ แลโอชารสนั้นก็เป็นน้ำชุ่มเข้าไป ในไส้ดือนั้น' 
            ans3 = 'เมื่อกุมารอยู่ในท้องแม่นั้นลำบากนักหนา พึงเกลียด พึงหน่ายพ้นประมาณนัก ก็ชื้นแลเหม็นกลิ่นตืดและ เอือนอันได้ 80 ครอก' 
            ans4 = 'ผิรูปอันจะเกิดเป็นชายก็ดีเป็นหญิงก็ดี เกิดมีอาทิ' 
            break;
        case 12:
            ans1 = 'นรกภูมิ' 
            ans2 = 'เปรตภูมิ' 
            ans3 = 'ดิรัจฉานภูมิ' 
            ans4 = 'ศาลพระภูมิ' 
            break;
        case 13:
            ans1 = 'แลภูเขาอันชื่อคังไคยบรรพตหีบแลเหงแลบดบี้ นั้นแล' 
            ans2 = 'เลือดแลน้ำเหลืองย้อยลงเต็มตนยะหยดทุกเมื่อแล' 
            ans3 = 'เมื่อจะคลอดออก ตนกุมารนั้นเย็น เย็นเนื้อเย็นใจ' 
            ans4 = 'คนผู้ใดจากแต่นรกมาเกิดนั้น เมื่อคลอดออกตนกุมารนั้น ร้อน' 
            break;
        case 14:
            ans1 = 'จินตหลา พูลลาพ' 
            ans2 = 'เตภูมิกถา' 
            ans3 = 'ไก่ฟ้ากับหมาโย่ง' 
            ans4 = 'สังฆวัตถุ 8' 
            break;
        case 15:
            ans1 = 'จรเกตุ' 
            ans2 = 'จรวิก' 
            ans3 = 'กรวิก' 
            ans4 = 'กรเกตุ' 
            break;
        case 16:
            ans1 = 'ครั้นออกจากท้องแม่ไสร้ ลมอันมีในท้องผู้น้อยค่อยพัด ออกก่อน' 
            ans2 = 'ครั้นว่าออกมาไสร้ ก็ย่อมหัวร่อก่อนแล' 
            ans3 = 'พัดให้ตัวกุมารนั้นขึ้นหนบน ให้หัวลงมาสู่ที่จะออกนั้น' 
            ans4 = 'เมื่ออยู่ในท้องแม่นั้นบ่ห่อนจะรู้หลงแลยังคำนึงรู้อยู่ทุกอัน' 
            break;
        case 17:
            ans1 = 'โคลงเคลง ทรงตัวไม่ได้' 
            ans2 = 'ห้อยหัว กลับหัว' 
            ans3 = 'เหี่ยวแห้งไม่สดชื่น' 
            ans4 = 'ไม่มีแรง' 
            break;
        case 18:
            ans1 = 'เร็ว' 
            ans2 = 'ป่าช้า' 
            ans3 = 'เกิด กำเนิด' 
            ans4 = 'ที่ว่าง' 
            break;
        case 19:
            ans1 = 'กรุงเทพ' 
            ans2 = 'กรุงธนบุรี' 
            ans3 = 'กรุงสุโขทัย' 
            ans4 = 'กรุงศรี' 
            break;
        case 20:
            ans1 = 'ชี้ให้เห็นความสุขสบายในแต่ละภพภูมิ' 
            ans2 = 'ชี้นำให้มนุษย์หาทางหลุดพ้นและบรรลุนิพพาน' 
            ans3 = 'ชี้ให้เห็นผลของการทำบุญและทำบาป' 
            ans4 = 'ชี้นำให้มนุษย์เข้าใจอนิจจังของชีวิต' 
            break;
        case 21:
            ans1 = 'เป็นความทุกข์แบบหนึ่่ง' 
            ans2 = 'เป็นความสุขแบบหนึ่ง' 
            ans3 = 'เป็นความยินดีอย่างหนึ่ง' 
            ans4 = 'เป็นสัจธรรมประการหนึ่ง' 
            break;
        case 22:
            ans1 = 'หลากคำ ซ้ำคำ' 
            ans2 = 'ย้ำคำ และจังหวะ' 
            ans3 = 'เปรียบเทียบ เร้าใจ' 
            ans4 = 'ใช้จินตภาพ คำคล้องจอง' 
            break;
        case 23:
            ans1 = 'ดาวดึงสา' 
            ans2 = 'จตุมหาราชิกา' 
            ans3 = 'ดุสิตา' 
            ans4 = 'ยามา' 
            break;
        case 24:
            ans1 = 'แลแต่นั้นค่อยไปเบื้องหน้าทุกวัน' 
            ans2 = 'บ่ห่อนได้เหยียดตีนมือออกดั่งเราท่านทั้งหลายนี้สักคาบหนึ่งเลย' 
            ans3 = 'บ่ห่อนได้หายใจเข้าออกเสียเลย' 
            ans4 = 'อยู่เย็นเป็นสุขสำราญบานใจ' 
            break;
        case 25:
            ans1 = 'ผู้เป็นพระอรหันต์' 
            ans2 = 'ผู้มาจากสวรรค์' 
            ans3 = 'ผู้มาจากนรก' 
            ans4 = 'ผู้มาจากมนุสส' 
            break;
    }
    let choices = document.querySelectorAll('.choice-details')
    choices.forEach(choice => {
        choiceNum = choice.getAttribute('choice')
        if(choiceNum == 'a'){
            choice.innerHTML = ans1
        }
        else if(choiceNum == 'b'){
            choice.innerHTML = ans2
        }
        else if(choiceNum == 'c'){
            choice.innerHTML = ans3
        }
        else if(choiceNum == 'd'){
            choice.innerHTML = ans4
        }
        if(choiceNum == answer){
            choice.setAttribute('correct', true)
        }
        else{
            choice.removeAttribute('correct')
        }
    })
    answeredQuestion.push(questionNumber)
    console.log(answeredQuestion)
    return answeredQuestion, currentCorrectAnswer = answer
}

function checkAnswered(currentQuestion){
    console.log('checking...')
    for(answered in answeredQuestion){
        console.log(answered)
        if(answeredQuestion[answered] == currentQuestion){
            console.log('current question is => '+answeredQuestion[answered])
            console.log('New random')
            return true
        }
    }
    console.log('does not same')
    return false
}

isPlaying = false
function startGame(){
    let start_button = document.getElementById('start-button')
    let game_frontground = document.getElementById('game-frontground')
    let game_background = document.getElementById('game-background')
    let endGame = document.getElementById('endGame')
    game_frontground.style.display = 'none'
    game_background.style.display = 'flex'
    endGame.style.display = 'none'
    // ? Set the default setting
    let question = document.getElementById('currentQuest')
    question.innerHTML = 0
    let score = document.getElementById('score')
    score.innerHTML = 0
    answeredQuestion = []
    nextQuestion()
}

function correct(){
    let score = document.getElementById('score')
    let currentScore = Number(score.innerHTML)
    score.innerHTML = currentScore +1
    nextQuestion()
}
function nextQuestion(){
    let question = document.getElementById('currentQuest')
    let currQuest = Number(question.innerHTML)
    question.innerHTML = currQuest +1
    if(question.innerHTML >= 21){
        question.innerHTML = 20
        return endGame()
    }
    randomQuestion()
}
function endGame(){
    let endGame = document.getElementById('endGame')
    let background = document.getElementById('game-background')
    let score = document.getElementById('score')
    let finalscore = document.getElementById('finalScore')
    finalscore.innerHTML = score.innerHTML
    endGame.style.display = 'flex'
    background.style.display = 'none'
}