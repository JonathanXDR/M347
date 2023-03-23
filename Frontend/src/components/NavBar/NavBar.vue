<template>
  <nav class="d-flex flex-auto flex-justify-between flex-items-center">
    <div class="Header-item width-full">
      <button
        aria-label="Toggle navigation"
        aria-expanded="true"
        type="button"
        data-view-component="true"
        class="Header-link js-details-target btn-link"
        @click="toggleNav"
      >
        <OctIcon name="three-bars" width="24" height="24" />
      </button>
    </div>

    <div class="d-flex">
      <div class="Header-item d-md-none width-full">
        <a
          class="Header-link"
          href="https://github.com/"
          data-hotkey="g d"
          aria-label="Homepage "
          data-turbo="false"
          data-analytics-event='{"category":"Header","action":"go to dashboard","label":"icon:logo"}'
        >
          <OctIcon name="search" />
        </a>
      </div>

      <div
        class="Header-item Header-item--full flex-column flex-md-row width-full flex-order-2 flex-md-order-none mr-0 mt-3 mt-md-0 Details-content--hidden-not-important d-md-flex"
      >
        <template id="search-icon">
          <OctIcon name="search" />
        </template>

        <template id="code-icon">
          <OctIcon name="code" />
        </template>

        <template id="file-code-icon">
          <OctIcon name="file-code" />
        </template>

        <template id="history-icon">
          <OctIcon name="history" />
        </template>

        <template id="repo-icon">
          <OctIcon name="repo" />
        </template>

        <template id="bookmark-icon">
          <OctIcon name="bookmark" />
        </template>

        <template id="plus-circle-icon">
          <OctIcon name="plus-circle" />
        </template>

        <template id="circle-icon">
          <OctIcon name="dot-fill" />
        </template>

        <template id="trash-icon">
          <OctIcon name="trash" />
        </template>

        <template id="team-icon">
          <OctIcon name="people" />
        </template>

        <template id="project-icon">
          <OctIcon name="project" />
        </template>

        <template id="pencil-icon">
          <OctIcon name="pencil" />
        </template>

        <input
          type="hidden"
          value="fRwbwpqqCMyW1RhZsYiM5G65kCAYMIf-LHVy4tggrG-_xCVvn96ADhPz4YiGaJD2TldhTZbcZprz5L0t6tqOtA"
          data-csrf="true"
          class="js-data-jump-to-suggestions-path-csrf"
        />
      </div>

      <SearchInput />

      <div class="Header-item mr-0 mr-md-3 flex-order-1 flex-md-order-none">
        <NotificationIndicator />
      </div>
    </div>
  </nav>
</template>

<script lang="ts" src="./NavBar.ts"></script>
<style scoped src="./NavBar.css"></style>
