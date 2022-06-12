const renderGrid = (persons) => {
  const cardGrid = document.querySelector(".card-grid");

  const usersHtml = persons.map((person) => {
    return `
    <div class="user-card">
        <img src=${person.picture.large} />
        <div class="card-content">
            <p>${person.name.first} ${person.name.last}</p>
            <p class="email">${person.email}</p>
            <p>Nationality: ${person.nat}</p>
        </div>
    </div>
    `;
  });

  console.log(persons);

  cardGrid.innerHTML = usersHtml.join("");
};

const getFetchUrl = (baseUrl, queryParams) => {
  const url = new URL(baseUrl);

  Object.keys(queryParams).forEach((queryKey) => {
    url.searchParams.set(queryKey, queryParams[queryKey]);
  });

  return url.href;
};

const init = async () => {
  //   const queryParams = {
  //     gender: "female",
  //     nat: "gb,us",
  //     results: 10,
  //   };

  //   const href = getFetchUrl("https://randomuser.me/api/", queryParams);

  const persons = await fetch(
    `https://randomuser.me/api/${window.location.search}`
  ).then((res) => res.json());

  renderGrid(persons.results);
};

init();

// fetch("https://randomuser.me/api/")
//   .then((res) => res.json())
//   .then((data) => renderCard(data.results[0]));
