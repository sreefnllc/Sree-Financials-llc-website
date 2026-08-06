// search.js
(function () {
  const input = document.querySelector('[data-site-search="input"]');
  const panel = document.querySelector('[data-site-search="panel"]');
  const list = document.querySelector('[data-site-search="list"]');

  if (!input || !panel || !list) return;

  const normalize = (s) => (s || "").toLowerCase().trim();
  const index = (window.SREE_SEARCH_INDEX || []).map((item) => ({
    ...item,
    haystack: normalize([item.title, ...(item.tags || [])].join(" ")),
  }));

  const closePanel = () => {
    panel.hidden = true;
    panel.setAttribute("aria-hidden", "true");
    list.innerHTML = "";
  };

  const openPanel = () => {
    panel.hidden = false;
    panel.setAttribute("aria-hidden", "false");
  };

  const render = (results) => {
    if (!results.length) {
      list.innerHTML = `<li class="search-empty">No results found. Try a different keyword.</li>`;
      openPanel();
      return;
    }

    list.innerHTML = results
      .slice(0, 8)
      .map((r) => {
        const subtitle = (r.tags || []).slice(0, 4).join(" • ");
        return `
          <li>
            <a class="search-result" href="${r.url}">
              <div class="search-title">${r.title}</div>
              <div class="search-sub">${subtitle}</div>
            </a>
          </li>
        `;
      })
      .join("");

    openPanel();
  };

  const search = () => {
    const q = normalize(input.value);
    if (!q) return closePanel();

    const results = index
      .filter((i) => i.haystack.includes(q))
      .sort((a, b) => a.title.localeCompare(b.title));

    render(results);
  };

  input.addEventListener("input", search);

  // Close on escape
  input.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePanel();
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    const within = panel.contains(e.target) || input.contains(e.target);
    if (!within) closePanel();
  });

  // Small helpers for optional anchors
  // You can add #faq and #resources IDs on index.html for nicer jumps.
})();
