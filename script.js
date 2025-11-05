const dobInput = document.getElementById('dob');
const calculateBtn = document.getElementById('calculate');
const result = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
    const dob = new Date(dobInput.value);
    if (isNaN(dob.getTime())) {
        result.textContent = 'Please enter a valid date.';
        return;
    }

    const ageInSeconds = (Date.now() - dob.getTime()) / 1000;
    result.textContent = `You are ${Math.floor(ageInSeconds).toLocaleString()} seconds old.`;
});
