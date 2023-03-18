<template>
  <div class="Header-item d-md-none">
    <button
      aria-label="Toggle navigation"
      aria-expanded="false"
      type="button"
      data-view-component="true"
      class="Header-link js-details-target btn-link"
    >
      <svg
        aria-hidden="true"
        height="24"
        viewBox="0 0 16 16"
        version="1.1"
        width="24"
        data-view-component="true"
        class="octicon octicon-three-bars"
      >
        <path
          d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"
        ></path>
      </svg>
    </button>
  </div>

  <div
    class="Header-item Header-item--full flex-column flex-md-row width-full flex-order-2 flex-md-order-none mr-0 mt-3 mt-md-0 Details-content--hidden-not-important d-md-flex"
  >
    <template id="search-icon">
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
        class="octicon octicon-search"
      >
        <path
          d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"
        ></path>
      </svg>
    </template>

    <template id="code-icon">
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
        class="octicon octicon-code"
      >
        <path
          d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"
        ></path>
      </svg>
    </template>

    <template id="file-code-icon">
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
        class="octicon octicon-file-code"
      >
        <path
          d="M4 1.75C4 .784 4.784 0 5.75 0h5.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v8.586A1.75 1.75 0 0 1 14.25 15h-9a.75.75 0 0 1 0-1.5h9a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 10 4.25V1.5H5.75a.25.25 0 0 0-.25.25v2.5a.75.75 0 0 1-1.5 0Zm1.72 4.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l1.47-1.47-1.47-1.47a.75.75 0 0 1 0-1.06ZM3.28 7.78 1.81 9.25l1.47 1.47a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Zm8.22-6.218V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"
        ></path>
      </svg>
    </template>

    <template id="history-icon">
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
        class="octicon octicon-history"
      >
        <path
          d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"
        ></path>
      </svg>
    </template>

    <template id="repo-icon">
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
        class="octicon octicon-repo"
      >
        <path
          d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"
        ></path>
      </svg>
    </template>

    <template id="bookmark-icon">
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
        class="octicon octicon-bookmark"
      >
        <path
          d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
        ></path>
      </svg>
    </template>

    <template id="plus-circle-icon">
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
        class="octicon octicon-plus-circle"
      >
        <path
          d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm7.25-3.25v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5a.75.75 0 0 1 1.5 0Z"
        ></path>
      </svg>
    </template>

    <template id="circle-icon">
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
        class="octicon octicon-dot-fill"
      >
        <path d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"></path>
      </svg>
    </template>

    <template id="trash-icon">
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
        class="octicon octicon-trash"
      >
        <path
          d="M11 1.75V3h2.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75ZM4.496 6.675l.66 6.6a.25.25 0 0 0 .249.225h5.19a.25.25 0 0 0 .249-.225l.66-6.6a.75.75 0 0 1 1.492.149l-.66 6.6A1.748 1.748 0 0 1 10.595 15h-5.19a1.75 1.75 0 0 1-1.741-1.575l-.66-6.6a.75.75 0 1 1 1.492-.15ZM6.5 1.75V3h3V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Z"
        ></path>
      </svg>
    </template>

    <template id="team-icon">
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
        class="octicon octicon-people"
      >
        <path
          d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"
        ></path>
      </svg>
    </template>

    <template id="project-icon">
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
        class="octicon octicon-project"
      >
        <path
          d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25ZM11.75 3a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-8.25.75a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-1.5 0ZM8 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 3Z"
        ></path>
      </svg>
    </template>

    <template id="pencil-icon">
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
        class="octicon octicon-pencil"
      >
        <path
          d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"
        ></path>
      </svg>
    </template>

    <nav
      id="global-nav"
      class="d-flex flex-column flex-md-row flex-self-stretch flex-md-self-auto"
      aria-label="Global"
    >
      <a
        class="Header-link py-md-3 d-block d-md-none py-2 border-top border-md-top-0 border-white-fade"
        data-ga-click="Header, click, Nav menu - item:dashboard:user"
        aria-label="Dashboard"
        data-turbo="false"
        href="/dashboard"
        >Dashboard</a
      >

      <a
        class="js-selected-navigation-item Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade"
        data-hotkey="g p"
        data-ga-click="Header, click, Nav menu - item:pulls context:user"
        aria-label="Pull requests you created"
        data-turbo="false"
        data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls"
        href="/pulls"
      >
        Pull<span class="d-inline d-md-none d-lg-inline"> request</span>s
      </a>
      <a
        class="js-selected-navigation-item Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade"
        data-hotkey="g i"
        data-ga-click="Header, click, Nav menu - item:issues context:user"
        aria-label="Issues you created"
        data-turbo="false"
        data-selected-links="/issues /issues/assigned /issues/mentioned /issues"
        href="/issues"
        >Issues</a
      >

      <a
        class="js-selected-navigation-item Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade"
        data-ga-click="Header, click, Nav menu - item:workspaces context:user"
        data-turbo="false"
        data-selected-links="/codespaces /codespaces"
        href="/codespaces"
        >Codespaces</a
      >

      <div class="d-flex position-relative">
        <a
          class="js-selected-navigation-item Header-link flex-auto mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade"
          data-ga-click="Header, click, Nav menu - item:marketplace context:user"
          data-octo-click="marketplace_click"
          data-octo-dimensions="location:nav_bar"
          data-turbo="false"
          data-selected-links=" /marketplace"
          href="/marketplace"
          >Marketplace</a
        >
      </div>

      <a
        class="js-selected-navigation-item Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade"
        data-ga-click="Header, click, Nav menu - item:explore"
        data-turbo="false"
        data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore"
        href="/explore"
        >Explore</a
      >

      <a
        class="js-selected-navigation-item Header-link d-block d-md-none py-2 py-md-3 border-top border-md-top-0 border-white-fade"
        data-ga-click="Header, click, Nav menu - item:Sponsors"
        data-hydro-click='{"event_type":"sponsors.button_click","payload":{"button":"HEADER_SPONSORS_DASHBOARD","sponsorable_login":"JonathanXDR","originating_url":"https://github.com/","user_id":73559516}}'
        data-hydro-click-hmac="c53acf6094f68d378d097b3ca44fa41531384a55aa5e6487cf2549c83fe4880a"
        data-turbo="false"
        data-selected-links=" /sponsors/accounts"
        href="/sponsors/accounts"
        >Sponsors</a
      >

      <a
        class="Header-link d-block d-md-none mr-0 mr-md-3 py-2 py-md-3 border-top border-md-top-0 border-white-fade"
        data-turbo="false"
        href="/settings/profile"
        >Settings</a
      >

      <a
        class="Header-link d-block d-md-none mr-0 mr-md-3 py-2 py-md-3 border-top border-md-top-0 border-white-fade"
        data-turbo="false"
        href="/JonathanXDR"
      >
        <img
          class="avatar avatar-user"
          loading="lazy"
          decoding="async"
          src="https://avatars.githubusercontent.com/u/73559516?s=40&amp;v=4"
          width="20"
          height="20"
          alt="@JonathanXDR"
        />
        JonathanXDR
      </a>
      <!-- '"` --><!-- </textarea></xmp> -->
      <form data-turbo="false" action="/logout" accept-charset="UTF-8" method="post">
        <input
          type="hidden"
          name="authenticity_token"
          value="5cxD0jHFMUK86pReBzG4JTogC08LD05aEcbySiW7kC-b1C-hqWK3tAhAUplfaKSYWXj75Y_ddC16yaiwqihZyA"
        />
        <button
          type="submit"
          class="Header-link mr-0 mr-md-3 py-2 py-md-3 border-top border-md-top-0 border-white-fade d-md-none btn-link d-block width-full text-left"
          style="padding-left: 2px"
          data-analytics-event='{"category":"Header","action":"sign out","label":"icon:logout"}'
        >
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            class="octicon octicon-sign-out v-align-middle"
          >
            <path
              d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 0 1 0 1.5h-2.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 0 1.5h-2.5A1.75 1.75 0 0 1 2 13.25Zm10.44 4.5-1.97-1.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l1.97-1.97H6.75a.75.75 0 0 1 0-1.5Z"
            ></path>
          </svg>
          Sign out
        </button>
      </form>
    </nav>
  </div>

  <div class="Header-item Header-item--full flex-justify-center d-md-none position-relative">
    <a
      class="Header-link"
      href="https://github.com/"
      data-hotkey="g d"
      aria-label="Homepage "
      data-turbo="false"
      data-analytics-event='{"category":"Header","action":"go to dashboard","label":"icon:logo"}'
    >
      <svg
        height="32"
        aria-hidden="true"
        viewBox="0 0 16 16"
        version="1.1"
        width="32"
        data-view-component="true"
        class="octicon octicon-mark-github v-align-middle"
      >
        <path
          d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
        ></path>
      </svg>
    </a>
  </div>

  <div class="Header-item mr-0 mr-md-3 flex-order-1 flex-md-order-none">
    <notification-indicator
      data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6NzM1NTk1MTYiLCJ0IjoxNjc4OTc5MzQwfQ==--b1591726a4e5bd3a308943307c3449062bfeabf9c2733f63f6c19261a9285423"
      data-indicator-mode="none"
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
        aria-label="You have no unread notifications"
        data-analytics-event='{"category":"Header","action":"go to notifications","label":"icon:read"}'
      >
        <span data-target="notification-indicator.badge" class="mail-status unread" hidden="">
        </span>

        <svg
          aria-hidden="true"
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          class="octicon octicon-bell"
        >
          <path
            d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"
          ></path>
        </svg>
      </a>
    </notification-indicator>
  </div>

  <div class="Header-item position-relative d-none d-md-flex">
    <details class="details-overlay details-reset">
      <summary
        class="Header-link"
        aria-label="Create new…"
        data-analytics-event='{"category":"Header","action":"create new","label":"icon:add"}'
        aria-haspopup="menu"
        role="button"
      >
        <svg
          aria-hidden="true"
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          class="octicon octicon-plus"
        >
          <path
            d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"
          ></path>
        </svg>
        <span class="dropdown-caret"></span>
      </summary>
      <details-menu class="dropdown-menu dropdown-menu-sw" role="menu">
        <a
          role="menuitem"
          class="dropdown-item"
          href="/new"
          data-ga-click="Header, create new repository"
        >
          New repository
        </a>

        <a
          role="menuitem"
          class="dropdown-item"
          href="/new/import"
          data-ga-click="Header, import a repository"
        >
          Import repository
        </a>

        <a role="menuitem" class="dropdown-item" href="/codespaces/new"> New codespace </a>

        <a
          role="menuitem"
          class="dropdown-item"
          href="https://gist.github.com/"
          data-ga-click="Header, create new gist"
        >
          New gist
        </a>

        <a
          role="menuitem"
          class="dropdown-item"
          href="/organizations/new"
          data-ga-click="Header, create new organization"
        >
          New organization
        </a>

        <!-- '"` --><!-- </textarea></xmp> -->
        <form
          data-turbo="false"
          action="/users/JonathanXDR/projects?type=new"
          accept-charset="UTF-8"
          method="post"
        >
          <input
            type="hidden"
            name="authenticity_token"
            value="62jV7kYE7lzJRaN2cWEaaGFc5gOEBuGOqw2XPpg7yWLEtfd4R-skQCdZmmgto1QiFRviEZIdLuDvRlIPZLGsOw"
          />
          <input
            type="hidden"
            name="action"
            id="action"
            value="create"
            autocomplete="off"
            class="form-control"
          />
          <input
            id="project-title"
            value="@JonathanXDR's untitled project"
            autocomplete="off"
            type="hidden"
            name="memex_project[title]"
          />
          <button
            role="menuitem"
            data-ga-click="Header, create new project"
            type="submit"
            data-view-component="true"
            class="dropdown-item btn-link"
          >
            New project
          </button>
        </form>
      </details-menu>
    </details>
  </div>

  <div class="Header-item position-relative mr-0 d-none d-md-flex">
    <details
      class="details-overlay details-reset js-feature-preview-indicator-container"
      data-feature-preview-indicator-src="/users/JonathanXDR/feature_preview/indicator_check"
    >
      <summary
        class="Header-link"
        aria-label="View profile and more"
        data-analytics-event='{"category":"Header","action":"show menu","label":"icon:avatar"}'
        aria-haspopup="menu"
        role="button"
      >
        <img
          src="https://avatars.githubusercontent.com/u/73559516?s=40&amp;v=4"
          alt="@JonathanXDR"
          size="20"
          height="20"
          width="20"
          data-view-component="true"
          class="avatar avatar-small circle"
        />
        <span
          class="unread-indicator js-feature-preview-indicator"
          style="top: 1px"
          hidden=""
        ></span>
        <span class="dropdown-caret"></span>
      </summary>
      <details-menu
        class="dropdown-menu dropdown-menu-sw"
        style="width: 180px"
        preload=""
        role="menu"
      >
        <include-fragment src="/users/73559516/menu" loading="lazy">
          <p class="text-center mt-3" data-hide-on-error="">
            <svg
              style="box-sizing: content-box; color: var(--color-icon-primary)"
              width="32"
              height="32"
              viewBox="0 0 16 16"
              fill="none"
              data-view-component="true"
              class="anim-rotate"
            >
              <circle
                cx="8"
                cy="8"
                r="7"
                stroke="currentColor"
                stroke-opacity="0.25"
                stroke-width="2"
                vector-effect="non-scaling-stroke"
              ></circle>
              <path
                d="M15 8a7.002 7.002 0 00-7-7"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                vector-effect="non-scaling-stroke"
              ></path>
            </svg>
          </p>
          <p class="ml-1 mb-2 mt-2 color-fg-default" data-show-on-error="">
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="octicon octicon-alert"
            >
              <path
                d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
              ></path>
            </svg>
            Sorry, something went wrong.
          </p>
        </include-fragment>
      </details-menu>
    </details>
  </div>
</template>

<script lang="ts" src="./NavBar.ts"></script>
<style scoped src="./NavBar.css"></style>
