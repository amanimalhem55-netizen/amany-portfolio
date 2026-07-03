import { useEffect, useState } from 'react'
import './App.css'

const portfolioContent = {
  en: {
    pageTitle: 'Amany Melhem | Full-Stack Web Developer',
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
      name: 'Amany Melhem',
      title: 'Full-Stack Web Developer',
      description:
        'I build responsive and practical web applications using React, Node.js, Express, PostgreSQL, and Prisma.',
      primaryAction: 'View My Projects',
      secondaryAction: 'Contact Me',
      codeText: 'Ideas into digital experiences.',
    },
    about: {
      title: 'Building practical and organized digital experiences',
      paragraphs: [
        'I’m a full-stack developer focused on building responsive, practical, and user-friendly web applications.',
        'I have hands-on experience developing complete projects using React, Node.js, Express, PostgreSQL, and Prisma, including authentication, role-based access, dashboards, booking systems, and REST APIs.',
        'I help you turn ideas into organized digital products while continuing to improve my development, debugging, and problem-solving skills.',
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
      title: 'Technologies I use to build complete projects',
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
      title: 'Projects built to solve real problems',
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
      title: 'Let’s connect and turn your idea into reality',
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
      role: 'Full-Stack Web Developer',
      projects: 'Projects',
      contact: 'Contact',
      backToTop: 'Back to top',
      rights: 'All rights reserved.',
    },
  },

  ar: {
    pageTitle: 'أماني ملحم | مطوّرة ويب Full-Stack',
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
      name: 'أماني ملحم',
      title: 'مطوّرة ويب Full-Stack',
      description:
        'أقوم ببناء تطبيقات ويب عملية ومتجاوبة باستخدام',
      descriptionTechStack: 'React, Node.js, Express, PostgreSQL, Prisma.',
      primaryAction: 'مشاهدة مشاريعي',
      secondaryAction: 'تواصل معي',
      codeText: 'أحوّل الأفكار إلى تجارب رقمية.',
    },
    about: {
      title: 'أقوم ببناء تجارب رقمية عملية ومنظمة',
      paragraphs: [
        'أنا مطوّرة ويب Full-Stack أركّز على بناء تطبيقات ويب متجاوبة وعملية وسهلة الاستخدام.',
        {
          beforeTech:
            'لدي خبرة عملية في تطوير مشاريع متكاملة باستخدام',
          techStack: 'React, Node.js, Express, PostgreSQL, Prisma.',
          afterTech:
            '، وتشمل أنظمة تسجيل الدخول والصلاحيات ولوحات التحكم والحجوزات وواجهات',
          restApi: 'REST API',
        },
        'أساعدك في تحويل الأفكار إلى منتجات رقمية منظمة، مع الاستمرار في تطوير مهاراتي في البرمجة وتصحيح الأخطاء وحل المشكلات.',
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
      title: 'تقنيات أستخدمها لبناء مشاريع متكاملة',
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
      title: 'مشاريع بُنيت لحل مشكلات حقيقية',
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
      title: 'لنتواصل لنحول فكرتك إلى واقع',
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
      role: 'مطوّرة ويب Full-Stack',
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

function renderContactIcon(icon) {
  const iconProps = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
  }

  if (icon === '@') {
    return (
      <svg {...iconProps} stroke="currentColor" strokeWidth="2">
        <path
          d="M4 6h16v12H4z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m4 7 8 6 8-6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (icon === '</>') {
    return (
      <svg {...iconProps} fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.38 6.84 9.74.5.09.68-.22.68-.49 0-.24-.01-1.04-.01-1.9-2.51.47-3.16-.63-3.36-1.2-.11-.29-.6-1.2-1.03-1.44-.35-.2-.85-.69-.01-.7.79-.01 1.35.74 1.54 1.05.9 1.55 2.34 1.11 2.91.85.09-.67.35-1.11.64-1.37-2.22-.26-4.55-1.14-4.55-5.05 0-1.11.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.26 9.26 0 0 1 12 6.99c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.13 10.13 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
        />
      </svg>
    )
  }

  return (
    <svg {...iconProps} fill="currentColor">
      <path d="M19.05 4.91A9.8 9.8 0 0 0 3.62 16.73L2.5 21l4.36-1.1a9.78 9.78 0 0 0 4.68 1.19h.01a9.8 9.8 0 0 0 7.5-16.18Zm-7.5 14.51a8.12 8.12 0 0 1-4.14-1.13l-.3-.18-2.58.65.68-2.51-.2-.31a8.15 8.15 0 1 1 6.54 3.48Zm4.47-6.1c-.24-.13-1.44-.71-1.67-.79-.22-.08-.39-.12-.55.12-.16.25-.63.79-.77.95-.14.17-.28.18-.52.06-.24-.13-1.03-.38-1.96-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.25-.02-.38.11-.5.11-.11.24-.28.37-.43.12-.15.16-.25.24-.41.08-.17.04-.31-.02-.43-.06-.13-.55-1.34-.76-1.83-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.12.17 1.71 2.61 4.15 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  )
}

function App() {
  const [language, setLanguage] = useState('en')
  const [isMobileNav, setIsMobileNav] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const currentYear = new Date().getFullYear()
  const content = portfolioContent[language]
  const isArabic = language === 'ar'

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr'
    document.title = content.pageTitle
  }, [content.pageTitle, isArabic, language])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 480px)')
    const syncMobileNav = (event) => {
      setIsMobileNav(event.matches)

      if (!event.matches) {
        setIsMobileMenuOpen(false)
      }
    }

    syncMobileNav(mediaQuery)
    mediaQuery.addEventListener('change', syncMobileNav)

    return () => {
      mediaQuery.removeEventListener('change', syncMobileNav)
    }
  }, [])

  const toggleLanguage = () => {
    setLanguage((currentLanguage) =>
      currentLanguage === 'en' ? 'ar' : 'en',
    )
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((isOpen) => !isOpen)
  }

  const mobileMenuId = 'mobile-navigation'
  const mobileMenuButtonLabel = isMobileMenuOpen
    ? isArabic
      ? 'إغلاق القائمة'
      : 'Close menu'
    : isArabic
      ? 'فتح القائمة'
      : 'Open menu'

  const navStyles = isMobileNav
    ? {
        position: 'absolute',
        top: '64px',
        right: isArabic ? 'auto' : 0,
        left: isArabic ? 0 : 'auto',
        minWidth: '170px',
        padding: '14px',
        display: isMobileMenuOpen ? 'flex' : 'none',
        flexDirection: 'column',
        alignItems: isArabic ? 'flex-end' : 'flex-start',
        gap: '12px',
        border: '1px solid rgba(23, 32, 51, 0.1)',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.96)',
        boxShadow: '0 18px 45px rgba(23, 32, 51, 0.12)',
        backdropFilter: 'blur(14px)',
      }
    : undefined

  const desktopLanguageButtonStyles = isMobileNav
    ? { display: 'none' }
    : undefined

  const mobileControlsStyles = isMobileNav
    ? {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }
    : { display: 'contents' }

  const mobileMenuButtonStyles = isMobileNav
    ? {
        width: '34px',
        height: '32px',
        padding: 0,
        display: 'inline-grid',
        placeItems: 'center',
        border: '1px solid rgba(108, 77, 230, 0.2)',
        borderRadius: '9px',
        background: 'rgba(108, 77, 230, 0.08)',
        color: 'var(--accent)',
        cursor: 'pointer',
      }
    : { display: 'none' }

  const mobileLanguageButtonStyles = isMobileNav
    ? undefined
    : { display: 'none' }

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

        <div style={mobileControlsStyles}>
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-controls={mobileMenuId}
            aria-expanded={isMobileMenuOpen}
            aria-label={mobileMenuButtonLabel}
            style={mobileMenuButtonStyles}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              {isMobileMenuOpen ? (
                <path
                  d="m6 6 12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>

          <nav
            id={mobileMenuId}
            className="nav-links"
            aria-label={content.aria.mainNavigation}
            style={navStyles}
          >
            <a href="#about" onClick={closeMobileMenu}>
              {content.nav.about}
            </a>
            <a href="#skills" onClick={closeMobileMenu}>
              {content.nav.skills}
            </a>
            <a href="#projects" onClick={closeMobileMenu}>
              {content.nav.projects}
            </a>
            <a href="#contact" onClick={closeMobileMenu}>
              {content.nav.contact}
            </a>

            <button
              className="language-toggle"
              type="button"
              onClick={toggleLanguage}
              aria-label={content.aria.languageButton}
              title={content.aria.languageButton}
              style={desktopLanguageButtonStyles}
            >
              {isArabic ? 'EN' : 'AR'}
            </button>
          </nav>

          <button
            className="language-toggle"
            type="button"
            onClick={toggleLanguage}
            aria-label={content.aria.languageButton}
            title={content.aria.languageButton}
            style={mobileLanguageButtonStyles}
          >
            {isArabic ? 'EN' : 'AR'}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <h1>{content.hero.name}</h1>
            <h2>{renderBidiText(content.hero.title, isArabic)}</h2>

            <p className="hero-description">
              {isArabic ? (
                <>
                  أقوم ببناء تطبيقات ويب عملية ومتجاوبة باستخدام{' '}
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
            {content.about.label && (
              <p className="section-label">{content.about.label}</p>
            )}
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
              {content.skills.label && (
                <p className="section-label">{content.skills.label}</p>
              )}
              <h2>{content.skills.title}</h2>
            </div>

            {content.skills.description && (
              <p className="skills-description">
                {renderBidiText(content.skills.description, isArabic)}
              </p>
            )}
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
              {content.projects.label && (
                <p className="section-label">
                  {content.projects.label}
                </p>
              )}
              <h2>{content.projects.title}</h2>
            </div>

            {content.projects.description && (
              <p className="projects-description">
                {renderBidiText(content.projects.description, isArabic)}
              </p>
            )}
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
              {content.contact.label && (
                <p className="section-label">
                  {content.contact.label}
                </p>
              )}
              <h2>{content.contact.title}</h2>
              {content.contact.description && (
                <p>{content.contact.description}</p>
              )}
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
                    {renderContactIcon(option.icon)}
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
