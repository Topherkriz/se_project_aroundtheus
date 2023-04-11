const initialCards = [
  { name: "Yosemite Valleye", link: "../images/yosemite.jpg" },

  { name: "Lake Louise", link: "../images/lake-louise.jpg" },

  { name: "Bald Mountains", link: "../images/bald-mountains.jpg" },
  { name: "Latemar", link: "../images/latemar.jpg" },
  { name: "Vanoise National Park", link: "../images/vanoise.jpg" },
  { name: "Lago di Braiese", link: "../images/lago.jpg" },
];

/* Elements */
const profileEditButton = document.getElementById("profile-edit-button");
const profileEditModal = document.getElementById("profile-edit-modal");
const profileClosedButton = document.getElementById("profile-closed-button");

const profileTitle = document.getElementById("js-profile-title");
const profileDescription = document.getElementById("js-profile-description");
const profileTitleInput = document.getElementById("js-title-input");
const profileDescriptionInput = document.getElementById("js-description-input");

const profileEditForm = profileEditModal.querySelector(".modal__form");

/* Functions */

function closePopup() {
  profileEditModal.classList.remove("modal_enter");
}

/* Event Handlers */

function handleProfileEditSubmit(event) {
  event.preventDefault();
  profileDescription.textContent = profileDescriptionInput.value;
  profileTitle.textContent = profileTitleInput.value;
  closePopup();
}

profileEditButton.addEventListener("click", () => {
  profileDescriptionInput.value = profileDescription.textContent;
  profileTitleInput.value = profileTitle.textContent;
  profileEditModal.classList.add("modal_enter");
});

profileClosedButton.addEventListener("click", closePopup);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
