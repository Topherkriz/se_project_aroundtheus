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

const profileEditButton = document.getElementById("profile-edit-button");
const profileEditModal = document.getElementById("profile-edit-modal");
const profileClosedButton = document.getElementById("profile-closed-button");
const profileTitle = document.getElementById("js-profile-title");
const profileDescription = document.getElementById("js-profile-description");
const profileTitleInput = document.getElementById("js-title-input");
const profileDescriptionInput = document.getElementById("js-description-input");

const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardListEl = document.querySelector(".card__list");
const cardTemplate =
  document.getElementById("js-card-template").content.firstElementChild;

//Functions
function closePopup() {
  profileEditModal.classList.remove("modal_enter");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardAtlEl = cardElement.querySelector(".card__image");
  // set the image alt text to the name field of the object
  // set the card title to the name field of the object, to return the ready HTML element with the filled-in data

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

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_enter");
});

profileClosedButton.addEventListener("click", closePopup);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});
