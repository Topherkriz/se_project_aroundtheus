import { enableValidation } from "./validation.js";

// Const cards
const initialCards = [
  {
    name: "Yosemite Valley",
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

// Add Card Form Modal
const addNewCardButton = document.getElementById("profile-add-button");
const addCardModal = document.getElementById("add-card-modal");
const newCardCloseButton = addCardModal.querySelector(".modal__close");
const newCardTitleInput = addCardModal.querySelector(
  ".modal__input_type_title"
);
const newCardUrlInput = addCardModal.querySelector(".modal__input_type_url");
const addCardForm = document.getElementById("js-add-card-form");

// Image Modal
const imageModal = document.getElementById("image-modal");
const imageModalCloseButton = document.getElementById("image-modal-close");
const modalImage = document.getElementById("modal-image-image");
const modalImageTitle = document.getElementById("modal-image-title");

function closePopup(modal) {
  modal.classList.remove("modal_open");
}

function openPopup(modal) {
  modal.classList.add("modal_open");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  deleteButton.addEventListener("click", handleDeleteButtonClick);

  cardTitleEl.textContent = cardData.name;
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;

  cardImageEl.addEventListener("click", () => {
    openImageModal(cardData.link, cardData.name);
  });

  return cardElement;
}

function handleDeleteButtonClick(event) {
  const deleteButton = event.target;
  const card = deleteButton.closest(".card");
  card.remove();
}

function handleProfileEditSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
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

function openImageModal(imageUrl, title) {
  modalImage.src = imageUrl;
  modalImage.alt = title;
  modalImageTitle.textContent = title;
  openPopup(imageModal);
}

function closeImageModal() {
  closePopup(imageModal);
}

profileEditButton.addEventListener("click", function () {
  profileTitleInput.value = profileTitle.textContent.trim();
  profileDescriptionInput.value = profileDescription.textContent.trim();
  openPopup(profileEditModal);
});

profileCloseButton.addEventListener("click", function () {
  closePopup(profileEditModal);
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

addNewCardButton.addEventListener("click", function () {
  openPopup(addCardModal);
});

newCardCloseButton.addEventListener("click", function () {
  closePopup(addCardModal);
});

addCardForm.addEventListener("submit", handleAddNewCardSubmit);

imageModalCloseButton.addEventListener("click", closeImageModal);

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});
