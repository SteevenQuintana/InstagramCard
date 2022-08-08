let heart = document.querySelector(".dislike");
heart.addEventListener("click", (event) => {
  event.preventDefault();
  heart.classList.toggle("like");
});

const form = document.querySelector(".add-comment");
const newComment = document.querySelector(".new-comment");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const comment = document.querySelector(".text").value;
  if (comment) {
    const html = `
    <div class="first-comment">
      <strong> Comment </strong>
      <span> ${comment}</span>
    </div>`;
    newComment.insertAdjacentHTML("beforebegin", html);
    document.querySelector(".text").value = "";
  }
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
