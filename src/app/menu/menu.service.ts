import { Menu, MenuItem } from "./menu.model";

export class MenuService {
    private menu: Menu = new Menu([
        new MenuItem('Weather', 'weather'),
        new MenuItem('Menu item 2', '#'),
        new MenuItem('Menu item 3', '#'),
    ],);

    public get = () => {
        return { ...this.menu };
    }

    public getSidebarMenu = (): MenuItem[] => {
        return [...this.menu.items];
    }

    public getHamburgerMenu = (): MenuItem[] => {
        return [...this.menu.items, new MenuItem('Login', '#')];
    }
}