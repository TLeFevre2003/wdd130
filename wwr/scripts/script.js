document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.toggle');

    questions.forEach(function (question) {
        question.addEventListener('click', function () {
            // Find the common parent element
            const parent = question.closest('.faq-item');

            // Select the element with class 'answer' within the common parent
            const answer = parent.querySelector('.answer');

            // Toggle the 'show' class to display/hide the answer
            answer.classList.toggle('show');
        });
    });
});