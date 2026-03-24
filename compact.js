const fs = require('fs');
const path = require('path');

const directories = ['src/pages', 'src/components'];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replacements
      content = content.replace(/max-w-7xl/g, 'max-w-5xl');
      content = content.replace(/py-24/g, 'py-16');
      content = content.replace(/py-20/g, 'py-16');
      content = content.replace(/gap-16/g, 'gap-10');
      content = content.replace(/gap-12/g, 'gap-8');
      content = content.replace(/min-h-\[716px\]/g, 'min-h-[500px]');
      
      // Remove CTA from Contact.tsx
      if (fullPath.includes('Contact.tsx')) {
        const ctaRegex = /\{\/\* Footer CTA Section \*\/\}[\s\S]*?<section className="bg-slate-950 py-16 px-8 text-center">[\s\S]*?<\/section>/g;
        content = content.replace(ctaRegex, '');
        const ctaRegex2 = /\{\/\* Footer CTA Section \*\/\}[\s\S]*?<section className="bg-slate-950 py-20 px-8 text-center">[\s\S]*?<\/section>/g;
        content = content.replace(ctaRegex2, '');
      }

      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

directories.forEach(processDirectory);
console.log('Done!');
