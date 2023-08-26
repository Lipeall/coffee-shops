interface NavItem {
    title: string,
    url: string
};

interface TitleItem {
    title: string,
    url: string
};

export interface HeaderProps {
    titleHeader: TitleItem;
    navItems: NavItem[];
};