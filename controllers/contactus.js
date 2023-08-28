exports.getMsg = (req, res) => {
  res.render("contact-us", {
    pageTitle: "contact us",
    path: "/contact-us",
    formCSS: true,
  });
};


exports.postMsg = (req, res) => {
  console.log("name and mail ", req.body);
  res.render("success", {
    pageTitle: "Success",
    path: "/success",
  });
};