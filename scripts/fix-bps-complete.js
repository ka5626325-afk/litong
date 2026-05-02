#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data', 'bps');

// Fix solutions.json - customerCases and faeInsights
const solutionsPath = path.join(dataDir, 'solutions.json');
const solutions = JSON.parse(fs.readFileSync(solutionsPath, 'utf8'));

solutions.solutions.forEach(sol => {
  // Fix customerCases
  if (sol.customerCases && Array.isArray(sol.customerCases)) {
    sol.customerCases.forEach(cs => {
      if (!cs.challenge && cs.problem) cs.challenge = cs.problem;
      if (!cs.solution && cs.diagnosis) cs.solution = cs.diagnosis;
      if (!cs.result && cs.results) cs.result = cs.results;
      if (!cs.result && cs.feedback) cs.result = cs.feedback;
    });
  }
  
  // Fix faeInsights - add decisionFramework
  if (sol.faeInsights) {
    if (!sol.faeInsights.decisionFramework) {
      sol.faeInsights.decisionFramework = {
        "assessment": "Evaluate application requirements including power level, dimming needs, and thermal constraints",
        "selection": "Choose appropriate BPS driver family based on topology and feature requirements",
        "implementation": "Follow reference designs and PCB layout guidelines for optimal performance",
        "validation": "Test under worst-case conditions including maximum ambient and minimum dimming"
      };
    }
    if (!sol.faeInsights.insightLogic && sol.faeInsights.logic) {
      sol.faeInsights.insightLogic = sol.faeInsights.logic;
    }
  }
});

fs.writeFileSync(solutionsPath, JSON.stringify(solutions, null, 2));
console.log('✓ Fixed solutions.json customerCases and faeInsights');

// Fix support.json - faeInsights and customerCases
const supportPath = path.join(dataDir, 'support.json');
const support = JSON.parse(fs.readFileSync(supportPath, 'utf8'));

support.articles.forEach(article => {
  // Fix faeInsights
  if (article.faeInsights) {
    if (!article.faeInsights.insightLogic && article.faeInsights.logic) {
      article.faeInsights.insightLogic = article.faeInsights.logic;
    }
    if (!article.faeInsights.practicalTips && article.faeInsights.bestPractices) {
      article.faeInsights.practicalTips = article.faeInsights.bestPractices;
    }
  }
  
  // Fix customerCases
  if (article.customerCases && Array.isArray(article.customerCases)) {
    article.customerCases.forEach(cs => {
      if (!cs.challenge && cs.problem) cs.challenge = cs.problem;
      if (!cs.solution && cs.diagnosis) cs.solution = cs.diagnosis;
      if (!cs.feedback && cs.results) cs.feedback = cs.results;
      if (!cs.feedback && cs.feedback) cs.feedback = cs.feedback;
    });
  }
});

fs.writeFileSync(supportPath, JSON.stringify(support, null, 2));
console.log('✓ Fixed support.json faeInsights and customerCases');

console.log('\n✅ BPS brand complete fixes done!');
