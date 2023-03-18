<template>
  <header
    class="Header js-details-container Details px-3 px-md-4 px-lg-5 flex-wrap flex-md-nowrap open Details--on"
    role="banner"
  >
    <!-- <div class="Header-item mt-n1 mb-n1 d-none d-md-flex">
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
    </div> -->

    <div class="Header-item d-md-none">
      <button
        aria-label="Toggle navigation"
        aria-expanded="true"
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

    <div class="Header-item d-md-none d-block">
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

      <input
        type="hidden"
        value="fRwbwpqqCMyW1RhZsYiM5G65kCAYMIf-LHVy4tggrG-_xCVvn96ADhPz4YiGaJD2TldhTZbcZprz5L0t6tqOtA"
        data-csrf="true"
        class="js-data-jump-to-suggestions-path-csrf"
      />

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
            value="L092oci657HFk4a78wMPmgs9TV3l9pbbjG7sEdZj6GxRVxrSUB1hR3E5QHyrWhMnaGW992EkrKznYbbrWfAhiw"
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

    <!-- <div class="Header-item Header-item--full flex-justify-center d-md-none position-relative">
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
    </div> -->

    <search-input
      class="search-input Header-item Header-item--full flex-justify-center d-md-block d-none position-relative"
      data-scope=""
      data-custom-scopes-path="/search/custom_scopes"
      data-delete-custom-scopes-csrf="QI_ceabuwBurl-l5AFNNP_UJdVnZD7yqoergYGzU8BuThgpwx-f_xJr_2Y7rKwUQvqbj_EAlpMJMedt8xmcX7w"
      data-max-custom-scopes="10"
      data-header-redesign-enabled="false"
      data-initial-value=""
      data-blackbird-suggestions-path="/search/suggestions"
      data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations"
      data-catalyst=""
    >
      <div
        class="search-input-container search-with-dialog position-relative d-flex flex-row flex-items-center mr-4 rounded"
        data-action="click:search-input#searchInputContainerClicked"
      >
        <button
          type="button"
          class="header-search-button placeholder input-button form-control d-flex flex-1 flex-self-stretch flex-items-center no-wrap width-full py-0 pl-2 pr-0 text-left border-0 box-shadow-none"
          data-target="search-input.inputButton"
          placeholder="Search or jump to..."
          data-hotkey="s,/"
          autocapitalize="off"
          data-action="click:search-input#handleExpand"
        >
          <div class="mr-2 color-fg-muted">
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
          </div>
          <span class="flex-1" data-target="search-input.inputButtonText"
            >Search or jump to...</span
          >
          <div class="d-flex" data-target="search-input.hotkeyIndicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="20"
              aria-hidden="true"
              class="mr-1"
            >
              <path
                fill="none"
                stroke="#979A9C"
                opacity=".4"
                d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"
              ></path>
              <path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path>
            </svg>
          </div>
        </button>

        <input type="hidden" name="type" class="js-site-search-type-field" />

        <div class="Overlay--hidden" data-modal-dialog-overlay="">
          <modal-dialog
            data-action="close:search-input#handleClose cancel:search-input#handleClose"
            data-target="search-input.searchSuggestionsDialog"
            role="dialog"
            id="search-suggestions-dialog"
            aria-modal="true"
            aria-labelledby="search-suggestions-dialog-header"
            data-view-component="true"
            class="Overlay Overlay--width-large Overlay--height-auto"
          >
            <h1 id="search-suggestions-dialog-header" class="sr-only">
              Search code, repositories, users, issues, pull requests...
            </h1>
            <div class="Overlay-body Overlay-body--paddingNone">
              <div data-view-component="true">
                <div
                  class="search-suggestions position-absolute width-full color-shadow-large border color-fg-default color-bg-default overflow-hidden d-flex flex-column"
                  style="border-radius: 12px"
                  data-action="
            combobox-commit:search-input#suggestionCommit
            mouseup:search-input#suggestionMouseUp
          "
                  data-target="search-input.queryBuilderContainer"
                  hidden
                >
                  <div
                    class="suggestion-search-input-wrapper mb-1 pl-2 pr-1 d-flex rounded flex-shrink-0"
                    style="margin-right: 12px; margin-left: 12px"
                  >
                    <styled-text-input
                      class="styled-text-input text-input-wrapper v-align-middle"
                      data-blackbird-suggestions-path="/search/suggestions"
                      data-target="search-input.input"
                      data-current-repository=""
                      data-current-org=""
                      data-current-owner=""
                      data-catalyst=""
                    >
                      <span class="text-input-icon"
                        ><svg
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
                          ></path></svg
                      ></span>
                      <div
                        class="styled-content-container position-relative d-flex flex-1 full-width overflow-x-auto overflow-y-hidden flex-self-stretch"
                        data-target="styled-text-input.styledContentContainer"
                      >
                        <div
                          class="styled-content position-absolute full-width user-select-none flex-1 p-0"
                          aria-hidden="true"
                          data-target="styled-text-input.styledContent"
                        ></div>
                        <div class="autosize-text-input width-full flex-self-stretch">
                          <div
                            aria-hidden="true"
                            class="sizer position-absolute top-0 left-0 v-hidden overflow-scroll"
                            data-target="styled-text-input.sizer"
                          ></div>
                          <div
                            aria-hidden="true"
                            class="sizer position-absolute top-0 left-0 v-hidden overflow-scroll"
                            data-target="styled-text-input.placeholderSizer"
                          ></div>
                          <input
                            class="input position-relative d-flex border-0 p-0 overflow-x-auto overflow-y-hidden"
                            data-action="
          input:search-input#handleChange
          keydown:search-input#handleKeydown
        "
                            data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations"
                            data-target="styled-text-input.input"
                            placeholder="Search or jump to..."
                            spellcheck="false"
                            value=""
                          />
                          <input
                            type="hidden"
                            value="F6C_uZwN73V0qw4PAsySAIBvRhfMuq1edQ_SKnSU-_DVeIEUmXlnt_GN9941LI4SoIG3ekJWTDqqnh3lRm7ZKw"
                            data-csrf="true"
                            class="js-data-jump-to-suggestions-path-csrf"
                          />
                        </div>
                      </div>
                      <button
                        id="clear-blackbird-search"
                        style="height: 24px"
                        data-action="click:search-input#clearInput"
                        data-target="search-input.clearInputButton"
                        type="button"
                        data-view-component="true"
                        class="clear-blackbird-search-button btn-sm btn px-2 py-0 d-flex flex-items-center color-fg-muted rounded-1"
                      >
                        Clear
                      </button>
                      <div
                        class="blackbird-search-button-separator mx-1"
                        data-target="search-input.clearInputButtonSeparator"
                      ></div>
                      <button
                        id="close-blackbird-search"
                        data-close-dialog-id="search-suggestions-dialog"
                        data-action="click:search-input#retract"
                        aria-label="Close"
                        type="button"
                        data-view-component="true"
                        class="close-button close-blackbird-search-button rounded-1 p-1"
                      >
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          class="octicon octicon-x"
                        >
                          <path
                            d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"
                          ></path>
                        </svg>
                      </button>
                    </styled-text-input>
                  </div>
                  <li
                    class="ActionList-sectionDivider mb-0"
                    role="separator"
                    aria-hidden="true"
                  ></li>
                  <ul
                    class="ActionList suggestion-list overflow-y-auto position-relative"
                    id="search-suggestions-list"
                    role="listbox"
                    data-target="search-input.suggestions"
                    aria-label="Suggestions"
                  ></ul>
                  <div
                    class="d-flex flex-row flex-justify-end color-fg-muted px-3 text-small color-bg-default search-feedback-prompt"
                  >
                    <span data-view-component="true" class="Label Label--success">Beta</span>
                    <button
                      data-action="click:search-input#showFeedbackDialog"
                      type="button"
                      data-view-component="true"
                      class="Button--link Button--medium Button color-fg-accent text-normal ml-2"
                    >
                      <span class="Button-content">
                        <span class="Button-label">Give feedback</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </modal-dialog>
        </div>
      </div>
      <div
        data-action="click:search-input#retract"
        class="dark-backdrop position-fixed width-full"
        hidden
        data-target="search-input.darkBackdrop"
      ></div>
      <div class="color-fg-default">
        <div class="Overlay--hidden Overlay-backdrop--center" data-modal-dialog-overlay="">
          <modal-dialog
            data-target="search-input.feedbackDialog"
            data-action="close:search-input#handleDialogClose cancel:search-input#handleDialogClose"
            role="dialog"
            id="feedback-dialog"
            aria-modal="true"
            aria-describedby="feedback-dialog-description"
            data-view-component="true"
            class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade"
          >
            <div data-view-component="true" class="Overlay-header">
              <div class="Overlay-headerContentWrap">
                <div class="Overlay-titleWrap">
                  <h1 class="Overlay-title">Provide feedback</h1>
                </div>
                <div class="Overlay-actionWrap">
                  <button
                    data-close-dialog-id="feedback-dialog"
                    aria-label="Close"
                    type="button"
                    data-view-component="true"
                    class="close-button Overlay-closeButton"
                  >
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      class="octicon octicon-x"
                    >
                      <path
                        d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div data-view-component="true" class="Overlay-body">
              <!-- '"` --><!-- </textarea></xmp> -->
              <form
                id="code-search-feedback-form"
                data-turbo="false"
                action="/search/feedback"
                accept-charset="UTF-8"
                method="post"
              >
                <input
                  type="hidden"
                  name="authenticity_token"
                  value="BUofg4jfFUoY4ZONyQYnhhljhZHi7IB0LCZJctTtLyhT0sYTD97VAe6n7uNz5GJNcol4ckioobmQ-z6n29xl4Q"
                />
                <p>We read every piece of feedback, and take your input very seriously.</p>
                <textarea
                  name="feedback"
                  class="form-control width-full mb-2"
                  style="height: 120px"
                  id="feedback"
                ></textarea>
                <input
                  name="include_email"
                  id="include_email"
                  aria-label="Include my email address so I can be contacted"
                  class="form-control mr-2"
                  type="checkbox"
                />
                <label for="include_email" style="font-weight: normal"
                  >Include my email address so I can be contacted</label
                >
              </form>
            </div>
            <div data-view-component="true" class="Overlay-footer Overlay-footer--alignEnd">
              <button
                data-close-dialog-id="feedback-dialog"
                type="button"
                data-view-component="true"
                class="btn"
              >
                Cancel
              </button>
              <button
                form="code-search-feedback-form"
                data-action="click:search-input#submitFeedback"
                type="submit"
                data-view-component="true"
                class="btn-primary btn"
              >
                Submit feedback
              </button>
            </div>
          </modal-dialog>
        </div>

        <div class="Overlay--hidden Overlay-backdrop--center" data-modal-dialog-overlay="">
          <modal-dialog
            data-target="search-input.customScopesModalDialog"
            data-action="close:search-input#handleDialogClose cancel:search-input#handleDialogClose"
            role="dialog"
            id="custom-scopes-dialog"
            aria-modal="true"
            aria-describedby="custom-scopes-dialog-description"
            data-view-component="true"
            class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade"
          >
            <div data-view-component="true" class="Overlay-header">
              <div class="Overlay-headerContentWrap">
                <div class="Overlay-titleWrap">
                  <h1 class="Overlay-title">Create saved search</h1>
                </div>
                <div class="Overlay-actionWrap">
                  <button
                    data-close-dialog-id="custom-scopes-dialog"
                    aria-label="Close"
                    type="button"
                    data-view-component="true"
                    class="close-button Overlay-closeButton"
                  >
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      class="octicon octicon-x"
                    >
                      <path
                        d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div data-view-component="true" class="Overlay-body">
              <!-- '"` --><!-- </textarea></xmp> -->
              <form
                id="custom-scopes-dialog-form"
                data-turbo="false"
                action="/search/custom_scopes"
                accept-charset="UTF-8"
                method="post"
              >
                <input
                  type="hidden"
                  name="authenticity_token"
                  value="QKegmaiajgj0w081tUT5l_wPgzt6xwZ7NC9lzBSQDW36gS_wtB_q_qQK89fKUZpQrB7j0eYm6Xi88sFZr8tJ_w"
                />
                <div data-target="search-input.customScopesModalDialogFlash"></div>

                <input
                  type="hidden"
                  id="custom_scope_id"
                  name="custom_scope_id"
                  data-target="search-input.customScopesIdField"
                />

                <p>
                  Use a saved search to filter your results. For example, to restrict your search to
                  a few repositories:<br /><code
                    >repo:JonathanXDR/repo-1 OR repo:JonathanXDR/repo-2 OR ...</code
                  >
                </p>

                <div class="form-group">
                  <label for="custom_scope_name">Name *</label>
                  <auto-check src="/search/custom_scopes/check_name" required>
                    <input
                      type="text"
                      name="custom_scope_name"
                      id="custom_scope_name"
                      data-target="search-input.customScopesNameField"
                      class="form-control"
                      autocomplete="off"
                      placeholder="github-ruby"
                      required
                      maxlength="50"
                      spellcheck="false"
                    />
                    <input
                      type="hidden"
                      value="jjFTFZUe0KPf2IrouYtXSX1Q16b1DYfxQOolmfWfVwuoeJcfNF6Kzjw7_ByanPC8NGmHid6jvP_4AJBxMfJStA"
                      data-csrf="true"
                    />
                  </auto-check>
                </div>

                <div class="form-group">
                  <label for="custom_scope_query">Query *</label>
                  <input
                    type="text"
                    name="custom_scope_query"
                    id="custom_scope_query"
                    data-target="search-input.customScopesQueryField"
                    class="form-control"
                    autocomplete="off"
                    placeholder="org:github language:ruby"
                    required
                    maxlength="500"
                  />
                </div>
              </form>
            </div>
            <div data-view-component="true" class="Overlay-footer Overlay-footer--alignEnd">
              <button
                data-close-dialog-id="custom-scopes-dialog"
                type="button"
                data-view-component="true"
                class="btn"
              >
                Cancel
              </button>
              <button
                form="custom-scopes-dialog-form"
                data-action="click:search-input#saveCustomScope"
                data-target="search-input.customScopesSubmitButton"
                type="submit"
                data-view-component="true"
                class="btn-primary btn"
              >
                Create saved search
              </button>
            </div>
          </modal-dialog>
        </div>

        <div class="Overlay--hidden Overlay-backdrop--center" data-modal-dialog-overlay="">
          <modal-dialog
            data-target="search-input.customScopeDeletionModalDialog"
            data-action="close:search-input#handleDialogClose cancel:search-input#handleDialogClose"
            role="dialog"
            id="custom-scope-deletion-dialog"
            aria-modal="true"
            aria-describedby="custom-scope-deletion-dialog-description"
            data-view-component="true"
            class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade"
          >
            <div data-view-component="true" class="Overlay-header">
              <div class="Overlay-headerContentWrap">
                <div class="Overlay-titleWrap">
                  <h1 class="Overlay-title">Delete saved search</h1>
                </div>
                <div class="Overlay-actionWrap">
                  <button
                    data-close-dialog-id="custom-scope-deletion-dialog"
                    aria-label="Close"
                    type="button"
                    data-view-component="true"
                    class="close-button Overlay-closeButton"
                  >
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      class="octicon octicon-x"
                    >
                      <path
                        d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div data-view-component="true" class="Overlay-body">
              <input type="hidden" data-target="search-input.customScopeDeletionIdField" />

              <p class="pt-3">
                Are you sure you want to delete the saved search named "<span
                  data-target="search-input.customScopeDeletionName"
                ></span
                >"?
              </p>
            </div>
            <div data-view-component="true" class="Overlay-footer Overlay-footer--alignEnd">
              <button
                data-close-dialog-id="custom-scope-deletion-dialog"
                type="button"
                data-view-component="true"
                class="btn"
              >
                Cancel
              </button>
              <button
                data-action="click:search-input#deleteCustomScope"
                type="button"
                data-view-component="true"
                class="btn-danger btn"
              >
                Delete saved search
              </button>
            </div>
          </modal-dialog>
        </div>
      </div>
    </search-input>

    <div class="Header-item mr-0 mr-md-3 flex-order-1 flex-md-order-none">
      <notification-indicator
        data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6NzM1NTk1MTYiLCJ0IjoxNjc5MTc4Mzk5fQ==--e383ea502af3868684965168208f02793ef8ad15ff058ae5a0ca4d966eb0da49"
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
              value="w31H085H5_VtqC2sN0oupVgDsANc1BNrmTn6wzfnGK3soGVFz6gt6YO0FLJriGDvLES0EUrP3AXdcj_yy2199A"
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
            hidden
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
  </header>
</template>

<script lang="ts" src="./NavBar.ts"></script>
<style scoped src="./NavBar.css"></style>
