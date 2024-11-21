let correctPassword = "P1508"; // 正解のパスワード

// 問題データ
let quizData = {
        //{ question: "", options: ["", "", "", ""], correct: 2, explanation: "" },
    core: [
        { question: "スターバックス創業当時から販売されるスターバックス最初のブレンドコーヒーは？", options: ["EDB", "HOU", "ESP", "VER"], correct: 1, explanation: "" },
        { question: "HOUと相性の良い風味は?", options: ["りんご、ナッツ、ブルーベリー", "りんご、チョコレート、ナッツ", "チョコレート、ナッツ、ブルーベリー", "チョコレート、りんご、ブルーベリー"], correct: 0, explanation: "" },
        { question: "LNBのパッケージに描かれている鳥は?", options: ["コンドル", "ケツァール", "ハチドリ", "タンクイ"], correct: 2, explanation: "" },
        { question: "北米で開発された、店舗で毎日提供することができる、滑らかでロースト感を抑えた味わいのブレンドは?", options: ["VER", "HOU", "ESP", "EDB"], correct: 3, explanation: "" },
        { question: "SRNのキーワードは?", options: ["シトラスやスパイスを思わせる洗練された風味", "シトラスを感じる調和のとれた味わい", "グレープフルーツやブラックカラントを思わせる味わい", "ロースト感のある甘味とカラメルのような風味"], correct: 1, explanation: "『1.シトラスやスパイスを思わせる洗練された風味』はBNA、『3.グレープフルーツやブラックカラントを思わせる味わい』はKEN、『4.ロースト感のある甘味とカラメルのような風味』はITA" },
        { question: "BRKについて、誤ったものは？", options: ["ラテンアメリカ産のブレンド", "コク:Light 酸味:High", "1998年に軽めのローストとして開発", "相性が良い風味はナッツ、リンゴ、ブルーベリー、レモン"], correct: 1, explanation: "コク:MEDIUM, 酸味:High" },
        { question: "相性の良い風味が｢カラント、ベリー類、グレープフルーツ｣とされているのは？", options: ["BRK", "KEN", "SRN", "CLG"], correct: 1, explanation: "" },
        { question: "GUAについて正しいものは？", options: ["コク:MEDIUM, 酸味:MEDIUM", "半水洗式", "キーワードは｢ナッツやココアを思わせるバランスのとれた味わい｣", "パッケージにはグアテマラの国鳥のホオロジカンムリヅルが描かれている"], correct: 0, explanation: "『2.半水洗式』GUAは水洗式、『3.ナッツやココアを思わせるバランスのとれた味わい』はHOUのキーワード、『4.パッケージにはグアテマラの国鳥のホオロジカンムリヅルが描かれている』グアテマラの黒鳥はケツァール（ホオロジカンムリヅルはウガンダの黒鳥）" },
        { question: "TYOの相性のよい国味は?", options: ["シナモン、レーズン、オートミール、チョコレート", "ミルクチョコレート、ナッツ", "ミルクチョコレート、ダークチョコレート、カラメル", "シナモン、チョコレート、ナッツ"], correct: 0, explanation: "" },
        { question: "この国で生産されるコーヒーのうち、約半分は国内消費のために確保されます。毎日様式としてのコーヒーセレモニーが楽しまれ。コーヒーの木が今でも森の中で自生しているのもこの日の特徴です。この国は次のうちどれでしょう", options: ["ケニア", "エチオピア", "コロンビア", "インドネシア"], correct: 1, explanation: "" },
        { question: "BNAのスリーレターは\"Bunna dabo naw\"が由来である。その意味は?", options: ["眠りを防ぐもの", "コーヒー豆", "〜の間", "コーヒーは我々にとってパンである"], correct: 3, explanation: "" },
        { question: "コア豆のストーリーのうち、誤っているものは?", options: ["LNBにはラテンアメリカの農園でよく見られるハチドリが描かれている", "EDBはよりマイルドなコーヒーを求めるお客様のために1998年に開発された", "HOUは1971年に発売されたスターバックス最初のブレンドコーヒー", "VERは1975年にシアトルのあるレストランのために開発された"], correct: 1, explanation: "よりマイルドなコーヒーを求めるお客様のために1998年に開発されたのはBRK" },
        { question: "次のうちポストローストブレンドのものは?", options: ["BRK", "HOU", "VER", "ESP"], correct: 2, explanation: "" },
        { question: "FREのコーヒー豆の重量は、スターバックスローストによっておよそどのくらい減ると言われている?", options: ["14%", "18%", "20%", "25%"], correct: 0, explanation: "" },
        { question: "スターバックスで提供しているCBRについて正しいものは?", options: ["CBRのローストレベルはDARK", "CBRはラテンアメリカ産とアジア/太平洋産のブレンド", "マルコニックグラインダー#10番で挽いた豆を使う", "常温で14時間かけて抽出を行う"], correct: 3, explanation: "『1.CBRのローストレベルはDARK』CBRはMEDIUMロースト、『2.CBRはラテンアメリカ産とアジア/太平洋産のブレンド』CBRはラテンアメリカ産とアフリカ産のブレンド、『3.マルコニックグラインダー#10番で挽いた豆を使う』正しくは#6番" },
        { question: "ディカフェコーヒーについて正しいものは?", options: ["DES/DHOはスイスウォータープロセスを使用している", "ダイレクトコンタクト法ではカーポンフィルターを使用する", "ディカフェの工程は生豆の状態で行われる", "DHO/DESはプレスサービスでの提供はできない"], correct: 2, explanation: "『4.DHO/DESはプレスサービスでの提供はできない』+50円で対応可能" },
        { question: "ESP/DESについて誤っているものは?", options: ["コク:FULL, 酸味:LOW", "ESPは1975年に焙煎が始まった", "加工法は水洗式/半水洗式", "ラテンアメリカ産とアジア/太平洋産のブレンド"], correct: 0, explanation: "『1.コク:FULL, 酸味:LOW』正しくは、コク:FULL, 酸味:MEDIUM" },
        { question: "DHOやDESに使用されているカフェイン除去法は?", options: ["ダイレクトコンタクト法", "コンタクトダイレクト法", "スイスウォータープロセス", "二酸化炭素抽出法"], correct: 3, explanation: "" },
        { question: "ITAのパッケージに描かれている、イタリアとの繋がりを表現しているモチーフは?", options: ["ヴェスパ", "フルール・ド・リス", "バラ", "エスプレッソマシン"], correct: 0, explanation: "" },

    ],
    promotion:[
        { question: "FY24 Win Ph1にて販売したGCCのコク、酸味について正しいものは?", options: ["コク:MEDIUM, 酸味:MEDIUM", "コク:MEDIUM, 酸味:HIGH", "コク:FULL, 酸味:MEDIUM", "コク:FULL, 酸味:HIGH"], correct: 1, explanation: "" },
        { question: "FY24 Win Ph1にて販売したGCCと相性の良い風味は?", options: ["シトラス、ナッツ、ソフトチーズ", "はちみつ、シナモン、ココア", "キャラメル、チョコレート、ナッツ", "チョコレート、キャラメル"], correct: 0, explanation: "" },
        { question: "FY24 Win Ph1にて販売したGCCのキーワードは?", options: ["ココアやスパイスを思わせる洗練された風味", "ハニーブッシュやココアを思わせる風味", "メイヤーレモンとカカオニブを思わせる風味", "ヘーゼルナッツやドライフルーツを思わせる風味"], correct: 2, explanation: "" },
        { question: "「カシ シエロ」とはスペイン語でなんという意味か", options: ["(〜の)間", "コーヒーの旅", "貢献する", "天国にいるかのような"], correct: 3, explanation: "" },
        { question: "FY24 Win Ph1にて販売したHMCのコク、酸味について正しいものは?", options: ["コク:LIGHT, 酸味:HIGH", "コク:MEDIUM, 酸味:HIGH", "コク:LIGHT, 酸味:MEDIUM", "コク:MEDIUM, 酸味:MEDIUM"], correct: 0, explanation: "" },
        { question: "FY24 Win Ph1にて販売したHMCと相性の良い風味は?", options: ["レモン、オレンジ、ナッツ", "はちみつ、シナモン、ココア", "はちみつ、シトラス、いちじく", "シトラス、ベリークランブル"], correct: 1, explanation: "" },
        { question: "FY24 Win Ph1にて販売したHMCのキーワードは?", options: ["ハニーブッシュやココアを思わせる風味", "シトラスやキャラメルを思わせる風味", "オレンジブロッサムやマカダミアナッツを思わせる風味", "スパイスを効かせたオレンジといちじくのコンポネートを思わせる風味"], correct: 2, explanation: "" },
        { question: "次の中でローストレベルが違うものは?", options: ["GCC", "EAB", "SSB", "HMC"], correct: 3, explanation: "HMCはBLONDロースト、GCC、EAB、SSBはMEDIUMロースト" },
        { question: "シアトルのレストラン「Canlis」のチョコレートケーキやクレームブリュレに合うように開発されたのは?", options: ["GCC", "VER", "XME", "TRB"], correct: 0, explanation: "" },
        { question: "FY24 SAKURAにて販売したSSBのコク、酸味について正しいものは?", options: ["コク:MEDIUM, 酸味:HIGH", "コク:MEDIUM, 酸味:MEDIUM", "コク:FULL, 酸味:LOW", "コク:FULL, 酸味:MEDIUM"], correct: 1, explanation: "" },
        { question: "FY24 SAKURAにて販売したSSBと相性の良い風味は?", options: ["さくら、抹茶", "さくら、ベリー", "さくら、チョコレート", "さくら、ストーンフルーツ"], correct: 2, explanation: "" },
        { question: "FY24 SAKURAにて販売したSSBのキーワードは?", options: ["ダークチェリーやスパイスを思わせる風味", "キャンディードピーカンやハーブを思わせる風味", "ブラックチェリーやベーキングスパイスを思わせる風味", "ハニーブッシュやココアを思わせる風味"], correct: 3, explanation: "" },
        //{ question: "", options: ["", "", "", ""], correct: 2, explanation: "" },

    ],
    cafe: [
        { question: "スターバックスがエシカルな調達99を達成したのは?", options: ["2010年", "2012年", "2015年", "2018年"], correct: 2, explanation: "" },
        { question: "「この事業体は売買するコーヒーに関わる領収書や請求書を保管している」この指導は、C.A.F.Eプラクティスのどの項目に当てはまるでしょう?", options: ["品質基準", "経済的な透明性", "社会的責任", "環境面でのリーダーシップ"], correct: 1, explanation: "" },
        { question: "SCTCの役割として正しいものは?", options: ["コーヒー農家やサプライヤーへの具体的なサポート", "すべてのサプライヤーとの取引関係の管理", "グローバルなビジネスニーズの洗い出し", "ブレンドレシピの作成・維持"], correct: 1, explanation: "" },
        { question: "「スターバックスの第1号となるFSCが開設された国は?」", options: ["ブラジル", "ルワンダ", "コスタリカ", "中国"], correct: 2, explanation: "" },
        { question: "「C.A.F.Eプラクティス」における「C.A.F.E」とは?", options: ["Coffee and Farmer Equity", "Coffee and Farmer Exchange", "Coffee and Farmer Equirium", "Coffee and Farmer Engagement"], correct: 0, explanation: "" },
        { question: "グローバルにおけるスターバックスのコーヒーの調達を担当しているチームはどこにある?", options: ["アメリカ", "オランダ", "スイス", "コスタリカ"], correct: 2, explanation: "" },
        { question: "コーヒーに関する土壌管理と栽培の専門家は?", options: ["コーヒースペシャリスト", "アグロノミスト", "エクスポーター", "ファーマーサポートセンター"], correct: 1, explanation: "" },
        { question: "生豆サンプリングのうち、出荷前サンプリングについて正しいものは?", options: ["焙煎工場で実施される", "出荷の承認がされるのは50%ほどである", "6カップでテイスティングされ、1カップの欠陥でも不可", "生産地で焙煎してから輸送される"], correct: 2, explanation: "" },
        { question: "スターバックスが、標高の高い生産地域のコーヒーを購買する理由は?", options: ["生豆の密度が下がることによって深いローストにも耐える品質になるため", "標高が高いと、病気や害虫に耐性があるコーヒーが育ちやすいため", "より効率的に収穫をするため", "様々な風味が熟成され、味わいが複雑になるため"], correct: 3, explanation: "" },
        { question: "「さび病」への対策としてハシエンダ アルサシア農園が取り組んでいるものは?", options: ["防腐剤の散布", "雨除けネットの設置", "コーヒーの木の根覆いの実施", "耐病性の高い品種の開発"], correct: 3, explanation: "" },
        { question: "C.A.F,Eプラクティスの項目に含まれないものは?", options: ["廃棄物の管理", "森林保全", "福利厚生", "季節労働者の受け入れ規制"], correct: 3, explanation: "" },
        { question: "C.A.F,Eプラクティスの監査を実施している第三者組織は", options: ["FSC", "SCS", "SCTC", "GCQ"], correct: 1, explanation: "" },

    ]
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