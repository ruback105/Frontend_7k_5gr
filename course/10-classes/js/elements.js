class BaseElement {
  constructor(tag, classList, text) {
    this.tag = tag;
    this.classList = classList;
    this.text = text;

    this.createElement();
  }

  createElement() {
    this.element = document.createElement(this.tag);

    if (this.classList) this.setClassList();
    if (this.text) this.setText();
  }

  setClassList() {
    this.element.classList.add(...this.classList);
  }

  setText() {
    this.element.innerText = this.text;
  }
}

class Paragraph extends BaseElement {
  constructor(classList, text) {
    super("p", classList, text);
  }
}

class Button extends BaseElement {
  constructor(type, classList, text) {
    super("button", [...classList, "cursor-pointer"], text);

    this.type = type;
  }
}

class PrimaryButton extends Button {
  constructor(text) {
    super(
      "primary",
      [
        "bg-orange-700",
        "border-orange-700",
        "text-white",
        "rounded-md",
        "my-5",
        "py-16",
        "text-center",
        "w-320",
        "text-large",
      ],
      text
    );
  }
}

class SecondaryButton extends Button {
  constructor(text) {
    super(
      "secondary",
      [
        "bg-white",
        "border-orange-700",
        "text-black",
        "rounded-md",
        "my-5",
        "py-16",
        "text-center",
        "w-320",
        "text-large",
      ],
      text
    );
  }
}

const paragraph = new Paragraph(
  ["font-bold", "text-large", "text-red-500"],
  "Example text"
);

const primaryButton = new PrimaryButton("Pārlūkot pirkumu grozu");
const secondaryButton = new SecondaryButton("Turpināt preču meklēšanu");

const rootElement = document.getElementById("root");

rootElement.append(paragraph.element);
rootElement.append(secondaryButton.element);
rootElement.append(primaryButton.element);

console.log(this);
