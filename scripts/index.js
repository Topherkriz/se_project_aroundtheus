const initialCards = [
  {
    name: "Yosemite Valleye",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },

  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },

  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braiese",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

//Elements
//Edit Form Modal
const profileEditButton = document.getElementById("profile-edit-button");
const profileEditModal = document.getElementById("profile-edit-modal");
const profileCloseButton = document.getElementById("profile-close-button");
const profileTitle = document.getElementById("js-profile-title");
const profileDescription = document.getElementById("js-profile-description");
const profileTitleInput = document.getElementById("js-profile-title-input");
const profileDescriptionInput = document.getElementById(
  "js-profile-description-input"
);
const profileEditForm = document.getElementById("js-profile-modal-form");

const cardListEl = document.getElementById("js-card-list");
const cardTemplate =
  document.getElementById("js-card-template").content.firstElementChild;

//Add Card Form Modal
const addNewCardButton = document.getElementById("profile-add-button");
const addCardModal = document.getElementById("add-card-modal");
const newCardCloseButton = document.getElementById("new-card-close-button");

//Functions

function closePopup() {
  profileEditModal.classList.remove("modal__open");
}

function openPopup() {
  profileTitleInput.value = profileTitle.textContent.trim();
  profileDescriptionInput.value = profileDescription.textContent.trim();
  profileEditModal.classList.add("modal__open");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardAtlEl = cardElement.querySelector(".card__image");

  cardTitleEl.textContent = cardData.name;
  cardImageEl.src = cardData.link;
  cardAtlEl.alt = cardData.name;
  return cardElement;
}

//Event Handlers

function handleProfileEditSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup();
}

//Event Listeners
// Edit Modal
profileEditButton.addEventListener("click", openPopup);
profileCloseButton.addEventListener("click", closePopup);
profileEditForm.addEventListener("submit", handleProfileEditSubmit);

// Add Card Modal

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});
