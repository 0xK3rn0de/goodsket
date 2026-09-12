import {
  HouseIcon,
  ListIcon,
  BoxIcon,
  PackageIcon,
  VanIcon,
  StarIcon,
  BadgeDollarIcon,
  MessageCircleIcon,
  DollarSignIcon,
  ChartIcon,
  PhoneIcon,
  SettingsIcon,
  UsersIcon,
} from "#components";
import type { Component } from "vue";

interface NavSubItem {
  title: string;
  url: string;
  isActive?: boolean;
}

interface NavGroup {
  title: string;
  url: string;
  icon: Component;
  items?: NavSubItem[];
}

const sellerPrefix = "/seller";
const sellerCatalogPrefix = `${sellerPrefix}/catalog`;

export const data: NavGroup[] = [
  {
    title: "Дашборд",
    url: `${sellerPrefix}/dashboard`,
    icon: HouseIcon,
  },
  {
    title: "Каталог",
    url: "#",
    icon: ListIcon,
    items: [
      {
        title: "Товары",
        url: `${sellerCatalogPrefix}/products`,
      },
      {
        title: "Категории",
        url: "#",
      },
      {
        title: "Импорт/экспорт",
        url: "#",
      },
    ],
  },
  {
    title: "Склад",
    url: "#",
    icon: BoxIcon,
    items: [
      {
        title: "Остатки",
        url: "#",
      },
      {
        title: "Склады",
        url: "#",
      },
      {
        title: "Движение товара",
        url: "#",
      },
      {
        title: "Дефицит",
        url: "#",
      },
    ],
  },
  {
    title: "Заказы",
    url: "#",
    icon: PackageIcon,
  },
  {
    title: "Доставка",
    url: "#",
    icon: VanIcon,
  },
  {
    title: "Финансы",
    url: "#",
    icon: DollarSignIcon,
  },
  {
    title: "Аналитика",
    url: "#",
    icon: ChartIcon,
  },
  {
    title: "Маркетинг",
    url: "#",
    icon: BadgeDollarIcon,
  },
  {
    title: "Отзывы",
    url: "#",
    icon: StarIcon,
  },
  {
    title: "Сообщения",
    url: "#",
    icon: MessageCircleIcon,
  },
  {
    title: "Поддержка",
    url: "#",
    icon: PhoneIcon,
  },
  {
    title: "Магазин",
    url: "#",
    icon: HouseIcon,
  },
  {
    title: "Команда",
    url: "#",
    icon: UsersIcon,
  },
  {
    title: "Настройки",
    url: "#",
    icon: SettingsIcon,
  },
];