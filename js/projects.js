(() => {
  const projects = Array.isArray(window.relatronicaProjects)
    ? window.relatronicaProjects
    : [];
  const grid = document.querySelector("[data-projects-grid]");

  if (!grid || projects.length === 0) {
    return;
  }

  const fragment = document.createDocumentFragment();

  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.setAttribute("data-project-id", project.id);

    const meta = document.createElement("div");
    meta.className = "project-card__meta";

    if (project.version) {
      const version = document.createElement("span");
      version.className = "project-card__pill";
      version.textContent = project.version;
      meta.appendChild(version);
    }

    if (project.status) {
      const status = document.createElement("span");
      status.className = "project-card__pill project-card__pill--status";
      status.textContent = project.status;
      meta.appendChild(status);
    }

    if (meta.childElementCount > 0) {
      card.appendChild(meta);
    }

    const title = document.createElement("h4");
    title.className = "project-card__title";
    title.textContent = project.title;
    card.appendChild(title);

    if (project.subtitle) {
      const subtitle = document.createElement("p");
      subtitle.className = "project-card__subtitle";
      subtitle.textContent = project.subtitle;
      card.appendChild(subtitle);
    }

    if (project.description) {
      const description = document.createElement("p");
      description.className = "project-card__description";
      description.textContent = project.description;
      card.appendChild(description);
    }

    if (Array.isArray(project.tags) && project.tags.length > 0) {
      const tagList = document.createElement("ul");
      tagList.className = "project-card__tags";

      project.tags.forEach((tag) => {
        const item = document.createElement("li");
        item.className = "project-card__tag";
        item.textContent = tag;
        tagList.appendChild(item);
      });

      card.appendChild(tagList);
    }

    if (project.link) {
      const link = document.createElement("a");
      link.className = "project-card__link";
      link.href = project.link;
      const isExternal = /^https?:\/\//i.test(project.link);
      if (isExternal) {
        link.target = "_blank";
        link.rel = "noopener";
      }
      link.textContent = project.ctaLabel || "Learn more";
      card.appendChild(link);
    }

    fragment.appendChild(card);
  });

  grid.innerHTML = "";
  grid.appendChild(fragment);
})();

