let BookInstance = require("../models/bookinstance");

exports.show_all_books_status = function (res) {
  BookInstance.find({ status: "Available" })
    .populate("book")
    .exec(function (err, availableBooks) {
      if (err) {
        return res
          .status(500)
          .send("Error occurred while fetching book instances");
      }

      let availableBooksList = availableBooks.map((bookInstance) => ({
        title: bookInstance.book.title,
        status: bookInstance.status,
      }));

      return res.send(availableBooksList);
    });
};
