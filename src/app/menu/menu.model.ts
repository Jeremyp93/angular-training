export class Menu {
    constructor(public items: MenuItem[]) { }
}

export class MenuItem {
    constructor(public name: string, public link: string, public properties?: MenuItemProperties) { }
}

export interface MenuItemProperties {
    withSeperator?: boolean;
    highlight?: boolean;
}