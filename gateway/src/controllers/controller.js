async function renderMain(req, res) {
  try {
    res.render("partials/initial", { layout: "main" });
  } catch (err) {
    console.log("ERRO: " + err);
  }
}

async function renderBooks(req, res) {
  try {
    res.render("partials/books", { layout: "main" });
  } catch (err) {
    console.log("ERRO: " + err);
  }
}

module.exports = { renderMain, renderBooks };
