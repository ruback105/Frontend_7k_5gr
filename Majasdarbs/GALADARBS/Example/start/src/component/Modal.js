class Modal {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }

  render() {
    const div = document.createElement("div");
    div.classList.add("modal");

    div.innerHTML = `
    <div class="flex-col w-[400px] mx-auto h-full flex items-center justify-center">
        <div class="h-[300px] bg-white rounded-md flex flex-col" data-id="${this.id}">
            <p class="font-bold text-lg h-[50px] flex items-center px-4 border-b border-black" data-id="${this.id}">${this.title}</p>
            <p class="font-semibold p-4 max-h-[180px] overflow-hidden" data-id="${this.id}">${this.description}</p>
            <button class="py-2 px-4 border border-black rounded-md ml-auto mt-auto mb-4 mr-4">Close</button>
        </div>
    </div>
    `;

    div.addEventListener("click", (ev) => {
      if (!ev.target.getAttribute("data-id")) {
        document.querySelector(".modal").remove();
      }
    });

    return div;
  }
}

export default Modal;
