import express from "express";

const app = express();
app.use(express.json());

app.post("/detect-mime", (req, res) => {
  const { filename = "" } = req.body;
  const name = filename.toLowerCase();

  let mime = "application/octet-stream";
  if (name.endsWith(".jpg") || name.endsWith(".jpeg")) {
    mime = "image/jpeg";
  } else if (name.endsWith(".png")) {
    mime = "image/png";
  } else if (name.endsWith(".webp")) {
    mime = "image/webp";
  } else if (name.endsWith(".gif")) {
    mime = "image/gif";
  } else if (name.endsWith(".svg")) {
    mime = "image/svg+xml";
  }

  res.json({ mimeType: mime });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`MIME service running on ${port}`));
