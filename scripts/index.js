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
const profileEditButton = document.getElementById("profile-edit-button");
const profileEditModal = document.getElementById("profile-edit-modal");
const profileCloseButton = profileEditModal.querySelector(".modal__close");
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
const newCardCloseButton = addCardModal.querySelector(".modal__close");
const newCardTitleInput = addCardModal.querySelector(
  ".modal__input_type_title"
);
const newCardUrlInput = addCardModal.querySelector(".modal__input_type_url");
const addCardForm = document.getElementById("js-add-card-form");
//Functions

function closePopup(modal) {
  modal.classList.remove("modal__open");
}

function openPopup(modal) {
  modal.classList.add("modal__open");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardAtlEl = cardElement.querySelector(".card__image");
  const likeButton = cardElement.querySelector(".card__like-button_active");

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

function handleAddNewCardSubmit(event) {
  event.preventDefault();
  const cardData = {
    name: newCardTitleInput.value,
    link: newCardUrlInput.value,
  };
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
  newCardTitleInput.value = "";
  newCardUrlInput.value = "";
  closePopup(addCardModal);
}
//Event Listeners
// Edit Modal
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent.trim();
  profileDescriptionInput.value = profileDescription.textContent.trim();
  openPopup(profileEditModal);
});
profileCloseButton.addEventListener("click", () =>
  closePopup(profileEditModal)
);
profileEditForm.addEventListener("submit", handleProfileEditSubmit);

// Add Card Modal
addNewCardButton.addEventListener("click", () => openPopup(addCardModal));
newCardCloseButton.addEventListener("click", () => closePopup(addCardModal));
addCardForm.addEventListener("submit", handleAddNewCardSubmit);

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});

//Like Button
const likeButtons = document.querySelectorAll(".card__like-button");
likeButtons.forEach((likeButton) => {
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });
});
