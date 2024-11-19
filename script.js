let correctPassword = "P1508"; // 正解のパスワード

// 問題データ
let quizData = {
    core: [
        { question: "スターバックス創業当時から販売されるスターバックス最初のブレンドコーヒーは？", options: ["EDB", "HOU", "ESP", "VER"], correct: 1, explanation: "" },
        { question: "HOUと相性の良い風味は?", options: ["りんご、ナッツ、ブルーベリー", "りんご、チョコレート、ナッツ", "チョコレート、ナッツ、ブルーベリー", "チョコレート、りんご、ブルーベリー"], correct: 0, explanation: "" },

    ],
};

let currentQuizType = "";
let currentQuestionIndex = 0;
let num = 0;
let countCrrect = 0;

// DOM要素
let loginDiv = document.getElementById("login");
let menuDiv = document.getElementById("menu");
let quizDiv = document.getElementById("quiz");
let passwordInput = document.getElementById("password");
let submitPasswordButton = document.getElementById("submitPassword");
let menuOptions = document.querySelectorAll(".menu-option");
let questionElement = document.getElementById("question");
let optionsElement = document.getElementById("options");
let resultElement = document.getElementById("result");
let answerElement = document.getElementById("answer");
let nextElement = document.getElementById("next");
let explanationElement = document.getElementById("explanation");
let AElement = document.getElementById("A");

// パスワード確認
submitPasswordButton.addEventListener("click", () => {
    if (passwordInput.value === correctPassword) {
        loginDiv.style.display = "none";
        menuDiv.style.display = "block";
    } else {
        alert("パスワードが正しくありません！");
    }
});

// メニュー選択
menuOptions.forEach((option) => {
    option.addEventListener("click", () => {
        currentQuizType = option.dataset.type;
        menuDiv.style.display = "none"; //メニュー非表示
        quizDiv.style.display = "block"; //問題表示
        currentQuestionIndex = 0; //問題番号初期化
        num = 0;
        countCrrect = 0;
        loadQuestion();
    });
});

// クイズの問題を読み込む
function loadQuestion() {
    currentQuestionIndex =  Math.floor(Math.random() * quizData[currentQuizType].length); //問題番号設定
    let questionData = quizData[currentQuizType][currentQuestionIndex]; //問題読み込み
    questionElement.textContent = questionData.question;
    optionsElement.innerHTML = "";

    questionData.options.forEach((option, index) => {
        let button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(index));
        button.style.width = "90%"; // スマホ対応
        optionsElement.appendChild(button);
    });
}

// 答えを確認
function checkAnswer(selectedIndex) {
    let questionData = quizData[currentQuizType][currentQuestionIndex];
    if (selectedIndex == questionData.correct) {
        resultElement.textContent = "正解！";
        resultElement.style.color = "green";
        countCrrect++;
    } else {
        resultElement.textContent = "不正解";
        resultElement.style.color = "red";
    }
    optionsElement.style.display = "none"; //選択肢非表示
    answerElement.style.display = "block"; //解説表示
    AElement.textContent = "正解：" + questionData.options[questionData.correct];
    explanationElement.textContent = questionData.explanation;
}
function next() {
    answerElement.style.display = "none";
    optionsElement.style.display = "block";
    num++;
    if (num < 10) {
        loadQuestion();
    } else {
        questionElement.textContent = "10問中" + String(countCrrect) + "問正解!";
        optionsElement.innerHTML = "";
    }
}

function nemu() {
    answerElement.style.display = "none";
    optionsElement.style.display = "block";
    menuDiv.style.display = "block";
    quizDiv.style.display = "none";
    num = 0;
    countCrrect = 0;
}
