<template>
  <div
    data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6NzM1NTk1MTYiLCJ0IjoxNjc5MjM0MzcyfQ==--5a1f3565cdeb1ce5863274b476b07c9cb9d5b7f6436c83b9f939ecbbc7a0cb6a"
    data-indicator-mode="global"
    data-tooltip-global="You have unread notifications"
    data-tooltip-unavailable="Notifications are unavailable at the moment."
    data-tooltip-none="You have no unread notifications"
    data-fetch-indicator-src="/notifications/indicator"
    data-fetch-indicator-enabled="true"
    data-view-component="true"
    class="js-socket-channel"
    data-fetch-retry-delay-time="500"
    data-catalyst=""
  >
    <a
      id="AppHeader-notifications-button"
      href="/notifications"
      class="Header-link notification-indicator position-relative tooltipped tooltipped-sw"
      data-hotkey="g n"
      data-target="notification-indicator.link"
      aria-label="You have unread notifications"
      data-analytics-event='{"category":"Header","action":"go to notifications","label":"icon:unread"}'
    >
      <span data-target="notification-indicator.badge" class="mail-status unread"> </span>

      <OctIcon name="bell" />
    </a>
  </div>
</template>

<script lang="ts" src="./NotificationIndicator.ts"></script>
<style scoped src="./NotificationIndicator.css"></style>
