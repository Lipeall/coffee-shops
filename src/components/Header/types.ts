interface NavItem {
    title: string,
    url: () => void
};

interface TitleItem {
    title: string,
    url: () => void
};

export interface HeaderProps {
    titleHeader: TitleItem;
    navItems: NavItem[];
};