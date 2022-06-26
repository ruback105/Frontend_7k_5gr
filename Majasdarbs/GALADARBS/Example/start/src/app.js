import config from "./config.js";
import Beer from "./component/Beer.js";

const cardGrid = document.getElementById("card-grid");

const renderCard = (beer) => {
  const { id, name, description, image_url } = beer;

  const beerCard = new Beer(id, name, description, image_url);

  cardGrid.append(beerCard.render());
};

const getRandom = async () => {
  const beer = await fetch(`${config.BASE_API}beers/random`)
    .then((res) => res.json())
    .then((data) => data[0]);

  renderCard(beer);
};

document.getElementById("random").addEventListener("click", getRandom);
