// Q . Your son took a vacation through Europe without telling you. When the kid returned from the vacation you asked him where did he go. The kid told you: Dad I went to these cities: Amsterdam, Kiev, Zurich, Prague, Berlin, Barcelona.
// I used only train as transportation and these were the available tickets:
// Paris-Skopje, Zurich-Amsterdam, Prague-Zurich, Barcelona-Berlin, Kiev-Prague, Skopje-Paris, Amsterdam-Barcelona, Berlin-Kiev, Berlin-Amsterdam.
// You know that your kid started with Kiev
// Write a data structure and algorithm that will give you the route which your son was traveling.

const cities = [
  "Kiev",
  "Skopje",
  "Paris",
  "Zurich",
  "Amsterdam",
  "Prague",
  "Berlin",
  "Barcelona",
];
const trainTickets = [
  "Paris-Skopje",
  "Zurich-Amsterdam",
  "Prague-Zurich",
  "Barcelona-Berlin",
  "Kiev-Prague",
  "Skopje-Paris",
  "Amsterdam-Barcelona",
  "Berlin-Kiev",
  "Berlin-Amsterdam",
];

// Find the route that the son took.
function findRoute(startCity, endCity) {
  const visitedCities = new Set();
  const route = [];

  function explore(currentCity) {
    if (currentCity === endCity) {
      return true;
    }

    visitedCities.add(currentCity);
    route.push(currentCity);

    for (const trainTicket of trainTickets) {
      const destinationCity = trainTicket.split("-")[1];

      if (
        !visitedCities.has(destinationCity) &&
        trainTicket.startsWith(currentCity)
      ) {
        if (explore(destinationCity)) {
          return true;
        }
      }
    }

    route.pop();

    return false;
  }

  if (!explore(startCity)) {
    return null;
  }

  return route;
}

// Find the route that the son took.
const route = findRoute("Kiev", "Berlin");

// Print the route.
console.log("The travel route is ->", route.join(", "));
