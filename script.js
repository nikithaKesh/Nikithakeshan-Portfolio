(() => {
      const $ = (selector, scope = document) => scope.querySelector(selector);
      const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const siteConfig = {
        email: 'nikithakeshan@gmail.com',
        portfolioUrl: 'https://nikithakesh.github.io/PortfolioSinglePage',
        githubUrl: 'https://github.com/nikithaKesh',
        linkedinUrl: 'https://www.linkedin.com/in/nikitha-keshan-640927325/',
        twitterUrl: 'https://x.com/_zo_no_',
        facebookUrl: 'https://web.facebook.com/nikitha.keshan.7',
        instagramUrl: 'https://www.instagram.com/z.onoo/',
        whatsappUrl: 'https://api.whatsapp.com/send/?phone=%2B94764849127&text&type=phone_number&app_absent=0',
        cvUrl: 'NikithaKeshan.pdf'
      };

      const logoFromDomain = (domain) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

      const projects = [
        {
          id: 'biseka', category: 'web', featured: true, sortRank: 9,
          title: 'Biseka Cosmetics Web Platform',
          summary: 'Engineered digital storefront focusing on high-performance and a premium user journey.',
          role: 'Frontend Developer', tags: ['E-Commerce', 'UI/UX', 'Performance'],
          problem: 'The brand needed a digital storefront that reflected its premium aesthetic, but large product images caused severe load delays, impacting conversion rates.',
          solution: 'Engineered a highly optimized, component-driven UI. Implemented lazy loading for media, streamlined WooCommerce logic, and designed a frictionless checkout flow.',
          impact: 'Achieved significantly faster page load times, elevating the brand\'s credibility and directly increasing online sales conversions.',
          links: [{ label: 'Live Demo', url: 'https://biseka.co/', icon: 'ph-arrow-up-right', type: 'demo' }],
          logo: logoFromDomain('biseka.co'), logoAlt: 'Biseka logo',
          badge: 'Featured', thumb1: 'var(--g-blue-alpha)', thumb2: 'var(--g-yellow-alpha)'
        },
        {
          id: 'scrub', category: 'web', featured: true, sortRank: 8,
          title: 'Scrub and Butter',
          summary: 'Developed the complete technical web presence and brand identity architecture.',
          role: 'Lead Web Developer', tags: ['Brand Identity', 'Frontend', 'Design'],
          problem: 'The client needed a digital footprint from scratch that communicated modern capability and immediately captured lead interest.',
          solution: 'Developed the complete technical architecture and frontend UI. Focused on clean layouts, strong typography, and strategic call-to-action placement.',
          impact: 'Successfully launched a scalable web presence that acts as a 24/7 lead generation asset for the business.',
          links: [{ label: 'Live Demo', url: 'https://scrubnbutter.com/', icon: 'ph-arrow-up-right', type: 'demo' }],
          logo: logoFromDomain('scrubnbutter.com'), logoAlt: 'Scrub and Butter logo',
          badge: 'Featured', thumb1: 'var(--g-red-alpha)', thumb2: 'var(--g-yellow-alpha)'
        },
        {
          id: 'mob', category: 'web', featured: false, sortRank: 7,
          title: 'MOB Surfskate',
          summary: 'A dynamic web experience focusing on high-quality visuals, motion, and modern aesthetic.',
          role: 'Frontend Developer', tags: ['Lifestyle Brand', 'WooCommerce', 'WordPress'],
          problem: 'The brand required a dynamic, high-energy digital presence to match its lifestyle product, with a seamless transition into e-commerce.',
          solution: 'Built a highly visual, motion-rich frontend with a smooth WooCommerce flow perfectly optimized for mobile-first users.',
          impact: 'Delivered a modern aesthetic that drives lifestyle brand engagement and facilitates seamless on-the-go purchases.',
          links: [{ label: 'Live Demo', url: 'https://mobsurfskate.com/', icon: 'ph-arrow-up-right', type: 'demo' }],
          logo: logoFromDomain('mobsurfskate.com'), logoAlt: 'MOB Surfskate logo',
          badge: 'Brand Site', thumb1: 'var(--g-blue-alpha)', thumb2: 'var(--g-green-alpha)'
        },
        {
          id: 'ola', category: 'web', featured: false, sortRank: 6,
          title: 'OLA Tangalle Hotel',
          summary: 'A premium hospitality frontend highlighting immersive imagery and booking flows.',
          role: 'Web Developer', tags: ['Hospitality', 'Responsive Design', 'CodeNest'],
          problem: 'A boutique hotel needed an immersive digital experience to highlight property visuals and drive direct booking conversions over third-party apps.',
          solution: 'Engineered a premium, responsive frontend with a focus on immersive imagery and intuitive user journeys from landing page to booking engine.',
          impact: 'Successfully translated high-fidelity designs into code, resulting in an elegant booking platform that elevates the hotel\'s online prestige.',
          links: [{ label: 'Live Demo', url: 'https://olatangalle.com/', icon: 'ph-arrow-up-right', type: 'demo' }],
          logo: logoFromDomain('olatangalle.com'), logoAlt: 'OLA Tangalle logo',
          badge: 'Hospitality', thumb1: 'var(--g-yellow-alpha)', thumb2: 'var(--g-blue-alpha)'
        },
        {
          id: 'exact', category: 'web', featured: false, sortRank: 5,
          title: 'Exact Extract & LoveandLab',
          summary: 'Web solutions for perfume and cosmetic brands emphasizing product presentation.',
          role: 'Full Stack Developer', tags: ['E-Commerce', 'Brand Presence', 'WooCommerce'],
          problem: 'Two distinct product lines needed robust web solutions emphasizing high-end product presentation and reliable e-commerce integration.',
          solution: 'Deployed dual web presence solutions utilizing WooCommerce, prioritizing distinct brand aesthetics while maintaining robust cart functionality.',
          impact: 'Established stable, high-quality digital storefronts that handle active product catalogs and customer transactions simultaneously.',
          links: [
            { label: 'Exact Extract', url: 'https://exactextract.lk/', icon: 'ph-arrow-up-right', type: 'demo' },
            { label: 'LoveandLab', url: 'https://loveandlab.com/', icon: 'ph-arrow-up-right', type: 'demo' }
          ],
          logo: logoFromDomain('loveandlab.com'), logoAlt: 'LoveandLab logo',
          badge: 'Dual brand', thumb1: 'var(--g-red-alpha)', thumb2: 'var(--g-green-alpha)'
        },
        {
          id: 'invoice', category: 'automation', featured: true, sortRank: 4,
          title: 'Biseka Bulk Invoice Automation',
          summary: 'Automated framework instantly generating error-free tax invoices for Biseka Maldives.',
          role: 'Automation Logic Creator', tags: ['Google Apps Script', 'Financial Logic', 'Sheets'],
          problem: 'Generating monthly tax invoices involved high manual effort, risking human errors in 20% discounts and 8% GST calculations.',
          solution: 'Engineered a Google Apps Script framework that centralizes data, automatically applying hard-coded financial logic to dynamic invoice templates.',
          impact: 'Achieved instant, error-free generation of complex tax documents, archiving them systematically by month for easy business record retrieval.',
          links: [{ label: 'Case Study', url: '#work', icon: 'ph-file-text', type: 'case' }],
          logo: logoFromDomain('biseka.co'), logoAlt: 'Biseka logo',
          badge: 'Automation', thumb1: 'var(--g-blue-alpha)', thumb2: 'var(--g-red-alpha)'
        },
        {
          id: 'payroll', category: 'automation', featured: false, sortRank: 3,
          title: 'Payslip & Email Delivery Automation',
          summary: 'Integrated system that tracks salary components, generates PDFs, and automates emails.',
          role: 'System Automation Creator', tags: ['Python / Apps Script', 'HR', 'API Delivery'],
          problem: 'The HR department was manually calculating complex salary variables for over 30 employees, creating individual PDFs, and emailing them manually.',
          solution: 'Built an integrated script that pulls database data, calculates deductions (EPF), generates formatted PDF payslips, and triggers bulk email delivery.',
          impact: 'Reduced a multi-day manual HR process into a 5-minute automated execution with flawless calculation accuracy.',
          links: [{ label: 'Case Study', url: '#work', icon: 'ph-file-text', type: 'case' }],
          logo: logoFromDomain('google.com'), logoAlt: 'Workflow automation icon',
          badge: 'Internal tool', thumb1: 'var(--g-green-alpha)', thumb2: 'var(--g-blue-alpha)'
        },
        {
          id: 'sms', category: 'automation', featured: false, sortRank: 2,
          title: 'Logistics SMS Notification Framework',
          summary: 'Command center bridging courier data with automated customer SMS communication.',
          role: 'Backend API Integrator', tags: ['API Integration', 'Logistics', 'Status Logging'],
          problem: 'Customer service was overwhelmed by tracking inquiries because tracking IDs across delivery agents (Citypack, Fardar) weren\'t automatically communicated.',
          solution: 'Created a centralized logic controller that automatically pairs courier tracking numbers with correct URLs and triggers personalized SMS notifications upon dispatch.',
          impact: 'Drastically reduced customer support tickets and improved post-purchase satisfaction through proactive status communication.',
          links: [{ label: 'Case Study', url: '#work', icon: 'ph-file-text', type: 'case' }],
          logo: logoFromDomain('messages.google.com'), logoAlt: 'SMS workflow icon',
          badge: 'API flow', thumb1: 'var(--g-yellow-alpha)', thumb2: 'var(--g-red-alpha)'
        },
        {
          id: 'sheets', category: 'automation', featured: false, sortRank: 1,
          title: 'Automated Monthly Sheet Generation',
          summary: 'Centralized controller automating deployment and organization of tracking sheets.',
          role: 'Data Architect', tags: ['Workspace', 'Architecture', 'Bulk Execution'],
          problem: 'Setting up specialized monthly tracking sheets across various BISEKA locations was a tedious, repetitive structural bottleneck for management.',
          solution: 'Created a centralized controller that duplicates master templates, auto-renames files by month/brand, and routes them to precise Destination Folder IDs.',
          impact: 'Reduced deployment time of massive business tracker suites (SHOP logs, BIS logs) from hours to just minutes, ensuring strict formatting compliance.',
          links: [{ label: 'Case Study', url: '#work', icon: 'ph-file-text', type: 'case' }],
          logo: logoFromDomain('sheets.google.com'), logoAlt: 'Spreadsheet workflow icon',
          badge: 'Workspace', thumb1: 'var(--g-blue-alpha)', thumb2: 'var(--g-green-alpha)'
        },
        {
          id: 'repos', category: 'repos', featured: false, sortRank: 0,
          title: 'Development Archives',
          summary: 'A collection of technical prototypes, HTML/JS builds, and concept layouts.',
          role: 'Developer', tags: ['Code Repos', 'JavaScript', 'HTML/CSS', 'GitHub'],
          problem: 'A need to consolidate and showcase various technical prototypes, interactive web tools, and pure HTML/CSS/JS layouts outside of professional client work.',
          solution: 'Curated a central GitHub repository linking to live deployments of tools like a Customer Care Asset Form, a Movie Database layout, and Interactive JS games.',
          impact: 'Provides a transparent, accessible archive demonstrating continuous learning, raw coding capabilities, and versatile technical interests.',
          links: [
            { label: 'GitHub Profile', url: 'https://github.com/nikithaKesh', icon: 'ph-github-logo', type: 'github' },
            { label: 'Asset Form Demo', url: 'https://nikithakesh.github.io/Employee-Assets/', icon: 'ph-arrow-up-right', type: 'demo' }
          ],
          logo: logoFromDomain('github.com'), logoAlt: 'GitHub logo',
          badge: 'Repository', thumb1: 'var(--g-red-alpha)', thumb2: 'var(--g-blue-alpha)'
        }
      ];

      const brandLogos = [
        { name: 'Biseka', domain: 'biseka.co' },
        { name: 'Scrub and Butter', domain: 'scrubnbutter.com' },
        { name: 'MOB Surfskate', domain: 'mobsurfskate.com' },
        { name: 'OLA Tangalle', domain: 'olatangalle.com' },
        { name: 'Exact Extract', domain: 'exactextract.lk' },
        { name: 'LoveandLab', domain: 'loveandlab.com' }
      ];

      const state = { filter: 'all', search: '', sort: 'featured', activeProjectId: null, lastFocus: null };

      const els = {
        body: document.body,
        header: $('#header'),
        scrollProgressBar: $('#scrollProgressBar'),
        mobileToggle: $('#mobileToggle'),
        mobilePanel: $('#mobilePanel'),
        themeToggle: $('#themeToggle'),
        backToTop: $('#backToTop'),
        toast: $('#toast'),
        projectGrid: $('#projectGrid'),
        projectEmptyState: $('#projectEmptyState'),
        projectSearch: $('#projectSearch'),
        projectSort: $('#projectSort'),
        projectFilters: $$('#projectFilters [data-filter]'),
        featuredTitle: $('#featuredTitle'),
        featuredSummary: $('#featuredSummary'),
        featuredRole: $('#featuredRole'),
        featuredImpact: $('#featuredImpact'),
        featuredTags: $('#featuredTags'),
        featuredActions: $('#featuredActions'),
        featuredLogo: $('#featuredLogo'),
        contactForm: $('#contactForm'),
        formState: $('#formState'),
        submitBtn: $('#submitBtn'),
        modalBackdrop: $('#modalBackdrop'),
        modal: $('#projectModal'),
        modalClose: $('#modalClose'),
        modalCloseBtn: $('#modalCloseBtn'),
        modalTitle: $('#modalTitle'),
        modalOverview: $('#modalOverview'),
        modalProblem: $('#modalProblem'),
        modalSolution: $('#modalSolution'),
        modalImpact: $('#modalImpact'),
        modalRole: $('#modalRole'),
        modalCategory: $('#modalCategory'),
        modalStack: $('#modalStack'),
        modalLinks: $('#modalLinks'),
        modalHeroLogo: $('#modalHeroLogo'),
        modalChallengeShort: $('#modalChallengeShort'),
        modalOutcomeShort: $('#modalOutcomeShort'),
        logoGrid: $('#logoGrid'),
        preloader: $('#preloader')
      };

      const showToast = (message) => {
        const toast = els.toast;
        toast.textContent = message;
        toast.classList.add('show');
        clearTimeout(showToast.timer);
        showToast.timer = setTimeout(() => toast.classList.remove('show'), 2600);
      };

      const copyText = async (value, successMessage) => {
        try {
          await navigator.clipboard.writeText(value);
          showToast(successMessage);
        } catch (error) {
          showToast('Copy failed. Please copy it manually.');
        }
      };

      const hidePreloader = () => { els.preloader.classList.add('is-hidden'); };

      const initPreloader = () => {
        const seen = sessionStorage.getItem('nk-preloader-seen');
        if (seen) { requestAnimationFrame(hidePreloader); return; }
        const done = () => {
          sessionStorage.setItem('nk-preloader-seen', '1');
          setTimeout(hidePreloader, prefersReducedMotion ? 0 : 320);
        };
        window.addEventListener('load', done, { once: true });
        setTimeout(done, 1200);
      };

      const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        const icon = theme === 'dark' ? 'ph-sun' : 'ph-moon';
        els.themeToggle.innerHTML = `<i class="ph ${icon}"></i>`;
        localStorage.setItem('theme', theme);
      };

      const initTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        const defaultTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        setTheme(defaultTheme);
        els.themeToggle.addEventListener('click', () => {
          const current = document.documentElement.getAttribute('data-theme');
          const next = current === 'light' ? 'dark' : 'light';
          setTheme(next);
          showToast(`Theme changed to ${next}.`);
        });
      };

      const updateHeaderState = () => {
        const scrolled = window.scrollY > 20;
        els.header.classList.toggle('scrolled', scrolled);

        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
        els.scrollProgressBar.style.width = `${progress}%`;

        els.backToTop.classList.toggle('show', window.scrollY > 520);
      };

      const setMobileMenu = (open) => {
        els.mobilePanel.classList.toggle('open', open);
        els.mobileToggle.classList.toggle('active', open);
        els.mobilePanel.setAttribute('aria-hidden', String(!open));
        els.mobileToggle.setAttribute('aria-expanded', String(open));
      };

      const initMobileMenu = () => {
        els.mobileToggle.addEventListener('click', () => {
          const open = !els.mobilePanel.classList.contains('open');
          setMobileMenu(open);
        });

        $$('.mobile-link').forEach((link) => {
          link.addEventListener('click', () => setMobileMenu(false));
        });

        document.addEventListener('keydown', (event) => {
          if (event.key === 'Escape' && els.mobilePanel.classList.contains('open')) {
            setMobileMenu(false);
            els.mobileToggle.focus();
          }
        });

        document.addEventListener('click', (event) => {
          if (!event.target.closest('.nav-shell')) setMobileMenu(false);
        });
      };

      const initReveal = () => {
        const items = $$('.reveal');
        if (prefersReducedMotion || !('IntersectionObserver' in window)) {
          items.forEach((el) => el.classList.add('show'));
          return;
        }
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });
        items.forEach((el) => observer.observe(el));
      };

      const renderBrandLogos = () => {
        els.logoGrid.innerHTML = brandLogos.map((item) => `
          <article class="logo-item">
            <img src="${logoFromDomain(item.domain)}" alt="${item.name} logo" loading="lazy" decoding="async" width="96" height="96" />
            <div class="title-sm">${item.name}</div>
          </article>
        `).join('');
      };

      const getFilteredProjects = () => {
        let list = [...projects];

        if (state.filter !== 'all') {
          list = list.filter((project) => project.category === state.filter);
        }

        if (state.search.trim()) {
          const query = state.search.trim().toLowerCase();
          list = list.filter((project) => {
            const haystack = [project.title, project.summary, project.role, project.category, project.problem, project.solution, project.impact, ...project.tags].join(' ').toLowerCase();
            return haystack.includes(query);
          });
        }

        const sorters = {
          featured: (a, b) => Number(b.featured) - Number(a.featured) || b.sortRank - a.sortRank,
          newest: (a, b) => b.sortRank - a.sortRank,
          category: (a, b) => a.category.localeCompare(b.category) || a.title.localeCompare(b.title),
          az: (a, b) => a.title.localeCompare(b.title)
        };

        list.sort(sorters[state.sort]);
        return list;
      };

      const renderFeaturedProject = () => {
        const featured = projects.find((project) => project.featured) || projects[0];
        if (!featured) return;

        els.featuredTitle.textContent = featured.title;
        els.featuredSummary.textContent = featured.summary;
        els.featuredRole.textContent = featured.role;
        els.featuredImpact.textContent = featured.impact;
        els.featuredLogo.src = featured.logo;
        els.featuredLogo.alt = featured.logoAlt;
        els.featuredTags.innerHTML = featured.tags.map((tag) => `<span class="chip">${tag}</span>`).join('');
        els.featuredActions.innerHTML = `
          <button class="btn btn-primary" type="button" data-open-project="${featured.id}">
            <i class="ph ph-file-text"></i> Case Study
          </button>
          ${featured.links.slice(0, 2).map((link) => `
            <a class="btn btn-secondary" href="${link.url}" ${link.url.startsWith('#') ? '' : 'target="_blank" rel="noreferrer"'}>
              <i class="ph ${link.icon}"></i> ${link.label}
            </a>
          `).join('')}
        `;
      };

      const createProjectCard = (project) => {
        const article = document.createElement('article');
        article.className = 'card project-card';
        article.setAttribute('tabindex', '0');
        article.dataset.projectId = project.id;
        article.style.setProperty('--thumb-1', project.thumb1);
        article.style.setProperty('--thumb-2', project.thumb2);

        const publicLinks = project.links.filter((link) => !link.url.startsWith('#'));

        article.innerHTML = `
          <div class="project-thumb">
            <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:16px;">
              <img class="project-thumb-logo" src="${project.logo}" alt="${project.logoAlt}" loading="lazy" decoding="async" width="96" height="96" />
              <div class="project-badges">
                ${project.featured ? '<span class="badge featured"><i class="ph ph-star-four"></i> Featured</span>' : ''}
                <span class="badge">${project.category}</span>
              </div>
            </div>
            <div>
              <div class="mono" style="color: var(--text);">Case Study Ready</div>
              <div class="small" style="margin-top: 8px;">${project.role}</div>
            </div>
          </div>
          <div>
            <h3 class="title-md" style="margin-bottom: 12px;">${project.title}</h3>
            <p class="small">${project.summary}</p>
          </div>
          <div class="project-tags">
            ${project.tags.map((tag) => `<span class="chip">${tag}</span>`).join('')}
          </div>
          <div class="project-actions">
            <button class="action-link" type="button" data-open-project="${project.id}">
              <i class="ph ph-file-text"></i> Case Study
            </button>
            ${publicLinks.slice(0, 2).map((link) => `
              <a class="action-link" href="${link.url}" target="_blank" rel="noreferrer">
                <i class="ph ${link.icon}"></i> ${link.label}
              </a>
            `).join('')}
          </div>
        `;

        const open = () => openProjectModal(project.id, article);
        article.addEventListener('click', (event) => { if (!event.target.closest('a, button')) open(); });
        article.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); } });
        return article;
      };

      const renderProjects = () => {
        const list = getFilteredProjects();
        els.projectGrid.innerHTML = '';
        list.forEach((project) => els.projectGrid.appendChild(createProjectCard(project)));
        els.projectEmptyState.hidden = list.length !== 0;
      };

      const openBackdrop = () => {
        els.modalBackdrop.classList.add('show');
        document.body.style.overflow = 'hidden';
      };

      const closeBackdrop = () => {
        if (!els.modal.classList.contains('show')) {
          els.modalBackdrop.classList.remove('show');
          document.body.style.overflow = '';
        }
      };

      const trapFocus = (container, event) => {
        if (event.key !== 'Tab') return;
        const focusables = $$('a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])', container).filter((el) => el.offsetParent !== null || el === document.activeElement);
        if (!focusables.length) return;
        const first = focusables[0]; const last = focusables[focusables.length - 1];

        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      };

      const openProjectModal = (projectId, triggerEl) => {
        const project = projects.find(p => p.id === projectId);
        if (!project) return;
        state.activeProjectId = projectId;
        state.lastFocus = triggerEl || document.activeElement;

        els.modalTitle.textContent = project.title;
        els.modalOverview.textContent = project.summary;
        els.modalProblem.textContent = project.problem;
        els.modalSolution.textContent = project.solution;
        els.modalImpact.textContent = project.impact;
        els.modalRole.textContent = project.role;
        els.modalCategory.textContent = project.category;
        els.modalHeroLogo.src = project.logo;
        els.modalHeroLogo.alt = project.logoAlt;
        els.modalChallengeShort.textContent = project.problem;
        els.modalOutcomeShort.textContent = project.impact;
        els.modalStack.innerHTML = project.tags.map((tag) => `<span class="chip">${tag}</span>`).join('');
        els.modalLinks.innerHTML = project.links.map((link) => `
          <a class="btn ${link.type === 'case' ? 'btn-secondary' : 'btn-primary'}" href="${link.url}" ${link.url.startsWith('#') ? '' : 'target="_blank" rel="noreferrer"'}>
            <i class="ph ${link.icon}"></i> ${link.label}
          </a>
        `).join('');

        openBackdrop();
        els.modal.classList.add('show');
        els.modal.focus();
      };

      const closeProjectModal = () => {
        if (!els.modal.classList.contains('show')) return;
        els.modal.classList.remove('show');
        state.activeProjectId = null;
        closeBackdrop();
        if (state.lastFocus && typeof state.lastFocus.focus === 'function') state.lastFocus.focus();
      };

      const validateField = (field) => {
        const input = $(`[name="${field}"]`, els.contactForm);
        if (!input) return true; // Safety check
        const fieldWrap = input.closest('.field');
        const errorEl = $(`#${input.id}Error`);
        const value = input.value.trim();

        let error = '';
        if (input.hasAttribute('required') && !value) { error = 'This field is required.'; }
        else if (field === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) { error = 'Please enter a valid email address.'; }

        fieldWrap.classList.toggle('invalid', Boolean(error));
        errorEl.textContent = error;
        return !error;
      };

      const validateForm = () => ['name', 'email', 'inquiry_type', 'message'].every(validateField);

      const setFormState = (type, message = '') => {
        els.formState.className = 'form-state';
        if (!message) { els.formState.textContent = ''; return; }
        els.formState.textContent = message;
        els.formState.classList.add('show', type);
      };

      const setSubmitLoading = (loading) => {
        els.submitBtn.classList.toggle('is-loading', loading);
        els.submitBtn.setAttribute('aria-busy', String(loading));
        $('.submit-label', els.submitBtn).textContent = loading ? 'Sending...' : 'Send Inquiry';
      };

      const submitContactForm = async (event) => {
        event.preventDefault();
        
        // Formspree honeypot check
        if ($('[name="_gotcha"]', els.contactForm).value.trim()) return;

        setFormState('', '');
        if (!validateForm()) { setFormState('error', 'Please fix the highlighted fields and try again.'); return; }

        setSubmitLoading(true);
        const formData = new FormData(els.contactForm);
        const endpoint = els.contactForm.getAttribute('action');

        try {
          if (endpoint) {
            const res = await fetch(endpoint, { method: els.contactForm.getAttribute('method') || 'POST', body: formData, headers: { 'Accept': 'application/json' } });
            if (!res.ok) throw new Error('Request failed');
          } else {
            await new Promise((resolve) => setTimeout(resolve, 900));
          }

          els.contactForm.reset();
          $$('.field', els.contactForm).forEach((field) => field.classList.remove('invalid'));
          $$('.field-error', els.contactForm).forEach((errorEl) => errorEl.textContent = '');

          setFormState('success', `Thanks, ${Object.fromEntries(formData.entries()).name}. Your inquiry has been sent successfully.`);
          showToast('Inquiry sent successfully.');
        } catch (error) {
          setFormState('error', 'Something went wrong while sending the form. Please try again or email me directly.');
          showToast('Form submission failed.');
        } finally {
          setSubmitLoading(false);
        }
      };

      const initContactForm = () => {
        ['name', 'email', 'inquiry_type', 'message'].forEach((field) => {
          const input = $(`[name="${field}"]`, els.contactForm);
          if (input) {
            input.addEventListener('blur', () => validateField(field));
            input.addEventListener('input', () => { if (input.closest('.field').classList.contains('invalid')) validateField(field); });
          }
        });
        els.contactForm.addEventListener('submit', submitContactForm);
      };

      const initProjectFilters = () => {
        els.projectFilters.forEach((button) => {
          button.addEventListener('click', () => {
            state.filter = button.dataset.filter;
            els.projectFilters.forEach((item) => item.classList.toggle('active', item === button));
            renderProjects();
          });
        });

        els.projectSearch.addEventListener('input', (event) => { state.search = event.target.value; renderProjects(); });
        els.projectSort.addEventListener('change', (event) => { state.sort = event.target.value; renderProjects(); });
        document.addEventListener('click', (event) => {
          const trigger = event.target.closest('[data-open-project]');
          if (trigger) openProjectModal(trigger.dataset.openProject, trigger);
        });
      };

      const initModal = () => {
        els.modalClose.addEventListener('click', closeProjectModal);
        els.modalCloseBtn.addEventListener('click', closeProjectModal);
        els.modalBackdrop.addEventListener('click', () => { closeProjectModal(); });
      };

      const initActiveNav = () => {
        if (!('IntersectionObserver' in window)) return;
        const sections = $$('main section[id]');
        const navLinks = $$('.nav-link[href^="#"]:not(.mobile-link)');
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            navLinks.forEach((link) => { link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`); });
          });
        }, { threshold: 0.4, rootMargin: '-20% 0px -45% 0px' });
        sections.forEach((section) => observer.observe(section));
      };

      const initCursor = () => {
        if (!window.matchMedia('(pointer: fine)').matches || prefersReducedMotion) return;
        const dot = $('.cursor-dot'); const ring = $('.cursor-ring');
        if (!dot || !ring) return;
        els.body.classList.add('custom-cursor');
        document.addEventListener('mousemove', (event) => {
          dot.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
          ring.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
        });
        document.body.addEventListener('mouseover', (event) => { if (event.target.closest('a, button, input, textarea, select, .project-card, .social-btn, .compact-btn')) ring.classList.add('active'); }, true);
        document.body.addEventListener('mouseout', (event) => { if (event.target.closest('a, button, input, textarea, select, .project-card, .social-btn, .compact-btn')) ring.classList.remove('active'); }, true);
      };

      const initUtilities = () => {
        $$('.utility-copy-email').forEach((button) => button.addEventListener('click', () => copyText(siteConfig.email, 'Email copied.')));
        $$('.utility-copy-link').forEach((button) => button.addEventListener('click', () => copyText(siteConfig.portfolioUrl, 'Portfolio link copied.')));
        els.backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' }));
      };

      const handleGlobalKeys = (event) => {
        if (event.key === 'Escape') {
          if (els.modal.classList.contains('show')) closeProjectModal();
          if (els.mobilePanel.classList.contains('open')) setMobileMenu(false);
        }
        if (els.modal.classList.contains('show')) trapFocus(els.modal, event);
      };

      const initAnchorPolish = () => {
        $$('a[href^="#"]').forEach((anchor) => {
          anchor.addEventListener('click', (event) => {
            const id = anchor.getAttribute('href');
            if (!id || id === '#') return;
            const target = $(id);
            if (!target) return;
            event.preventDefault();
            target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
            history.replaceState(null, '', id);
          });
        });
      };

      const initViewCount = async () => {
        const counterEl = document.getElementById('viewCounter');
        const counterChip = document.getElementById('viewCountChip');
        if (!counterEl || !counterChip) return;
        
        try {
          const res = await fetch('https://api.counterapi.dev/v1/nikithakeshan/portfolio_visits/up');
          if (!res.ok) throw new Error('API Response not ok');
          
          const data = await res.json();
          counterEl.textContent = data.count.toLocaleString() + ' Views';
        } catch (error) {
          console.error('Failed to load view count:', error);
          counterChip.style.display = 'none';
        }
      };

      const init = () => {
        initPreloader();
        initTheme();
        initMobileMenu();
        initReveal();
        renderBrandLogos();
        renderFeaturedProject();
        renderProjects();
        initProjectFilters();
        initContactForm();
        initModal();
        initActiveNav();
        initCursor();
        initUtilities();
        initAnchorPolish();
        initViewCount(); 
        
        document.addEventListener('keydown', handleGlobalKeys);
        window.addEventListener('scroll', updateHeaderState, { passive: true });
        window.addEventListener('resize', updateHeaderState);
        updateHeaderState();
      };

      init();
    })();
