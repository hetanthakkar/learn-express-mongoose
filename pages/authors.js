let Author = require("../models/author");

get_author_list = async () => {
  let authors = await Author.find();
  let authors_list = authors.map((author) => ({
    name: author.name,
    lifespan: author.lifespan,
  }));
  return authors_list;
};

exports.show_all_authors = function (res) {
  get_author_list()
    .then((data) => res.send(data))
    .catch((_) => res.send("No authors found"));
};
