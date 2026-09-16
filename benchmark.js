const fs = require('fs');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync('index.html', 'utf8');

// Extract papers data directly from the html
let papersLineStart = html.indexOf('const papers = [');
let papersLineEnd = html.indexOf('];', papersLineStart);
let papersStr = html.substring(papersLineStart + 15, papersLineEnd + 1);

// We want to test the loop:
// document.querySelectorAll('.btn-open-modal').forEach(btn => {
//   btn.addEventListener('click', (e) => {
//     e.stopPropagation();
//     openModal(papers.find(item => item.id == btn.getAttribute('data-id')));
//   });
// });

// Setup DOM
const dom = new JSDOM(`
  <!DOCTYPE html>
  <html>
  <body>
    <div id="grid"></div>
  </body>
  </html>
`);
const document = dom.window.document;
const grid = document.getElementById('grid');

// Mock papers list, just to have a larger array to test
const mockPapers = [];
for (let i = 0; i < 5000; i++) {
  mockPapers.push({
    id: i,
    category: "System DOAS",
    cat_class: "badge-system",
    year: 2020 + (i % 5),
    title: `Paper ${i}`,
    author: `Author ${i}`,
    doi_url: `https://doi.org/${i}`
  });
}

// Generate the DOM elements like in index.html
mockPapers.forEach(p => {
  const card = document.createElement('div');
  card.className = 'paper-card';
  card.innerHTML = `
    <button class="btn-action btn-note btn-open-modal" data-id="${p.id}">🔍 View</button>
  `;
  grid.appendChild(card);
});

console.log(`Setting up listeners for ${mockPapers.length} elements...`);

function openModal(p) {
  // Do nothing
}

// Baseline implementation
function runBaseline() {
  const start = performance.now();

  document.querySelectorAll('.btn-open-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(mockPapers.find(item => item.id == btn.getAttribute('data-id')));
    });
  });

  // Simulate clicking all buttons
  const buttons = document.querySelectorAll('.btn-open-modal');
  buttons.forEach(btn => {
      // Trigger click event handler directly as dispatchEvent might be slow in jsdom
      // but in this benchmark we want to measure the event handler performance specifically
      // wait, the problem is that O(N) lookup happens at click time, not binding time
  });

  const end = performance.now();
  return end - start;
}

// Actual benchmarking of the CLICK operation
function runClickBenchmarkBaseline() {
  const buttons = document.querySelectorAll('.btn-open-modal');
  const start = performance.now();

  for (let i = 0; i < buttons.length; i++) {
    const btn = buttons[i];
    // Find the paper
    const paper = mockPapers.find(item => item.id == btn.getAttribute('data-id'));
    openModal(paper);
  }

  const end = performance.now();
  return end - start;
}

function runClickBenchmarkOptimized() {
  const buttons = document.querySelectorAll('.btn-open-modal');
  const start = performance.now();

  for (let i = 0; i < buttons.length; i++) {
    const p = mockPapers[i]; // Because in the real code, we iterate over filtered and create buttons, so we have access to 'p'
    openModal(p);
  }

  const end = performance.now();
  return end - start;
}


console.log(`Baseline click time: ${runClickBenchmarkBaseline().toFixed(2)}ms`);
console.log(`Optimized click time: ${runClickBenchmarkOptimized().toFixed(2)}ms`);
