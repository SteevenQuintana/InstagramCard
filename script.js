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

function likeBtn() {
  let heart = document.querySelector(".dislike");
  let isPressed = 0;
  heart.addEventListener("click", () => {
    console.log("first");
    isPressed = 1;
    if (isPressed) {
      heart.classList.add("like");
    } else {
      heart.classList.remove("like");
      isPressed = 0;
    }
  });
}

const addComment = () => {
  const form = document.querySelector(".add-comment");
  const post = document.querySelector(".add-comment");
  post.innerHTML = "";
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const comment = document.querySelector(".text").value;
    const html = `
    <div class="post">
        <strong> Comment </strong>
        <span>
          ${comment}</span
        >
      </div>`;
    post.insertAdjacentHTML("beforebegin", html);
  });
};
