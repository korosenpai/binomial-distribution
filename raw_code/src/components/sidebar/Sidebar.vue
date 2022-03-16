<template>
  <div :class="{backdrop: !collapsed}" @click.self="toggleSidebar">
    <div class="sidebar" :class="{backdrop: !collapsed}" :style="{width: sidebarWidth}" @click.self="toggleSidebar">
      <h1 @click="toggleSidebar">
        <span v-if="collapsed">
          <div>D</div>
          <div>B</div>
        </span>
        <span v-else>La Distribuzione Binomiale</span>
      </h1>

      <SidebarLink to="/" icon="fas fa-home">premessa</SidebarLink>
      <SidebarLink to="/introduction" icon="fas fa-hourglass-start">introduzione</SidebarLink>
      <SidebarLink to="/formula" icon="fas fa-calculator">aspetti matematici</SidebarLink>
      <SidebarLink to="/vanilla-binomial-distribution" icon="fas fa-chart-line">grafico interattivo</SidebarLink>
      <SidebarLink to="/seller-problem" icon="fas fa-question">problema dei venditori</SidebarLink>
      <SidebarLink to="/rendimento-dell-istruzione" icon="fas fa-graduation-cap">rendimento dell'istruzione</SidebarLink>
      <SidebarLink to="/conclusions" icon="fas fa-hourglass-end">conclusioni</SidebarLink>
      <!-- <SidebarLink to="/analytics" icon="fas fa-chart-bar">Analytics</SidebarLink>
      <SidebarLink to="/friends" icon="fas fa-users">Friends</SidebarLink>
      <SidebarLink to="/image" icon="fas fa-image">Images</SidebarLink> -->

      <span class="collapse-icon" :class="{'rotate-180': collapsed}" @click="toggleSidebar">
        <i class="fas fa-angle-double-left"></i>
      </span>
    </div>
  </div>
</template>

<script>
import { collapsed, toggleSidebar, sidebarWidth } from "./state"
import SidebarLink from './SidebarLink.vue'

export default {
  components: {
    SidebarLink
  },

  data() {
    return {
      collapsed,
      toggleSidebar,
      sidebarWidth,
    }
  }
}
</script>

<style scoped>
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;

  z-index: 1;
}

.sidebar {
    color: white;
    background-color: var(--sidebar-bg-color);

    float: left;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;

    transition: 0.3s ease;

    display: flex;
    flex-direction: column;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}

span {
  font-size: 20px;
}
</style>