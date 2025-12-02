function calculerScore() {
    const questions = document.querySelectorAll('.question-block');
    let score = 0;

    questions.forEach(block => {
        const bonneRep = block.getAttribute('bonne-rep');
        const selection = block.querySelector('input:checked');
        if (selection && selection.value === bonneRep) {
            score++;
        }
    });

    document.getElementById('results').textContent = `Score : ${score} / ${questions.length}`;
}

function afficherCorrige() {
    window.location.href = "correction.html";
}

function effacerSelections() {
    document.getElementById('qcm-form').reset();
    document.getElementById('results').textContent = "";
}