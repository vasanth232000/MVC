exports.getAdminPage = (req, res, next) => {
  const user = req.cookies.user;
  res.render("Admin.ejs", {
    title: "Admin",
    path: "admin",
    userName: user.name,
  });
};
