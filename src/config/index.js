module.exports = {
    siteTitle: 'Prince Kumar | Software Engineer',
    siteDescription:
        "Prince Kumar's personal website showcases his software engineering skills",
    siteKeywords:
        'Prince Kumar, software engineer, prince-dsd, front-end, full-stack, CSS, JavaScript, React',
    siteUrl: 'https://prince-dsd.vercel.app',
    siteLanguage: 'en',
    name: 'Prince Kumar',
    location: 'Bangalore, IN',
    email: 'neo11prince@gmail.com',
    repo: 'https://github.com/prince-dsd/site',
    github: 'https://github.com/prince-dsd',
    twitter: 'https://twitter.com/princekumar21',
    linkedin: 'https://www.linkedin.com/in/princkumar21',
    twitterHandle: '@princekumar21',
    mainThemeColor: '#fff',
    rss: '/rss.xml',
    socialMedia: [
        {
            name: 'Twitter',
            url: 'https://twitter.com/Einher1ar',
        },
        {
            name: 'GitHub',
            url: 'https://github.com/prince-dsd',
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/princkumar21/',
        },
        {
            name: 'Leetcode',
            url: 'https://leetcode.com/me_prince/',
        },
    ],
    navLinks: [
        {
            name: 'Home',
            url: '/',
        },
        {
            name: 'About',
            url: '/#about',
        },
        {
            name: 'Portfolio',
            url: '/#portfolio',
        },
        {
            name: 'Blog',
            url: '/blog',
        },
        {
            name: 'Contact',
            url: '/#contact',
        },
    ],
    otherLinks: [
        {
            name: 'Newsletter',
            url: '/newsletter',
        },
        {
            name: 'RSS',
            url: '/rss.xml',
        },
    ],
    scrollRevealConfig: (delay = 300) => ({
        origin: 'bottom',
        distance: '25px',
        duration: 500,
        delay,
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        scale: 1,
        easing: 'ease-out',
        mobile: true,
        reset: false,
        useDelay: 'always',
        viewFactor: 0.25,
        viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    }),
};
