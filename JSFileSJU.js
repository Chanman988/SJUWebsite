const playerDetails = document.querySelectorAll(".player-grid details");

playerDetails.forEach((details) => {
  const summary = details.querySelector("summary");

  summary.addEventListener("click", () => {
    details.classList.remove("is-animating");
    void details.offsetWidth;
    details.classList.add("is-animating");
  });
});
