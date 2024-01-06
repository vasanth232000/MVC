exports.getDashBoard = (req, res, next) => {
  res.render("Dashboard.ejs", {
    title: "Dashboard",
    path: "dashboard",
    user: req.user,
  });
};
