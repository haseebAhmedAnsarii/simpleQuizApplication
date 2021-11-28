var score = 0;

function getId(e) {
    for (var i = 0; i < 10; i++) {
        if (i == e.name) {
            if (e.id === myQuestions[i].correctAnswer) {
                score++;
            }
            break
        }
    }
    if(i === 9){
    alert("Your score is " +score + " out of 10")
    }
}



var myQuestions = [
    {
        questionNo: 1,
        correctAnswer: "c"
    },
    {
        questionNo: 2,
        correctAnswer: "c"
    },
    {
        questionNo: 3,
        correctAnswer: "d"

    },
    {
        questionNo: 4,
        correctAnswer: "d"

    },
    {
        questionNo: 5,
        correctAnswer: "d"

    },
    {
        questionNo: 6,
        correctAnswer: "b"

    },
    {
        questionNo: 7,
        correctAnswer: "d"

    },
    {
        questionNo: 8,
        correctAnswer: "d"

    },
    {
        questionNo: 9,
        correctAnswer: "b"

    },
    {
        questionNo: 10,
        correctAnswer: "b"

    }
]