import fs from "fs";
import path from "path";

// Root docs folder
const ROOT = path.join(process.cwd(), "docs");

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

// Utility: safe folder/file names
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function writeFile(filePath, content) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log("Created:", filePath);
  } else {
    console.log("Skipped (exists):", filePath);
  }
}

// Generate structure
let partIndex = 1;
for (const [part, chapters] of Object.entries(structure)) {
  const partSlug = `part-${partIndex}-${slugify(part.split("–")[0].trim())}`;
  const partDir = path.join(ROOT, partSlug);
  ensureDir(partDir);

  // Part index.md
  writeFile(
    path.join(partDir, "index.md"),
    `# ${part}\n\n_Overview of ${part}._\n`
  );

  // Chapters
  let chapterIndex = 1;
  for (const chapter of chapters) {
    const chapterSlug = `${String(chapterIndex).padStart(2, "0")}-${slugify(
      chapter
    )}`;
    const chapterFile = path.join(partDir, `${chapterSlug}.md`);
    writeFile(chapterFile, `# ${chapter}\n\n_Content coming soon..._\n`);
    chapterIndex++;
  }

  partIndex++;
}
