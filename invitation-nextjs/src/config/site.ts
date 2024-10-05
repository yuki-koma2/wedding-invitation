export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "Next.js + NextUI",
    description: "Make beautiful websites regardless of your design experience.",
    navigation: {
        invitation: {
            name: "Invitation",
            description: "Invitation page",
            path: "/invitation",
        },
        familyInvitation: {
            name: "Family Invitation",
            description: "Family invitation page",
            path: "/family-invitation",
        },
        thanks:{
            name: "Thanks",
            description: "Thanks page",
            path: "/thanks",
        }
    },
    navItems: [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Invitation",
            href: "/invitation",
        },
        {
            label: "Docs",
            href: "/docs",
        },
        {
            label: "Pricing",
            href: "/pricing",
        },
        {
            label: "Blog",
            href: "/blog",
        },
        {
            label: "About",
            href: "/about",
        },
    ],
    navMenuItems: [
        {
            label: "Profile",
            href: "/profile",
        },
        {
            label: "Dashboard",
            href: "/dashboard",
        },
        {
            label: "Projects",
            href: "/projects",
        },
        {
            label: "Team",
            href: "/team",
        },
        {
            label: "Calendar",
            href: "/calendar",
        },
        {
            label: "Settings",
            href: "/settings",
        },
        {
            label: "Help & Feedback",
            href: "/help-feedback",
        },
        {
            label: "Logout",
            href: "/logout",
        },
    ],
    links: {
        github: "https://github.com/nextui-org/nextui",
        twitter: "https://twitter.com/getnextui",
        docs: "https://nextui.org",
        discord: "https://discord.gg/9b6yyZKmH4",
        sponsor: "https://patreon.com/jrgarciadev",
        survey: 'https://caneat.jp/44/events/14989/attendances/answer?code=8e19ef16&locale=ja'
    },
};
