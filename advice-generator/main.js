document.getElementById('generate-advice').addEventListener('click', fetchAdvice);

async function fetchAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    document.getElementById('advice-text').innerText = `"${data.slip.advice}"`;
}

fetchAdvice();


// Advice Numbering //

let adviceCount = 0; 

document.getElementById('generate-advice').addEventListener('click', fetchAdvice);

async function fetchAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    
    adviceCount++; 
    document.getElementById('advice-number').innerText = adviceCount; 
    document.getElementById('advice-text').innerText = `"${data.slip.advice}"`;
}

fetchAdvice();
