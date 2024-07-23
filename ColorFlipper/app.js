const colorDiv = document.getElementById("colorDiv");
const colorName = document.getElementById("colorName");
const changeColorBtn = document.getElementById("changeColorBtn");
console.log(colorDiv);
changeColorBtn.addEventListener("click", () => {
  const colors = [
    "bg-red-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-pink-400",
    "bg-gray-400",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  colorDiv.classList.remove(
    "bg-red-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-pink-400",
    "bg-gray-400"
  );
  colorDiv.classList.add(randomColor);

  switch (randomColor) {
    case "bg-red-400":
      colorName.textContent = "RED";
      break;
    case "bg-blue-400":
      colorName.textContent = "BLUE";
      break;
    case "bg-green-400":
      colorName.textContent = "GREEN";
      break;
    case "bg-yellow-400":
      colorName.textContent = "YELLOW";
      break;
    case "bg-pink-400":
      colorName.textContent = "PINK";
      break;
    case "bg-gray-400":
      colorName.textContent = "GRAY";
      break;
    default:
      colorName.textContent = "UNKNOWN";
      break;
  }
});