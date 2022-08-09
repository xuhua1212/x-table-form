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
      isSwitch: "@boolean",
      objmsg: "@cword(5, 10)",
      status: { msg: "@boolean" },
    },
  ],
});

module.exports = [
  {
    url: "/table/list",
    type: "get",
    response: (config) => {
      const {  pageNum = 1, pageSize = 10 } = config.query
      const pageList =  data.items.filter((item, index) => index < pageSize * pageNum && index >= pageSize * (pageNum - 1))
      return {
        code: 20000,
        data: {
          total: data.items.length,
          items: pageList,
        },
      };
    },
  },
];
