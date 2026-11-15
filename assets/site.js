const projectList = document.querySelector("[data-project-list]");

if (projectList) {
  portfolioProjects.filter((project) => projectList.dataset.projectList === "all" ? (project.visible !== false || project.allProjectsVisible !== false) : project.visible !== false).forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const imageLink = document.createElement("a");
    imageLink.className = "project-image-link";
    imageLink.href = project.href;
    imageLink.setAttribute("aria-label", project.ariaLabel);

    const image = document.createElement("img");
    image.src = project.image;
    image.alt = project.alt;
    imageLink.append(image);

    const nameLink = document.createElement("a");
    nameLink.className = "project-name";
    nameLink.href = project.href;
    nameLink.textContent = project.title;

    card.append(imageLink, nameLink);
    projectList.append(card);
  });
}

const printButtons = document.querySelectorAll("[data-print]");

printButtons.forEach((button) => {
  button.addEventListener("click", () => {
    window.print();
  });
});

const lightbox = document.querySelector("#imageLightbox");
const lightboxImage = lightbox?.querySelector("img");
const lightboxClose = lightbox?.querySelector(".image-lightbox-close");
const detailImages = document.querySelectorAll(".project-detail-image");

detailImages.forEach((image) => {
  image.addEventListener("click", () => {
    if (!lightbox || !lightboxImage) return;

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});

function closeLightbox() {
  if (!lightbox || !lightboxImage) return;

  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  lightboxImage.alt = "";
}

lightboxClose?.addEventListener("click", closeLightbox);

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});
