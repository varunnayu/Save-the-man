const BANKS = {
    html: [
        { w: "DOCTYPE", h: "Declaration that tells the browser what version of HTML the page uses", e: "<!DOCTYPE html> must be the first line of every HTML5 page. It's not a tag — it's an instruction to the browser." },
        { w: "SEMANTIC", h: "HTML elements that carry meaning about the content they contain, not just presentation", e: "Examples: <article>, <section>, <nav>, <header>. They help screen readers and SEO crawlers understand page structure." },
        { w: "VIEWPORT", h: "The meta tag that controls how a page is displayed on mobile devices", e: "<meta name='viewport' content='width=device-width, initial-scale=1'> is essential for responsive design on mobile." },
        { w: "ANCHOR", h: "The HTML element used to create hyperlinks to other pages or resources", e: "The <a> tag uses the href attribute to define the destination. Use target='_blank' to open in a new tab." },
        { w: "IFRAME", h: "An HTML element that embeds another HTML page inside the current one", e: "iframes create a nested browsing context. Sandboxing with the sandbox attribute restricts what the embedded content can do." },
        { w: "CANVAS", h: "HTML element that provides a drawing surface for 2D graphics via JavaScript", e: "<canvas> is just a container — all drawing is done with JavaScript's Canvas API using methods like fillRect and drawImage." },
        { w: "FIELDSET", h: "HTML element that groups related form controls together with an optional border", e: "Pair <fieldset> with <legend> to label the group. Helps accessibility by grouping logically related inputs for screen readers." },
        { w: "DATALIST", h: "HTML element providing a list of predefined options for an input field", e: "<datalist> pairs with an <input> via the list attribute, offering autocomplete suggestions while still allowing free text entry." },
        { w: "COLSPAN", h: "Attribute that makes a table cell span across multiple columns", e: "Used in <td> or <th>. rowspan does the same vertically. Overusing these makes tables hard to maintain." },
        { w: "SRCSET", h: "Attribute on img that provides multiple image sources for different screen resolutions", e: "<img srcset='img-2x.png 2x, img-1x.png 1x'> lets browsers pick the best resolution. Essential for responsive images." },
        { w: "FIGURE", h: "HTML5 element that wraps self-contained content like images with optional captions", e: "Use <figure> with <figcaption> to semantically associate an image with its caption. Better than a plain div+p combo." },
        { w: "TEMPLATE", h: "HTML element holding client-side content that won't be rendered until activated by JavaScript", e: "<template> content is inert — not rendered, no scripts run, no images load. JS can clone and insert it into the DOM." },
        { w: "PICTURE", h: "HTML element that wraps multiple source elements to serve different images based on conditions", e: "<picture> lets you serve different image formats (WebP, AVIF) or sizes based on media queries, with a fallback <img>." },
        { w: "DETAILS", h: "Disclosure widget that hides content until the user expands it, with no JavaScript needed", e: "<details> with a <summary> child creates a native accordion. No JS required — the browser handles open/close state." },
        { w: "PROGRESS", h: "HTML element that represents the completion progress of a task", e: "<progress value='70' max='100'> renders a native progress bar. Style with appearance:none for custom designs." },
        { w: "TABINDEX", h: "Attribute that controls the order in which elements receive keyboard focus", e: "tabindex='0' adds to natural tab order. tabindex='-1' removes from tab order but allows programmatic focus. Positive values are discouraged." },
        { w: "ARIA", h: "Set of attributes that make HTML content more accessible to assistive technologies", e: "ARIA stands for Accessible Rich Internet Applications. Common attributes: role, aria-label, aria-hidden, aria-expanded." },
        { w: "SCRIPT", h: "HTML element used to embed or link JavaScript code in a document", e: "Use defer to run after HTML parse, async for independent scripts. Both prevent blocking rendering unlike plain <script> in <head>." },
        { w: "MANIFEST", h: "JSON file linked in HTML that enables a web app to be installed on a device home screen", e: "The web app manifest defines name, icons, start_url, and display mode. Required for Progressive Web App installability." },
        { w: "NOSCRIPT", h: "HTML element that defines content to show when JavaScript is disabled or unsupported", e: "<noscript> is useful for graceful degradation, showing a message or alternative content when JS isn't available." },
    ],
    css: [
        { w: "FLEXBOX", h: "CSS layout model for distributing space along a single axis — row or column", e: "Enable with display:flex. Use justify-content for main axis, align-items for cross axis. flex-wrap allows multi-line layouts." },
        { w: "SPECIFICITY", h: "The algorithm browsers use to decide which CSS rule wins when multiple rules target the same element", e: "Inline styles beat IDs, IDs beat classes, classes beat elements. !important overrides all but is considered bad practice." },
        { w: "CASCADE", h: "The process by which browsers decide which CSS rules apply when multiple conflict", e: "Rules cascade based on importance, specificity, and source order. Later rules with equal specificity win over earlier ones." },
        { w: "PSEUDO", h: "CSS selectors that target elements based on state or position, prefixed with a colon", e: "Pseudo-classes (:hover, :nth-child) target state. Pseudo-elements (::before, ::after) create virtual elements in the DOM." },
        { w: "VARIABLE", h: "CSS custom property that stores a reusable value, declared with double dashes", e: "Declare with --color-brand: #ff0. Use with var(--color-brand). Scoped to the element and its children. Great for theming." },
        { w: "GRID", h: "CSS layout system for two-dimensional layouts with rows and columns", e: "Enable with display:grid. Define structure with grid-template-columns and rows. Use grid-area for named placement." },
        { w: "KEYFRAME", h: "CSS rule that defines the intermediate steps of an animation sequence", e: "@keyframes name { from { } to { } } defines animation stages. Apply with animation: name duration timing-function." },
        { w: "TRANSFORM", h: "CSS property that applies 2D or 3D visual transformations like rotate, scale, and translate", e: "transform: rotate(45deg) scale(1.2). Transforms don't affect layout flow. Use translateZ(0) to trigger GPU compositing." },
        { w: "OVERFLOW", h: "CSS property controlling what happens when content exceeds its container's size", e: "Values: visible (default), hidden (clips), scroll (always shows scrollbar), auto (scrollbar when needed)." },
        { w: "SELECTOR", h: "Pattern in CSS that matches elements in the document to apply styles to", e: "Types: element (p), class (.box), ID (#main), attribute ([type='text']), combinators (div > p), pseudo (:hover)." },
        { w: "INHERIT", h: "CSS value that forces a property to take the same value as its parent element", e: "Some properties like color inherit by default. Others like border do not. Use inherit to force inheritance explicitly." },
        { w: "POSITION", h: "CSS property that controls how an element is placed in the document flow", e: "Values: static (default), relative (offset from normal), absolute (relative to nearest positioned ancestor), fixed (viewport), sticky." },
        { w: "MEDIA", h: "CSS at-rule used to apply styles conditionally based on device or viewport properties", e: "@media (max-width: 768px) { } applies styles only when the condition is true. Foundation of responsive web design." },
        { w: "OPACITY", h: "CSS property that sets the transparency level of an element and all its children", e: "opacity: 0 is invisible, 1 is fully visible. Unlike rgba, opacity affects all child elements too. Creates a new stacking context." },
        { w: "FILTER", h: "CSS property applying graphical effects like blur, brightness, or grayscale to an element", e: "filter: blur(4px) brightness(0.8). Runs on the GPU. backdrop-filter applies the filter to what's behind the element." },
        { w: "CLAMP", h: "CSS function that constrains a value between a minimum and maximum with a preferred value", e: "font-size: clamp(1rem, 2.5vw, 2rem) ensures text scales fluidly but never goes below 1rem or above 2rem." },
        { w: "SHADOW", h: "CSS property adding drop shadows to elements (box-shadow) or text (text-shadow)", e: "box-shadow: 2px 4px 8px rgba(0,0,0,0.2). Multiple shadows can be comma-separated. Inset keyword makes it inner shadow." },
        { w: "ASPECT", h: "CSS property preserving a specific width-to-height ratio for an element", e: "aspect-ratio: 16/9 keeps a box at widescreen ratio regardless of width. Replaces old padding-top percentage tricks." },
        { w: "CONTAIN", h: "CSS property allowing the browser to isolate a subtree from the rest of the document for performance", e: "contain: layout paint size tells the browser nothing inside affects outside. Enables rendering optimizations." },
        { w: "COUNTER", h: "CSS feature that lets you number elements automatically without JavaScript", e: "counter-reset defines a counter, counter-increment steps it, and counter() retrieves it for use in content: on ::before." },
    ],
    js: [
        { w: "CLOSURE", h: "A function that retains access to variables in its outer scope even after the outer function has returned", e: "Closures power module patterns, event handlers, and memoization. Every function in JS forms a closure over its creation scope." },
        { w: "HOISTING", h: "Variable and function declarations being moved to the top of their scope before code executes", e: "var is hoisted and initialized to undefined. Function declarations are fully hoisted. let/const hoist but stay in temporal dead zone." },
        { w: "PROMISE", h: "An object representing the eventual completion or failure of an asynchronous operation", e: "Three states: pending, fulfilled, rejected. Chain .then() for success and .catch() for errors. Promise.all runs multiple in parallel." },
        { w: "PROTOTYPE", h: "The mechanism by which JavaScript objects inherit features from one another", e: "Every object has a [[Prototype]]. When a property isn't found, JS walks up the chain. Object.create() sets the prototype explicitly." },
        { w: "TYPEOF", h: "Operator returning a string indicating the data type of its operand", e: "typeof null returns 'object' — a legacy bug. typeof function returns 'function'. Use Array.isArray() instead of typeof for arrays." },
        { w: "SPREAD", h: "The ... operator that expands an iterable into individual elements", e: "Copy arrays: [...arr]. Merge objects: {...a,...b}. Pass args: fn(...args). Spread does a shallow copy — nested objects are still referenced." },
        { w: "REDUCE", h: "Array method that executes a reducer function on each element producing a single accumulated output", e: "reduce((acc, cur) => acc + cur, 0) sums an array. No initialValue starts from index 0. Useful for grouping, totals, flattening." },
        { w: "SCOPE", h: "The context that determines where variables are accessible and writable in your code", e: "Global, function, and block scope. var is function-scoped. let/const are block-scoped. Nested scopes access outer, not vice versa." },
        { w: "EVENT", h: "A signal from the browser that something happened, like a user interaction or network response", e: "Events bubble up the DOM tree by default. addEventListener is preferred over inline handlers. stopPropagation halts bubbling." },
        { w: "ASYNC", h: "Keyword that makes a function return a Promise and allows use of await inside it", e: "async functions always return a Promise. Unhandled rejections inside throw errors that propagate as rejected Promises." },
        { w: "CALLBACK", h: "A function passed as an argument to another function, to be invoked when a task completes", e: "Foundation of async JS. Deeply nested callbacks create 'callback hell'. Promises and async/await were created to solve this." },
        { w: "GETTER", h: "A method defined with get that provides a computed property value when accessed like a field", e: "get fullName() { return this.first+' '+this.last } — called without parentheses. Pairs with set for computed read/write properties." },
        { w: "SYMBOL", h: "A primitive type in ES6 that creates a guaranteed unique value, used as object keys", e: "Symbol('id') !== Symbol('id') — always unique. Symbol keys are not enumerable by default and won't show up in for...in loops." },
        { w: "PROXY", h: "ES6 object that wraps another object and intercepts operations like getting or setting properties", e: "new Proxy(target, handler). The handler defines traps like get, set, apply. Used for validation, logging, and reactivity systems." },
        { w: "ITERATOR", h: "An object with a next() method that returns {value, done} allowing sequential traversal", e: "Arrays, Maps, Sets are built-in iterables. You can make custom iterables with Symbol.iterator. for...of calls the iterator protocol." },
        { w: "COERCION", h: "The automatic or explicit conversion of a value from one type to another", e: "'5' + 1 = '51' (string concat). '5' - 1 = 4 (numeric). Use === to avoid implicit coercion. Number(), String(), Boolean() coerce explicitly." },
        { w: "DEBOUNCE", h: "Technique that delays executing a function until after a specified pause in calls", e: "Prevents a function from firing too often. Common for search inputs — waits until user stops typing before making a request." },
        { w: "MEMOIZE", h: "Optimization technique caching function results so repeated calls with same input skip recomputation", e: "Wrap a pure function: check if result is cached, return it; otherwise compute, store, return. Trade memory for speed." },
        { w: "GENERATOR", h: "A function that can pause execution and resume later, yielding multiple values over time", e: "function* gen() { yield 1; yield 2 }. Calling next() resumes until the next yield. Great for lazy sequences and async flows." },
        { w: "WEAKMAP", h: "A Map where keys must be objects and are held weakly — not preventing garbage collection", e: "WeakMap keys can be garbage collected when there are no other references. Useful for private data attached to objects." },
    ],
    tech: [
        { w: "BROWSER", h: "The application you use to visit websites, like Chrome, Firefox, or Safari", e: "Browsers download HTML, CSS, and JavaScript from servers and render them into visual pages. They also handle cookies, caching, and extensions." },
        { w: "SERVER", h: "A computer that provides data or services to other computers over a network", e: "When you visit a website, your browser sends a request to a server which responds with the page content. Servers can host websites, files, or databases." },
        { w: "NETWORK", h: "A group of computers and devices connected together to share data and resources", e: "The internet is the world's largest network. Local networks (LAN) connect devices at home or in an office. Wi-Fi is a wireless network standard." },
        { w: "UPLOAD", h: "Transferring a file or data from your device to a remote server or the internet", e: "When you post a photo on social media or send an email attachment, you are uploading data. Upload speed is often slower than download speed." },
        { w: "DOWNLOAD", h: "Transferring a file or data from a remote server to your own device", e: "Streaming music, loading a webpage, and saving a file are all examples of downloading. Internet speed is often measured in download megabits per second." },
        { w: "PASSWORD", h: "A secret word or phrase used to prove your identity and gain access to an account", e: "Strong passwords are long, use a mix of letters, numbers, and symbols, and are unique for each account. A password manager helps store them safely." },
        { w: "BACKUP", h: "A copy of data saved in a separate location to protect against loss or damage", e: "The 3-2-1 rule recommends 3 copies of data, on 2 different storage types, with 1 kept off-site or in the cloud." },
        { w: "STORAGE", h: "The hardware or space used to save data permanently, like a hard drive or cloud service", e: "Types include HDDs (magnetic disks), SSDs (flash chips), USB drives, and cloud storage. SSDs are much faster than traditional hard drives." },
        { w: "MEMORY", h: "Temporary working space a computer uses to run programs and hold active data (RAM)", e: "More RAM lets a computer run more programs at once. RAM is erased when the computer powers off, unlike hard drive storage." },
        { w: "VIRUS", h: "Malicious software that copies itself and spreads to other computers, often causing damage", e: "Viruses need a host file to spread. They can corrupt data, slow down computers, or steal information. Antivirus software detects and removes them." },
        { w: "COOKIE", h: "A small file a website saves on your browser to remember information about you", e: "Cookies store login sessions, preferences, and tracking data. Session cookies vanish when you close the browser; persistent ones stay for longer." },
        { w: "EMAIL", h: "A digital message sent and received over the internet using an address like user@example.com", e: "Email uses two main protocols: SMTP to send messages and IMAP or POP3 to receive them. Founded by Ray Tomlinson in 1971." },
        { w: "ROUTER", h: "A device that connects your home network to the internet and directs data between devices", e: "Routers assign IP addresses to devices via DHCP and use NAT to share one public IP among many devices on your local network." },
        { w: "PIXEL", h: "The smallest unit of a digital image or screen, represented as a single colored dot", e: "A 1920x1080 screen has over 2 million pixels. Higher pixel density (PPI) means sharper images. Retina displays pack very high PPI." },
        { w: "CLICK", h: "The action of pressing a mouse button or tapping a touchscreen to interact with an element", e: "A single click selects; a double-click opens. Right-click opens a context menu. On touch screens, a tap is equivalent to a click." },
        { w: "SEARCH", h: "Finding information by entering keywords into a search engine like Google", e: "Search engines index billions of web pages. They rank results using algorithms that consider relevance, authority, and freshness of content." },
        { w: "CLOUD", h: "Storing or running software and data on remote servers accessed via the internet", e: "Examples: Google Drive, iCloud, AWS. Cloud computing lets you access your data from any device. Providers handle hardware maintenance for you." },
        { w: "UPDATE", h: "A new version of software released to fix bugs, improve security, or add features", e: "Keeping software updated protects against security vulnerabilities. Major updates add features; minor updates fix bugs or patch security holes." },
        { w: "SCREEN", h: "The display surface of a computer, phone, or tablet that shows visual output", e: "Screen quality is measured by resolution (pixel count), refresh rate (Hz), and panel type (LCD, OLED, AMOLED). OLED offers deeper blacks." },
        { w: "FOLDER", h: "A container in a file system used to organize and group related files together", e: "Folders create a hierarchy to keep files tidy. You can nest folders inside folders to create a directory tree structure on your computer." },
    ]
};

const TOPIC_NAMES = { html: 'HTML', css: 'CSS', js: 'JavaScript', tech: 'General Tech' };
const MAX_WRONG = 6;
let selectedTopic = null, currentQ = null, wrong = [], guessed, score = 0, streak = 0, gameOver = false;
let shuffled = [], qIdx = 0;

function selectTopic(el, topic) {
    document.querySelectorAll('.topic-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    selectedTopic = topic;
    const btn = document.getElementById('start-btn');
    btn.disabled = false;
    btn.textContent = 'Start — ' + TOPIC_NAMES[topic];
}

function startGame() {
    if (!selectedTopic) return;
    shuffled = [...BANKS[selectedTopic]].sort(() => Math.random() - .5);
    qIdx = 0; score = 0; streak = 0;
    document.getElementById('landing').style.display = 'none';
    document.getElementById('game').style.display = 'flex';
    nextQ();
}

function nextQ() {
    if (qIdx >= shuffled.length) { shuffled = [...BANKS[selectedTopic]].sort(() => Math.random() - .5); qIdx = 0; }
    currentQ = shuffled[qIdx++];
    wrong = []; guessed = new Set(); gameOver = false;
    renderGame();
}

// Gallows lines (always drawn as structure)
const GALLOWS = [
    [40, 20, 140, 20],   // top bar
    [40, 20, 40, 190],   // vertical pole
    [140, 20, 140, 50],  // rope
];

// Parts ordered head→body→arms→legs.
// Man starts FULL. Each wrong guess removes from the BOTTOM UP (right leg first, head last).
const BODY_PARTS = [
    { type: 'circle', cx: 140, cy: 62, r: 12 },               // 0: head       (last to go)
    { type: 'line', x1: 140, y1: 74,  x2: 140, y2: 130 },    // 1: body
    { type: 'line', x1: 140, y1: 90,  x2: 115, y2: 115 },    // 2: left arm
    { type: 'line', x1: 140, y1: 90,  x2: 165, y2: 115 },    // 3: right arm
    { type: 'line', x1: 140, y1: 130, x2: 115, y2: 160 },    // 4: left leg
    { type: 'line', x1: 140, y1: 130, x2: 165, y2: 160 },    // 5: right leg  (first to fall)
];

function drawFigure(wrongCount) {
    // Always draw the gallows
    let svg = `<line x1="20" y1="195" x2="170" y2="195" stroke="#3a3a5a" stroke-width="3" stroke-linecap="round"/>`;
    GALLOWS.forEach(([x1, y1, x2, y2]) => {
        svg += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#5a5a7a" stroke-width="3" stroke-linecap="round"/>`;
    });

    // Man starts full. Parts are REMOVED bottom-up with each wrong guess.
    // Parts at the END of the array fall off first.
    const partsRemaining = BODY_PARTS.length - wrongCount; // how many parts still on the man
    BODY_PARTS.forEach((part, i) => {
        if (i >= partsRemaining) return; // this part has fallen off
        const color = '#c8b8ff'; // healthy purple — he's alive!
        if (part.type === 'circle') {
            svg += `<circle cx="${part.cx}" cy="${part.cy}" r="${part.r}" fill="none" stroke="${color}" stroke-width="2.5"/>`;
        } else {
            svg += `<line x1="${part.x1}" y1="${part.y1}" x2="${part.x2}" y2="${part.y2}" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>`;
        }
    });

    return svg;
}

function renderLives(wrongCount) {
    return Array.from({ length: MAX_WRONG }, (_, i) => `<div class="lheart${i < wrongCount ? ' gone' : ''}"></div>`).join('');
}

function renderWord() {
    return currentQ.w.split('').map(c => {
        if (c === ' ') return `<div class="lb gap"></div>`;
        return `<div class="lb">${guessed.has(c) ? c : ''}</div>`;
    }).join('');
}

const ROWS = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];

function renderKeyboard() {
    return ROWS.map(row => `<div class="krow">${row.split('').map(k => `<button class="key${guessed.has(k) ? (wrong.includes(k) ? ' bad' : ' ok') : ''}" id="k${k}" ${(guessed.has(k) || gameOver) ? 'disabled' : ''} onclick="guess('${k}')">${k}</button>`).join('')}</div>`).join('');
}

function renderGame() {
    const g = document.getElementById('game');
    g.innerHTML = `
    <div class="top-bar">
      <div class="topic-badge">${TOPIC_NAMES[selectedTopic]}</div>
      <div class="stats-row">
        <div class="stat"><span class="stat-val" id="s-score">${score}</span><span class="stat-lbl">Score</span></div>
        <div class="stat"><span class="stat-val" id="s-streak">${streak}</span><span class="stat-lbl">Streak</span></div>
      </div>
    </div>
    <div class="game-area">
      <div class="figure-panel">
        <svg class="figure-svg" id="fig" viewBox="0 0 180 210">${drawFigure(wrong.length)}</svg>
        <div class="lives-bar" id="lvs">${renderLives(wrong.length)}</div>
        <div class="wrong-label">WRONG GUESSES</div>
        <div class="wrong-row" id="wrow">${wrong.map(l => `<div class="wl">${l}</div>`).join('')}</div>
      </div>
      <div class="right-panel">
        <div class="hint-box"><div class="hint-lbl">Hint</div><div class="hint-txt">${currentQ.h}</div></div>
        <div class="word-row" id="wdrow">${renderWord()}</div>
        <div class="keyboard" id="kbd">${renderKeyboard()}</div>
      </div>
    </div>
    <div class="bottom-bar">
      <button class="back-btn" onclick="goBack()">← Change topic</button>
      <button class="skip-btn" onclick="skipQ()">Skip word</button>
    </div>
  `;
}

function guess(l) {
    if (guessed.has(l) || gameOver) return;
    guessed.add(l);
    const won = currentQ.w.split('').filter(c => c !== ' ').every(c => guessed.has(c));
    if (!currentQ.w.includes(l)) wrong.push(l);

    if (won) {
        gameOver = true;
        score += 10 + (MAX_WRONG - wrong.length) * 5;
        streak++;
        currentQ.w.split('').forEach(c => guessed.add(c));
        showResult(true);
    } else if (wrong.length >= MAX_WRONG) {
        gameOver = true;
        streak = 0;
        currentQ.w.split('').forEach(c => guessed.add(c));
        showResult(false);
    } else {
        document.getElementById('fig').innerHTML = drawFigure(wrong.length);
        document.getElementById('lvs').innerHTML = renderLives(wrong.length);
        document.getElementById('wrow').innerHTML = wrong.map(lt => `<div class="wl">${lt}</div>`).join('');
        document.getElementById('wdrow').innerHTML = renderWord();
        document.getElementById('kbd').innerHTML = renderKeyboard();
    }
}

function showResult(win) {
    document.getElementById('s-score').textContent = score;
    document.getElementById('s-streak').textContent = streak;
    const g = document.getElementById('game');
    const old = g.querySelector('.result-overlay');
    if (old) old.remove();

    const icon = win
        ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><polyline points="20 6 9 17 4 12" stroke="#44cc88" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
        : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><line x1="18" y1="6" x2="6" y2="18" stroke="#ff5577" stroke-width="2.5" stroke-linecap="round"/><line x1="6" y1="6" x2="18" y2="18" stroke="#ff5577" stroke-width="2.5" stroke-linecap="round"/></svg>`;

    const div = document.createElement('div');
    div.className = 'result-overlay';
    div.innerHTML = `
    <div class="res-icon ${win ? 'win' : 'lose'}">${icon}</div>
    <div class="res-title ${win ? 'win' : 'lose'}">${win ? 'Man Saved!' : 'Man Lost!'}</div>
    <div class="res-word">The word was <span>${currentQ.w}</span></div>
    <div class="res-exp"><b>${currentQ.w}:</b> ${currentQ.e}</div>
    <button class="next-btn" onclick="nextRound()">${win ? 'Next word →' : 'Try another →'}</button>
  `;
    g.appendChild(div);
}

function nextRound() {
    const d = document.getElementById('game').querySelector('.result-overlay');
    if (d) d.remove();
    nextQ();
}

function skipQ() { streak = 0; nextRound(); }

function goBack() {
    document.getElementById('game').style.display = 'none';
    document.getElementById('landing').style.display = 'flex';
    document.querySelectorAll('.topic-card').forEach(c => c.classList.remove('selected'));
    selectedTopic = null;
    const btn = document.getElementById('start-btn');
    btn.disabled = true;
    btn.textContent = 'Select a topic to start';
}

document.addEventListener('keydown', e => {
    const l = e.key.toUpperCase();
    if (/^[A-Z]$/.test(l) && !gameOver && document.getElementById('game').style.display !== 'none') guess(l);
});