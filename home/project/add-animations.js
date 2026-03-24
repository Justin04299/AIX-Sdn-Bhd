const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Add imports if not present
  if (!content.includes('AnimatedSection')) {
    content = content.replace(/import React.*?;\n/, match => `${match}import AnimatedSection from '../components/AnimatedSection';\n`);
  }
  
  if (!content.includes('EcosystemPartners')) {
    content = content.replace(/import React.*?;\n/, match => `${match}import EcosystemPartners from '../components/EcosystemPartners';\n`);
  }
  
  // Replace Partner Marquee in Home.tsx
  if (filePath.endsWith('Home.tsx')) {
    const partnerRegex = /\{\/\* Partner Marquee \*\/\}[\s\S]*?<\/section>/;
    content = content.replace(partnerRegex, '<EcosystemPartners />');
  }

  // Add EcosystemPartners to solution pages (before the final CTA or at the end of main sections)
  const solutionPages = ['PowerElectrical.tsx', 'ThermalManagement.tsx', 'ITStack.tsx', 'FacilitySafety.tsx'];
  if (solutionPages.some(page => filePath.endsWith(page))) {
    // Insert before the CTA section
    const ctaRegex = /(\{\/\* CTA Section \*\/\}[\s\S]*?<section className="bg-slate-950)/;
    if (!content.includes('<EcosystemPartners />')) {
      content = content.replace(ctaRegex, '<EcosystemPartners />\n\n      $1');
    }
  }

  // Replace <section ...> with <AnimatedSection ...>
  content = content.replace(/<section /g, '<AnimatedSection ');
  content = content.replace(/<\/section>/g, '</AnimatedSection>');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

fs.readdirSync(pagesDir).forEach(file => {
  if (file.endsWith('.tsx')) {
    processFile(path.join(pagesDir, file));
  }
});

console.log('Done');
