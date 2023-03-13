const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");

function openCloseModal() {
  modal.classList.toggle("show-modal");
}

openModal.addEventListener("click", openCloseModal);
closeModal.addEventListener("click", openCloseModal);
