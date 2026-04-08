const fs = require('fs');

const content = fs.readFileSync('data/power-integrations/products.json', 'utf8');
let brackets = [];
let inString = false;
let escape = false;

for(let i = 0; i < content.length; i++) {
  const c = content[i];
  if(escape) {
    escape = false;
    continue;
  }
  if(c === '\\') {
    escape = true;
    continue;
  }
  if(c === '"' && !inString) {
    inString = true;
    continue;
  }
  if(c === '"' && inString) {
    inString = false;
    continue;
  }
  if(inString) continue;
  
  if(c === '{' || c === '[') {
    brackets.push({char: c, pos: i});
  }
  if(c === '}' || c === ']') {
    const last = brackets.pop();
    if(!last) {
      console.log('Unbalanced at', i, c);
      break;
    }
    const expected = c === '}' ? '{' : '[';
    if(last.char !== expected) {
      console.log('Mismatched at', i, 'expected', expected, 'got', c, 'last was', last.char, 'at', last.pos);
      break;
    }
  }
}

console.log('Brackets remaining:', brackets.length);
if(brackets.length > 0) {
  console.log('Unclosed:', brackets.slice(-5));
}
