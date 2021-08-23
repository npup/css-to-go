import fs from "fs";

const basePath = "/css-to-go";

function updateHref(fileName) {
  const html = fs.readFileSync(fileName, "utf8");
  const html2 = html.replace(/href="\//g, `href=\"${basePath}\/`);
  fs.writeFileSync(fileName, html2);
  console.log("Wrote path updates to", fileName);
}

updateHref("./docs/index.html");
