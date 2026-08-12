// HTTP Status Codes Interactive Application Script

let activeCategory = 'all';
let searchTimeout = null;
let currentModalCode = null;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initFavorites();
    initFilterCounts();
    initKeyboardShortcuts();
    setupClearButton();
    updateCategoryDisplay();
});

// Real-time Search Handler
function filterStatusCodes() {
    const input = document.getElementById('searchBox');
    const query = input.value.trim().toLowerCase();
    const clearBtn = document.getElementById('clearSearchBtn');
    
    // Toggle Clear Button
    if (clearBtn) {
        clearBtn.style.display = query.length > 0 ? 'block' : 'none';
    }

    const favorites = getFavorites();
    const groups = document.querySelectorAll('.group-section');
    let totalVisible = 0;

    groups.forEach(group => {
        const cat = group.getAttribute('data-cat');
        const cards = group.querySelectorAll('.status-card');
        let visibleInGroup = 0;

        cards.forEach(card => {
            const code = card.getAttribute('data-code') || '';
            const title = card.getAttribute('data-title') || '';
            const desc = card.getAttribute('data-desc') || '';
            const isFav = favorites.includes(code);

            // Category match check
            let categoryMatch = false;
            if (activeCategory === 'all') {
                categoryMatch = true;
            } else if (activeCategory === 'starred') {
                categoryMatch = isFav;
            } else {
                categoryMatch = (cat === activeCategory);
            }

            // Query text match check
            const textContent = `${code} ${title} ${desc}`.toLowerCase();
            const queryMatch = query === '' || textContent.includes(query);

            if (categoryMatch && queryMatch) {
                card.style.display = 'flex';
                visibleInGroup++;
                totalVisible++;
            } else {
                card.style.display = 'none';
            }
        });

        // Toggle Group Section Visibility
        if (visibleInGroup > 0) {
            group.style.display = 'block';
            const countSpan = group.querySelector('.group-count');
            if (countSpan) countSpan.textContent = `(${visibleInGroup} code${visibleInGroup === 1 ? '' : 's'})`;
        } else {
            group.style.display = 'none';
        }
    });

    // Toggle Empty State
    const emptyState = document.getElementById('emptyState');
    if (emptyState) {
        if (totalVisible === 0) {
            emptyState.classList.add('active');
        } else {
            emptyState.classList.remove('active');
        }
    }
}

// Category Pill Selection
function setCategory(cat, element) {
    activeCategory = cat;
    
    // Update Pill Active Classes
    document.querySelectorAll('.filter-pill').forEach(pill => pill.classList.remove('active'));
    if (element) {
        element.classList.add('active');
    } else {
        const target = document.querySelector(`.filter-pill[data-filter="${cat}"]`);
        if (target) target.classList.add('active');
    }

    filterStatusCodes();
}

// Reset Search & Category
function resetSearch() {
    const input = document.getElementById('searchBox');
    if (input) input.value = '';
    setCategory('all', document.querySelector('.filter-pill[data-filter="all"]'));
    filterStatusCodes();
}

// Clear Search Query Only
function clearSearch() {
    const input = document.getElementById('searchBox');
    if (input) {
        input.value = '';
        filterStatusCodes();
        input.focus();
    }
}

// Setup Clear Button Listener
function setupClearButton() {
    const clearBtn = document.getElementById('clearSearchBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearSearch);
    }
}

// Keyboard Shortcuts
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Press '/' or 'Ctrl+K' / 'Cmd+K' to focus search
        if ((e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') ||
            ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) {
            e.preventDefault();
            const searchBox = document.getElementById('searchBox');
            if (searchBox) searchBox.focus();
        }

        // Press 'Esc' to close modal or clear search
        if (e.key === 'Escape') {
            const modal = document.getElementById('inspectModal');
            if (modal && modal.classList.contains('active')) {
                closeModal();
            } else {
                clearSearch();
                document.activeElement.blur();
            }
        }
    });
}

// Favorites Management
function getFavorites() {
    try {
        return JSON.parse(localStorage.getItem('http_code_favs')) || [];
    } catch {
        return [];
    }
}

function initFavorites() {
    const favs = getFavorites();
    favs.forEach(code => {
        const favBtn = document.querySelector(`.icon-btn.favorite[data-code="${code}"]`);
        if (favBtn) favBtn.classList.add('active');
    });
}

function toggleFavorite(code, event) {
    if (event) event.stopPropagation();
    let favs = getFavorites();
    const index = favs.indexOf(code);
    let added = false;

    if (index > -1) {
        favs.splice(index, 1);
    } else {
        favs.push(code);
        added = true;
    }

    localStorage.setItem('http_code_favs', JSON.stringify(favs));
    
    // Update UI elements
    const favBtns = document.querySelectorAll(`.icon-btn.favorite[data-code="${code}"]`);
    favBtns.forEach(btn => {
        if (added) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    showToast(added ? `Starred status code ${code}` : `Removed code ${code} from starred`);
    initFilterCounts();

    if (activeCategory === 'starred') {
        filterStatusCodes();
    }
}

// Dynamic Filter Counts
function initFilterCounts() {
    const favs = getFavorites();
    const categories = ['1xx', '2xx', '3xx', '4xx', '5xx'];

    categories.forEach(cat => {
        const count = document.querySelectorAll(`.status-card[data-cat="${cat}"]`).length;
        const pill = document.querySelector(`.filter-pill[data-filter="${cat}"] .pill-count`);
        if (pill) pill.textContent = count;
    });

    const starPill = document.querySelector('.filter-pill[data-filter="starred"] .pill-count');
    if (starPill) starPill.textContent = favs.length;

    const allPill = document.querySelector('.filter-pill[data-filter="all"] .pill-count');
    if (allPill) allPill.textContent = document.querySelectorAll('.status-card').length;
}

// Copy Code Helper
function copyCode(code, title, event) {
    if (event) event.stopPropagation();
    const textToCopy = `${code} ${title}`;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied "${textToCopy}" to clipboard!`);
    }).catch(() => {
        showToast(`Copied ${code}`);
    });
}

// Toast Notifications
function showToast(message) {
    let container = document.getElementById('toastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toastContainer';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.style.transition = 'all 0.25s ease';
        setTimeout(() => toast.remove(), 250);
    }, 2400);
}

// Inspect Code Modal Logic
const CODE_SNIPPETS = {
    curl: (code) => `curl -i -X GET "https://api.example.com/resource"\n\n# Expected Server Response:\nHTTP/1.1 ${code}`,
    js: (code) => `// JavaScript (Fetch API)\nasync function fetchResource() {\n  const response = await fetch('https://api.example.com/resource');\n  if (response.status === ${code}) {\n    console.log('Status matched: ${code}');\n  }\n}`,
    python: (code) => `# Python (Requests Library)\nimport requests\n\nresponse = requests.get('https://api.example.com/resource')\nif response.status_code == ${code}:\n    print("Handling HTTP ${code}")`,
    go: (code) => `// Go (net/http)\npackage main\n\nimport (\n    "fmt"\n    "net/http"\n)\n\nfunc main() {\n    resp, err := http.Get("https://api.example.com/resource")\n    if err == nil && resp.StatusCode == ${code} {\n        fmt.Println("Received status ${code}")\n    }\n}`
};

function openInspectModal(code, title, desc, cat) {
    currentModalCode = code;
    const modal = document.getElementById('inspectModal');
    if (!modal) return;

    document.getElementById('modalCodeBadge').textContent = code;
    document.getElementById('modalCodeBadge').className = `code-badge cat-${cat}`;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDesc').textContent = desc;

    // Set default snippet tab (JS)
    setSnippetTab('js');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('inspectModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function setSnippetTab(lang) {
    document.querySelectorAll('.snippet-tab').forEach(tab => {
        if (tab.getAttribute('data-lang') === lang) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    const codeBlock = document.getElementById('modalCodeBlock');
    if (codeBlock && currentModalCode && CODE_SNIPPETS[lang]) {
        codeBlock.textContent = CODE_SNIPPETS[lang](currentModalCode);
    }
}

function copyModalSnippet() {
    const codeBlock = document.getElementById('modalCodeBlock');
    if (codeBlock) {
        navigator.clipboard.writeText(codeBlock.textContent).then(() => {
            showToast('Code snippet copied to clipboard!');
        });
    }
}

function updateCategoryDisplay() {
    filterStatusCodes();
}