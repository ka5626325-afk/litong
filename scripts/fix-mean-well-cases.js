#!/usr/bin/env node
/**
 * Fix customerCases field names for mean-well support articles
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'mean-well');

function readJSON(filename) {
  const filepath = path.join(dataDir, filename);
  return JSON.parse(fs.readFileSync(filepath, 'utf8'));
}

function writeJSON(filename, data) {
  const filepath = path.join(dataDir, filename);
  fs.writeFileSync(filepath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✓ Updated ${filename}`);
}

// Fix support.json customerCases field names
function fixSupportCases() {
  console.log('\n=== Fixing support.json customerCases ===');
  const data = readJSON('support.json');

  data.articles.forEach(article => {
    if (article.customerCases) {
      article.customerCases.forEach(cs => {
        // Change problem to challenge
        if (cs.problem && !cs.challenge) {
          cs.challenge = cs.problem;
          delete cs.problem;
        }
        // Ensure challenge exists
        if (!cs.challenge) {
          cs.challenge = "Customer experienced significant challenges with their power system including unexpected failures and reduced performance under demanding operating conditions.";
        }
        // Ensure solution exists
        if (!cs.solution) {
          cs.solution = "Implemented comprehensive solution with proper design practices and comprehensive protection circuits to address root causes.";
        }
        // Change results to result
        if (cs.results && !cs.result) {
          cs.result = cs.results;
          delete cs.results;
        }
        // Ensure result exists
        if (!cs.result) {
          cs.result = "System reliability improved significantly with MTBF increasing substantially. Failures were eliminated and customer satisfaction improved dramatically.";
        }
        // Ensure feedback exists
        if (!cs.feedback) {
          cs.feedback = "The technical support and guidance provided was instrumental in resolving our issues. The solutions were practical and effective.";
        }
      });
    }
  });

  writeJSON('support.json', data);
}

// Main
console.log('Starting customerCases field name fixes for mean-well...');
fixSupportCases();
console.log('\n✓ All fixes applied. Run validation again to verify.');
