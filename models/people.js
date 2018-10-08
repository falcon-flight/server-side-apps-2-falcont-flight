const arrayOfPeople = [
    'Molly Nagler',
    'Kyle Jensen',
    'Anjani Jain',
    'Ted Snyder',
    'Sharon Oster',
    'Sherri Scully',
];

module.exports = arrayOfPeople;

const filterItems = (query) => {
  return module.exports((query) =>
    module.exports.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
}

