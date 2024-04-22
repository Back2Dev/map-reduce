import dbg from "debug";
const debug = dbg("app:main");

debug("Hello");
//

const x = 1;
const add = (a, b) => {
  debug(`In add(${a}+${b})`);
  return a + b;
};

const numericSort = (a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
};

//debug("result=" + add(3, 4));

const data = [10, 2, 3, 4];

let result = 0;
for (let i = 0; i < data.length; i++) {
  result = add(result, data[i]);
}
debug("result=", result);

// Eliminate the "i" variable
result = 0;
data.forEach((item) => {
  result = add(result, item);
});
debug({ result });

const newArray = data
  .map((item) => {
    return item * 2;
  })
  .filter((item) => {
    return item > 4;
  })
  .sort((a, b) => numericSort(a, b));
debug({ newArray });

debug(["b", "c", "a"].sort());

const catalogue = [
  { sku: "P1234", price: 70, category: "panel" },
  { sku: "P1235", price: 170, category: "panel" },
  { sku: "P1236", price: 20, category: "panel" },
  { sku: "A1237", price: 120, category: "panel" },
  { sku: "B1234", price: 70, category: "battery" },
  { sku: "B1235", price: 170, category: "battery" },
  { sku: "B1236", price: 20, category: "fitting" },
  { sku: "B1237", price: 120, category: "battery" },
];

debug(
  catalogue.filter((item) => {
    return item.category === "panel" && item.price < 100;
  })
);

const cats = catalogue.reduce((acc, item) => {
  if (!acc.includes(item.category)) acc.push(item.category);
  return acc;
}, []);

cats.forEach((cat) => {
  debug({
    [cat]: catalogue
      .sort((a, b) => {
        if (a.price < b.price) {
          return 1;
        }
        if (a.price > b.price) {
          return -1;
        }
        return 0;
      })
      .filter((item) => item.category === cat),
  });
});

// debug({
//   Panels: catalogue
//     .filter((item) => item.category === "panel")
//     .sort((a, b) => {
//       if (a.sku > b.sku) {
//         return 1;
//       }
//       if (a.sku < b.sku) {
//         return -1;
//       }
//       return 0;
//     }),
// });
