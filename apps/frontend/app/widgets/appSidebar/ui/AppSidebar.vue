<script setup lang="ts">
import { ChevronRight } from "@lucide/vue";
import { data } from "../config/sidebarConfig";

const route = useRoute();

const isLinkActive = (url: string) => {
  if (!url || url === "#") return false;
  return route.path === url || route.path.startsWith(`${url}/`);
};

const hasActiveChild = (item: (typeof data)[number]) => {
  return item.items?.some((sub) => isLinkActive(sub.url)) ?? false;
};

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
                :default-open="hasActiveChild(item)"
              >
                <SidebarGroupLabel
                  as-child
                  class="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground"
                  :data-active="hasActiveChild(item) || undefined"
                >
                  <CollapsibleTrigger class="w-full">
                    <component :is="item.icon" class="size-4 shrink-0" />
                    <span class="ml-2 font-normal">{{ item.title }}</span>
                    <ChevronRight
                      class="ml-auto size-4 transition-transform group-data-[state=open]/collapsible:rotate-90"
                    />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem
                      v-for="subItem in item.items"
                      :key="subItem.title"
                    >
                      <SidebarMenuSubButton
                        as-child
                        :is-active="subItem.isActive ?? isLinkActive(subItem.url)"
                      >
                        <NuxtLink :to="subItem.url">
                          <span>{{ subItem.title }}</span>
                        </NuxtLink>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </Collapsible>

              <!-- Одиночный пункт без подразделов — просто ссылка -->
              <SidebarMenuItem v-else>
                <SidebarMenuButton
                  as-child
                  :tooltip="item.title"
                  :is-active="isLinkActive(item.url)"
                >
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
