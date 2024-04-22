import dbg from "debug";
const debug = dbg("app:main");

debug("Hello");
//
const strings = ["b", "c", "a"];
const data = [10, 2, 3, 4];

const adder = (acc, item, ix) => {
  acc = acc + item;
  return acc;
};

const total = data.reduce(adder, 0);
debug({ total });

const catalogue = [
  { sku: "1234", price: 70, category: "panel" },
  { sku: "1235", price: 170, category: "panel" },
  { sku: "1236", price: 20, category: "panel" },
  { sku: "1237", price: 120, category: "panel" },
];

debug(
  catalogue.filter((item) => {
    return item.category === "panel" && item.price < 100;
  })
);
