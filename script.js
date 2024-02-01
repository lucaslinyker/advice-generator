const codeAdvice = document.getElementById("code");
const textAdvice = document.getElementById("advice-text");
const btn = document.getElementById("button");

const apiURL = "https://api.adviceslip.com/advice";

async function getAdvice() {
  codeAdvice.innerText = "Loading...";
  textAdvice.innerText = "Loading...";
  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error(`Error ${response.status} in the request!`);
    }
    const data = await response.json();
    codeAdvice.innerText = data.slip.id;
    textAdvice.innerText = `"${data.slip.advice}"`;
  } catch (error) {
    console.error(error);
    codeAdvice.innerText = error.message;
    textAdvice.innerText = "Try again!";
    codeAdvice.style.color = "red"
    textAdvice.style.color = "red"
  }
}

getAdvice();

btn.addEventListener("click", getAdvice);
