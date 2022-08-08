const Mock = require("mockjs");

const data = Mock.mock({
  "items|63": [
    {
      id: "@id",
      title: "@cword(1, 5)",
      author: "@cname",
      display_time: "@datetime",
      count: "@integer(0, 100)",
      content: "@sentence(20, 30)",
      image: "@image(100x100, @color)",
      switchs: "@boolean",
      objmsg: "@cword(5, 10)",
      status: { msg: "@boolean" },
    },
  ],
});

module.exports = [
  {
    url: "/vue-admin-template/table/list",
    type: "get",
    response: (config) => {
      const items = data.items;
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items,
        },
      };
    },
  },
];
