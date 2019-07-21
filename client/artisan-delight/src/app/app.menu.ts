import { MenuItem } from 'src/core/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
  {
    text: 'Dashboard',
    icon: 'fa-home',
    route: 'dashboard',
    submenu: null
  },
  {
    text: 'Bread',
    icon: 'fa-archway',
    route: null,
    submenu: [
      {
        text: 'Sour Dough',
        icon: 'fa-palette',
        route: 'bread/sour-dough',
        submenu: null
      },
      {
        text: 'Bagels',
        icon: 'fa-book',
        route: 'bread/bagels',
        submenu: null
      },
      {
        text: 'Pizza',
        icon: 'fa-landmark',
        route: 'bread/pizza',
        submenu: null
      },
    ]
  },
  {
    text: 'Noodles',
    icon: 'fa-brain',
    route: 'noodles',
    submenu: null
  },
  {
    text: 'Soups and Broths',
    icon: 'fa-leaf',
    route: 'soups-broths',
    submenu: null
  },
  {
    text: 'Settings',
    icon: 'fa-cog',
    route: 'settings',
    submenu: null
  }
];