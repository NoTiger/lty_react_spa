function scrollTop() {
  const app = document.querySelector(".app");

  if (app) {
    app.scrollTo({ top: 0 });
  }
}

export { scrollTop };
