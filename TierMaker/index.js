let currentDraggedItem;

const tierInput = document.getElementById("tier");

const itemContainers = document.getElementsByClassName("item-container");

const submitBtn = document.getElementById("submit");

const imageForm = document.getElementById("image-form");

for (const itemContainer of itemContainers) {
  setUpItemContainerForDrag(itemContainer);
}

imageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const imageItemInput = document.getElementById("image-item");
  if (imageItemInput.value === "") {
    alert("Please enter a valid image url");
    return;
  }
  const imageUrl = imageItemInput.value;
  createTierListItem(imageUrl);
  imageItemInput.value = "";
});

submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); // stops the default behaviour of the event
  // To get access of the element on which this event was fired
  if (tierInput.value === "") {
    alert("Please enter a tier name");
    return;
  }
  createTierList(tierInput.value);
  tierInput.value = "";
});

function createTierList(tierListName) {
  const newTierList = document.createElement("div");
  newTierList.classList.add("tier-list");

  // Create heading
  const heading = document.createElement("div");
  heading.classList.add("heading");

  // Generate a random color
  const randomColor = getRandomColor();
  heading.style.backgroundColor = randomColor;

  const textContainer = document.createElement("div");
  textContainer.textContent = tierListName;
  heading.appendChild(textContainer);

  // Create delete button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.innerHTML = "&times;"; // Use × symbol for the icon

  // Append heading and delete button to the newTierList
  newTierList.appendChild(heading);
  newTierList.appendChild(deleteButton);

  // Create tier list items container
  const newTierListItems = document.createElement("div");
  newTierListItems.classList.add("tier-list-items");
  newTierList.appendChild(newTierListItems);

  const tierSection = document.getElementById("tier-list-section");
  tierSection.appendChild(newTierList);

  // Set up the drop zone after the element is added to the DOM
  setUpDropZoneInTierListItem(newTierListItems);

  // Add delete functionality
  deleteButton.addEventListener("click", () => {
    tierSection.removeChild(newTierList);
  });
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createTierListItem(imageUrl) {
  const imageDiv = document.createElement("div");
  imageDiv.setAttribute("draggable", "true");
  imageDiv.classList.add("item-container");

  setUpItemContainerForDrag(imageDiv);

  const img = document.createElement("img");
  img.src = imageUrl;

  imageDiv.appendChild(img);

  const nonTierSection = document.getElementById("non-tier-section");
  nonTierSection.appendChild(imageDiv);
}

function setUpItemContainerForDrag(itemContainer) {
  itemContainer.addEventListener("dragstart", (event) => {
    console.log(event);
    currentDraggedItem = event.target.parentNode;
  });

  itemContainer.addEventListener("dblclick", (event) => {
    const parentNode = event.target.parentNode;
    const nonTierSection = document.getElementById("non-tier-section");
    nonTierSection.appendChild(parentNode);
  });
}

function setUpDropZoneInTierListItem(tierListItem) {
  tierListItem.addEventListener("drop", (event) => {
    event.preventDefault(); // stops the default behaviour of the event which is to not allow drop
  });

  tierListItem.addEventListener("dragover", function (event) {
    // console.log(event.target);
    // event.target.appendChild(currentDraggedItem);
    console.log("event coming up", event);
    if (this !== currentDraggedItem.parentNode) {
      this.appendChild(currentDraggedItem);
    }
  });
}
