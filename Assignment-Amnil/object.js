// Practice set
var menus = [
  {
    name: "Main Menu 1",
    menus: [
      {
        name: "Sub Menu 1",
      },
      {
        name: "Sub Menu 2",
        menus: [
          {
            name: "Super Sub Menu",
          },
        ],
      },
    ],
  },
];

function getEachItem(menus) {
  menus.forEach((item) => {
    recursive(item);
  });
}

function recursive(item) {
  Object.keys(item).forEach((key) => {
    if (typeof item[key] === "object") {
      recursive(item[key]);
    }
    if (typeof item[key] === "string") {
      console.log(item[key]);
    }
  });
}

getEachItem(menus);
