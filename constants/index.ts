interface ILinkTypes {
    name: string;
    href: string;
}

export const links: ILinkTypes[] = [
    {
        name: "Home",
        href: "/home"
    },
    {
        name: "TV Shows",
        href: "/home/shows"
    },
    {
        name: "Movies",
        href: "/home/movies"
    },
    {
        name: "Recently Added",
        href: "/home/recently"
    },
    {
        name: "MyList",
        href: "/home/user/list"
    },
]