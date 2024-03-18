document.addEventListener("astro:page-load", () => {
  /* slider */
  const wrapper = document.querySelector("[date-tech-wrapper]");
  let copy = document.querySelector(".tech-card")?.cloneNode(true);
  wrapper?.append(copy!);

  /*modal */
  const modal = document.querySelector("[ data-tech-modal]");
  const h1 = document.querySelector("[data-tech-h1]");
  const stop = document.querySelector("[data-tech-stop]");

  h1?.addEventListener("click", () => {
    modal?.classList.toggle("hidden");
    modal?.classList.add("flex");
  });

  wrapper?.addEventListener("click", () => {
    modal?.classList.toggle("hidden");
    modal?.classList.add("flex");
  });
  modal?.addEventListener("click", () => {
    modal.classList.remove("flex");
    modal.classList.toggle("hidden");
  });
  stop?.addEventListener("click", (e) => e.stopPropagation());

  addEventListener('keydown',(e)=>{
    if(e.key=='Espace'){
        modal?.classList.remove("flex");
        modal?.classList.toggle("hidden");
    }
  })
});
