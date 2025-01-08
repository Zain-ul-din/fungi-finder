const cards = Array.from(document.querySelectorAll(".mushroom-guide .card"));
const edibleFilter = document.getElementById("edible");
const seasonalFilter = document.getElementById("season");
const noMatchesText = document.querySelector(".no-matches");

const filter = {
  season: "all",
  edible: "all"
};

const filterCards = () => {
  let match = false;
  cards.forEach((card) => {
    const cardData = getCardData(card);

    const shouldVisible =
      (filter.edible === "all" || cardData.edible.includes(filter.edible)) &&
      (filter.season === "all" || cardData.season.includes(filter.season));

    if (shouldVisible) match = true;
    card.hidden = !shouldVisible;
  });

  noMatchesText.hidden = match;
};

const getCardData = (card) => {
  const edible = Array.from(card.querySelectorAll("[data-edible]")).map((el) =>
    el.getAttribute("data-edible")
  );
  const season = Array.from(card.querySelectorAll("[data-season]")).map((el) =>
    el.getAttribute("data-season")
  );

  return {
    edible,
    season
  };
};

function updateFilter(e) {
  const filterType = e.target.name;
  filter[filterType] = e.target.value;

  // browser support check
  if (typeof document.startViewTransition === "function") {
    document.startViewTransition(() => filterCards());
  } else {
    filterCards();
  }
}

seasonalFilter.addEventListener("change", updateFilter);
edibleFilter.addEventListener("change", updateFilter);

// ✈ enable javascript here
// since we are hiding things that are depends on JS, In case user don't have JS enable
(() => {
  seasonalFilter.hidden = false;
  edibleFilter.hidden = false;

  cards.forEach((card, idx) => {
    const mushroomId = `mushroom-card-${idx + 1}`;
    card.style.viewTransitionName = `${mushroomId}`;
  });
})();
