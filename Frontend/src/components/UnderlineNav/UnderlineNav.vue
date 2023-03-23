<template>
  <div class="pagehead py-0 border-0 mt-md-0 mt-6 mr-md-0 mr-n3 ml-md-0 ml-n3">
    <div class="mb-4 d-none">
      <ul class="pagehead-actions">
        <li>
          <details class="details-reset details-overlay select-menu">
            <summary
              data-view-component="true"
              class="select-menu-button btn-sm btn"
              aria-haspopup="menu"
              role="button"
            >
              <i>Type:</i>
              <span data-menu-button="">All</span>
            </summary>
            <details-menu
              class="select-menu-modal position-absolute right-0"
              style="z-index: 99"
              aria-label="Filter options"
              role="menu"
            >
              <div class="select-menu-header">
                <span class="select-menu-title">Filter options</span>
              </div>
              <div class="select-menu-list">
                <a
                  class="js-selected-navigation-item selected select-menu-item"
                  role="menuitem"
                  aria-current="page"
                  data-selected-links=" /JonathanXDR"
                  href="/JonathanXDR"
                >
                  <OctIcon name="check" class="select-menu-item-icon" />
                  <span class="select-menu-item-text" data-menu-button-text="">All</span>
                </a>
                <a
                  class="js-selected-navigation-item select-menu-item"
                  role="menuitem"
                  data-selected-links=" /JonathanXDR/public"
                  href="/JonathanXDR/public"
                >
                  <OctIcon name="check" class="select-menu-item-icon" />
                  <span class="select-menu-item-text" data-menu-button-text="">Public</span>
                </a>
                <a
                  class="js-selected-navigation-item select-menu-item"
                  role="menuitem"
                  data-selected-links=" /JonathanXDR/secret"
                  href="/JonathanXDR/secret"
                >
                  <OctIcon name="check" class="select-menu-item-icon" />
                  <span class="select-menu-item-text" data-menu-button-text="">Secret</span>
                </a>
              </div>
            </details-menu>
          </details>
        </li>
        <li>
          <details class="details-reset details-overlay select-menu">
            <summary
              data-view-component="true"
              class="select-menu-button btn-sm btn"
              aria-haspopup="menu"
              role="button"
            >
              <i>Sort:</i>
              <span data-menu-button="">Recently created</span>
            </summary>
            <details-menu
              class="select-menu-modal position-absolute right-0"
              style="z-index: 99"
              aria-label="Sort options"
              role="menu"
            >
              <div class="select-menu-header">
                <span class="select-menu-title">Sort options</span>
              </div>
              <div class="select-menu-list">
                <a
                  class="select-menu-item selected"
                  aria-checked="true"
                  role="menuitemradio"
                  href="https://gist.github.com/JonathanXDR?direction=desc&amp;sort=created"
                >
                  <OctIcon name="check" class="select-menu-item-icon" />
                  <span class="select-menu-item-text" data-menu-button-text=""
                    >Recently created</span
                  >
                </a>
                <a
                  class="select-menu-item"
                  aria-checked="false"
                  role="menuitemradio"
                  href="https://gist.github.com/JonathanXDR?direction=asc&amp;sort=created"
                >
                  <OctIcon name="check" class="select-menu-item-icon" />
                  <span class="select-menu-item-text" data-menu-button-text=""
                    >Least recently created</span
                  >
                </a>
                <a
                  class="select-menu-item"
                  aria-checked="false"
                  role="menuitemradio"
                  href="https://gist.github.com/JonathanXDR?direction=desc&amp;sort=updated"
                >
                  <OctIcon name="check" class="select-menu-item-icon" />
                  <span class="select-menu-item-text" data-menu-button-text=""
                    >Recently updated</span
                  >
                </a>
                <a
                  class="select-menu-item"
                  aria-checked="false"
                  role="menuitemradio"
                  href="https://gist.github.com/JonathanXDR?direction=asc&amp;sort=updated"
                >
                  <OctIcon name="check" class="select-menu-item-icon" />
                  <span class="select-menu-item-text" data-menu-button-text=""
                    >Least recently updated</span
                  >
                </a>
              </div>
            </details-menu>
          </details>
        </li>
      </ul>
    </div>

    <nav aria-label="Gist tab" data-view-component="true" class="UnderlineNav">
      <ul data-view-component="true" class="UnderlineNav-body list-style-none">
        <li data-view-component="true" class="d-inline-flex">
          <a
            href="/JonathanXDR"
            aria-current="page"
            data-view-component="true"
            class="UnderlineNav-item"
          >
            <OctIcon name="rows" class="UnderlineNav-octicon" />
            <span data-view-component="true">All tasks</span>
            <span title="2" data-view-component="true" class="Counter">2</span>
          </a>
        </li>
        <li data-view-component="true" class="d-inline-flex">
          <a href="/JonathanXDR/starred" data-view-component="true" class="UnderlineNav-item">
            <OctIcon name="star" class="UnderlineNav-octicon" />
            <span data-view-component="true">Starred</span>
            <span title="8" data-view-component="true" class="Counter">8</span>
          </a>
        </li>
        <li data-view-component="true" class="d-inline-flex">
          <a href="/JonathanXDR/shared" data-view-component="true" class="UnderlineNav-item">
            <OctIcon name="people" class="UnderlineNav-octicon" />
            <span data-view-component="true">Shared</span>
            <span title="8" data-view-component="true" class="Counter">12</span>
          </a>
        </li>
      </ul>
      <div data-view-component="true" class="UnderlineNav-actions">
        <div class="d-lg-flex d-none">
          <details class="details-reset details-overlay select-menu">
            <summary
              data-view-component="true"
              class="select-menu-button btn-sm btn"
              aria-haspopup="menu"
              role="button"
            >
              <i>Type:</i>
              <span data-menu-button="">All</span>
            </summary>
            <details-menu
              class="select-menu-modal position-absolute right-0"
              style="z-index: 99"
              aria-label="Filter options"
              role="menu"
            >
              <div class="select-menu-header">
                <span class="select-menu-title">Filter options</span>
              </div>
              <div class="select-menu-list">
                <a
                  class="js-selected-navigation-item selected select-menu-item"
                  role="menuitem"
                  aria-current="page"
                  data-selected-links=" /JonathanXDR"
                  href="/JonathanXDR"
                >
                  <OctIcon name="check" class="select-menu-item-icon" />
                  <span class="select-menu-item-text" data-menu-button-text="">All</span>
                </a>
                <a
                  class="js-selected-navigation-item select-menu-item"
                  role="menuitem"
                  data-selected-links=" /JonathanXDR/public"
                  href="/JonathanXDR/public"
                >
                  <OctIcon name="check" class="select-menu-item-icon" />
                  <span class="select-menu-item-text" data-menu-button-text="">Public</span>
                </a>
                <a
                  class="js-selected-navigation-item select-menu-item"
                  role="menuitem"
                  data-selected-links=" /JonathanXDR/secret"
                  href="/JonathanXDR/secret"
                >
                  <OctIcon name="check" class="select-menu-item-icon" />
                  <span class="select-menu-item-text" data-menu-button-text="">Secret</span>
                </a>
              </div>
            </details-menu>
          </details>

          <div class="ml-2">
            <details class="details-reset details-overlay select-menu">
              <summary
                data-view-component="true"
                class="select-menu-button btn-sm btn"
                aria-haspopup="menu"
                role="button"
              >
                <i>Sort:</i>
                <span data-menu-button="">Importance</span>
              </summary>
              <details-menu
                class="select-menu-modal position-absolute right-0"
                style="z-index: 99"
                aria-label="Sort options"
                role="menu"
              >
                <div class="select-menu-header">
                  <span class="select-menu-title">Sort options</span>
                </div>
                <div class="select-menu-list">
                  <a
                    class="select-menu-item selected"
                    aria-checked="true"
                    role="menuitemradio"
                    href="https://gist.github.com/JonathanXDR?direction=desc&amp;sort=created"
                  >
                    <OctIcon name="check" class="select-menu-item-icon" />
                    <span class="select-menu-item-text" data-menu-button-text="">Importance</span>
                  </a>
                  <a
                    class="select-menu-item"
                    aria-checked="false"
                    role="menuitemradio"
                    href="https://gist.github.com/JonathanXDR?direction=asc&amp;sort=created"
                  >
                    <OctIcon name="check" class="select-menu-item-icon" />
                    <span class="select-menu-item-text" data-menu-button-text="">Due date</span>
                  </a>
                  <a
                    class="select-menu-item"
                    aria-checked="false"
                    role="menuitemradio"
                    href="https://gist.github.com/JonathanXDR?direction=desc&amp;sort=updated"
                  >
                    <OctIcon name="check" class="select-menu-item-icon" />
                    <span class="select-menu-item-text" data-menu-button-text=""
                      >Alphabetically</span
                    >
                  </a>
                  <a
                    class="select-menu-item"
                    aria-checked="false"
                    role="menuitemradio"
                    href="https://gist.github.com/JonathanXDR?direction=asc&amp;sort=updated"
                  >
                    <OctIcon name="check" class="select-menu-item-icon" />
                    <span class="select-menu-item-text" data-menu-button-text=""
                      >Creation Date</span
                    >
                  </a>
                </div>
              </details-menu>
            </details>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" src="./UnderlineNav.ts"></script>
<style scoped src="./UnderlineNav.css"></style>
