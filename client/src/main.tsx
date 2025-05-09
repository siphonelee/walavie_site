import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <Helmet>
      <title>Walavie - One-stop Smart Terminal with graphical & AI capabilities</title>
      <meta name="description" content="A next-generation platform with powerful terminal, graphical and AI capabilities for developers, data scientists, and tech professionals." />
      <meta property="og:title" content="Walavie - One-stop Smart Terminal with graphical & AI capabilities" />
      <meta property="og:description" content="A next-generation platform with powerful terminal, graphical and AI capabilities for developers, data scientists, and tech professionals." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://walavie.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
    </Helmet>
    <App />
  </HelmetProvider>
);
