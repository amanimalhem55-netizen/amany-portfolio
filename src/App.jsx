import { useEffect, useState } from 'react'
import './App.css'

const portfolioContent = {
  en: {
    pageTitle: 'Amany Melhem | Junior Full-Stack Developer',
    aria: {
      home: 'Go to home',
      mainNavigation: 'Main navigation',
      footerNavigation: 'Footer navigation',
      languageButton: 'Switch to Arabic',
    },
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      label: 'Hello, I’m',
      name: 'Amany Melhem',
      title: 'Junior Full-Stack Developer',
      description:
        'I build responsive and practical web applications using React, Node.js, Express, PostgreSQL, and Prisma.',
      primaryAction: 'View My Projects',
      secondaryAction: 'Contact Me',
      codeText: 'Ideas into digital experiences.',
    },
    about: {
      label: 'About Me',
      title: 'Building practical digital experiences.',
      paragraphs: [
        'I’m a junior full-stack developer focused on building responsive, practical, and user-friendly web applications.',
        'I have hands-on experience developing complete projects using React, Node.js, Express, PostgreSQL, and Prisma, including authentication, role-based access, dashboards, booking systems, and REST APIs.',
        'I enjoy turning ideas into organized digital products while continuing to improve my development, debugging, and problem-solving skills.',
      ],
      highlights: [
        {
          number: '01',
          title: 'Full-Stack Development',
          description:
            'Frontend interfaces, backend APIs, business logic, and relational databases.',
        },
        {
          number: '02',
          title: 'Responsive Interfaces',
          description:
            'Web experiences designed to work smoothly across desktop, tablet, and mobile devices.',
        },
        {
          number: '03',
          title: 'Continuous Learning',
          description:
            'Building real projects while improving every step of the development process.',
        },
      ],
    },
    skills: {
      label: 'My Skills',
      title: 'Technologies I use to build complete projects.',
      description:
        'My current skill set covers frontend development, backend APIs, relational databases, deployment, and modern development workflows.',
      groups: [
        {
          number: '01',
          title: 'Frontend Development',
          description:
            'Building responsive, accessible, and user-friendly web interfaces.',
          skills: [
            'React',
            'JavaScript ES6+',
            'HTML5',
            'CSS3',
            'Responsive Design',
            'React Router',
            'REST API Integration',
          ],
        },
        {
          number: '02',
          title: 'Backend Development',
          description:
            'Creating secure APIs, authentication systems, and application logic.',
          skills: [
            'Node.js',
            'Express.js',
            'REST APIs',
            'JWT Authentication',
            'Role-Based Access',
            'Validation',
            'Error Handling',
          ],
        },
        {
          number: '03',
          title: 'Database',
          description:
            'Designing and managing structured relational data for web applications.',
          skills: [
            'PostgreSQL',
            'Prisma ORM',
            'Database Design',
            'Data Modeling',
            'Migrations',
            'CRUD Operations',
            'Transactions',
          ],
        },
        {
          number: '04',
          title: 'Tools & Workflow',
          description:
            'Using modern development tools to build, test, manage, and deploy projects.',
          skills: [
            'Git',
            'GitHub',
            'npm',
            'Vite',
            'Netlify',
            'StackBlitz',
            'Debugging',
          ],
        },
      ],
    },
    projects: {
      label: 'Selected Projects',
      title: 'Projects built to solve real problems.',
      description:
        'A selection of full-stack and frontend projects that demonstrate my development process, technical skills, and attention to user experience.',
      problemLabel: 'Problem:',
      roleLabel: 'My Role:',
      featuresLabel: 'Key Features:',
      items: [
        {
          number: '01',
          title: 'Eventify',
          type: 'Personal Full-Stack Project',
          previewLabel: 'Full-stack event management platform',
          previewTitle: 'Eventify',
          previewAddress: 'event-platform.app',
          problem:
            'Managing event creation, approval, booking, ticketing, and attendee check-in can become complicated when attendees, organizers, and administrators use separate processes.',
          role:
            'I designed and developed the frontend, backend APIs, database structure, authentication system, role permissions, dashboards, and responsive bilingual interface.',
          features: [
            'JWT authentication and role-based access',
            'Attendee, Organizer, and Admin user roles',
            'Event creation, management, submission, and approval',
            'Bookings, tickets, and QR code check-in',
            'Dashboards, statistics, and event reports',
            'Notifications, reviews, and complaints',
            'Arabic and English responsive interface',
          ],
          technologies: [
            'React',
            'Vite',
            'Node.js',
            'Express',
            'PostgreSQL',
            'Prisma',
            'JWT',
          ],
          theme: 'eventify',
        },
        {
          number: '02',
          title: 'Arabic Service Landing Page',
          type: 'Client Project',
          previewLabel: 'Arabic responsive service website',
          previewTitle: 'Service Website',
          previewAddress: 'service-website.app',
          problem:
            'The client needed a clear Arabic website to present services, build trust with visitors, and guide potential customers toward an easy contact and booking process.',
          role:
            'I developed the complete React interface, Arabic RTL layout, responsive behavior, mobile navigation, accessibility improvements, SEO setup, and production deployment.',
          features: [
            'Arabic RTL user interface',
            'Responsive design for desktop, tablet, and mobile',
            'Services and business information sections',
            'WhatsApp contact and booking flow',
            'Accessible mobile navigation',
            'SEO metadata and social sharing image',
            'Custom favicon and Netlify deployment',
          ],
          technologies: [
            'React',
            'Vite',
            'CSS3',
            'Responsive Design',
            'Accessibility',
            'SEO',
            'Netlify',
          ],
          theme: 'client',
          status:
            'Private client project — public link is not displayed.',
        },
      ],
    },
    contact: {
      label: 'Contact',
      title: 'Let’s work together.',
      description:
        'Choose the easiest way to contact me about your project.',
      options: [
        {
          label: 'Email',
          value: 'amanymelhem0@gmail.com',
          action: 'Send an email',
          href: 'mailto:amanymelhem0@gmail.com',
          icon: '@',
          external: false,
        },
        {
          label: 'GitHub',
          value: 'amanimalhem55-netizen',
          action: 'View my GitHub profile',
          href: 'https://github.com/amanimalhem55-netizen',
          icon: '</>',
          external: true,
        },
        {
          label: 'WhatsApp',
          value: '+962 78 744 8092',
          action: 'Start a WhatsApp chat',
          href: 'https://wa.me/962787448092',
          icon: 'WA',
          external: true,
        },
      ],
    },
    footer: {
      role: 'Junior Full-Stack Developer',
      projects: 'Projects',
      contact: 'Contact',
      backToTop: 'Back to top',
      rights: 'All rights reserved.',
    },
  },

  ar: {
    pageTitle: 'أماني ملحم | مطوّرة ويب Full-Stack مبتدئة',
    aria: {
      home: 'الانتقال إلى الصفحة الرئيسية',
      mainNavigation: 'التنقل الرئيسي',
      footerNavigation: 'روابط تذييل الصفحة',
      languageButton: 'التبديل إلى الإنجليزية',
    },
    nav: {
      about: 'من أنا',
      skills: 'المهارات',
      projects: 'المشاريع',
      contact: 'التواصل',
    },
    hero: {
      label: 'مرحبًا، أنا',
      name: 'أماني ملحم',
      title: 'مطوّرة ويب Full-Stack مبتدئة',
      description:
        'أبني تطبيقات ويب عملية ومتجاوبة باستخدام',
      descriptionTechStack: 'React, Node.js, Express, PostgreSQL, Prisma.',
      primaryAction: 'مشاهدة مشاريعي',
      secondaryAction: 'تواصل معي',
      codeText: 'أحوّل الأفكار إلى تجارب رقمية.',
    },
    about: {
      label: 'من أنا',
      title: 'أبني تجارب رقمية عملية ومنظمة.',
      paragraphs: [
        'أنا مطوّرة ويب Full-Stack مبتدئة، أركّز على بناء تطبيقات ويب متجاوبة وعملية وسهلة الاستخدام.',
        {
          beforeTech:
            'لدي خبرة عملية في تطوير مشاريع متكاملة باستخدام',
          techStack: 'React, Node.js, Express, PostgreSQL, Prisma.',
          afterTech:
            '، وتشمل أنظمة تسجيل الدخول والصلاحيات ولوحات التحكم والحجوزات وواجهات',
          restApi: 'REST API',
        },
        'أستمتع بتحويل الأفكار إلى منتجات رقمية منظمة، مع الاستمرار في تطوير مهاراتي في البرمجة وتصحيح الأخطاء وحل المشكلات.',
      ],
      highlights: [
        {
          number: '01',
          title: 'تطوير Full-Stack',
          description:
            'واجهات أمامية وواجهات API خلفية ومنطق أعمال وقواعد بيانات علائقية.',
        },
        {
          number: '02',
          title: 'واجهات متجاوبة',
          description:
            'تجارب ويب مصممة للعمل بسلاسة على الكمبيوتر والجهاز اللوحي والهاتف.',
        },
        {
          number: '03',
          title: 'تعلّم مستمر',
          description:
            'بناء مشاريع حقيقية مع تحسين كل مرحلة من مراحل التطوير.',
        },
      ],
    },
    skills: {
      label: 'مهاراتي',
      title: 'تقنيات أستخدمها لبناء مشاريع متكاملة.',
      description:
        'تشمل مهاراتي الحالية تطوير الواجهات الأمامية وواجهات API الخلفية وقواعد البيانات العلائقية والنشر وسير العمل الحديث.',
      groups: [
        {
          number: '01',
          title: 'تطوير الواجهات الأمامية',
          description:
            'بناء واجهات ويب متجاوبة وسهلة الاستخدام وتراعي إمكانية الوصول.',
          skills: [
            'React',
            'JavaScript ES6+',
            'HTML5',
            'CSS3',
            'Responsive Design',
            'React Router',
            'REST API Integration',
          ],
        },
        {
          number: '02',
          title: 'تطوير الواجهات الخلفية',
          description:
            'إنشاء واجهات API آمنة وأنظمة مصادقة ومنطق للتطبيقات.',
          skills: [
            'Node.js',
            'Express.js',
            'REST APIs',
            'JWT Authentication',
            'Role-Based Access',
            'Validation',
            'Error Handling',
          ],
        },
        {
          number: '03',
          title: 'قواعد البيانات',
          description:
            'تصميم وإدارة بيانات علائقية منظمة لتطبيقات الويب.',
          skills: [
            'PostgreSQL',
            'Prisma ORM',
            'Database Design',
            'Data Modeling',
            'Migrations',
            'CRUD Operations',
            'Transactions',
          ],
        },
        {
          number: '04',
          title: 'الأدوات وسير العمل',
          description:
            'استخدام أدوات تطوير حديثة لبناء المشاريع واختبارها وإدارتها ونشرها.',
          skills: [
            'Git',
            'GitHub',
            'npm',
            'Vite',
            'Netlify',
            'StackBlitz',
            'Debugging',
          ],
        },
      ],
    },
    projects: {
      label: 'مشاريع مختارة',
      title: 'مشاريع بُنيت لحل مشكلات حقيقية.',
      description:
        'مجموعة من مشاريع Full-Stack والواجهات الأمامية التي توضّح أسلوبي في التطوير ومهاراتي التقنية واهتمامي بتجربة المستخدم.',
      problemLabel: 'المشكلة:',
      roleLabel: 'دوري:',
      featuresLabel: 'أهم الخصائص:',
      items: [
        {
          number: '01',
          title: 'Eventify',
          type: 'مشروع Full-Stack شخصي',
          previewLabel: 'منصة متكاملة لإدارة الفعاليات',
          previewTitle: 'Eventify',
          previewAddress: 'event-platform.app',
          problem:
            'قد تصبح إدارة إنشاء الفعاليات واعتمادها وحجوزاتها وتذاكرها وتسجيل حضور المشاركين معقدة عندما يستخدم الحضور والمنظمون والإدارة عمليات منفصلة.',
          role:
            'صممت وطورت الواجهة الأمامية وواجهات API الخلفية وبنية قاعدة البيانات ونظام المصادقة وصلاحيات الأدوار ولوحات التحكم والواجهة الثنائية اللغة والمتجاوبة.',
          features: [
            'مصادقة JWT وصلاحيات مبنية على الأدوار',
            'أدوار للحضور والمنظم والإدارة',
            'إنشاء الفعاليات وإدارتها وإرسالها للاعتماد',
            'الحجوزات والتذاكر وتسجيل الحضور عبر QR',
            'لوحات تحكم وإحصائيات وتقارير للفعاليات',
            'إشعارات وتقييمات وشكاوى',
            'واجهة عربية وإنجليزية متجاوبة',
          ],
          technologies: [
            'React',
            'Vite',
            'Node.js',
            'Express',
            'PostgreSQL',
            'Prisma',
            'JWT',
          ],
          theme: 'eventify',
        },
        {
          number: '02',
          title: 'صفحة هبوط لخدمات عربية',
          type: 'مشروع عميل',
          previewLabel: 'موقع خدمات عربي متجاوب',
          previewTitle: 'موقع خدمات',
          previewAddress: 'service-website.app',
          problem:
            'احتاج العميل إلى موقع عربي واضح لعرض الخدمات وبناء الثقة مع الزوار وتوجيه العملاء المحتملين إلى طريقة سهلة للتواصل والحجز.',
          role:
            'طورت واجهة React كاملة وتخطيطًا عربيًا من اليمين إلى اليسار وتصميمًا متجاوبًا وتنقلًا للهاتف وتحسينات لإمكانية الوصول وإعدادات SEO والنشر النهائي.',
          features: [
            'واجهة عربية باتجاه RTL',
            'تصميم متجاوب للكمبيوتر والجهاز اللوحي والهاتف',
            'أقسام للخدمات ومعلومات العمل',
            'مسار للتواصل والحجز عبر WhatsApp',
            'تنقل متاح وسهل على الهاتف',
            'بيانات SEO وصورة للمشاركة الاجتماعية',
            'أيقونة مخصصة ونشر على Netlify',
          ],
          technologies: [
            'React',
            'Vite',
            'CSS3',
            'Responsive Design',
            'Accessibility',
            'SEO',
            'Netlify',
          ],
          theme: 'client',
          status: 'مشروع عميل خاص — لا يتم عرض الرابط للعامة.',
        },
      ],
    },
    contact: {
      label: 'التواصل',
      title: 'لنحوّل فكرتك إلى مشروع.',
      description:
        'اختاري الطريقة الأسهل للتواصل معي بخصوص مشروعك.',
      options: [
        {
          label: 'البريد الإلكتروني',
          value: 'amanymelhem0@gmail.com',
          action: 'إرسال بريد إلكتروني',
          href: 'mailto:amanymelhem0@gmail.com',
          icon: '@',
          external: false,
        },
        {
          label: 'GitHub',
          value: 'amanimalhem55-netizen',
          action: 'عرض حسابي على GitHub',
          href: 'https://github.com/amanimalhem55-netizen',
          icon: '</>',
          external: true,
        },
        {
          label: 'WhatsApp',
          value: '+962 78 744 8092',
          action: 'بدء محادثة عبر WhatsApp',
          href: 'https://wa.me/962787448092',
          icon: 'WA',
          external: true,
        },
      ],
    },
    footer: {
      role: 'مطوّرة ويب Full-Stack مبتدئة',
      projects: 'المشاريع',
      contact: 'التواصل',
      backToTop: 'العودة إلى الأعلى',
      rights: 'جميع الحقوق محفوظة.',
    },
  },
}

const TECH_TERMS = [
  'REST API',
  'Full-Stack',
  'Node.js',
  'PostgreSQL',
  'Express',
  'Prisma',
  'React',
  'WhatsApp',
  'Netlify',
  'JWT',
  'SEO',
  'RTL',
  'QR',
  'API',
]

function renderBidiText(text, isArabic) {
  if (!isArabic || !text) {
    return text
  }

  const pattern = TECH_TERMS.map((term) =>
    term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
  ).join('|')

  const parts = text.split(new RegExp(`(${pattern})`, 'g'))

  return parts.map((part, index) =>
    TECH_TERMS.includes(part) ? (
      <bdi key={index} dir="ltr">
        {part}
      </bdi>
    ) : (
      part
    ),
  )
}

function App() {
  const [language, setLanguage] = useState('en')
  const currentYear = new Date().getFullYear()
  const content = portfolioContent[language]
  const isArabic = language === 'ar'

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr'
    document.title = content.pageTitle
  }, [content.pageTitle, isArabic, language])

  const toggleLanguage = () => {
    setLanguage((currentLanguage) =>
      currentLanguage === 'en' ? 'ar' : 'en',
    )
  }

  return (
    <div
      className={`portfolio portfolio--${language}`}
      dir={isArabic ? 'rtl' : 'ltr'}
      lang={language}
    >
      <header className="navbar">
        <a
          className="logo"
          href="#home"
          aria-label={content.aria.home}
        >
          AM
        </a>

        <nav
          className="nav-links"
          aria-label={content.aria.mainNavigation}
        >
          <a href="#about">{content.nav.about}</a>
          <a href="#skills">{content.nav.skills}</a>
          <a href="#projects">{content.nav.projects}</a>
          <a href="#contact">{content.nav.contact}</a>

          <button
            className="language-toggle"
            type="button"
            onClick={toggleLanguage}
            aria-label={content.aria.languageButton}
            title={content.aria.languageButton}
          >
            {isArabic ? 'EN' : 'AR'}
          </button>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="hero-label">{content.hero.label}</p>
            <h1>{content.hero.name}</h1>
            <h2>{renderBidiText(content.hero.title, isArabic)}</h2>

            <p className="hero-description">
              {isArabic ? (
                <>
                  أبني تطبيقات ويب عملية ومتجاوبة باستخدام{' '}
                  <span
                    dir="ltr"
                    style={{
                      display: 'inline-block',
                      whiteSpace: 'nowrap',
                      unicodeBidi: 'isolate',
                    }}
                  >
                    React, Node.js, Express, PostgreSQL, Prisma.
                  </span>
                </>
              ) : (
                content.hero.description
              )}
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#projects">
                {content.hero.primaryAction}
              </a>

              <a className="secondary-button" href="#contact">
                {content.hero.secondaryAction}
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true" dir="ltr">
            <div className="code-card">
              <span>&lt;developer&gt;</span>

              <strong dir={isArabic ? 'rtl' : 'ltr'}>
                {content.hero.codeText}
              </strong>

              <span>&lt;/developer&gt;</span>
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-heading">
            <p className="section-label">{content.about.label}</p>
            <h2>{content.about.title}</h2>
          </div>

          <div className="about-grid">
            <div className="about-content">
              {content.about.paragraphs.map((paragraph, index) => (
                <p
                  key={
                    typeof paragraph === 'string'
                      ? paragraph
                      : `about-paragraph-${index}`
                  }
                >
                  {isArabic && index === 1 ? (
                    <>
                      {paragraph.beforeTech}{' '}
                      <bdi dir="ltr">{paragraph.techStack}</bdi>
                      {paragraph.afterTech}{' '}
                      <bdi dir="ltr">{paragraph.restApi}</bdi>.
                    </>
                  ) : (
                    renderBidiText(paragraph, isArabic)
                  )}
                </p>
              ))}
            </div>

            <div className="about-highlights">
              {content.about.highlights.map((highlight) => (
                <article
                  className="highlight-card"
                  key={highlight.number}
                >
                  <span>{highlight.number}</span>
                  <h3>{renderBidiText(highlight.title, isArabic)}</h3>
                  <p>
                    {renderBidiText(highlight.description, isArabic)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="skills-intro">
            <div className="section-heading">
              <p className="section-label">{content.skills.label}</p>
              <h2>{content.skills.title}</h2>
            </div>

            <p className="skills-description">
              {renderBidiText(content.skills.description, isArabic)}
            </p>
          </div>

          <div className="skills-grid">
            {content.skills.groups.map((group) => (
              <article className="skill-card" key={group.number}>
                <div className="skill-card-heading">
                  <span className="skill-number">
                    {group.number}
                  </span>
                  <h3>{group.title}</h3>
                </div>

                <p className="skill-description">
                  {renderBidiText(group.description, isArabic)}
                </p>

                <div className="skill-tags" dir="ltr">
                  {group.skills.map((skill) => (
                    <span className="skill-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="projects-intro">
            <div className="section-heading">
              <p className="section-label">
                {content.projects.label}
              </p>
              <h2>{content.projects.title}</h2>
            </div>

            <p className="projects-description">
              {renderBidiText(content.projects.description, isArabic)}
            </p>
          </div>

          <div className="projects-list">
            {content.projects.items.map((project) => (
              <article
                className={`project-card project-card--${project.theme}`}
                key={project.number}
              >
                <div
                  className="project-preview"
                  aria-hidden="true"
                  dir="ltr"
                >
                  <div className="preview-window">
                    <div className="preview-topbar">
                      <div className="preview-dots">
                        <span />
                        <span />
                        <span />
                      </div>

                      <span className="preview-address">
                        {project.previewAddress}
                      </span>
                    </div>

                    <div className="preview-body">
                      <span
                        className="preview-label"
                        dir={isArabic ? 'rtl' : 'ltr'}
                      >
                        {project.previewLabel}
                      </span>

                      <strong dir={isArabic ? 'rtl' : 'ltr'}>
                        {project.previewTitle}
                      </strong>

                      <div className="preview-lines">
                        <span />
                        <span />
                        <span />
                      </div>

                      <div className="preview-panels">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-heading">
                    <span>{project.number}</span>
                    <p>{renderBidiText(project.type, isArabic)}</p>
                  </div>

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    <strong>
                      {content.projects.problemLabel}
                    </strong>{' '}
                    {project.problem}
                  </p>

                  <p className="project-description">
                    <strong>{content.projects.roleLabel}</strong>{' '}
                    {renderBidiText(project.role, isArabic)}
                  </p>

                  <p className="project-description">
                    <strong>
                      {content.projects.featuresLabel}
                    </strong>
                  </p>

                  <ul className="project-features">
                    {project.features.map((feature) => (
                      <li key={feature}>
                        {renderBidiText(feature, isArabic)}
                      </li>
                    ))}
                  </ul>

                  <div
                    className="project-technologies"
                    dir="ltr"
                  >
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  {project.status && (
                    <div className="project-actions">
                      <span className="project-status">
                        {project.status}
                      </span>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-shell">
            <div className="contact-heading">
              <p className="section-label">
                {content.contact.label}
              </p>
              <h2>{content.contact.title}</h2>
              <p>{content.contact.description}</p>
            </div>

            <div className="contact-actions-grid">
              {content.contact.options.map((option) => (
                <a
                  className="contact-action-button"
                  href={option.href}
                  key={option.label}
                  target={option.external ? '_blank' : undefined}
                  rel={
                    option.external
                      ? 'noopener noreferrer'
                      : undefined
                  }
                >
                  <span
                    className="contact-action-icon"
                    aria-hidden="true"
                  >
                    {option.icon}
                  </span>

                  <span className="contact-action-content">
                    <span className="contact-action-label">
                      {option.label}
                    </span>

                    <strong dir="ltr">{option.value}</strong>

                    <span className="contact-action-text">
                      {renderBidiText(option.action, isArabic)}
                    </span>
                  </span>

                  <span
                    className="contact-action-arrow"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <a
              className="footer-logo"
              href="#home"
              aria-label={content.aria.home}
            >
              AM
            </a>

            <div className="footer-brand-text">
              <strong>{content.hero.name}</strong>
              <span>{renderBidiText(content.footer.role, isArabic)}</span>
            </div>
          </div>

          <nav
            className="footer-links"
            aria-label={content.aria.footerNavigation}
          >
            <a href="#projects">{content.footer.projects}</a>
            <a href="#contact">{content.footer.contact}</a>

            <a className="back-to-top" href="#home">
              {content.footer.backToTop}
              <span aria-hidden="true">↑</span>
            </a>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} {content.hero.name}.{' '}
            {content.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
