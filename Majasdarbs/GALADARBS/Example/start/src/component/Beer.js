import Modal from "./Modal.js";

class Beer {
  constructor(id, name, description, image_url) {
    this.name = name;
    this.description = description;
    this.image_url = image_url;
    this.id = id;
  }

  render() {
    const div = document.createElement("div");
    div.classList.add("card");

    div.addEventListener("click", () => {
      const modal = new Modal(this.id, this.name, this.description);

      div.append(modal.render());
    });

    div.innerHTML = `
    <img src="${this.image_url}" class="h-[160px] w-[120px] mx-auto"/>
    <p class="font-bold text-lg">${this.name}</p>
    <p class="font-semibold text-sm max-h-[100px] overflow-hidden">${this.description}</p>
    `;

    return div;
  }
}

export default Beer;
