<script setup lang="ts">
import type { Component } from "vue";
import { ChevronRight } from "@lucide/vue";
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

const data: NavGroup[] = [
  {
    title: "Дашборд",
    url: "/seller/dashboard",
    icon: HouseIcon,
  },
  {
    title: "Каталог",
    url: "#",
    icon: ListIcon,
    items: [
      {
        title: "Товары",
        url: "#",
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
</script>

<template>
  <Sidebar :collapsible="'icon'">
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <div
            class="text-3xl font-bold tracking-tight shrink-0 flex group-data-[collapsible=icon]:hidden"
          >
            <p class="text-accent">Goods</p>
            <p>ket</p>
          </div>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>

    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <template v-for="item in data" :key="item.title">
              <!-- Группа с подразделами — collapsible -->
              <Collapsible
                v-if="item.items?.length"
                :title="item.title"
                class="group/collapsible"
              >
                <SidebarGroupLabel
                  as-child
                  class="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                >
                  <CollapsibleTrigger class="w-full">
                    <component :is="item.icon" class="size-4 shrink-0" />
                    {{ item.title }}
                    <ChevronRight
                      class="ml-auto size-4 transition-transform group-data-[state=open]/collapsible:rotate-90"
                    />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                  <SidebarMenuItem
                    v-for="subItem in item.items"
                    :key="subItem.title"
                  >
                    <SidebarMenuButton as-child :is-active="subItem.isActive">
                      <NuxtLink :to="subItem.url">
                        <span>{{ subItem.title }}</span>
                      </NuxtLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </CollapsibleContent>
              </Collapsible>

              <!-- Одиночный пункт без подразделов — просто ссылка -->
              <SidebarMenuItem v-else>
                <SidebarMenuButton as-child :tooltip="item.title">
                  <NuxtLink :to="item.url">
                    <component :is="item.icon" class="size-4 shrink-0" />
                    <span>{{ item.title }}</span>
                  </NuxtLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </template>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarRail />
  </Sidebar>
</template>
