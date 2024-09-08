const advice = document.querySelector(".advice");
const heading = document.querySelector(".heading");
const btn = document.querySelector(".btn");

const url = "https://api.adviceslip.com/advice";

btn.addEventListener("click", () => {
  displayAdvice();
});

const displayAdvice = async () => {
  advice.textContent = "Loading....";
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.slip) {
      heading.textContent = `advice #${data.slip.id}`;
      advice.textContent = `" ${data.slip.advice} "`;
      btn.style.boxShadow = `0px 0px 30px rgba(82, 255, 168, 0.5)`;
    } else {
      btn.style.boxShadow = `none`;
      advice.textContent = `There are no advice`;
    }
  } catch (error) {
    console.log("There was an error");
  }
};

displayAdvice();
