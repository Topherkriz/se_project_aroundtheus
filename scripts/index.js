const initialCards = [
  { name: "Yosemite Valleye", link: "../images/yosemite.jpg" },

  { name: "Lake Louise", link: "../images/lake-louise.jpg" },

  { name: "Bald Mountains", link: "../images/bald-mountains.jpg" },
  { name: "Latemar", link: "../images/latemar.jpg" },
  { name: "Vanoise National Park", link: "../images/vanoise.jpg" },
  { name: "Lago di Braiese", link: "../images/lago.jpg" },
];

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");

profileEditButton.addEventListener("click", () => {
  profileEditModal.classList.add("modal_opened");
});

const profileClosedButton = document.querySelector("#profile-closed-button");

profileClosedButton.addEventListener("click", () => {
  profileEditModal.classList.add("modal_closed");
});
