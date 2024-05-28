function calculateAge(birthday) {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

document.addEventListener("DOMContentLoaded", function () {
    const birthday = '2002-06-07';
    const ageElements = document.querySelectorAll('.age');
    ageElements.forEach(element => {
        element.textContent = calculateAge(birthday);
    });
});