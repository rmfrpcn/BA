let correctPassword = "P1508"; // 正解のパスワード

// 問題データ
let quizData = {
    core: [
        { question: "スターバックス創業当時から販売されるスターバックス最初のブレンドコーヒーは？", options: ["EDB", "HOU", "ESP", "VER"], correct: 1, explanation: "" },
        { question: "HOUと相性の良い風味は?", options: ["りんご、ナッツ、ブルーベリー", "りんご、チョコレート、ナッツ", "チョコレート、ナッツ、ブルーベリー", "チョコレート、りんご、ブルーベリー"], correct: 0, explanation: "" },
        { question: "LNBのパッケージに描かれている鳥は?", options: ["コンドル", "ケツァール", "ハチドリ", "タンクイ"], correct: 2, explanation: "" },
        { question: "北米で開発された、店舗で毎日提供することができる、滑らかでロースト感を抑えた味わいのブレンドは?", options: ["VER", "HOU", "ESP", "EDB"], correct: 3, explanation: "" },
        { question: "SRNのキーワードは?", options: ["シトラスやスパイスを思わせる洗練された風味", "シトラスを感じる調和のとれた味わい", "グレープフルーツやブラックカラントを思わせる味わい", "ロースト感のある甘味とカラメルのような風味"], correct: 1, explanation: "『1.シトラスやスパイスを思わせる洗練された風味』はBNA、『3.グレープフルーツやブラックカラントを思わせる味わい』はKEN、『4.ロースト感のある甘味とカラメルのような風味』はITA" },
        { question: "BRKについて、誤ったものは？", options: ["ラテンアメリカ産のブレンド", "コク:Light 酸味:High", "1998年に軽めのローストとして開発", "相性が良い風味はナッツ、リンゴ、ブルーベリー、レモン"], correct: 1, explanation: "コク:MEDIUM, 酸味:High" },
        { question: "相性の良い風味が｢カランツ、ベリー類、グレープフルーツ｣とされているのは？", options: ["BRK", "KEN", "SRN", "CLG"], correct: 1, explanation: "" },
        { question: "GUAについて正しいものは？", options: ["コク:MEDIUM, 酸味:MEDIUM", "半水洗式", "キーワードは｢ナッツやココアを思わせるバランスのとれた味わい｣", "パッケージにはグアテマラの国鳥のホオロジカンムリヅルが描かれている"], correct: 0, explanation: "『2.半水洗式』GUAは水洗式、『3.ナッツやココアを思わせるバランスのとれた味わい』はHOUのキーワード、『4.パッケージにはグアテマラの国鳥のホオロジカンムリヅルが描かれている』グアテマラの黒鳥はケツァール（ホオロジカンムリヅルはウガンダの黒鳥）" },
        { question: "TYOの相性のよい国味は?", options: ["シナモン、レーズン、オートミール。チョコレート", "ミルクチョコレート、ナッツ", "ミルクチョコレート、ダークチョコレート、カラメル", "シナモン、チョコレート、ナッツ"], correct: 0, explanation: "" },
        { question: "この国で生産されるコーヒーのうち、約半分は国内消費のために確保されます。毎日様式としてのコーヒーセレモニーが楽しまれ。コーヒーの木が今でも森の中で自生しているのもこの日の特徴です。この国は次のうちどれでしょう", options: ["ケニア", "エチオピア", "コロンビア", "インドネシア"], correct: 1, explanation: "" },
        { question: "BNAのスリーレターは\"Bunna dabo naw\"が由来である。その意味は?", options: ["眠りを防ぐもの", "コーヒー豆", "〜の間", "コーヒーは我々にとってパンである"], correct: 3, explanation: "" },
        //{ question: "", options: ["", "", "", ""], correct: 2, explanation: "" },
    ],
};

let currentQuizType = "";
let currentQuestionIndex = 0;
let num = 0;
let countCrrect = 0;
let random = [];

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
    currentQuestionIndex = randSet(); //問題番号設定
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
    rand();
    answerElement.style.display = "none";
    optionsElement.style.display = "block";
    menuDiv.style.display = "block";
    quizDiv.style.display = "none";
    num = 0;
    countCrrect = 0;
}


function randSet() { //乱数取得
    let n = 0;
    while (n == 0) {
        let i = Math.floor(Math.random() * quizData[currentQuizType].length);
        if (random[i] != 0) {
            random[i] = 0;
            return i;
        }
    }
}

function rand() { //乱数配列初期化
    random = [];
    for (let i = 0; i < quizData[currentQuizType].length; i++) {
        random.push(i + 1);
    }
}