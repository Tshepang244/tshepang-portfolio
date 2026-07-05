/* ==========================================================================
   MAIN.JS
   Sidebar toggle, active-link scroll spy, reveal animations,
   back-to-top button, footer year, contact form
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ---------------------------------------------------------------
       0. SAFETY NET — never let content stay invisible.
          If IntersectionObserver isn't supported, or any error below
          throws before reveal logic runs, force everything visible
          after a short delay instead of hiding it forever.
    --------------------------------------------------------------- */
    const forceRevealAll = () => {
        document.querySelectorAll('[data-animate]').forEach((el) => el.classList.add('in-view'));
    };

    if (!('IntersectionObserver' in window)) {
        forceRevealAll();
    } else {
        window.setTimeout(forceRevealAll, 1500);
    }

    /* ---------------------------------------------------------------
       1. MOBILE SIDEBAR TOGGLE
    --------------------------------------------------------------- */
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    const openSidebar = () => {
        sidebar.classList.add('open');
        sidebarOverlay.classList.add('open');
        sidebarToggle.setAttribute('aria-expanded', 'true');
        sidebarToggle.innerHTML = '<i class="bi bi-x-lg"></i>';
    };

    const closeSidebar = () => {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('open');
        sidebarToggle.setAttribute('aria-expanded', 'false');
        sidebarToggle.innerHTML = '<i class="bi bi-list"></i>';
    };

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
        });
    }

    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992) closeSidebar();
        });
    });

    /* ---------------------------------------------------------------
       2. ACTIVE NAV LINK ON SCROLL (SCROLL SPY)
    --------------------------------------------------------------- */
    const sections = document.querySelectorAll('main section[id], .section-hero[id]');

    const setActiveLink = (id) => {
        navLinks.forEach((link) => {
            link.classList.toggle('active', link.dataset.section === id);
        });
    };

    const spyObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveLink(entry.target.id);
                }
            });
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((section) => spyObserver.observe(section));

    /* ---------------------------------------------------------------
       3. SCROLL-REVEAL ANIMATIONS
    --------------------------------------------------------------- */
    const animatedEls = document.querySelectorAll('[data-animate]');

    const revealObserver = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    obs.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    animatedEls.forEach((el, index) => {
        el.style.transitionDelay = `${Math.min(index % 6, 5) * 60}ms`;
        revealObserver.observe(el);
    });

    /* ---------------------------------------------------------------
       4. BACK TO TOP BUTTON
    --------------------------------------------------------------- */
    const backToTop = document.getElementById('backToTop');

    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('visible', window.scrollY > 500);
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ---------------------------------------------------------------
       5. FOOTER YEAR
    --------------------------------------------------------------- */
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ---------------------------------------------------------------
       6. CONTACT FORM (client-side only)
    --------------------------------------------------------------- */
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalHTML = submitBtn.innerHTML;

            submitBtn.innerHTML = '<i class="bi bi-check2"></i> Message Sent';
            submitBtn.disabled = true;

            setTimeout(() => {
                contactForm.reset();
                submitBtn.innerHTML = originalHTML;
                submitBtn.disabled = false;
            }, 2200);
        });
    }
});