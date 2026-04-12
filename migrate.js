const fs = require('fs');
const path = require('path');

const srcDir = '/Users/ks/Documents/Dev/siteNovo/src';
const oldDir = '/Users/ks/Documents/Dev/sanzonyvozOnAir/src';

function process(f1, f2) {
  let text = fs.readFileSync(path.join(oldDir, f1), 'utf8');
  
  text = '"use client";\n' + text;

  text = text.replace(/import\s*\{\s*Link\s*,\s*useNavigate\s*\}\s*from\s*['"]react-router-dom['"];/g, 
         "import Link from 'next/link';\nimport { useRouter } from 'next/navigation';");
         
  text = text.replace(/import\s*\{\s*useNavigate\s*\}\s*from\s*['"]react-router-dom['"];/g, 
         "import { useRouter } from 'next/navigation';");
         
  text = text.replace(/import\s*\{.*?\}\s*from\s*['"]react-router-dom['"];/g, "");

  text = text.replace(/const navigate = useNavigate\(\);/g, "const router = useRouter();");
  text = text.replace(/navigate\((['"].*?['"])\)/g, "router.push($1)");
  text = text.replace(/navigate\(['"](.*?)['"]\)/g, "router.push('$1')");
  text = text.replace(/<Link(.*?)to=/g, "<Link$1href=");

  fs.writeFileSync(path.join(srcDir, f2), text, 'utf8');
}

process('pages/AdminPage.tsx', 'app/admin/page.tsx');
process('pages/LoginPage.tsx', 'app/login/page.tsx');

function prepend(dir) {
  if(!fs.existsSync(dir)) return;
  for (const f of fs.readdirSync(dir, {withFileTypes: true})) {
    const p = path.join(dir, f.name);
    if(f.isDirectory()) prepend(p);
    else if(f.isFile() && (p.endsWith('.tsx') || p.endsWith('.ts'))) {
      let t = fs.readFileSync(p, 'utf8');
      if(!t.includes('"use client"') && (t.includes('react') || t.includes('use') || p.includes('components'))) {
        fs.writeFileSync(p, '"use client";\n' + t, 'utf8');
      }
    }
  }
}

prepend(path.join(srcDir, 'components'));
prepend(path.join(srcDir, 'hooks'));
prepend(path.join(srcDir, 'integrations'));
console.log('Migration complete');
