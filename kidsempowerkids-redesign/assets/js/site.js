const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about-us/" },
  { label: "PAST EVENTS", href: "/projects/" },
  { label: "EVENTS & OPPORTUNITIES", href: "/events-opportunities/" },
  { label: "MEDIA", href: "/donate/" },
  { label: "OUR VOLUNTEERS", href: "/volunteers/" },
  { label: "RECOGNITIONS", href: "/recognitions/" },
  { label: "MAKE A DIFFERENCE", href: "/make-a-difference/" },
  { label: "CONTACT US", href: "/contact/" }
];

function normalizePath(pathname) {
  if (!pathname || pathname === "") return "/";
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

function renderHeader() {
  const host = document.querySelector("[data-site-header]");
  if (!host) return;
  const current = normalizePath(window.location.pathname);
  host.innerHTML = `
    <header class="site-header">
      <div class="site-header__inner">
        <a class="site-brand" href="/">KIDS EMPOWER KIDS</a>
        <nav class="site-nav" aria-label="Site" data-nav>
          <button class="site-nav__toggle" type="button" aria-expanded="false" aria-controls="site-nav-list">
            Menu
          </button>
          <ul class="site-nav__list" id="site-nav-list">
            ${navItems
              .map((item) => {
                const active = current === normalizePath(item.href) ? "is-active" : "";
                return `<li><a class="site-nav__link ${active}" href="${item.href}">${item.label}</a></li>`;
              })
              .join("")}
          </ul>
        </nav>
      </div>
    </header>
  `;

  const nav = host.querySelector("[data-nav]");
  const toggle = host.querySelector(".site-nav__toggle");
  const mobileQuery = window.matchMedia("(max-width: 860px)");

  function syncNavState() {
    if (mobileQuery.matches) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    } else {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  }

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  mobileQuery.addEventListener("change", syncNavState);
  syncNavState();
}

function renderFooter() {
  const host = document.querySelector("[data-site-footer]");
  if (!host) return;
  host.innerHTML = `
    <footer class="site-footer">
      <div class="site-footer__inner">
        <div class="site-footer__social">
          <a href="https://www.instagram.com/p/DYTartFu4cY/#" target="_blank" rel="noreferrer noopener">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="2"></rect>
              <circle cx="12" cy="12" r="4.25" fill="none" stroke="currentColor" stroke-width="2"></circle>
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"></circle>
            </svg>
            <span>@kids.empower.kids</span>
          </a>
          <a href="mailto:kidsempowerkids.fundraiser@gmail.com">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <rect x="3" y="5" width="18" height="14" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="2"></rect>
              <path d="M5 7l7 6 7-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <span>kidsempowerkids.fundraiser@gmail.com</span>
          </a>
        </div>
        <div>
          &copy; 2024 Kids Empower Kids. Powered and secured by
          <a href="https://wix.com/?utm_campaign=vir_created_with" target="_blank" rel="noreferrer noopener">Wix</a>
        </div>
      </div>
    </footer>
  `;
}

renderHeader();
renderFooter();
