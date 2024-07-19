const code = document.querySelector(".token__code");
const tooltip = document.querySelector(".tooltip");

// копирование кода в буфер обмена
document.querySelector(".token__copy").addEventListener("click", () => {
  navigator.clipboard.writeText(code.innerText);
  tooltip.classList.add("visible");
  setTimeout(() => tooltip.classList.remove("visible"), 600);
});
