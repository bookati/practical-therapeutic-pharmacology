import fs from "fs";
import path from "path";

const sidebarFile = path.join(process.cwd(), "sidebars.js");

const structure = {
  "Part I – Foundations of Therapeutic Pharmacology": [
    "Introduction to Therapeutic Pharmacology",
    "Pharmacokinetics in Clinical Practice",
    "Pharmacodynamics and Mechanisms of Action",
    "Adverse Drug Reactions and Safety Monitoring",
    "Special Populations in Therapeutic Pharmacology"
  ],
  "Part II – Therapeutic Areas and Clinical Drug Use": [
    "Cardiovascular Pharmacology",
    "Respiratory Pharmacology",
    "Endocrine and Metabolic Disorders",
    "Infectious Diseases and Antimicrobial Therapy",
    "Central Nervous System Pharmacology",
    "Gastrointestinal Pharmacology",
    "Oncology Pharmacology",
    "Hematology and Immunology",
    "Renal and Electrolyte Pharmacology",
    "Dermatological and Musculoskeletal Pharmacology"
  ],
  "Part III – Practical Aspects of Drug Therapy": [
    "Drug Interactions in Practice",
    "Therapeutic Drug Monitoring (TDM)",
    "Emergency and Critical Care Pharmacology",
    "Rational Prescribing in Practice",
    "Future of Therapeutic Pharmacology"
  ],
  "Appendices": [
    "Normal Lab Values Relevant to Drug Therapy",
    "Common Drug–Drug Interaction Tables",
    "Dosing Adjustments in Renal/Hepatic Impairment",
    "WHO Essential Medicines List (Abridged)"
  ]
};

// Utility: safe slug
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

// Generate sidebar config
let partIndex = 1;
const sidebar = {};

sidebar.tutorialSidebar = [];

for (const [part, chapters] of Object.entries(structure)) {
  const partSlug = `part-${partIndex}-${slugify(part.split("–")[0].trim())}`;

  const partItem = {
    type: "category",
    label: part,
    link: { type: "doc", id: `${partSlug}/index` },
    items: []
  };

  let chapterIndex = 1;
  for (const chapter of chapters) {
    // Replace this line in the for-loop for chapters:
    // const chapterSlug = `${String(chapterIndex).padStart(2, "0")}-${slugify(chapter)}`;
    // With this:
    const chapterSlug = slugify(chapter);
    partItem.items.push(`${partSlug}/${chapterSlug}`);
    chapterIndex++;
  }

  sidebar.tutorialSidebar.push(partItem);
  partIndex++;
}

// Write sidebar file
fs.writeFileSync(
  sidebarFile,
  `/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */\n` +
    `const sidebars = ${JSON.stringify(sidebar, null, 2)};\n\n` +
    `export default sidebars;\n`
);

console.log("✅ sidebars.js generated");
