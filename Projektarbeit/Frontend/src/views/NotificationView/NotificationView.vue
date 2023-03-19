<template>
  <div
    class="d-flex flex-column flex-md-row pb-sm-3 px-sm-3 p-0 height-full width-full js-notifications-container"
    data-url="/notifications?query=is%3Adone"
  >
    <div class="d-block d-md-none py-2 px-2 py-md-0 px-sm-0 p-md-0">
      <div class="d-flex">
        <details
          class="details-reset details-overlay flex-auto flex-shrink-0 mr-2"
          id="notifications-tabs-nav"
        >
          <summary aria-haspopup="true" data-view-component="true" class="btn width-full">
            <div class="d-flex">
              <span class="flex-auto"> Done </span>
              <div class="flex-self-center dropdown-caret"></div>
            </div>
          </summary>
          <div class="SelectMenu SelectMenu--hasFilter">
            <div class="SelectMenu-modal">
              <header class="SelectMenu-header">
                <h3 class="SelectMenu-title">Switch inbox</h3>
                <button
                  class="SelectMenu-closeButton"
                  type="button"
                  data-toggle-for="notifications-tabs-nav"
                >
                  <svg
                    width="12"
                    height="16"
                    viewBox="0 0 12 16"
                    class="octicon octicon-x"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
                    ></path>
                  </svg>
                </button>
              </header>
              <div class="SelectMenu-list text-normal">
                <a role="menuitem" href="/notifications" class="SelectMenu-item d-flex">
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="octicon octicon-inbox mr-2"
                  >
                    <path
                      d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"
                    ></path>
                  </svg>
                  <span class="flex-auto">Inbox</span>
                  <span class="count text-normal">3</span>
                </a>
                <a href="/notifications?query=is%3Asaved" class="SelectMenu-item d-flex">
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="octicon octicon-bookmark mr-2"
                  >
                    <path
                      d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                    ></path>
                  </svg>
                  <span class="flex-auto">Saved</span>
                </a>
                <a href="/notifications?query=is%3Adone" class="SelectMenu-item d-flex">
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="octicon octicon-check mr-2"
                  >
                    <path
                      d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
                    ></path>
                  </svg>
                  <span class="flex-auto">Done</span>
                </a>
                <div class="SelectMenu-divider"></div>
                <a href="/notifications?query=reason%3Aassign" class="SelectMenu-item d-flex">
                  <span class="flex-auto">🎯 Assigned</span>
                  <span class="count text-normal"></span>
                </a>
                <a
                  href="/notifications?query=reason%3Aparticipating"
                  class="SelectMenu-item d-flex"
                >
                  <span class="flex-auto">💬 Participating</span>
                  <span class="count text-normal"></span>
                </a>
                <a href="/notifications?query=reason%3Amention" class="SelectMenu-item d-flex">
                  <span class="flex-auto">✋ Mentioned</span>
                  <span class="count text-normal"></span>
                </a>
                <a href="/notifications?query=reason%3Ateam-mention" class="SelectMenu-item d-flex">
                  <span class="flex-auto">🙌 Team mentioned</span>
                  <span class="count text-normal"></span>
                </a>
                <a
                  href="/notifications?query=reason%3Areview-requested"
                  class="SelectMenu-item d-flex"
                >
                  <span class="flex-auto">👀 Review requested</span>
                  <span class="count text-normal"></span>
                </a>
                <div class="SelectMenu-divider"></div>
                <a
                  href="/notifications?query=repo%3AJonathanXDR%2FApplication-Website-Backend"
                  class="SelectMenu-item d-flex"
                >
                  <span class="flex-auto">JonathanXDR/Application-Website-Backend</span>
                  <span class="count text-normal">3</span>
                </a>
                <a
                  href="/notifications?query=repo%3AJonathanXDR%2FZukunftstag-Frontend"
                  class="SelectMenu-item d-flex"
                >
                  <span class="flex-auto">JonathanXDR/Zukunftstag-Frontend</span>
                  <span class="count text-normal"></span>
                </a>
                <a
                  href="/notifications?query=repo%3AJonathanXDR%2FUEK-294-Portfolio"
                  class="SelectMenu-item d-flex"
                >
                  <span class="flex-auto">JonathanXDR/UEK-294-Portfolio</span>
                  <span class="count text-normal"></span>
                </a>
                <a
                  href="/notifications?query=repo%3AJonathanXDR%2FUEK-210-Portfolio"
                  class="SelectMenu-item d-flex"
                >
                  <span class="flex-auto">JonathanXDR/UEK-210-Portfolio</span>
                  <span class="count text-normal"></span>
                </a>
                <a
                  href="/notifications?query=repo%3AJonathanXDR%2FApplication-Website-Backend-Clever-Cloud"
                  class="SelectMenu-item d-flex"
                >
                  <span class="flex-auto"
                    >JonathanXDR/Application-Website-Backend-Clever-Cloud</span
                  >
                  <span class="count text-normal"></span>
                </a>
                <a
                  href="/notifications?query=repo%3AJonathanXDR%2FICT-Trade-17-Regional-Preparation-Tasks-2023"
                  class="SelectMenu-item d-flex"
                >
                  <span class="flex-auto"
                    >JonathanXDR/ICT-Trade-17-Regional-Preparation-Tasks-2023</span
                  >
                  <span class="count text-normal"></span>
                </a>
              </div>
            </div>
          </div>
        </details>

        <details class="dropdown details-reset details-overlay">
          <summary aria-haspopup="true" data-view-component="true" class="btn">
            All
            <div class="dropdown-caret"></div>
          </summary>
          <ul class="dropdown-menu dropdown-menu-sw">
            <li>
              <a class="dropdown-item" href="/notifications?query=is%3Adone+is%3Aread+is%3Aunread"
                >All</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="/notifications?query=is%3Adone+is%3Aunread">Unread</a>
            </li>
          </ul>
        </details>
      </div>
    </div>

    <div
      class="d-none d-md-flex col-12 col-sm-12 col-md-3 col-lg-2 col-xl-2 flex-shrink-0 flex-grow-0"
      data-pjax=""
    >
      <nav
        class="color-bg-default col-12 height-full notification-navigation pt-3 pb-6"
        aria-label="Notifications"
      >
        <ul class="filter-list js-notification-inboxes">
          <li>
            <a href="/notifications" class="filter-item">
              <span class="mr-2 text-center d-inline-block" style="width: 14px">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon octicon-inbox"
                >
                  <path
                    d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"
                  ></path>
                </svg>
              </span>
              <span class="count text-normal">3</span>
              Inbox
            </a>
          </li>
          <li>
            <a href="/notifications?query=is%3Asaved" class="filter-item">
              <span class="mr-2 text-center d-inline-block" style="width: 14px">
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
              </span>
              Saved
            </a>
          </li>
          <li>
            <a href="/notifications?query=is%3Adone" class="filter-item selected">
              <span class="mr-2 text-center d-inline-block" style="width: 14px">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon octicon-check"
                >
                  <path
                    d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
                  ></path>
                </svg>
              </span>
              Done
            </a>
          </li>
        </ul>
        <hr />
        <div class="border-0 py-2 m-0 d-flex" style="padding-right: 7px">
          <span class="h6 color-fg-muted pl-2 flex-auto">Filters</span>
          <span class="notification-configure-filters">
            <details
              class="details-reset details-overlay details-overlay-dark lh-default color-fg-default js-custom-inbox-details d-none d-md-block"
            >
              <summary
                class="btn-link f6 ml-2 d-block"
                aria-label="Customize filters"
                role="button"
              >
                <svg
                  class="octicon octicon-gear"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"
                  ></path>
                </svg>
              </summary>
              <details-dialog
                aria-label="Filters"
                class="Box Box--overlay d-flex flex-column anim-fade-in fast Box-overlay--wide js-custom-inbox-dialog"
                src="/notifications/beta/custom_inboxes_dialog"
                role="dialog"
                aria-modal="true"
                tabindex="-1"
              >
                <div class="Box-header">
                  <button
                    class="Box-btn-octicon btn-octicon float-right"
                    type="button"
                    aria-label="Close dialog"
                    data-close-dialog=""
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
                  <h3 class="Box-title">Filters</h3>
                </div>

                <div class="overflow-y-auto js-custom-inbox-dialog-spinner">
                  <svg
                    style="box-sizing: content-box; color: var(--color-icon-primary)"
                    width="32"
                    height="32"
                    viewBox="0 0 16 16"
                    fill="none"
                    data-view-component="true"
                    class="my-3 mx-auto d-block anim-rotate"
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
                </div>
                <div class="js-custom-inbox-dialog-content overflow-y-auto"></div>
              </details-dialog>
            </details>
          </span>
        </div>
        <ul class="filter-list js-notification-sidebar-filters">
          <li>
            <a href="/notifications?query=reason%3Aassign" class="filter-item">
              <span class="count text-normal"></span>
              🎯 Assigned
            </a>
          </li>
          <li>
            <a href="/notifications?query=reason%3Aparticipating" class="filter-item">
              <span class="count text-normal"></span>
              💬 Participating
            </a>
          </li>
          <li>
            <a href="/notifications?query=reason%3Amention" class="filter-item">
              <span class="count text-normal"></span>
              ✋ Mentioned
            </a>
          </li>
          <li>
            <a href="/notifications?query=reason%3Ateam-mention" class="filter-item">
              <span class="count text-normal"></span>
              🙌 Team mentioned
            </a>
          </li>
          <li>
            <a href="/notifications?query=reason%3Areview-requested" class="filter-item">
              <span class="count text-normal"></span>
              👀 Review requested
            </a>
          </li>
        </ul>

        <div class="js-notification-sidebar-repositories">
          <hr />
          <p class="h6 border-0 color-fg-muted py-2 pl-2 m-0">Repositories</p>
          <ul class="filter-list">
            <li>
              <a
                href="/notifications?query=repo%3AJonathanXDR%2FApplication-Website-Backend"
                class="filter-item"
              >
                <img
                  class="avatar avatar-small mr-2 v-align-middle avatar-user"
                  src="https://avatars.githubusercontent.com/u/73559516?s=32&amp;v=4"
                  width="16"
                  height="16"
                  alt="@JonathanXDR"
                />
                <span class="count text-normal">3</span>
                JonathanXDR/Application-Website-Backend
              </a>
            </li>
            <li>
              <a
                href="/notifications?query=repo%3AJonathanXDR%2FZukunftstag-Frontend"
                class="filter-item"
              >
                <img
                  class="avatar avatar-small mr-2 v-align-middle avatar-user"
                  src="https://avatars.githubusercontent.com/u/73559516?s=32&amp;v=4"
                  width="16"
                  height="16"
                  alt="@JonathanXDR"
                />
                <span class="count text-normal"></span>
                JonathanXDR/Zukunftstag-Frontend
              </a>
            </li>
            <li>
              <a
                href="/notifications?query=repo%3AJonathanXDR%2FUEK-294-Portfolio"
                class="filter-item"
              >
                <img
                  class="avatar avatar-small mr-2 v-align-middle avatar-user"
                  src="https://avatars.githubusercontent.com/u/73559516?s=32&amp;v=4"
                  width="16"
                  height="16"
                  alt="@JonathanXDR"
                />
                <span class="count text-normal"></span>
                JonathanXDR/UEK-294-Portfolio
              </a>
            </li>
            <li>
              <a
                href="/notifications?query=repo%3AJonathanXDR%2FUEK-210-Portfolio"
                class="filter-item"
              >
                <img
                  class="avatar avatar-small mr-2 v-align-middle avatar-user"
                  src="https://avatars.githubusercontent.com/u/73559516?s=32&amp;v=4"
                  width="16"
                  height="16"
                  alt="@JonathanXDR"
                />
                <span class="count text-normal"></span>
                JonathanXDR/UEK-210-Portfolio
              </a>
            </li>
            <li>
              <a
                href="/notifications?query=repo%3AJonathanXDR%2FApplication-Website-Backend-Clever-Cloud"
                class="filter-item"
              >
                <img
                  class="avatar avatar-small mr-2 v-align-middle avatar-user"
                  src="https://avatars.githubusercontent.com/u/73559516?s=32&amp;v=4"
                  width="16"
                  height="16"
                  alt="@JonathanXDR"
                />
                <span class="count text-normal"></span>
                JonathanXDR/Application-Website-Backend-Clever-Cloud
              </a>
            </li>
            <li>
              <a
                href="/notifications?query=repo%3AJonathanXDR%2FICT-Trade-17-Regional-Preparation-Tasks-2023"
                class="filter-item"
              >
                <img
                  class="avatar avatar-small mr-2 v-align-middle avatar-user"
                  src="https://avatars.githubusercontent.com/u/73559516?s=32&amp;v=4"
                  width="16"
                  height="16"
                  alt="@JonathanXDR"
                />
                <span class="count text-normal"></span>
                JonathanXDR/ICT-Trade-17-Regional-Preparation-Tasks-2023
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div class="pt-2 pl-2">
          <details class="dropdown details-reset details-overlay d-inline-block">
            <summary
              aria-haspopup="true"
              data-view-component="true"
              class="Link--secondary btn-link"
            >
              Manage notifications
              <div class="dropdown-caret"></div>
            </summary>
            <ul class="dropdown-menu dropdown-menu-ne ml-n2" style="width: 175px">
              <li>
                <a class="dropdown-item" href="/settings/notifications">Notification settings</a>
              </li>
              <li>
                <a class="dropdown-item" href="/watching">Watched repositories</a>
              </li>
              <li>
                <a class="dropdown-item" href="/notifications/subscriptions">Subscriptions</a>
              </li>
            </ul>
          </details>
        </div>
      </nav>
    </div>

    <div class="col-12 col-sm-12 col-md-9 col-lg-10 col-xl-10">
      <div class="flex-auto pl-md-3 pl-0 js-check-all-container min-width-0 pt-0 pt-md-3">
        <div
          class="d-flex flex-items-center mt-0 mb-md-3 mb-0 px-2 px-sm-0 flex-sm-wrap flex-md-wrap flex-lg-wrap gap-3 flex-justify-end"
        >
          <div class="d-flex" style="flex-grow: 1">
            <div class="d-none d-md-block col-12 col-sm-7">
              <notification-filter data-catalyst="">
                <form
                  class="ml-0 subnav-search flex-auto js-navigation-container"
                  role="search"
                  data-pjax="true"
                  data-target="notification-filter.searchForm"
                  data-action="
            navigation:keydown:notification-filter#handleFormKeydownEvent
            navigation:open:notification-filter#handleSelectedSuggestionResultEvent
          "
                  data-turbo="false"
                  action="/notifications?query=is%3Adone"
                  accept-charset="UTF-8"
                  method="get"
                >
                  <input
                    type="text"
                    name="query"
                    value="is:done "
                    class="form-control subnav-search-input width-full subnav-search-input-wide input-contrast js-navigation-enable js-notification-search-input"
                    placeholder="Filter notifications"
                    aria-label="Filter notifications"
                    autocomplete="off"
                    data-target="notification-filter.searchInput"
                    data-action="
        input:notification-filter#updateFilterSuggestionResults
        focusin:notification-filter#handleInputFocusIn
        focusout:delay:notification-filter#handleSearchBlur
        keydown:notification-filter#inputKey
      "
                    data-initial-value="is:done"
                    data-default-value=""
                    data-suggested-repositories-path="/notifications/beta/suggestions/repositories"
                    data-suggested-owners-path="/notifications/beta/suggestions/owners"
                    data-suggested-authors-path="/notifications/beta/suggestions/authors"
                    data-suggestable-qualifiers='[{"value":"repo:","description":"filter by repository"},{"value":"is:","description":"filter by status or discussion type"},{"value":"reason:","description":"filter by notification reason"},{"value":"author:","description":"filter by notification author"},{"value":"org:","description":"filter by organization"}]'
                    data-suggestable-reasons='[{"value":"assign"},{"value":"author"},{"value":"comment"},{"value":"invitation"},{"value":"manual"},{"value":"mention"},{"value":"review-requested"},{"value":"security-advisory-credit"},{"value":"security-alert"},{"value":"state-change"},{"value":"subscribed"},{"value":"team-mention"},{"value":"ci-activity"},{"value":"approval-requested"}]'
                    data-suggestable-types='[{"value":"read"},{"value":"unread"},{"value":"done"},{"value":"check-suite"},{"value":"commit"},{"value":"gist"},{"value":"release"},{"value":"repository-invitation"},{"value":"repository-vulnerability-alert"},{"value":"repository-advisory"},{"value":"team-discussion"},{"value":"discussion"},{"value":"issue-or-pull-request"}]'
                    data-filter-support-url="https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#custom-filter-limitations"
                  />
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="octicon octicon-filter subnav-search-icon"
                  >
                    <path
                      d="M.75 3h14.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1 0-1.5ZM3 7.75A.75.75 0 0 1 3.75 7h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 3 7.75Zm3 4a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"
                    ></path>
                  </svg>
                  <button
                    type="button"
                    class="position-absolute top-0 right-0 mt-2 mr-1 btn-link issues-reset-query"
                    aria-label="Clear filters"
                    data-target="notification-filter.clearButton"
                    data-action="click:notification-filter#clear"
                  >
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      class="octicon octicon-x issues-reset-query-icon"
                    >
                      <path
                        d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"
                      ></path>
                    </svg>
                  </button>

                  <div
                    class="card-filter-autocomplete-dropdown color-bg-default border rounded-2 mt-1 position-absolute overflow-auto color-bg-default hide-sm width-full"
                    data-target="notification-filter.autocompleteDropdown"
                    hidden
                  >
                    <div class="px-2 py-1">
                      <div data-target="notification-filter.autocompleteResults"></div>
                    </div>
                  </div></form
              ></notification-filter>
            </div>
          </div>

          <div class="d-flex flex-shrink-0 text-right d-lg-flex gap-4 pl-3">
            <div class="d-none d-md-block flex-shrink-0 text-right">
              <div
                class="js-socket-channel js-updatable-content"
                data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6NzM1NTk1MTYiLCJ0IjoxNjc5MjM5OTA1fQ==--6026f8e6bf7670bb85e391116c334752aaa3e4557a922617995cc41ee109eba8"
                data-url="/notifications/beta/recent_notifications_alert?query=is%3Adone&amp;since=1679239904"
              ></div>
            </div>

            <div class="d-md-none mx-auto mb-2">
              <div
                class="js-socket-channel js-updatable-content"
                data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6NzM1NTk1MTYiLCJ0IjoxNjc5MjM5OTA2fQ==--c4f92ccdb823e00808388f24264aa532f6c6f275ba331331c7b04c914ea6edd4"
                data-url="/notifications/beta/recent_notifications_alert?query=is%3Adone&amp;since=1679239904"
              ></div>
            </div>
          </div>
        </div>

        <div
          class="js-bulk-action-toasts mb-3"
          data-job-url="/_jobs/mark-all-notifications-from-query-73559516"
        >
          <template class="js-bulk-actions-processing-toast">
            <div
              class="position-fixed bottom-0 left-0 ml-5 mb-5 anim-fade-in fast Toast Toast--loading"
              role="log"
              style="z-index: 101"
            >
              <span class="Toast-icon">
                <svg
                  class="Toast--spinner"
                  viewBox="0 0 32 32"
                  width="18"
                  height="18"
                  aria-hidden="true"
                >
                  <path
                    fill="#959da5"
                    d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"
                  ></path>
                </svg>
              </span>
              <span class="Toast-content">Bulk actions currently being processed.</span>
            </div>
          </template>

          <template class="js-bulk-actions-already-processing-toast">
            <div
              class="position-fixed bottom-0 left-0 ml-5 mb-5 anim-fade-in fast Toast Toast--loading"
              role="log"
              style="z-index: 101"
            >
              <span class="Toast-icon">
                <svg
                  class="Toast--spinner"
                  viewBox="0 0 32 32"
                  width="18"
                  height="18"
                  aria-hidden="true"
                >
                  <path
                    fill="#959da5"
                    d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"
                  ></path>
                </svg>
              </span>
              <span class="Toast-content"
                >We're still processing your last request. Please wait for that to complete before
                submitting a new request.</span
              >
            </div>
          </template>

          <template class="js-bulk-actions-failed-toast">
            <div
              class="position-fixed bottom-0 left-0 ml-5 mb-5 anim-fade-in fast Toast Toast--error"
              role="log"
              style="z-index: 101"
            >
              <span class="Toast-icon">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon octicon-stop"
                >
                  <path
                    d="M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                  ></path>
                </svg>
              </span>
              <span class="Toast-content">Bulk action processing failed, please try again.</span>
              <button class="Toast-dismissButton" type="button" aria-label="Close">
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
          </template>

          <template class="js-bulk-actions-succeeded-toast">
            <div
              class="position-fixed bottom-0 left-0 ml-5 mb-5 anim-fade-in fast Toast Toast--success"
              role="log"
              style="z-index: 101"
            >
              <span class="Toast-icon">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon octicon-check"
                >
                  <path
                    d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
                  ></path>
                </svg>
              </span>
              <span class="Toast-content">Bulk action processing complete.</span>
              <button class="Toast-dismissButton" type="button" aria-label="Close">
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
          </template>

          <template class="js-bulk-actions-unsupported-query-toast">
            <div
              class="position-fixed bottom-0 left-0 ml-5 mb-5 anim-fade-in fast Toast Toast--error"
              role="log"
              style="z-index: 101"
            >
              <span class="Toast-icon">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon octicon-stop"
                >
                  <path
                    d="M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                  ></path>
                </svg>
              </span>
              <span class="Toast-content"
                >Bulk actions are not currently supported for this query.</span
              >
              <button class="Toast-dismissButton" type="button" aria-label="Close">
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
          </template>
        </div>

        <div class="Box mx-0 mt-0 mb-3 notifications-list js-notifications-list">
          <div class="Box-header d-flex flex-items-center py-2 pl-md-0 pl-3" style="height: 52px">
            <label class="h6 pl-0 pl-md-4">
              <input
                class="mr-1 js-notifications-mark-all-prompt"
                type="checkbox"
                data-check-all=""
                autocomplete="off"
              />

              <span class="js-select-all-text"> Select all </span>
              <span class="js-count-selected-text" hidden>
                <span data-check-all-count="">0</span> selected
              </span>
              <span class="js-all-count-selected-text" hidden> 136 selected </span>
            </label>

            <div class="ml-3 js-notification-action js-notifications-mark-selected-actions" hidden>
              <div class="js-notification-bulk-action">
                <form
                  data-status="read"
                  data-update="true"
                  data-turbo="false"
                  action="/notifications/beta/unarchive"
                  accept-charset="UTF-8"
                  method="post"
                >
                  <input
                    type="hidden"
                    name="authenticity_token"
                    value="3Q_5jxuNHY_mINpQ5CB3YjczZU9hyHT83qwzDqaYZMciFCBsyhKvetOdfK_QMIW8IUbP70S7nzqkg_cV0_W8gw"
                  />
                  <button type="submit" title="Move to inbox" class="btn btn-sm" data-hotkey="I,y">
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      class="octicon octicon-arrow-right"
                    >
                      <path
                        d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"
                      ></path>
                    </svg>
                    Move to inbox
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div class="Box-body p-0" data-hpc="">
            <ul
              class="list-style-none color-bg-subtle archived-notifications-tab js-navigation-container js-navigation-container-no-mouse js-active-navigation-container"
              data-pjax=""
            >
              <li
                class="notifications-list-item p-0 pl-2 pb-2 pb-md-0 position-relative border-0 js-notifications-list-item js-navigation-item border-bottom color-border-muted notification-archived notification-unsubscribed"
                data-notification-id="NT_kwDOBGJt3LM1ODEzMDcxNTYwOjczNTU5NTE2"
              >
                <div class="d-flex flex-column flex-md-row flex-md-items-center">
                  <div class="d-flex flex-row flex-md-1">
                    <div
                      class="d-flex flex-column flex-sm-row flex-self-start flex-items-center"
                      style="margin-top: 5px"
                    >
                      <div
                        class="notification-list-item-unread-indicator circle d-none d-md-block"
                      ></div>

                      <label class="p-2 clearfix">
                        <input
                          class="float-left js-notification-bulk-action-check-item"
                          type="checkbox"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1ODEzMDcxNTYwOjczNTU5NTE2"
                          aria-labelledby="notification_NT_kwDOBGJt3LM1ODEzMDcxNTYwOjczNTU5NTE2_link"
                          data-check-all-item=""
                          autocomplete="off"
                        />
                      </label>
                    </div>

                    <a
                      class="d-flex flex-items-center flex-auto min-width-0 no-underline py-2 js-navigation-open notification-list-item-link wb-break-word"
                      href="https://github.com/advisories/GHSA-xvch-5gv4-984h/dependabot?notification_referrer_id=NT_kwDOBGJt3LM1ODEzMDcxNTYwOjczNTU5NTE2&amp;notifications_query=is%3Adone&amp;query=user%3AJonathanXDR"
                      data-hydro-click='{"event_type":"notifications.read","payload":{"list_type":"User","list_id":"73559516","thread_type":"SecurityAdvisory","thread_id":"13288","comment_type":"VulnerabilityAlertingEvent","comment_id":"","version":"V2","originating_url":"https://github.com/notifications?query=is%3Adone","user_id":73559516}}'
                      data-hydro-click-hmac="e6443ecb2acb52e7ebb67d1b0fccb5cf18c68c988869f78eb232031e4721d7e0"
                    >
                      <div
                        class="d-flex flex-column flex-md-row mr-2 flex-self-start flex-items-center"
                      >
                        <div class="flex-shrink-0 flex-self-start text-center" style="width: 16px">
                          <svg
                            class="octicon octicon-alert"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                          >
                            <path
                              d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                            ></path>
                          </svg>
                        </div>

                        <div
                          class="notification-list-item-unread-indicator circle d-md-none d-block mt-1"
                        ></div>
                      </div>

                      <div
                        class="d-flex flex-column flex-auto"
                        id="notification_NT_kwDOBGJt3LM1ODEzMDcxNTYwOjczNTU5NTE2_link"
                      >
                        <div class="d-flex">
                          <p class="m-0 f6 flex-auto">GHSA-xvch-5gv4-984h</p>
                          <p
                            class="note m-0 pr-2 d-block d-md-none color-fg-muted text-right flex-shrink-0"
                          >
                            <relative-time
                              datetime="2023-03-09T11:21:22Z"
                              class="no-wrap"
                              title="Mar 9, 2023, 12:21 PM GMT+1"
                              >Mar 9, 2023</relative-time
                            >
                            <span
                              class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                              style="width: 16px"
                            >
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="octicon octicon-bookmark notification-is-starred-icon ml-1 color-fg-severe"
                              >
                                <path
                                  d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                                ></path>
                              </svg>
                            </span>
                          </p>
                        </div>
                        <p class="m-0 text-normal pr-2 pr-md-0 markdown-title">
                          A security vulnerability in minimist affects at least one of your
                          repositories
                        </p>
                      </div>
                    </a>
                  </div>

                  <div class="d-flex flex-row flex-md-row-reverse">
                    <p
                      class="note m-0 d-md-block d-none color-fg-muted text-right pr-3 flex-shrink-0 notification-list-item-hide-on-hover"
                      style="width: 140px; line-height: 20px"
                    >
                      <relative-time
                        datetime="2023-03-09T11:21:22Z"
                        class="no-wrap"
                        title="Mar 9, 2023, 12:21 PM GMT+1"
                        >Mar 9, 2023</relative-time
                      >
                      <span
                        class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                        style="width: 16px"
                      >
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          class="octicon octicon-bookmark v-align-middle"
                        >
                          <path
                            d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                          ></path>
                        </svg>
                      </span>
                    </p>

                    <div
                      style="width: 70px; min-width: 70px"
                      class="AvatarStack AvatarStack--right mr-0 mr-sm-3 mr-md-0 mr-lg-0 clearfix d-inline-block"
                    >
                      <div class="AvatarStack-body">
                        <a
                          class="avatar avatar-user"
                          data-hovercard-type="organization"
                          data-hovercard-url="/orgs/github/hovercard"
                          data-octo-click="hovercard-link-click"
                          data-octo-dimensions="link_type:self"
                          href="/github"
                          ><img
                            src="https://avatars.githubusercontent.com/u/9919?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@github"
                        /></a>
                      </div>
                    </div>

                    <span class="f6 flex-self-center ml-2 px-2 flex-shrink-0">security alert</span>
                  </div>
                </div>

                <ul
                  class="notification-list-item-actions d-none position-absolute top-0 bottom-0 right-0 list-style-none mr-2 d-flex flex-items-center"
                >
                  <li class="js-notification-action notification-action-mark-unarchived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unarchive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="Thjo2TOPt-87sx7J9VDk-g0URd16vfnlig0RrcLkn5axAzE64hAFGg4OuDbBQBYkG2HvfV_OEiPwItW2t4lH0g"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1ODEzMDcxNTYwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Move to inbox" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-arrow-right v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-mark-archived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/archive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="Hn1zrOXFjZA3OkvANbu3gZTieFmOZPYotRSZE3uAoBfYXpxmJ2hgprJlUewPdjDoHRY_2TlxBRVjHH75YrxNDQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1ODEzMDcxNTYwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Done" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-check v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unsubscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="unsubscribed"
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unsubscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="--tcauh-e53bVwbWb5UFyU66ZhzarjS2RfrZbavXCYS8lNPqO-Z4ES6uGryyNH96Ay78UFWhnclDkhLk3-10YQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1ODEzMDcxNTYwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsubscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-subscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="subscribed"
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/subscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="iK4uAOJInTp8-chtqMfUKvlKXoGO9WWj7Cp7De-CVp8wESp985JQAVLkxaR-8NOBuWUI8_wukaa8ngGroUVA3g"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1ODEzMDcxNTYwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Subscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-star">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="starred"
                        data-turbo="false"
                        action="/notifications/beta/star"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="HnjuUycZSLnUzgRKRqMkFLFH0AgQdKbdedN7NvrXhd9N_JgWgvmcRbKZjbQtxes4Uksusb2XbR5tnoJnCexNOg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1ODEzMDcxNTYwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Save" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unstar">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="unstarred"
                        data-turbo="false"
                        action="/notifications/beta/unstar"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="zH83Ljyx8VVT39Sfq21PC1RQiipditAcb0dZuNN021oXb-z5CbhlTc3N-qO5r394dW61XGzkCWc2EOPw0wNFtA"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1ODEzMDcxNTYwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsave" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M1.19 1.143 4.182 3.31l.014.01 8.486 6.145.014.01 2.994 2.168a.75.75 0 1 1-.88 1.214L13 11.547v2.703a.75.75 0 0 1-1.206.596L8 11.944l-3.794 2.902A.75.75 0 0 1 3 14.25V4.305L.31 2.357a.75.75 0 1 1 .88-1.214ZM4.5 5.39v7.341l3.044-2.328a.75.75 0 0 1 .912 0l3.044 2.328V10.46ZM5.865 1h5.385c.966 0 1.75.784 1.75 1.75v3.624a.75.75 0 0 1-1.5 0V2.75a.25.25 0 0 0-.25-.25H5.865a.75.75 0 0 1 0-1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>
                </ul>
              </li>

              <li
                class="notifications-list-item p-0 pl-2 pb-2 pb-md-0 position-relative border-0 js-notifications-list-item js-navigation-item border-bottom color-border-muted notification-archived"
                data-notification-id="NT_kwDOBGJt3LM1ODA3OTkzMDg0OjczNTU5NTE2"
              >
                <div class="d-flex flex-column flex-md-row flex-md-items-center">
                  <div class="d-flex flex-row flex-md-1">
                    <div
                      class="d-flex flex-column flex-sm-row flex-self-start flex-items-center"
                      style="margin-top: 5px"
                    >
                      <div
                        class="notification-list-item-unread-indicator circle d-none d-md-block"
                      ></div>

                      <label class="p-2 clearfix">
                        <input
                          class="float-left js-notification-bulk-action-check-item"
                          type="checkbox"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1ODA3OTkzMDg0OjczNTU5NTE2"
                          aria-labelledby="notification_NT_kwDOBGJt3LM1ODA3OTkzMDg0OjczNTU5NTE2_link"
                          data-check-all-item=""
                          autocomplete="off"
                        />
                      </label>
                    </div>

                    <a
                      class="d-flex flex-items-center flex-auto min-width-0 no-underline py-2 js-navigation-open notification-list-item-link wb-break-word"
                      href="https://github.com/JonathanXDR/ICT-Trade-17-Regional-Preparation-Tasks-2023/pull/8?notification_referrer_id=NT_kwDOBGJt3LM1ODA3OTkzMDg0OjczNTU5NTE2&amp;notifications_query=is%3Adone"
                      data-hydro-click='{"event_type":"notifications.read","payload":{"list_type":"Repository","list_id":"603434507","thread_type":"Issue","thread_id":"1616107577","comment_type":"IssueEventNotification","comment_id":"8753011292","version":"V2","originating_url":"https://github.com/notifications?query=is%3Adone","user_id":73559516}}'
                      data-hydro-click-hmac="bbe4bde56ce0b85466e792c8f45d5cc246ca26c2fa4645be05b364f7e2ef399b"
                    >
                      <div
                        class="d-flex flex-column flex-md-row mr-2 flex-self-start flex-items-center"
                      >
                        <div class="flex-shrink-0 flex-self-start text-center" style="width: 16px">
                          <svg
                            class="octicon octicon-git-merge color-fg-done"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                          >
                            <path
                              d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"
                            ></path>
                          </svg>
                        </div>

                        <div
                          class="notification-list-item-unread-indicator circle d-md-none d-block mt-1"
                        ></div>
                      </div>

                      <div
                        class="d-flex flex-column flex-auto"
                        id="notification_NT_kwDOBGJt3LM1ODA3OTkzMDg0OjczNTU5NTE2_link"
                      >
                        <div class="d-flex">
                          <p class="m-0 f6 flex-auto">
                            JonathanXDR/ICT-Trade-17-Regional-Preparation-Tasks-2023
                            <span class="text-normal color-fg-muted"> #8 </span>
                          </p>
                          <p
                            class="note m-0 pr-2 d-block d-md-none color-fg-muted text-right flex-shrink-0"
                          >
                            <relative-time
                              datetime="2023-03-08T23:14:19Z"
                              class="no-wrap"
                              title="Mar 9, 2023, 12:14 AM GMT+1"
                              >Mar 9, 2023</relative-time
                            >
                            <span
                              class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                              style="width: 16px"
                            >
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="octicon octicon-bookmark notification-is-starred-icon ml-1 color-fg-severe"
                              >
                                <path
                                  d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                                ></path>
                              </svg>
                            </span>
                          </p>
                        </div>
                        <p class="m-0 text-normal pr-2 pr-md-0 markdown-title">
                          Bump minimist from 1.2.5 to 1.2.8 in /work/backend
                        </p>
                      </div>

                      <div
                        class="d-md-flex d-none flex-items-center min-width-0 pl-3 flex-shrink-0"
                      ></div>
                    </a>
                  </div>

                  <div class="d-flex flex-row flex-md-row-reverse">
                    <p
                      class="note m-0 d-md-block d-none color-fg-muted text-right pr-3 flex-shrink-0 notification-list-item-hide-on-hover"
                      style="width: 140px; line-height: 20px"
                    >
                      <relative-time
                        datetime="2023-03-08T23:14:19Z"
                        class="no-wrap"
                        title="Mar 9, 2023, 12:14 AM GMT+1"
                        >Mar 9, 2023</relative-time
                      >
                      <span
                        class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                        style="width: 16px"
                      >
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          class="octicon octicon-bookmark v-align-middle"
                        >
                          <path
                            d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                          ></path>
                        </svg>
                      </span>
                    </p>

                    <div
                      style="width: 70px; min-width: 70px"
                      class="AvatarStack AvatarStack--two AvatarStack--right mr-0 mr-sm-3 mr-md-0 mr-lg-0 clearfix d-inline-block"
                    >
                      <div class="AvatarStack-body">
                        <a
                          class="avatar avatar-user"
                          data-hovercard-type="user"
                          data-hovercard-url="/users/JonathanXDR/hovercard"
                          data-octo-click="hovercard-link-click"
                          data-octo-dimensions="link_type:self"
                          href="/JonathanXDR"
                          ><img
                            class="avatar-user"
                            src="https://avatars.githubusercontent.com/u/73559516?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@JonathanXDR"
                        /></a>
                        <a class="avatar avatar-user" href="/apps/dependabot"
                          ><img
                            src="https://avatars.githubusercontent.com/in/29110?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@dependabot"
                        /></a>
                      </div>
                    </div>

                    <span class="f6 flex-self-center ml-2 px-2 flex-shrink-0">subscribed</span>
                  </div>
                </div>

                <ul
                  class="notification-list-item-actions d-none position-absolute top-0 bottom-0 right-0 list-style-none mr-2 d-flex flex-items-center"
                >
                  <li class="js-notification-action notification-action-mark-unarchived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unarchive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="wJo5ZvinFtY0QmjWcP9IE5NaYYtsk72AyX2bN9Kw7qU_geCFKTikIwH_zilE77rNhS_LK0ngVkazUl8sp9024Q"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1ODA3OTkzMDg0OjczNTU5NTE2"
                        />

                        <button type="submit" title="Move to inbox" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-arrow-right v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-mark-archived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/archive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="-W8OCxsEeLnwXKnlzWW1UExc-AHFC7PjBD68kOcC35g_TOHB2amVj3UDs8n3qDI5xai_gXIeQN7SNlt6_j4ygg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1ODA3OTkzMDg0OjczNTU5NTE2"
                        />

                        <button type="submit" title="Done" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-check v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unsubscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="unsubscribed"
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unsubscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="ZUS2wE2dlrrJBxOQaPCzzRAsQ_L9qE7fxhaFQ3qXsSYiOzlAngWVNjz-D_q1Ucl-XbjZvnKn56DAfk7KDq3Mww"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1ODA3OTkzMDg0OjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsubscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-subscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="subscribed"
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/subscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="7GDPB3SZ6HVkzt3AeKMOLxyYcmi1sovkyVdpjSbmCyFU38t6ZUMlTkrT0AmulAmEXLckGsdpf-GZ4xMraCEdYA"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1ODA3OTkzMDg0OjczNTU5NTE2"
                        />

                        <button type="submit" title="Subscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-star">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="starred"
                        data-turbo="false"
                        action="/notifications/beta/star"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="uQ5R9YCZTj5PNdz7j7nbRuedHAHQd_JWCuJkDbcCaqHqiiewJXmawiliVQXk3xRqBJHiuH2UOZUer51cRDmiRA"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1ODA3OTkzMDg0OjczNTU5NTE2"
                        />

                        <button type="submit" title="Save" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unstar">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="unstarred"
                        data-turbo="false"
                        action="/notifications/beta/unstar"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="OHL7GCUXIKU6wgCPpQjuGzoDS2_zKCl0x1Fq_4RyYiTjYiDPEB60vaTQLrO3yt5oGz10GcJG8A-eBtC3hAX8yg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1ODA3OTkzMDg0OjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsave" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M1.19 1.143 4.182 3.31l.014.01 8.486 6.145.014.01 2.994 2.168a.75.75 0 1 1-.88 1.214L13 11.547v2.703a.75.75 0 0 1-1.206.596L8 11.944l-3.794 2.902A.75.75 0 0 1 3 14.25V4.305L.31 2.357a.75.75 0 1 1 .88-1.214ZM4.5 5.39v7.341l3.044-2.328a.75.75 0 0 1 .912 0l3.044 2.328V10.46ZM5.865 1h5.385c.966 0 1.75.784 1.75 1.75v3.624a.75.75 0 0 1-1.5 0V2.75a.25.25 0 0 0-.25-.25H5.865a.75.75 0 0 1 0-1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>
                </ul>
              </li>

              <li
                class="notifications-list-item p-0 pl-2 pb-2 pb-md-0 position-relative border-0 js-notifications-list-item js-navigation-item border-bottom color-border-muted notification-archived"
                data-notification-id="NT_kwDOBGJt3LM1Nzg0MDY5ODA0OjczNTU5NTE2"
              >
                <div class="d-flex flex-column flex-md-row flex-md-items-center">
                  <div class="d-flex flex-row flex-md-1">
                    <div
                      class="d-flex flex-column flex-sm-row flex-self-start flex-items-center"
                      style="margin-top: 5px"
                    >
                      <div
                        class="notification-list-item-unread-indicator circle d-none d-md-block"
                      ></div>

                      <label class="p-2 clearfix">
                        <input
                          class="float-left js-notification-bulk-action-check-item"
                          type="checkbox"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1Nzg0MDY5ODA0OjczNTU5NTE2"
                          aria-labelledby="notification_NT_kwDOBGJt3LM1Nzg0MDY5ODA0OjczNTU5NTE2_link"
                          data-check-all-item=""
                          autocomplete="off"
                        />
                      </label>
                    </div>

                    <a
                      class="d-flex flex-items-center flex-auto min-width-0 no-underline py-2 js-navigation-open notification-list-item-link wb-break-word"
                      href="https://github.com/JonathanXDR/UEK-210-Portfolio/pull/57?notification_referrer_id=NT_kwDOBGJt3LM1Nzg0MDY5ODA0OjczNTU5NTE2&amp;notifications_query=is%3Adone#event-8678057073"
                      data-hydro-click='{"event_type":"notifications.read","payload":{"list_type":"Repository","list_id":"566202774","thread_type":"Issue","thread_id":"1612047573","comment_type":"IssueEventNotification","comment_id":"8678057073","version":"V2","originating_url":"https://github.com/notifications?query=is%3Adone","user_id":73559516}}'
                      data-hydro-click-hmac="10e99a71501c7807577105f4277dde40def56cef1a3a5e690c745df907e6167c"
                    >
                      <div
                        class="d-flex flex-column flex-md-row mr-2 flex-self-start flex-items-center"
                      >
                        <div class="flex-shrink-0 flex-self-start text-center" style="width: 16px">
                          <svg
                            class="octicon octicon-git-merge color-fg-done"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                          >
                            <path
                              d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"
                            ></path>
                          </svg>
                        </div>

                        <div
                          class="notification-list-item-unread-indicator circle d-md-none d-block mt-1"
                        ></div>
                      </div>

                      <div
                        class="d-flex flex-column flex-auto"
                        id="notification_NT_kwDOBGJt3LM1Nzg0MDY5ODA0OjczNTU5NTE2_link"
                      >
                        <div class="d-flex">
                          <p class="m-0 f6 flex-auto">
                            JonathanXDR/UEK-210-Portfolio
                            <span class="text-normal color-fg-muted"> #57 </span>
                          </p>
                          <p
                            class="note m-0 pr-2 d-block d-md-none color-fg-muted text-right flex-shrink-0"
                          >
                            <relative-time
                              datetime="2023-03-06T19:08:21Z"
                              class="no-wrap"
                              title="Mar 6, 2023, 8:08 PM GMT+1"
                              >Mar 6, 2023</relative-time
                            >
                            <span
                              class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                              style="width: 16px"
                            >
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="octicon octicon-bookmark notification-is-starred-icon ml-1 color-fg-severe"
                              >
                                <path
                                  d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                                ></path>
                              </svg>
                            </span>
                          </p>
                        </div>
                        <p class="m-0 text-normal pr-2 pr-md-0 markdown-title">
                          Bump nodemon from 2.0.20 to 2.0.21 in /backend
                        </p>
                      </div>

                      <div
                        class="d-md-flex d-none flex-items-center min-width-0 pl-3 flex-shrink-0"
                      ></div>
                    </a>
                  </div>

                  <div class="d-flex flex-row flex-md-row-reverse">
                    <p
                      class="note m-0 d-md-block d-none color-fg-muted text-right pr-3 flex-shrink-0 notification-list-item-hide-on-hover"
                      style="width: 140px; line-height: 20px"
                    >
                      <relative-time
                        datetime="2023-03-06T19:08:21Z"
                        class="no-wrap"
                        title="Mar 6, 2023, 8:08 PM GMT+1"
                        >Mar 6, 2023</relative-time
                      >
                      <span
                        class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                        style="width: 16px"
                      >
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          class="octicon octicon-bookmark v-align-middle"
                        >
                          <path
                            d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                          ></path>
                        </svg>
                      </span>
                    </p>

                    <div
                      style="width: 70px; min-width: 70px"
                      class="AvatarStack AvatarStack--two AvatarStack--right mr-0 mr-sm-3 mr-md-0 mr-lg-0 clearfix d-inline-block"
                    >
                      <div class="AvatarStack-body">
                        <a
                          class="avatar avatar-user"
                          data-hovercard-type="user"
                          data-hovercard-url="/users/JonathanXDR/hovercard"
                          data-octo-click="hovercard-link-click"
                          data-octo-dimensions="link_type:self"
                          href="/JonathanXDR"
                          ><img
                            class="avatar-user"
                            src="https://avatars.githubusercontent.com/u/73559516?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@JonathanXDR"
                        /></a>
                        <a class="avatar avatar-user" href="/apps/dependabot"
                          ><img
                            src="https://avatars.githubusercontent.com/in/29110?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@dependabot"
                        /></a>
                      </div>
                    </div>

                    <span class="f6 flex-self-center ml-2 px-2 flex-shrink-0">subscribed</span>
                  </div>
                </div>

                <ul
                  class="notification-list-item-actions d-none position-absolute top-0 bottom-0 right-0 list-style-none mr-2 d-flex flex-items-center"
                >
                  <li class="js-notification-action notification-action-mark-unarchived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unarchive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="PoqDefx3xZrdnEh9JjDZ_3zTjCvSe5J3KQrEPV4iCozBkVqaLeh3b-gh7oISICshaqYmi_cIebFTJQAmK0_SyA"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1Nzg0MDY5ODA0OjczNTU5NTE2"
                        />

                        <button type="submit" title="Move to inbox" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-arrow-right v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-mark-archived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/archive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="VdnET__1_x8-EhcI1CtkxzJtVATg_75vNuI3ZJN_2tST-iuFPVgSKbtNDSTu5uOuu5kThFfqTVLg6tCOikM3zg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1Nzg0MDY5ODA0OjczNTU5NTE2"
                        />

                        <button type="submit" title="Done" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-check v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unsubscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="unsubscribed"
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unsubscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="iyIdzqXAP5K5i9uO6Y0z6YvBwOrD_GWPh1iusFLrZLvMXZJOdlg8Hkxyx-Q0LElaxlVapkzzzPCBMGU5JtEZXg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1Nzg0MDY5ODA0OjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsubscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-subscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="subscribed"
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/subscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="XvYYLqLID-lDvr_K6FAbT04Vk_pDS7jFbjsByUBmIjnmSRxTsxLC0m2jsgM-ZxzkDjrFiDGQTMA-j3tvDqE0eA"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1Nzg0MDY5ODA0OjczNTU5NTE2"
                        />

                        <button type="submit" title="Subscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-star">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="starred"
                        data-turbo="false"
                        action="/notifications/beta/star"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="nV0ZJIbU9hb27nVlSb9IjQfUxYUxiJd70ibw2THFSxPO2W9hIzQi6pC5_Jsi2Yeh5Ng7PJxrXLjGawmIwv6D9g"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1Nzg0MDY5ODA0OjczNTU5NTE2"
                        />

                        <button type="submit" title="Save" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unstar">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="unstarred"
                        data-turbo="false"
                        action="/notifications/beta/unstar"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="Sc9XkhM7InFVGaKfLrFIiCapC3V-z7zSnDw6aDAQnOiS34xFJjK2acsLjKM8c3j7B5c0A0-hZanFa4AgMGcCBg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1Nzg0MDY5ODA0OjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsave" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M1.19 1.143 4.182 3.31l.014.01 8.486 6.145.014.01 2.994 2.168a.75.75 0 1 1-.88 1.214L13 11.547v2.703a.75.75 0 0 1-1.206.596L8 11.944l-3.794 2.902A.75.75 0 0 1 3 14.25V4.305L.31 2.357a.75.75 0 1 1 .88-1.214ZM4.5 5.39v7.341l3.044-2.328a.75.75 0 0 1 .912 0l3.044 2.328V10.46ZM5.865 1h5.385c.966 0 1.75.784 1.75 1.75v3.624a.75.75 0 0 1-1.5 0V2.75a.25.25 0 0 0-.25-.25H5.865a.75.75 0 0 1 0-1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>
                </ul>
              </li>

              <li
                class="notifications-list-item p-0 pl-2 pb-2 pb-md-0 position-relative border-0 js-notifications-list-item js-navigation-item border-bottom color-border-muted notification-archived"
                data-notification-id="NT_kwDOBGJt3LM1Nzg0MDY1OTEwOjczNTU5NTE2"
              >
                <div class="d-flex flex-column flex-md-row flex-md-items-center">
                  <div class="d-flex flex-row flex-md-1">
                    <div
                      class="d-flex flex-column flex-sm-row flex-self-start flex-items-center"
                      style="margin-top: 5px"
                    >
                      <div
                        class="notification-list-item-unread-indicator circle d-none d-md-block"
                      ></div>

                      <label class="p-2 clearfix">
                        <input
                          class="float-left js-notification-bulk-action-check-item"
                          type="checkbox"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1Nzg0MDY1OTEwOjczNTU5NTE2"
                          aria-labelledby="notification_NT_kwDOBGJt3LM1Nzg0MDY1OTEwOjczNTU5NTE2_link"
                          data-check-all-item=""
                          autocomplete="off"
                        />
                      </label>
                    </div>

                    <a
                      class="d-flex flex-items-center flex-auto min-width-0 no-underline py-2 js-navigation-open notification-list-item-link wb-break-word"
                      href="https://github.com/JonathanXDR/UEK-210-Portfolio/pull/56?notification_referrer_id=NT_kwDOBGJt3LM1Nzg0MDY1OTEwOjczNTU5NTE2&amp;notifications_query=is%3Adone#event-8678055599"
                      data-hydro-click='{"event_type":"notifications.read","payload":{"list_type":"Repository","list_id":"566202774","thread_type":"Issue","thread_id":"1612046864","comment_type":"IssueEventNotification","comment_id":"8678055599","version":"V2","originating_url":"https://github.com/notifications?query=is%3Adone","user_id":73559516}}'
                      data-hydro-click-hmac="06ec1f97a381e768b361d2de1c5de0d8d121ca77fcd380e3c9d18e125f21c4bf"
                    >
                      <div
                        class="d-flex flex-column flex-md-row mr-2 flex-self-start flex-items-center"
                      >
                        <div class="flex-shrink-0 flex-self-start text-center" style="width: 16px">
                          <svg
                            class="octicon octicon-git-merge color-fg-done"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                          >
                            <path
                              d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"
                            ></path>
                          </svg>
                        </div>

                        <div
                          class="notification-list-item-unread-indicator circle d-md-none d-block mt-1"
                        ></div>
                      </div>

                      <div
                        class="d-flex flex-column flex-auto"
                        id="notification_NT_kwDOBGJt3LM1Nzg0MDY1OTEwOjczNTU5NTE2_link"
                      >
                        <div class="d-flex">
                          <p class="m-0 f6 flex-auto">
                            JonathanXDR/UEK-210-Portfolio
                            <span class="text-normal color-fg-muted"> #56 </span>
                          </p>
                          <p
                            class="note m-0 pr-2 d-block d-md-none color-fg-muted text-right flex-shrink-0"
                          >
                            <relative-time
                              datetime="2023-03-06T19:07:54Z"
                              class="no-wrap"
                              title="Mar 6, 2023, 8:07 PM GMT+1"
                              >Mar 6, 2023</relative-time
                            >
                            <span
                              class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                              style="width: 16px"
                            >
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="octicon octicon-bookmark notification-is-starred-icon ml-1 color-fg-severe"
                              >
                                <path
                                  d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                                ></path>
                              </svg>
                            </span>
                          </p>
                        </div>
                        <p class="m-0 text-normal pr-2 pr-md-0 markdown-title">
                          Bump react-router-dom from 6.8.1 to 6.8.2 in /frontend
                        </p>
                      </div>

                      <div
                        class="d-md-flex d-none flex-items-center min-width-0 pl-3 flex-shrink-0"
                      ></div>
                    </a>
                  </div>

                  <div class="d-flex flex-row flex-md-row-reverse">
                    <p
                      class="note m-0 d-md-block d-none color-fg-muted text-right pr-3 flex-shrink-0 notification-list-item-hide-on-hover"
                      style="width: 140px; line-height: 20px"
                    >
                      <relative-time
                        datetime="2023-03-06T19:07:54Z"
                        class="no-wrap"
                        title="Mar 6, 2023, 8:07 PM GMT+1"
                        >Mar 6, 2023</relative-time
                      >
                      <span
                        class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                        style="width: 16px"
                      >
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          class="octicon octicon-bookmark v-align-middle"
                        >
                          <path
                            d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                          ></path>
                        </svg>
                      </span>
                    </p>

                    <div
                      style="width: 70px; min-width: 70px"
                      class="AvatarStack AvatarStack--two AvatarStack--right mr-0 mr-sm-3 mr-md-0 mr-lg-0 clearfix d-inline-block"
                    >
                      <div class="AvatarStack-body">
                        <a
                          class="avatar avatar-user"
                          data-hovercard-type="user"
                          data-hovercard-url="/users/JonathanXDR/hovercard"
                          data-octo-click="hovercard-link-click"
                          data-octo-dimensions="link_type:self"
                          href="/JonathanXDR"
                          ><img
                            class="avatar-user"
                            src="https://avatars.githubusercontent.com/u/73559516?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@JonathanXDR"
                        /></a>
                        <a class="avatar avatar-user" href="/apps/dependabot"
                          ><img
                            src="https://avatars.githubusercontent.com/in/29110?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@dependabot"
                        /></a>
                      </div>
                    </div>

                    <span class="f6 flex-self-center ml-2 px-2 flex-shrink-0">subscribed</span>
                  </div>
                </div>

                <ul
                  class="notification-list-item-actions d-none position-absolute top-0 bottom-0 right-0 list-style-none mr-2 d-flex flex-items-center"
                >
                  <li class="js-notification-action notification-action-mark-unarchived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unarchive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="obmL76G5gI6rYeXQiTZz5RuuaZQTx8tDX1yNqdC4FHteolIMcCYye57cQy-9JoE7DdvDNDa0IIUlc0mypdXMPw"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1Nzg0MDY1OTEwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Move to inbox" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-arrow-right v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-mark-archived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/archive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="1ubA_Q6i3Yw9tcpRUObhSIMt28Uku8yNgqUIu7sJBUoQxS83zA8wurjq0H1qK2YhCtmcRZOuP7BUre9RojXoUA"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1Nzg0MDY1OTEwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Done" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-check v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unsubscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="unsubscribed"
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unsubscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="urxcrg4t61HdO1PTnLqX-Hq65sZAXWsSMgIgnwcZ88L9w9Mu3bXo3SjCT7lBG-1LNy58is9Swm00ausWcyOOJw"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1Nzg0MDY1OTEwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsubscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-subscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="subscribed"
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/subscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="MjBDdd5-Hfr2Ori3jk3dAMahgMJMSuplYirho6ltfziKj0cIz6TQwdgntX5Yetqrho7WsD6RHmAynpsF56ppeQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1Nzg0MDY1OTEwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Subscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-star">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="starred"
                        data-turbo="false"
                        action="/notifications/beta/star"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="Rh7WrpqYRKoFod2OetGTC-mqW9VfINRh9Ez-ZVz2Dw8VmqDrP3iQVmP2VHARt1wnCqalbPLDH6LgAQc0r83H6g"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1Nzg0MDY1OTEwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Save" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unstar">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="unstarred"
                        data-turbo="false"
                        action="/notifications/beta/unstar"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="JsezYUoJk6Zh_0aEbUfGJrWBDl_djdj4iAh_tEQCybT912i2fwAHvv_taLh_hfZVlL8xKezjAYPRX8X8RHVXWg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1Nzg0MDY1OTEwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsave" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M1.19 1.143 4.182 3.31l.014.01 8.486 6.145.014.01 2.994 2.168a.75.75 0 1 1-.88 1.214L13 11.547v2.703a.75.75 0 0 1-1.206.596L8 11.944l-3.794 2.902A.75.75 0 0 1 3 14.25V4.305L.31 2.357a.75.75 0 1 1 .88-1.214ZM4.5 5.39v7.341l3.044-2.328a.75.75 0 0 1 .912 0l3.044 2.328V10.46ZM5.865 1h5.385c.966 0 1.75.784 1.75 1.75v3.624a.75.75 0 0 1-1.5 0V2.75a.25.25 0 0 0-.25-.25H5.865a.75.75 0 0 1 0-1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>
                </ul>
              </li>

              <li
                class="notifications-list-item p-0 pl-2 pb-2 pb-md-0 position-relative border-0 js-notifications-list-item js-navigation-item border-bottom color-border-muted notification-archived"
                data-notification-id="NT_kwDOBGJt3LM1NzE5MzE1OTYzOjczNTU5NTE2"
              >
                <div class="d-flex flex-column flex-md-row flex-md-items-center">
                  <div class="d-flex flex-row flex-md-1">
                    <div
                      class="d-flex flex-column flex-sm-row flex-self-start flex-items-center"
                      style="margin-top: 5px"
                    >
                      <div
                        class="notification-list-item-unread-indicator circle d-none d-md-block"
                      ></div>

                      <label class="p-2 clearfix">
                        <input
                          class="float-left js-notification-bulk-action-check-item"
                          type="checkbox"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NzE5MzE1OTYzOjczNTU5NTE2"
                          aria-labelledby="notification_NT_kwDOBGJt3LM1NzE5MzE1OTYzOjczNTU5NTE2_link"
                          data-check-all-item=""
                          autocomplete="off"
                        />
                      </label>
                    </div>

                    <a
                      class="d-flex flex-items-center flex-auto min-width-0 no-underline py-2 js-navigation-open notification-list-item-link wb-break-word"
                      href="https://github.com/JonathanXDR/UEK-210-Portfolio/pull/55?notification_referrer_id=NT_kwDOBGJt3LM1NzE5MzE1OTYzOjczNTU5NTE2&amp;notifications_query=is%3Adone#event-8619845344"
                      data-hydro-click='{"event_type":"notifications.read","payload":{"list_type":"Repository","list_id":"566202774","thread_type":"Issue","thread_id":"1601792785","comment_type":"IssueEventNotification","comment_id":"8619845344","version":"V2","originating_url":"https://github.com/notifications?query=is%3Adone","user_id":73559516}}'
                      data-hydro-click-hmac="dbd734cc8b58d75790c3fd06e735034389cb8b1ca2871c1a66cdeb564647be6b"
                    >
                      <div
                        class="d-flex flex-column flex-md-row mr-2 flex-self-start flex-items-center"
                      >
                        <div class="flex-shrink-0 flex-self-start text-center" style="width: 16px">
                          <svg
                            class="octicon octicon-git-merge color-fg-done"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                          >
                            <path
                              d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"
                            ></path>
                          </svg>
                        </div>

                        <div
                          class="notification-list-item-unread-indicator circle d-md-none d-block mt-1"
                        ></div>
                      </div>

                      <div
                        class="d-flex flex-column flex-auto"
                        id="notification_NT_kwDOBGJt3LM1NzE5MzE1OTYzOjczNTU5NTE2_link"
                      >
                        <div class="d-flex">
                          <p class="m-0 f6 flex-auto">
                            JonathanXDR/UEK-210-Portfolio
                            <span class="text-normal color-fg-muted"> #55 </span>
                          </p>
                          <p
                            class="note m-0 pr-2 d-block d-md-none color-fg-muted text-right flex-shrink-0"
                          >
                            <relative-time
                              datetime="2023-02-27T19:14:24Z"
                              class="no-wrap"
                              title="Feb 27, 2023, 8:14 PM GMT+1"
                              >Feb 27, 2023</relative-time
                            >
                            <span
                              class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                              style="width: 16px"
                            >
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="octicon octicon-bookmark notification-is-starred-icon ml-1 color-fg-severe"
                              >
                                <path
                                  d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                                ></path>
                              </svg>
                            </span>
                          </p>
                        </div>
                        <p class="m-0 text-normal pr-2 pr-md-0 markdown-title">
                          Bump node from 19.6.1-alpine to 19.7.0-alpine in /frontend
                        </p>
                      </div>

                      <div
                        class="d-md-flex d-none flex-items-center min-width-0 pl-3 flex-shrink-0"
                      ></div>
                    </a>
                  </div>

                  <div class="d-flex flex-row flex-md-row-reverse">
                    <p
                      class="note m-0 d-md-block d-none color-fg-muted text-right pr-3 flex-shrink-0 notification-list-item-hide-on-hover"
                      style="width: 140px; line-height: 20px"
                    >
                      <relative-time
                        datetime="2023-02-27T19:14:24Z"
                        class="no-wrap"
                        title="Feb 27, 2023, 8:14 PM GMT+1"
                        >Feb 27, 2023</relative-time
                      >
                      <span
                        class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                        style="width: 16px"
                      >
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          class="octicon octicon-bookmark v-align-middle"
                        >
                          <path
                            d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                          ></path>
                        </svg>
                      </span>
                    </p>

                    <div
                      style="width: 70px; min-width: 70px"
                      class="AvatarStack AvatarStack--two AvatarStack--right mr-0 mr-sm-3 mr-md-0 mr-lg-0 clearfix d-inline-block"
                    >
                      <div class="AvatarStack-body">
                        <a
                          class="avatar avatar-user"
                          data-hovercard-type="user"
                          data-hovercard-url="/users/JonathanXDR/hovercard"
                          data-octo-click="hovercard-link-click"
                          data-octo-dimensions="link_type:self"
                          href="/JonathanXDR"
                          ><img
                            class="avatar-user"
                            src="https://avatars.githubusercontent.com/u/73559516?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@JonathanXDR"
                        /></a>
                        <a class="avatar avatar-user" href="/apps/dependabot"
                          ><img
                            src="https://avatars.githubusercontent.com/in/29110?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@dependabot"
                        /></a>
                      </div>
                    </div>

                    <span class="f6 flex-self-center ml-2 px-2 flex-shrink-0">subscribed</span>
                  </div>
                </div>

                <ul
                  class="notification-list-item-actions d-none position-absolute top-0 bottom-0 right-0 list-style-none mr-2 d-flex flex-items-center"
                >
                  <li class="js-notification-action notification-action-mark-unarchived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unarchive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="pGVUb1LtxGtmTj-M_T_4NqWWloakPTJrPC0yHCu3jwZbfo2Mg3J2nlPzmXPJLwros-M8JoFO2a1GAvYHXtpXQg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NzE5MzE1OTYzOjczNTU5NTE2"
                        />

                        <button type="submit" title="Move to inbox" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-arrow-right v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-mark-archived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/archive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="F9qGbQvbrL6RxO25F3YD6Q_9QOtr8iazsCMprVBuN13R-WmnyXZBiBSb95Utu4SAhgkHa9zn1Y5mK85HSVLaRw"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NzE5MzE1OTYzOjczNTU5NTE2"
                        />

                        <button type="submit" title="Done" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-check v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unsubscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="unsubscribed"
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unsubscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="VGw_MwiDu7k-NEtj5eCztIeELHFjDCNp5pkCP0hSnz4TE7Cz2xu4NcvNVwk4QckHyhC2PewDihbg8cm2PGji2w"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NzE5MzE1OTYzOjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsubscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-subscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="subscribed"
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/subscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="mKSrFh5Up9HyxkmQg5IUtMqWmk8oXbbAjL5xZZ_es9sgG69rD45q6tzbRFlVpRMfirnMPVqGQsXcCgvD0Rmlmg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NzE5MzE1OTYzOjczNTU5NTE2"
                        />

                        <button type="submit" title="Subscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-star">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="starred"
                        data-turbo="false"
                        action="/notifications/beta/star"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="r6bqapS5zxnGXsPszCfOS4mJqE9XToG_tS0mocp9f7H8IpwvMVkb5aAJShKnQQFnaoVW9vqtSnyhYN_wOUa3VA"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NzE5MzE1OTYzOjczNTU5NTE2"
                        />

                        <button type="submit" title="Save" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unstar">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="unstarred"
                        data-turbo="false"
                        action="/notifications/beta/unstar"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="lsCmYTtFxne6DU4W2U8HZg7mN1jT-b3F9NN5-qk_BchN0H22DkxSbyQfYCrLjTcVL9gILuKXZL6thMOyqUibJg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NzE5MzE1OTYzOjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsave" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M1.19 1.143 4.182 3.31l.014.01 8.486 6.145.014.01 2.994 2.168a.75.75 0 1 1-.88 1.214L13 11.547v2.703a.75.75 0 0 1-1.206.596L8 11.944l-3.794 2.902A.75.75 0 0 1 3 14.25V4.305L.31 2.357a.75.75 0 1 1 .88-1.214ZM4.5 5.39v7.341l3.044-2.328a.75.75 0 0 1 .912 0l3.044 2.328V10.46ZM5.865 1h5.385c.966 0 1.75.784 1.75 1.75v3.624a.75.75 0 0 1-1.5 0V2.75a.25.25 0 0 0-.25-.25H5.865a.75.75 0 0 1 0-1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>
                </ul>
              </li>

              <li
                class="notifications-list-item p-0 pl-2 pb-2 pb-md-0 position-relative border-0 js-notifications-list-item js-navigation-item border-bottom color-border-muted notification-archived"
                data-notification-id="NT_kwDOBGJt3LM1NzE5MzEzMDk3OjczNTU5NTE2"
              >
                <div class="d-flex flex-column flex-md-row flex-md-items-center">
                  <div class="d-flex flex-row flex-md-1">
                    <div
                      class="d-flex flex-column flex-sm-row flex-self-start flex-items-center"
                      style="margin-top: 5px"
                    >
                      <div
                        class="notification-list-item-unread-indicator circle d-none d-md-block"
                      ></div>

                      <label class="p-2 clearfix">
                        <input
                          class="float-left js-notification-bulk-action-check-item"
                          type="checkbox"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NzE5MzEzMDk3OjczNTU5NTE2"
                          aria-labelledby="notification_NT_kwDOBGJt3LM1NzE5MzEzMDk3OjczNTU5NTE2_link"
                          data-check-all-item=""
                          autocomplete="off"
                        />
                      </label>
                    </div>

                    <a
                      class="d-flex flex-items-center flex-auto min-width-0 no-underline py-2 js-navigation-open notification-list-item-link wb-break-word"
                      href="https://github.com/JonathanXDR/UEK-210-Portfolio/pull/54?notification_referrer_id=NT_kwDOBGJt3LM1NzE5MzEzMDk3OjczNTU5NTE2&amp;notifications_query=is%3Adone#event-8619843632"
                      data-hydro-click='{"event_type":"notifications.read","payload":{"list_type":"Repository","list_id":"566202774","thread_type":"Issue","thread_id":"1601792089","comment_type":"IssueEventNotification","comment_id":"8619843632","version":"V2","originating_url":"https://github.com/notifications?query=is%3Adone","user_id":73559516}}'
                      data-hydro-click-hmac="2352c8ea10f9ff1dca63740806b38f2a7def2df1167d64d8c427e5f4c02e817a"
                    >
                      <div
                        class="d-flex flex-column flex-md-row mr-2 flex-self-start flex-items-center"
                      >
                        <div class="flex-shrink-0 flex-self-start text-center" style="width: 16px">
                          <svg
                            class="octicon octicon-git-merge color-fg-done"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                          >
                            <path
                              d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"
                            ></path>
                          </svg>
                        </div>

                        <div
                          class="notification-list-item-unread-indicator circle d-md-none d-block mt-1"
                        ></div>
                      </div>

                      <div
                        class="d-flex flex-column flex-auto"
                        id="notification_NT_kwDOBGJt3LM1NzE5MzEzMDk3OjczNTU5NTE2_link"
                      >
                        <div class="d-flex">
                          <p class="m-0 f6 flex-auto">
                            JonathanXDR/UEK-210-Portfolio
                            <span class="text-normal color-fg-muted"> #54 </span>
                          </p>
                          <p
                            class="note m-0 pr-2 d-block d-md-none color-fg-muted text-right flex-shrink-0"
                          >
                            <relative-time
                              datetime="2023-02-27T19:14:04Z"
                              class="no-wrap"
                              title="Feb 27, 2023, 8:14 PM GMT+1"
                              >Feb 27, 2023</relative-time
                            >
                            <span
                              class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                              style="width: 16px"
                            >
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="octicon octicon-bookmark notification-is-starred-icon ml-1 color-fg-severe"
                              >
                                <path
                                  d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                                ></path>
                              </svg>
                            </span>
                          </p>
                        </div>
                        <p class="m-0 text-normal pr-2 pr-md-0 markdown-title">
                          Bump node from 19.6.1-alpine3.16 to 19.7.0-alpine3.16 in /backend
                        </p>
                      </div>

                      <div
                        class="d-md-flex d-none flex-items-center min-width-0 pl-3 flex-shrink-0"
                      ></div>
                    </a>
                  </div>

                  <div class="d-flex flex-row flex-md-row-reverse">
                    <p
                      class="note m-0 d-md-block d-none color-fg-muted text-right pr-3 flex-shrink-0 notification-list-item-hide-on-hover"
                      style="width: 140px; line-height: 20px"
                    >
                      <relative-time
                        datetime="2023-02-27T19:14:04Z"
                        class="no-wrap"
                        title="Feb 27, 2023, 8:14 PM GMT+1"
                        >Feb 27, 2023</relative-time
                      >
                      <span
                        class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                        style="width: 16px"
                      >
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          class="octicon octicon-bookmark v-align-middle"
                        >
                          <path
                            d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                          ></path>
                        </svg>
                      </span>
                    </p>

                    <div
                      style="width: 70px; min-width: 70px"
                      class="AvatarStack AvatarStack--two AvatarStack--right mr-0 mr-sm-3 mr-md-0 mr-lg-0 clearfix d-inline-block"
                    >
                      <div class="AvatarStack-body">
                        <a
                          class="avatar avatar-user"
                          data-hovercard-type="user"
                          data-hovercard-url="/users/JonathanXDR/hovercard"
                          data-octo-click="hovercard-link-click"
                          data-octo-dimensions="link_type:self"
                          href="/JonathanXDR"
                          ><img
                            class="avatar-user"
                            src="https://avatars.githubusercontent.com/u/73559516?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@JonathanXDR"
                        /></a>
                        <a class="avatar avatar-user" href="/apps/dependabot"
                          ><img
                            src="https://avatars.githubusercontent.com/in/29110?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@dependabot"
                        /></a>
                      </div>
                    </div>

                    <span class="f6 flex-self-center ml-2 px-2 flex-shrink-0">subscribed</span>
                  </div>
                </div>

                <ul
                  class="notification-list-item-actions d-none position-absolute top-0 bottom-0 right-0 list-style-none mr-2 d-flex flex-items-center"
                >
                  <li class="js-notification-action notification-action-mark-unarchived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unarchive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="rBtPk3j3AvLFmETZGIcKmFhvS1EGpKVEKEW6kcuIu7NTAJZwqWiwB_Al4iYsl_hGThrh8SPXToJSan6KvuVj9w"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NzE5MzEzMDk3OjczNTU5NTE2"
                        />

                        <button type="submit" title="Move to inbox" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-arrow-right v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-mark-archived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/archive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="Vx_MIj9XN-CtlGAV3MCoI7nnZiuAHEpEsuSBzyQGOAiRPCPo_fra1ijLejnmDS9KMBMhqzcJuXlk7GYlPTrVEg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NzE5MzEzMDk3OjczNTU5NTE2"
                        />

                        <button type="submit" title="Done" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-check v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unsubscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="unsubscribed"
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unsubscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="kr8k8DmVAWt4TobocDxiC7WoHVlb2B1yaM20qfQ5GTrVwKtw6g0C5423moKtnRi4-DyHFdTXtA1upX8ggANk3w"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NzE5MzEzMDk3OjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsubscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-subscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="subscribed"
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/subscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="gRbn5eE1VOPvGNiWJiu6i36XpT9d2VHC1wgbtH3f14g5qeOY8O-Z2MEF1V_wHL0gPrjzTS8CpceHvGESMxjByQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NzE5MzEzMDk3OjczNTU5NTE2"
                        />

                        <button type="submit" title="Subscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-star">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="starred"
                        data-turbo="false"
                        action="/notifications/beta/star"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="q_OTC7MFYKmLupjspBkHKKugLHVwew_4GctqrhlSsEL4d-VOFuW0Ve3tERLPf8gESKzSzN2YxDsNhpP_6ml4pw"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NzE5MzEzMDk3OjczNTU5NTE2"
                        />

                        <button type="submit" title="Save" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unstar">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="unstarred"
                        data-turbo="false"
                        action="/notifications/beta/unstar"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="3fqImIBN7xaCplPgUaYaqhPb_c_-Fjp4io2C6aeXjm8G6lNPtUR7Dhy0fdxDZCrZMuXCuc944wPT2jihp-AQgQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NzE5MzEzMDk3OjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsave" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M1.19 1.143 4.182 3.31l.014.01 8.486 6.145.014.01 2.994 2.168a.75.75 0 1 1-.88 1.214L13 11.547v2.703a.75.75 0 0 1-1.206.596L8 11.944l-3.794 2.902A.75.75 0 0 1 3 14.25V4.305L.31 2.357a.75.75 0 1 1 .88-1.214ZM4.5 5.39v7.341l3.044-2.328a.75.75 0 0 1 .912 0l3.044 2.328V10.46ZM5.865 1h5.385c.966 0 1.75.784 1.75 1.75v3.624a.75.75 0 0 1-1.5 0V2.75a.25.25 0 0 0-.25-.25H5.865a.75.75 0 0 1 0-1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>
                </ul>
              </li>

              <li
                class="notifications-list-item p-0 pl-2 pb-2 pb-md-0 position-relative border-0 js-notifications-list-item js-navigation-item border-bottom color-border-muted notification-archived notification-unsubscribed"
                data-notification-id="NT_kwDOBGJt3LM1NzAxMjI4MjcxOjczNTU5NTE2"
              >
                <div class="d-flex flex-column flex-md-row flex-md-items-center">
                  <div class="d-flex flex-row flex-md-1">
                    <div
                      class="d-flex flex-column flex-sm-row flex-self-start flex-items-center"
                      style="margin-top: 5px"
                    >
                      <div
                        class="notification-list-item-unread-indicator circle d-none d-md-block"
                      ></div>

                      <label class="p-2 clearfix">
                        <input
                          class="float-left js-notification-bulk-action-check-item"
                          type="checkbox"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NzAxMjI4MjcxOjczNTU5NTE2"
                          aria-labelledby="notification_NT_kwDOBGJt3LM1NzAxMjI4MjcxOjczNTU5NTE2_link"
                          data-check-all-item=""
                          autocomplete="off"
                        />
                      </label>
                    </div>

                    <a
                      class="d-flex flex-items-center flex-auto min-width-0 no-underline py-2 js-navigation-open notification-list-item-link wb-break-word"
                      href="https://github.com/advisories/GHSA-f598-mfpv-gmfx/dependabot?notification_referrer_id=NT_kwDOBGJt3LM1NzAxMjI4MjcxOjczNTU5NTE2&amp;notifications_query=is%3Adone&amp;query=user%3AJonathanXDR"
                      data-hydro-click='{"event_type":"notifications.read","payload":{"list_type":"User","list_id":"73559516","thread_type":"SecurityAdvisory","thread_id":"203999","comment_type":"VulnerabilityAlertingEvent","comment_id":"","version":"V2","originating_url":"https://github.com/notifications?query=is%3Adone","user_id":73559516}}'
                      data-hydro-click-hmac="c11d30547237ce7fc664efe01db51de96c969d73dd8fef58e127223f665358c7"
                    >
                      <div
                        class="d-flex flex-column flex-md-row mr-2 flex-self-start flex-items-center"
                      >
                        <div class="flex-shrink-0 flex-self-start text-center" style="width: 16px">
                          <svg
                            class="octicon octicon-alert"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                          >
                            <path
                              d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                            ></path>
                          </svg>
                        </div>

                        <div
                          class="notification-list-item-unread-indicator circle d-md-none d-block mt-1"
                        ></div>
                      </div>

                      <div
                        class="d-flex flex-column flex-auto"
                        id="notification_NT_kwDOBGJt3LM1NzAxMjI4MjcxOjczNTU5NTE2_link"
                      >
                        <div class="d-flex">
                          <p class="m-0 f6 flex-auto">GHSA-f598-mfpv-gmfx</p>
                          <p
                            class="note m-0 pr-2 d-block d-md-none color-fg-muted text-right flex-shrink-0"
                          >
                            <relative-time
                              datetime="2023-02-25T05:15:53Z"
                              class="no-wrap"
                              title="Feb 25, 2023, 6:15 AM GMT+1"
                              >Feb 25, 2023</relative-time
                            >
                            <span
                              class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                              style="width: 16px"
                            >
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="octicon octicon-bookmark notification-is-starred-icon ml-1 color-fg-severe"
                              >
                                <path
                                  d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                                ></path>
                              </svg>
                            </span>
                          </p>
                        </div>
                        <p class="m-0 text-normal pr-2 pr-md-0 markdown-title">
                          A security vulnerability in @sequelize/core affects at least one of your
                          repositories
                        </p>
                      </div>
                    </a>
                  </div>

                  <div class="d-flex flex-row flex-md-row-reverse">
                    <p
                      class="note m-0 d-md-block d-none color-fg-muted text-right pr-3 flex-shrink-0 notification-list-item-hide-on-hover"
                      style="width: 140px; line-height: 20px"
                    >
                      <relative-time
                        datetime="2023-02-25T05:15:53Z"
                        class="no-wrap"
                        title="Feb 25, 2023, 6:15 AM GMT+1"
                        >Feb 25, 2023</relative-time
                      >
                      <span
                        class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                        style="width: 16px"
                      >
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          class="octicon octicon-bookmark v-align-middle"
                        >
                          <path
                            d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                          ></path>
                        </svg>
                      </span>
                    </p>

                    <div
                      style="width: 70px; min-width: 70px"
                      class="AvatarStack AvatarStack--right mr-0 mr-sm-3 mr-md-0 mr-lg-0 clearfix d-inline-block"
                    >
                      <div class="AvatarStack-body">
                        <a
                          class="avatar avatar-user"
                          data-hovercard-type="organization"
                          data-hovercard-url="/orgs/github/hovercard"
                          data-octo-click="hovercard-link-click"
                          data-octo-dimensions="link_type:self"
                          href="/github"
                          ><img
                            src="https://avatars.githubusercontent.com/u/9919?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@github"
                        /></a>
                      </div>
                    </div>

                    <span class="f6 flex-self-center ml-2 px-2 flex-shrink-0">security alert</span>
                  </div>
                </div>

                <ul
                  class="notification-list-item-actions d-none position-absolute top-0 bottom-0 right-0 list-style-none mr-2 d-flex flex-items-center"
                >
                  <li class="js-notification-action notification-action-mark-unarchived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unarchive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="IUTD79xE5k-ZNLuUtcrbaML5xr1nOPK6h1mCJHoMaSLeXxoMDdtUuqyJHWuB2im21IxsHUJLGXz9dkY_D2GxZg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NzAxMjI4MjcxOjczNTU5NTE2"
                        />

                        <button type="submit" title="Move to inbox" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-arrow-right v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-mark-archived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/archive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="bb3lJja8QzdGQrolLZpX6BetcN4rZqNNkphuiqQjIUKrngrs9BGuAcMdoAkXV9CBnlk3XpxzUHBEkIlgvR_MWA"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NzAxMjI4MjcxOjczNTU5NTE2"
                        />

                        <button type="submit" title="Done" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-check v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unsubscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="unsubscribed"
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unsubscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="gRXpXU1JjQ60c2Poqc1A6p_mK2ykb7xc7MCma5VVnWvGambdntGOgkGKf4J0bDpZ0nKxICtgFSPqqG3i4W_gjg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NzAxMjI4MjcxOjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsubscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-subscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="subscribed"
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/subscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="u4nQ5xwhHvTg8w00AgQSpiMCFq95op_ddwqAH51-hJ0DNtSaDfvTz87uAP3UMxUNYy1A3Qt5a9gnvvq507mS3A"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NzAxMjI4MjcxOjczNTU5NTE2"
                        />

                        <button type="submit" title="Subscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-star">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="starred"
                        data-turbo="false"
                        action="/notifications/beta/star"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="2wxZqTStWxpjK945LzQgn1QCaHuFCjp9QeqfvVf4a5iIiC_skU2P5gV8V8dEUu-ztw6Wwijp8b5Vp2bspMOjfQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NzAxMjI4MjcxOjczNTU5NTE2"
                        />

                        <button type="submit" title="Save" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unstar">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="unstarred"
                        data-turbo="false"
                        action="/notifications/beta/unstar"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="5GjHsAwdiNihFP8GLh5d9SmEcnTNbcvsaaM6Y8FyLdo_eBxnORQcwD8G0To83G2GCLpNAvwDEpcw9IArwQWzNA"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NzAxMjI4MjcxOjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsave" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M1.19 1.143 4.182 3.31l.014.01 8.486 6.145.014.01 2.994 2.168a.75.75 0 1 1-.88 1.214L13 11.547v2.703a.75.75 0 0 1-1.206.596L8 11.944l-3.794 2.902A.75.75 0 0 1 3 14.25V4.305L.31 2.357a.75.75 0 1 1 .88-1.214ZM4.5 5.39v7.341l3.044-2.328a.75.75 0 0 1 .912 0l3.044 2.328V10.46ZM5.865 1h5.385c.966 0 1.75.784 1.75 1.75v3.624a.75.75 0 0 1-1.5 0V2.75a.25.25 0 0 0-.25-.25H5.865a.75.75 0 0 1 0-1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>
                </ul>
              </li>

              <li
                class="notifications-list-item p-0 pl-2 pb-2 pb-md-0 position-relative border-0 js-notifications-list-item js-navigation-item border-bottom color-border-muted notification-archived"
                data-notification-id="NT_kwDOBGJt3LM1NzAwMjYzNzY0OjczNTU5NTE2"
              >
                <div class="d-flex flex-column flex-md-row flex-md-items-center">
                  <div class="d-flex flex-row flex-md-1">
                    <div
                      class="d-flex flex-column flex-sm-row flex-self-start flex-items-center"
                      style="margin-top: 5px"
                    >
                      <div
                        class="notification-list-item-unread-indicator circle d-none d-md-block"
                      ></div>

                      <label class="p-2 clearfix">
                        <input
                          class="float-left js-notification-bulk-action-check-item"
                          type="checkbox"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NzAwMjYzNzY0OjczNTU5NTE2"
                          aria-labelledby="notification_NT_kwDOBGJt3LM1NzAwMjYzNzY0OjczNTU5NTE2_link"
                          data-check-all-item=""
                          autocomplete="off"
                        />
                      </label>
                    </div>

                    <a
                      class="d-flex flex-items-center flex-auto min-width-0 no-underline py-2 js-navigation-open notification-list-item-link wb-break-word"
                      href="https://github.com/JonathanXDR/UEK-210-Portfolio/pull/53?notification_referrer_id=NT_kwDOBGJt3LM1NzAwMjYzNzY0OjczNTU5NTE2&amp;notifications_query=is%3Adone#event-8608270968"
                      data-hydro-click='{"event_type":"notifications.read","payload":{"list_type":"Repository","list_id":"566202774","thread_type":"Issue","thread_id":"1599478019","comment_type":"IssueEventNotification","comment_id":"8608270968","version":"V2","originating_url":"https://github.com/notifications?query=is%3Adone","user_id":73559516}}'
                      data-hydro-click-hmac="35b0c3f9b06eace30dcba94dc04680d7d75e0f89c97db528ab95ee36651bf58d"
                    >
                      <div
                        class="d-flex flex-column flex-md-row mr-2 flex-self-start flex-items-center"
                      >
                        <div class="flex-shrink-0 flex-self-start text-center" style="width: 16px">
                          <svg
                            class="octicon octicon-git-merge color-fg-done"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                          >
                            <path
                              d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"
                            ></path>
                          </svg>
                        </div>

                        <div
                          class="notification-list-item-unread-indicator circle d-md-none d-block mt-1"
                        ></div>
                      </div>

                      <div
                        class="d-flex flex-column flex-auto"
                        id="notification_NT_kwDOBGJt3LM1NzAwMjYzNzY0OjczNTU5NTE2_link"
                      >
                        <div class="d-flex">
                          <p class="m-0 f6 flex-auto">
                            JonathanXDR/UEK-210-Portfolio
                            <span class="text-normal color-fg-muted"> #53 </span>
                          </p>
                          <p
                            class="note m-0 pr-2 d-block d-md-none color-fg-muted text-right flex-shrink-0"
                          >
                            <relative-time
                              datetime="2023-02-25T01:33:41Z"
                              class="no-wrap"
                              title="Feb 25, 2023, 2:33 AM GMT+1"
                              >Feb 25, 2023</relative-time
                            >
                            <span
                              class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                              style="width: 16px"
                            >
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="octicon octicon-bookmark notification-is-starred-icon ml-1 color-fg-severe"
                              >
                                <path
                                  d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                                ></path>
                              </svg>
                            </span>
                          </p>
                        </div>
                        <p class="m-0 text-normal pr-2 pr-md-0 markdown-title">
                          Bump sequelize from 6.28.2 to 6.29.0 in /backend
                        </p>
                      </div>

                      <div
                        class="d-md-flex d-none flex-items-center min-width-0 pl-3 flex-shrink-0"
                      ></div>
                    </a>
                  </div>

                  <div class="d-flex flex-row flex-md-row-reverse">
                    <p
                      class="note m-0 d-md-block d-none color-fg-muted text-right pr-3 flex-shrink-0 notification-list-item-hide-on-hover"
                      style="width: 140px; line-height: 20px"
                    >
                      <relative-time
                        datetime="2023-02-25T01:33:41Z"
                        class="no-wrap"
                        title="Feb 25, 2023, 2:33 AM GMT+1"
                        >Feb 25, 2023</relative-time
                      >
                      <span
                        class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                        style="width: 16px"
                      >
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          class="octicon octicon-bookmark v-align-middle"
                        >
                          <path
                            d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                          ></path>
                        </svg>
                      </span>
                    </p>

                    <div
                      style="width: 70px; min-width: 70px"
                      class="AvatarStack AvatarStack--two AvatarStack--right mr-0 mr-sm-3 mr-md-0 mr-lg-0 clearfix d-inline-block"
                    >
                      <div class="AvatarStack-body">
                        <a
                          class="avatar avatar-user"
                          data-hovercard-type="user"
                          data-hovercard-url="/users/JonathanXDR/hovercard"
                          data-octo-click="hovercard-link-click"
                          data-octo-dimensions="link_type:self"
                          href="/JonathanXDR"
                          ><img
                            class="avatar-user"
                            src="https://avatars.githubusercontent.com/u/73559516?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@JonathanXDR"
                        /></a>
                        <a class="avatar avatar-user" href="/apps/dependabot"
                          ><img
                            src="https://avatars.githubusercontent.com/in/29110?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@dependabot"
                        /></a>
                      </div>
                    </div>

                    <span class="f6 flex-self-center ml-2 px-2 flex-shrink-0">subscribed</span>
                  </div>
                </div>

                <ul
                  class="notification-list-item-actions d-none position-absolute top-0 bottom-0 right-0 list-style-none mr-2 d-flex flex-items-center"
                >
                  <li class="js-notification-action notification-action-mark-unarchived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unarchive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="3Z-WlYZ27-haqP55c9HFItjIFqoOz2_TZnjmIwbeXmwihE92V-ldHW8VWIZHwTf8zr28Ciu8hBUcVyI4c7OGKA"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NzAwMjYzNzY0OjczNTU5NTE2"
                        />

                        <button type="submit" title="Move to inbox" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-arrow-right v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-mark-archived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/archive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="4qJlYvbmGooBOtdJkSY5KnyRhLPk56ArJQFPiWrrYG4kgYqoNEv3vIRlzWWr675D9WXDM1PyUxbzCahjc9eNdA"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NzAwMjYzNzY0OjczNTU5NTE2"
                        />

                        <button type="submit" title="Done" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-check v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unsubscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="unsubscribed"
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unsubscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="RvZg8P0s5bMuzTm0b0mSciSTIy1VhP8ai-s_OFXbM9ABie9wLrTmP9s0Jd6y6OjBaQe5YdqLVmWNg_SxIeFONQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NzAwMjYzNzY0OjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsubscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-subscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="subscribed"
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/subscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="a-ZCiheCMj5Sc2-Fh-HO7rO-pSAXXVpXmIJabty6GGvTWUb3Blj_BXxuYkxR1slF85HzUmWGrlLINiDIkn0OKg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NzAwMjYzNzY0OjczNTU5NTE2"
                        />

                        <button type="submit" title="Subscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-star">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="starred"
                        data-turbo="false"
                        action="/notifications/beta/star"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="bxAgFC8ptve90YOmqsCy2sfXqLr4R2QTECRctZtNtp08lFZRisliC9uGCljBpn32JNtWA1Wkr9AEaaXkaHZ-eA"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NzAwMjYzNzY0OjczNTU5NTE2"
                        />

                        <button type="submit" title="Save" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unstar">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="unstarred"
                        data-turbo="false"
                        action="/notifications/beta/unstar"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="CY1hRHo9maVzkh2bLrJeCgSjGsW38fJZSoCG9dqdinrSnbqTTzQNve2AM6c8cG55JZ0ls4afKyIT1zy92uoUlA"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NzAwMjYzNzY0OjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsave" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M1.19 1.143 4.182 3.31l.014.01 8.486 6.145.014.01 2.994 2.168a.75.75 0 1 1-.88 1.214L13 11.547v2.703a.75.75 0 0 1-1.206.596L8 11.944l-3.794 2.902A.75.75 0 0 1 3 14.25V4.305L.31 2.357a.75.75 0 1 1 .88-1.214ZM4.5 5.39v7.341l3.044-2.328a.75.75 0 0 1 .912 0l3.044 2.328V10.46ZM5.865 1h5.385c.966 0 1.75.784 1.75 1.75v3.624a.75.75 0 0 1-1.5 0V2.75a.25.25 0 0 0-.25-.25H5.865a.75.75 0 0 1 0-1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>
                </ul>
              </li>

              <li
                class="notifications-list-item p-0 pl-2 pb-2 pb-md-0 position-relative border-0 js-notifications-list-item js-navigation-item border-bottom color-border-muted notification-archived notification-unsubscribed"
                data-notification-id="NT_kwDOBGJt3LM1NjkxMDgxNDYwOjczNTU5NTE2"
              >
                <div class="d-flex flex-column flex-md-row flex-md-items-center">
                  <div class="d-flex flex-row flex-md-1">
                    <div
                      class="d-flex flex-column flex-sm-row flex-self-start flex-items-center"
                      style="margin-top: 5px"
                    >
                      <div
                        class="notification-list-item-unread-indicator circle d-none d-md-block"
                      ></div>

                      <label class="p-2 clearfix">
                        <input
                          class="float-left js-notification-bulk-action-check-item"
                          type="checkbox"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjkxMDgxNDYwOjczNTU5NTE2"
                          aria-labelledby="notification_NT_kwDOBGJt3LM1NjkxMDgxNDYwOjczNTU5NTE2_link"
                          data-check-all-item=""
                          autocomplete="off"
                        />
                      </label>
                    </div>

                    <a
                      class="d-flex flex-items-center flex-auto min-width-0 no-underline py-2 js-navigation-open notification-list-item-link wb-break-word"
                      href="https://github.com/advisories/GHSA-vqfx-gj96-3w95/dependabot?notification_referrer_id=NT_kwDOBGJt3LM1NjkxMDgxNDYwOjczNTU5NTE2&amp;notifications_query=is%3Adone&amp;query=user%3AJonathanXDR"
                      data-hydro-click='{"event_type":"notifications.read","payload":{"list_type":"User","list_id":"73559516","thread_type":"SecurityAdvisory","thread_id":"203914","comment_type":"VulnerabilityAlertingEvent","comment_id":"","version":"V2","originating_url":"https://github.com/notifications?query=is%3Adone","user_id":73559516}}'
                      data-hydro-click-hmac="b8ffdd051ea463389382cf1f83a6c14764d0cd8f863b11d3e1f3c78452183e84"
                    >
                      <div
                        class="d-flex flex-column flex-md-row mr-2 flex-self-start flex-items-center"
                      >
                        <div class="flex-shrink-0 flex-self-start text-center" style="width: 16px">
                          <svg
                            class="octicon octicon-alert"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                          >
                            <path
                              d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                            ></path>
                          </svg>
                        </div>

                        <div
                          class="notification-list-item-unread-indicator circle d-md-none d-block mt-1"
                        ></div>
                      </div>

                      <div
                        class="d-flex flex-column flex-auto"
                        id="notification_NT_kwDOBGJt3LM1NjkxMDgxNDYwOjczNTU5NTE2_link"
                      >
                        <div class="d-flex">
                          <p class="m-0 f6 flex-auto">GHSA-vqfx-gj96-3w95</p>
                          <p
                            class="note m-0 pr-2 d-block d-md-none color-fg-muted text-right flex-shrink-0"
                          >
                            <relative-time
                              datetime="2023-02-24T04:01:55Z"
                              class="no-wrap"
                              title="Feb 24, 2023, 5:01 AM GMT+1"
                              >Feb 24, 2023</relative-time
                            >
                            <span
                              class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                              style="width: 16px"
                            >
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="octicon octicon-bookmark notification-is-starred-icon ml-1 color-fg-severe"
                              >
                                <path
                                  d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                                ></path>
                              </svg>
                            </span>
                          </p>
                        </div>
                        <p class="m-0 text-normal pr-2 pr-md-0 markdown-title">
                          A security vulnerability in @sequelize/core affects at least one of your
                          repositories
                        </p>
                      </div>
                    </a>
                  </div>

                  <div class="d-flex flex-row flex-md-row-reverse">
                    <p
                      class="note m-0 d-md-block d-none color-fg-muted text-right pr-3 flex-shrink-0 notification-list-item-hide-on-hover"
                      style="width: 140px; line-height: 20px"
                    >
                      <relative-time
                        datetime="2023-02-24T04:01:55Z"
                        class="no-wrap"
                        title="Feb 24, 2023, 5:01 AM GMT+1"
                        >Feb 24, 2023</relative-time
                      >
                      <span
                        class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                        style="width: 16px"
                      >
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          class="octicon octicon-bookmark v-align-middle"
                        >
                          <path
                            d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                          ></path>
                        </svg>
                      </span>
                    </p>

                    <div
                      style="width: 70px; min-width: 70px"
                      class="AvatarStack AvatarStack--right mr-0 mr-sm-3 mr-md-0 mr-lg-0 clearfix d-inline-block"
                    >
                      <div class="AvatarStack-body">
                        <a
                          class="avatar avatar-user"
                          data-hovercard-type="organization"
                          data-hovercard-url="/orgs/github/hovercard"
                          data-octo-click="hovercard-link-click"
                          data-octo-dimensions="link_type:self"
                          href="/github"
                          ><img
                            src="https://avatars.githubusercontent.com/u/9919?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@github"
                        /></a>
                      </div>
                    </div>

                    <span class="f6 flex-self-center ml-2 px-2 flex-shrink-0">security alert</span>
                  </div>
                </div>

                <ul
                  class="notification-list-item-actions d-none position-absolute top-0 bottom-0 right-0 list-style-none mr-2 d-flex flex-items-center"
                >
                  <li class="js-notification-action notification-action-mark-unarchived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unarchive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="EeryhiOzM_3QzHYkwCmPpMyJPPdHp0Dr_jZYGsCe0wDu8Stl8iyBCOVx0Nv0OX162vyWV2LUqy2EGZwBtfMLRA"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjkxMDgxNDYwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Move to inbox" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-arrow-right v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-mark-archived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/archive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="aZ8qqJKz-a28AWZvC5B8LYSnD-QLZblfytEV7ylHQSuvvMViUB4UmzlefEMxXftEDVNIZLxwSmIc2fIFMHusMQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjkxMDgxNDYwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Done" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-check v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unsubscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="unsubscribed"
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unsubscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="eYc_hOGXqd6_JnS0UeY35g_45JVIucHMc1mxks-EhAY--LAEMg-qUkrfaN6MR01VQmx-2ce2aLN1MXobu7754w"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjkxMDgxNDYwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsubscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-subscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="subscribed"
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/subscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="dZu8jx_ktrvh8RNOIt7pOz1f-j4p-EQ7Nf1TUtEod0rNJLjyDj57gM_sHof06e6QfXCsTFsjsD5lSSn0n-9hCw"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjkxMDgxNDYwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Subscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-star">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="starred"
                        data-turbo="false"
                        action="/notifications/beta/star"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="szYVL5hcbCP3rlG01IOMng-1Z-82uJHpK1TKoHjoa7rgsmNqPby435H52Eq_5UOy7LmZVptbWio_GTPxi9OjXw"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjkxMDgxNDYwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Save" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unstar">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="unstarred"
                        data-turbo="false"
                        action="/notifications/beta/unstar"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="sInbMC1A8wix1Pp8Jro_gGcwCGxnp3Uo5n3ephk4L7hrmQDnGElnEC_G1EA0eA_zRg43GlbJrFO_KmTuGU-xVg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjkxMDgxNDYwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsave" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M1.19 1.143 4.182 3.31l.014.01 8.486 6.145.014.01 2.994 2.168a.75.75 0 1 1-.88 1.214L13 11.547v2.703a.75.75 0 0 1-1.206.596L8 11.944l-3.794 2.902A.75.75 0 0 1 3 14.25V4.305L.31 2.357a.75.75 0 1 1 .88-1.214ZM4.5 5.39v7.341l3.044-2.328a.75.75 0 0 1 .912 0l3.044 2.328V10.46ZM5.865 1h5.385c.966 0 1.75.784 1.75 1.75v3.624a.75.75 0 0 1-1.5 0V2.75a.25.25 0 0 0-.25-.25H5.865a.75.75 0 0 1 0-1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>
                </ul>
              </li>

              <li
                class="notifications-list-item p-0 pl-2 pb-2 pb-md-0 position-relative border-0 js-notifications-list-item js-navigation-item border-bottom color-border-muted notification-archived notification-unsubscribed"
                data-notification-id="NT_kwDOBGJt3LM1NjgyMDM4ODgzOjczNTU5NTE2"
              >
                <div class="d-flex flex-column flex-md-row flex-md-items-center">
                  <div class="d-flex flex-row flex-md-1">
                    <div
                      class="d-flex flex-column flex-sm-row flex-self-start flex-items-center"
                      style="margin-top: 5px"
                    >
                      <div
                        class="notification-list-item-unread-indicator circle d-none d-md-block"
                      ></div>

                      <label class="p-2 clearfix">
                        <input
                          class="float-left js-notification-bulk-action-check-item"
                          type="checkbox"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjgyMDM4ODgzOjczNTU5NTE2"
                          aria-labelledby="notification_NT_kwDOBGJt3LM1NjgyMDM4ODgzOjczNTU5NTE2_link"
                          data-check-all-item=""
                          autocomplete="off"
                        />
                      </label>
                    </div>

                    <a
                      class="d-flex flex-items-center flex-auto min-width-0 no-underline py-2 js-navigation-open notification-list-item-link wb-break-word"
                      href="https://github.com/advisories/GHSA-8mwq-mj73-qv68/dependabot?notification_referrer_id=NT_kwDOBGJt3LM1NjgyMDM4ODgzOjczNTU5NTE2&amp;notifications_query=is%3Adone&amp;query=user%3AJonathanXDR"
                      data-hydro-click='{"event_type":"notifications.read","payload":{"list_type":"User","list_id":"73559516","thread_type":"SecurityAdvisory","thread_id":"203430","comment_type":"VulnerabilityAlertingEvent","comment_id":"","version":"V2","originating_url":"https://github.com/notifications?query=is%3Adone","user_id":73559516}}'
                      data-hydro-click-hmac="ffa9beac1d9aec016140609dbe1bf5aae9139d34212800a7c1eac7f9bc0340f1"
                    >
                      <div
                        class="d-flex flex-column flex-md-row mr-2 flex-self-start flex-items-center"
                      >
                        <div class="flex-shrink-0 flex-self-start text-center" style="width: 16px">
                          <svg
                            class="octicon octicon-alert"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                          >
                            <path
                              d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                            ></path>
                          </svg>
                        </div>

                        <div
                          class="notification-list-item-unread-indicator circle d-md-none d-block mt-1"
                        ></div>
                      </div>

                      <div
                        class="d-flex flex-column flex-auto"
                        id="notification_NT_kwDOBGJt3LM1NjgyMDM4ODgzOjczNTU5NTE2_link"
                      >
                        <div class="d-flex">
                          <p class="m-0 f6 flex-auto">GHSA-8mwq-mj73-qv68</p>
                          <p
                            class="note m-0 pr-2 d-block d-md-none color-fg-muted text-right flex-shrink-0"
                          >
                            <relative-time
                              datetime="2023-02-23T09:03:12Z"
                              class="no-wrap"
                              title="Feb 23, 2023, 10:03 AM GMT+1"
                              >Feb 23, 2023</relative-time
                            >
                            <span
                              class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                              style="width: 16px"
                            >
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="octicon octicon-bookmark notification-is-starred-icon ml-1 color-fg-severe"
                              >
                                <path
                                  d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                                ></path>
                              </svg>
                            </span>
                          </p>
                        </div>
                        <p class="m-0 text-normal pr-2 pr-md-0 markdown-title">
                          A security vulnerability in @sequelize/core affects at least one of your
                          repositories
                        </p>
                      </div>
                    </a>
                  </div>

                  <div class="d-flex flex-row flex-md-row-reverse">
                    <p
                      class="note m-0 d-md-block d-none color-fg-muted text-right pr-3 flex-shrink-0 notification-list-item-hide-on-hover"
                      style="width: 140px; line-height: 20px"
                    >
                      <relative-time
                        datetime="2023-02-23T09:03:12Z"
                        class="no-wrap"
                        title="Feb 23, 2023, 10:03 AM GMT+1"
                        >Feb 23, 2023</relative-time
                      >
                      <span
                        class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                        style="width: 16px"
                      >
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          class="octicon octicon-bookmark v-align-middle"
                        >
                          <path
                            d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                          ></path>
                        </svg>
                      </span>
                    </p>

                    <div
                      style="width: 70px; min-width: 70px"
                      class="AvatarStack AvatarStack--right mr-0 mr-sm-3 mr-md-0 mr-lg-0 clearfix d-inline-block"
                    >
                      <div class="AvatarStack-body">
                        <a
                          class="avatar avatar-user"
                          data-hovercard-type="organization"
                          data-hovercard-url="/orgs/github/hovercard"
                          data-octo-click="hovercard-link-click"
                          data-octo-dimensions="link_type:self"
                          href="/github"
                          ><img
                            src="https://avatars.githubusercontent.com/u/9919?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@github"
                        /></a>
                      </div>
                    </div>

                    <span class="f6 flex-self-center ml-2 px-2 flex-shrink-0">security alert</span>
                  </div>
                </div>

                <ul
                  class="notification-list-item-actions d-none position-absolute top-0 bottom-0 right-0 list-style-none mr-2 d-flex flex-items-center"
                >
                  <li class="js-notification-action notification-action-mark-unarchived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unarchive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="sB5VHnusGrAI0fCr0xzooSCSspoBV_U20wwMBCxGzhlPBYz9qjOoRT1sVlTnDBp_NucYOiQkHvCpI8gfWSsWXQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjgyMDM4ODgzOjczNTU5NTE2"
                        />

                        <button type="submit" title="Move to inbox" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-arrow-right v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-mark-archived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/archive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="jFneCi0_TSU2Uhy5yq8s9gHeATmcJAuZS1VReLgscxdKejHA75KgE7MNBpXwYqufiCpGuSsx-KSdXbaSoRCeDQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjgyMDM4ODgzOjczNTU5NTE2"
                        />

                        <button type="submit" title="Done" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-check v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unsubscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="unsubscribed"
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unsubscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="jGwWp9epvqRZTxIU_L0QRUW8cLhGBWL5CycVCDhUyOTLE5knBDG9KKy2Dn4hHGr2CCjq9MkKy4YNT96BTG61AQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjgyMDM4ODgzOjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsubscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-subscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="subscribed"
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/subscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="ql8Gyy2IYDs9nwMMbJOKx75k4fOgO7aHkgTeLprnQecS4AK2PFKtABOCDsW6pI1s_ku3gdLgQoLCsKSI1CBXpg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjgyMDM4ODgzOjczNTU5NTE2"
                        />

                        <button type="submit" title="Subscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-star">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="starred"
                        data-turbo="false"
                        action="/notifications/beta/star"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="iblsHEmomIdfvfY0TAGZRC_2XQwjHc5USoGYm_DJPYHaPRpZ7EhMeznqf8onZ1ZozPqjtY7-BZdezGHKA_L1ZA"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjgyMDM4ODgzOjczNTU5NTE2"
                        />

                        <button type="submit" title="Save" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unstar">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="unstarred"
                        data-turbo="false"
                        action="/notifications/beta/unstar"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="p9I6ngIWrBmIh8Z1ndFDNgrW0I8X3u_KMe-ZOvar3gp8wuFJNx84ARaV6EmPE3NFK-jv-SawNrFouCNy9txA5A"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjgyMDM4ODgzOjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsave" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M1.19 1.143 4.182 3.31l.014.01 8.486 6.145.014.01 2.994 2.168a.75.75 0 1 1-.88 1.214L13 11.547v2.703a.75.75 0 0 1-1.206.596L8 11.944l-3.794 2.902A.75.75 0 0 1 3 14.25V4.305L.31 2.357a.75.75 0 1 1 .88-1.214ZM4.5 5.39v7.341l3.044-2.328a.75.75 0 0 1 .912 0l3.044 2.328V10.46ZM5.865 1h5.385c.966 0 1.75.784 1.75 1.75v3.624a.75.75 0 0 1-1.5 0V2.75a.25.25 0 0 0-.25-.25H5.865a.75.75 0 0 1 0-1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>
                </ul>
              </li>

              <li
                class="notifications-list-item p-0 pl-2 pb-2 pb-md-0 position-relative border-0 js-notifications-list-item js-navigation-item border-bottom color-border-muted notification-archived"
                data-notification-id="NT_kwDOBGJt3LM1NjgwMzA3Nzk1OjczNTU5NTE2"
              >
                <div class="d-flex flex-column flex-md-row flex-md-items-center">
                  <div class="d-flex flex-row flex-md-1">
                    <div
                      class="d-flex flex-column flex-sm-row flex-self-start flex-items-center"
                      style="margin-top: 5px"
                    >
                      <div
                        class="notification-list-item-unread-indicator circle d-none d-md-block"
                      ></div>

                      <label class="p-2 clearfix">
                        <input
                          class="float-left js-notification-bulk-action-check-item"
                          type="checkbox"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjgwMzA3Nzk1OjczNTU5NTE2"
                          aria-labelledby="notification_NT_kwDOBGJt3LM1NjgwMzA3Nzk1OjczNTU5NTE2_link"
                          data-check-all-item=""
                          autocomplete="off"
                        />
                      </label>
                    </div>

                    <a
                      class="d-flex flex-items-center flex-auto min-width-0 no-underline py-2 js-navigation-open notification-list-item-link wb-break-word"
                      href="https://github.com/JonathanXDR/UEK-210-Portfolio/pull/52?notification_referrer_id=NT_kwDOBGJt3LM1NjgwMzA3Nzk1OjczNTU5NTE2&amp;notifications_query=is%3Adone#event-8588548594"
                      data-hydro-click='{"event_type":"notifications.read","payload":{"list_type":"Repository","list_id":"566202774","thread_type":"Issue","thread_id":"1596210903","comment_type":"IssueEventNotification","comment_id":"8588548594","version":"V2","originating_url":"https://github.com/notifications?query=is%3Adone","user_id":73559516}}'
                      data-hydro-click-hmac="9311e2138229e6184fbc8656d8f121acf5c7c950ba8d9c91ec6505428399ba63"
                    >
                      <div
                        class="d-flex flex-column flex-md-row mr-2 flex-self-start flex-items-center"
                      >
                        <div class="flex-shrink-0 flex-self-start text-center" style="width: 16px">
                          <svg
                            class="octicon octicon-git-merge color-fg-done"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                          >
                            <path
                              d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"
                            ></path>
                          </svg>
                        </div>

                        <div
                          class="notification-list-item-unread-indicator circle d-md-none d-block mt-1"
                        ></div>
                      </div>

                      <div
                        class="d-flex flex-column flex-auto"
                        id="notification_NT_kwDOBGJt3LM1NjgwMzA3Nzk1OjczNTU5NTE2_link"
                      >
                        <div class="d-flex">
                          <p class="m-0 f6 flex-auto">
                            JonathanXDR/UEK-210-Portfolio
                            <span class="text-normal color-fg-muted"> #52 </span>
                          </p>
                          <p
                            class="note m-0 pr-2 d-block d-md-none color-fg-muted text-right flex-shrink-0"
                          >
                            <relative-time
                              datetime="2023-02-23T04:47:47Z"
                              class="no-wrap"
                              title="Feb 23, 2023, 5:47 AM GMT+1"
                              >Feb 23, 2023</relative-time
                            >
                            <span
                              class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                              style="width: 16px"
                            >
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="octicon octicon-bookmark notification-is-starred-icon ml-1 color-fg-severe"
                              >
                                <path
                                  d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                                ></path>
                              </svg>
                            </span>
                          </p>
                        </div>
                        <p class="m-0 text-normal pr-2 pr-md-0 markdown-title">
                          Bump sequelize from 6.28.0 to 6.28.2 in /backend
                        </p>
                      </div>

                      <div
                        class="d-md-flex d-none flex-items-center min-width-0 pl-3 flex-shrink-0"
                      ></div>
                    </a>
                  </div>

                  <div class="d-flex flex-row flex-md-row-reverse">
                    <p
                      class="note m-0 d-md-block d-none color-fg-muted text-right pr-3 flex-shrink-0 notification-list-item-hide-on-hover"
                      style="width: 140px; line-height: 20px"
                    >
                      <relative-time
                        datetime="2023-02-23T04:47:47Z"
                        class="no-wrap"
                        title="Feb 23, 2023, 5:47 AM GMT+1"
                        >Feb 23, 2023</relative-time
                      >
                      <span
                        class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                        style="width: 16px"
                      >
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          class="octicon octicon-bookmark v-align-middle"
                        >
                          <path
                            d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                          ></path>
                        </svg>
                      </span>
                    </p>

                    <div
                      style="width: 70px; min-width: 70px"
                      class="AvatarStack AvatarStack--two AvatarStack--right mr-0 mr-sm-3 mr-md-0 mr-lg-0 clearfix d-inline-block"
                    >
                      <div class="AvatarStack-body">
                        <a
                          class="avatar avatar-user"
                          data-hovercard-type="user"
                          data-hovercard-url="/users/JonathanXDR/hovercard"
                          data-octo-click="hovercard-link-click"
                          data-octo-dimensions="link_type:self"
                          href="/JonathanXDR"
                          ><img
                            class="avatar-user"
                            src="https://avatars.githubusercontent.com/u/73559516?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@JonathanXDR"
                        /></a>
                        <a class="avatar avatar-user" href="/apps/dependabot"
                          ><img
                            src="https://avatars.githubusercontent.com/in/29110?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@dependabot"
                        /></a>
                      </div>
                    </div>

                    <span class="f6 flex-self-center ml-2 px-2 flex-shrink-0">subscribed</span>
                  </div>
                </div>

                <ul
                  class="notification-list-item-actions d-none position-absolute top-0 bottom-0 right-0 list-style-none mr-2 d-flex flex-items-center"
                >
                  <li class="js-notification-action notification-action-mark-unarchived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unarchive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="Wahm5Eoo3O5Gtm8S0Z1-MS4_B6K29-ikrkAUSPlqkQKms78Hm7duG3MLye3ljYzvOEqtApOEA2LUb9BTjAdJRg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjgwMzA3Nzk1OjczNTU5NTE2"
                        />

                        <button type="submit" title="Move to inbox" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-arrow-right v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-mark-archived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/archive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="mms_EmqeScyMbWnR6jzBu-eYS9hgAP1sZX09MVHnV_9cSNDYqDOk-gkyc_3Q8UbSbmwMWNcVDlGzddrbSNu65Q"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjgwMzA3Nzk1OjczNTU5NTE2"
                        />

                        <button type="submit" title="Done" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-check v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unsubscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="unsubscribed"
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unsubscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="e7SBheHxEg5Uo4F1R2Bfu7A3sv7Vm77B1taCo2lJUsI8yw4FMmkRgqFanR-awSUI_aMoslqUF77QvkkqHXMvJw"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjgwMzA3Nzk1OjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsubscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-subscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="subscribed"
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/subscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="74V7gZ1-fLGeNRQnbQ-CohhrGObJM_dpSImOukGmLLBXOn_8jKSxirAoGe67OIUJWEROlLvoA2wYPfQcD2E68Q"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjgwMzA3Nzk1OjczNTU5NTE2"
                        />

                        <button type="submit" title="Subscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-star">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="starred"
                        data-turbo="false"
                        action="/notifications/beta/star"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="z9NTLLvUz-vzmYcP2zRbiQbS1XrOxqDhAnDxjhuXbnecVyVpHjQbF5XODvGwUpSl5d4rw2MlayIWPQjf6Kymkg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjgwMzA3Nzk1OjczNTU5NTE2"
                        />

                        <button type="submit" title="Save" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unstar">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="unstarred"
                        data-turbo="false"
                        action="/notifications/beta/unstar"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="09ladje8LyU3xaqR0E5Gq_6nE3zeVOyg_pLZE7FupIEIyYGhArW7PanXhK3CjHbY35ksCu86NdunxWNbsRk6bw"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjgwMzA3Nzk1OjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsave" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M1.19 1.143 4.182 3.31l.014.01 8.486 6.145.014.01 2.994 2.168a.75.75 0 1 1-.88 1.214L13 11.547v2.703a.75.75 0 0 1-1.206.596L8 11.944l-3.794 2.902A.75.75 0 0 1 3 14.25V4.305L.31 2.357a.75.75 0 1 1 .88-1.214ZM4.5 5.39v7.341l3.044-2.328a.75.75 0 0 1 .912 0l3.044 2.328V10.46ZM5.865 1h5.385c.966 0 1.75.784 1.75 1.75v3.624a.75.75 0 0 1-1.5 0V2.75a.25.25 0 0 0-.25-.25H5.865a.75.75 0 0 1 0-1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>
                </ul>
              </li>

              <li
                class="notifications-list-item p-0 pl-2 pb-2 pb-md-0 position-relative border-0 js-notifications-list-item js-navigation-item border-bottom color-border-muted notification-archived"
                data-notification-id="NT_kwDOBGJt3LM1NjU1NjI3MDc3OjczNTU5NTE2"
              >
                <div class="d-flex flex-column flex-md-row flex-md-items-center">
                  <div class="d-flex flex-row flex-md-1">
                    <div
                      class="d-flex flex-column flex-sm-row flex-self-start flex-items-center"
                      style="margin-top: 5px"
                    >
                      <div
                        class="notification-list-item-unread-indicator circle d-none d-md-block"
                      ></div>

                      <label class="p-2 clearfix">
                        <input
                          class="float-left js-notification-bulk-action-check-item"
                          type="checkbox"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjU1NjI3MDc3OjczNTU5NTE2"
                          aria-labelledby="notification_NT_kwDOBGJt3LM1NjU1NjI3MDc3OjczNTU5NTE2_link"
                          data-check-all-item=""
                          autocomplete="off"
                        />
                      </label>
                    </div>

                    <a
                      class="d-flex flex-items-center flex-auto min-width-0 no-underline py-2 js-navigation-open notification-list-item-link wb-break-word"
                      href="https://github.com/JonathanXDR/UEK-210-Portfolio/pull/51?notification_referrer_id=NT_kwDOBGJt3LM1NjU1NjI3MDc3OjczNTU5NTE2&amp;notifications_query=is%3Adone#event-8588546651"
                      data-hydro-click='{"event_type":"notifications.read","payload":{"list_type":"Repository","list_id":"566202774","thread_type":"Issue","thread_id":"1592330310","comment_type":"IssueEventNotification","comment_id":"8588546651","version":"V2","originating_url":"https://github.com/notifications?query=is%3Adone","user_id":73559516}}'
                      data-hydro-click-hmac="1e45fcbd80783893582c21c3807d926ce17dea92311248476217960efed9af53"
                    >
                      <div
                        class="d-flex flex-column flex-md-row mr-2 flex-self-start flex-items-center"
                      >
                        <div class="flex-shrink-0 flex-self-start text-center" style="width: 16px">
                          <svg
                            class="octicon octicon-git-merge color-fg-done"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                          >
                            <path
                              d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"
                            ></path>
                          </svg>
                        </div>

                        <div
                          class="notification-list-item-unread-indicator circle d-md-none d-block mt-1"
                        ></div>
                      </div>

                      <div
                        class="d-flex flex-column flex-auto"
                        id="notification_NT_kwDOBGJt3LM1NjU1NjI3MDc3OjczNTU5NTE2_link"
                      >
                        <div class="d-flex">
                          <p class="m-0 f6 flex-auto">
                            JonathanXDR/UEK-210-Portfolio
                            <span class="text-normal color-fg-muted"> #51 </span>
                          </p>
                          <p
                            class="note m-0 pr-2 d-block d-md-none color-fg-muted text-right flex-shrink-0"
                          >
                            <relative-time
                              datetime="2023-02-20T19:04:46Z"
                              class="no-wrap"
                              title="Feb 20, 2023, 8:04 PM GMT+1"
                              >Feb 20, 2023</relative-time
                            >
                            <span
                              class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                              style="width: 16px"
                            >
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="octicon octicon-bookmark notification-is-starred-icon ml-1 color-fg-severe"
                              >
                                <path
                                  d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                                ></path>
                              </svg>
                            </span>
                          </p>
                        </div>
                        <p class="m-0 text-normal pr-2 pr-md-0 markdown-title">
                          Bump node from 19.6.0-alpine to 19.6.1-alpine in /frontend
                        </p>
                      </div>

                      <div
                        class="d-md-flex d-none flex-items-center min-width-0 pl-3 flex-shrink-0"
                      ></div>
                    </a>
                  </div>

                  <div class="d-flex flex-row flex-md-row-reverse">
                    <p
                      class="note m-0 d-md-block d-none color-fg-muted text-right pr-3 flex-shrink-0 notification-list-item-hide-on-hover"
                      style="width: 140px; line-height: 20px"
                    >
                      <relative-time
                        datetime="2023-02-20T19:04:46Z"
                        class="no-wrap"
                        title="Feb 20, 2023, 8:04 PM GMT+1"
                        >Feb 20, 2023</relative-time
                      >
                      <span
                        class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                        style="width: 16px"
                      >
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          class="octicon octicon-bookmark v-align-middle"
                        >
                          <path
                            d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                          ></path>
                        </svg>
                      </span>
                    </p>

                    <div
                      style="width: 70px; min-width: 70px"
                      class="AvatarStack AvatarStack--two AvatarStack--right mr-0 mr-sm-3 mr-md-0 mr-lg-0 clearfix d-inline-block"
                    >
                      <div class="AvatarStack-body">
                        <a
                          class="avatar avatar-user"
                          data-hovercard-type="user"
                          data-hovercard-url="/users/JonathanXDR/hovercard"
                          data-octo-click="hovercard-link-click"
                          data-octo-dimensions="link_type:self"
                          href="/JonathanXDR"
                          ><img
                            class="avatar-user"
                            src="https://avatars.githubusercontent.com/u/73559516?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@JonathanXDR"
                        /></a>
                        <a class="avatar avatar-user" href="/apps/dependabot"
                          ><img
                            src="https://avatars.githubusercontent.com/in/29110?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@dependabot"
                        /></a>
                      </div>
                    </div>

                    <span class="f6 flex-self-center ml-2 px-2 flex-shrink-0">subscribed</span>
                  </div>
                </div>

                <ul
                  class="notification-list-item-actions d-none position-absolute top-0 bottom-0 right-0 list-style-none mr-2 d-flex flex-items-center"
                >
                  <li class="js-notification-action notification-action-mark-unarchived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unarchive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="jHDjdEqD2ADKde-fHilwgoS0eqaLAPYJwOcMB5vZai9zazqXmxxq9f_ISWAqOYJcksHQBq5zHc-6yMgc7rSyaw"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjU1NjI3MDc3OjczNTU5NTE2"
                        />

                        <button type="submit" title="Move to inbox" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-arrow-right v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-mark-archived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/archive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="8rzZLmO1UQeRao9lMp2VoLeKtnrR2eMe90QRTuaN1WM0nzbkoRi8MRQ1lUkIUBLJPn7x-mbMECMhTPak_7E4eQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjU1NjI3MDc3OjczNTU5NTE2"
                        />

                        <button type="submit" title="Done" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-check v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unsubscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="unsubscribed"
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unsubscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="F4KkRexzoYsVEvQHCn3gvZQst6cyhDqdx8AlFJkcfC5Q_SvFP-uiB-Dr6G3X3JoO2bgt672Lk-LBqO6d7SYByw"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjU1NjI3MDc3OjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsubscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-subscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="subscribed"
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/subscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="N5-UI9jn-bmc9uQwxxtNa8kl9iXEFUe8rWWonrLItJ-PIJBeyT00grLr6fkRLErAiQqgV7bOs7n90dI4_A-i3g"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjU1NjI3MDc3OjczNTU5NTE2"
                        />

                        <button type="submit" title="Subscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-star">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="starred"
                        data-turbo="false"
                        action="/notifications/beta/star"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="YQ6UZXnOojqw8ADIln0LejtlgmHon8OrcM-xNiB7dkAyiuIg3C52xtaniTb9G8RW2Gl82EV8CGhkgkhn00C-pQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjU1NjI3MDc3OjczNTU5NTE2"
                        />

                        <button type="submit" title="Save" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unstar">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="unstarred"
                        data-turbo="false"
                        action="/notifications/beta/unstar"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="gGSbtx336XhMNvOLGrxQP-CojsnLgc5kxgNd3yxv_rxbdEBgKP59YNIk3bcIfmBMwZaxv_rvFx-fVOeXLBhgUg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjU1NjI3MDc3OjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsave" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M1.19 1.143 4.182 3.31l.014.01 8.486 6.145.014.01 2.994 2.168a.75.75 0 1 1-.88 1.214L13 11.547v2.703a.75.75 0 0 1-1.206.596L8 11.944l-3.794 2.902A.75.75 0 0 1 3 14.25V4.305L.31 2.357a.75.75 0 1 1 .88-1.214ZM4.5 5.39v7.341l3.044-2.328a.75.75 0 0 1 .912 0l3.044 2.328V10.46ZM5.865 1h5.385c.966 0 1.75.784 1.75 1.75v3.624a.75.75 0 0 1-1.5 0V2.75a.25.25 0 0 0-.25-.25H5.865a.75.75 0 0 1 0-1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>
                </ul>
              </li>

              <li
                class="notifications-list-item p-0 pl-2 pb-2 pb-md-0 position-relative border-0 js-notifications-list-item js-navigation-item border-bottom color-border-muted notification-archived"
                data-notification-id="NT_kwDOBGJt3LM1NjU1NjI2MjM2OjczNTU5NTE2"
              >
                <div class="d-flex flex-column flex-md-row flex-md-items-center">
                  <div class="d-flex flex-row flex-md-1">
                    <div
                      class="d-flex flex-column flex-sm-row flex-self-start flex-items-center"
                      style="margin-top: 5px"
                    >
                      <div
                        class="notification-list-item-unread-indicator circle d-none d-md-block"
                      ></div>

                      <label class="p-2 clearfix">
                        <input
                          class="float-left js-notification-bulk-action-check-item"
                          type="checkbox"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjU1NjI2MjM2OjczNTU5NTE2"
                          aria-labelledby="notification_NT_kwDOBGJt3LM1NjU1NjI2MjM2OjczNTU5NTE2_link"
                          data-check-all-item=""
                          autocomplete="off"
                        />
                      </label>
                    </div>

                    <a
                      class="d-flex flex-items-center flex-auto min-width-0 no-underline py-2 js-navigation-open notification-list-item-link wb-break-word"
                      href="https://github.com/JonathanXDR/UEK-210-Portfolio/pull/50?notification_referrer_id=NT_kwDOBGJt3LM1NjU1NjI2MjM2OjczNTU5NTE2&amp;notifications_query=is%3Adone#event-8588545211"
                      data-hydro-click='{"event_type":"notifications.read","payload":{"list_type":"Repository","list_id":"566202774","thread_type":"Issue","thread_id":"1592330040","comment_type":"IssueEventNotification","comment_id":"8588545211","version":"V2","originating_url":"https://github.com/notifications?query=is%3Adone","user_id":73559516}}'
                      data-hydro-click-hmac="e3b3956067e34abe571872e13d286b750d0335d07eb0a5bbf1b364af38f0c169"
                    >
                      <div
                        class="d-flex flex-column flex-md-row mr-2 flex-self-start flex-items-center"
                      >
                        <div class="flex-shrink-0 flex-self-start text-center" style="width: 16px">
                          <svg
                            class="octicon octicon-git-merge color-fg-done"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                          >
                            <path
                              d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"
                            ></path>
                          </svg>
                        </div>

                        <div
                          class="notification-list-item-unread-indicator circle d-md-none d-block mt-1"
                        ></div>
                      </div>

                      <div
                        class="d-flex flex-column flex-auto"
                        id="notification_NT_kwDOBGJt3LM1NjU1NjI2MjM2OjczNTU5NTE2_link"
                      >
                        <div class="d-flex">
                          <p class="m-0 f6 flex-auto">
                            JonathanXDR/UEK-210-Portfolio
                            <span class="text-normal color-fg-muted"> #50 </span>
                          </p>
                          <p
                            class="note m-0 pr-2 d-block d-md-none color-fg-muted text-right flex-shrink-0"
                          >
                            <relative-time
                              datetime="2023-02-20T19:04:39Z"
                              class="no-wrap"
                              title="Feb 20, 2023, 8:04 PM GMT+1"
                              >Feb 20, 2023</relative-time
                            >
                            <span
                              class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                              style="width: 16px"
                            >
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="octicon octicon-bookmark notification-is-starred-icon ml-1 color-fg-severe"
                              >
                                <path
                                  d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                                ></path>
                              </svg>
                            </span>
                          </p>
                        </div>
                        <p class="m-0 text-normal pr-2 pr-md-0 markdown-title">
                          Bump node from 19.6.0-alpine3.16 to 19.6.1-alpine3.16 in /backend
                        </p>
                      </div>

                      <div
                        class="d-md-flex d-none flex-items-center min-width-0 pl-3 flex-shrink-0"
                      ></div>
                    </a>
                  </div>

                  <div class="d-flex flex-row flex-md-row-reverse">
                    <p
                      class="note m-0 d-md-block d-none color-fg-muted text-right pr-3 flex-shrink-0 notification-list-item-hide-on-hover"
                      style="width: 140px; line-height: 20px"
                    >
                      <relative-time
                        datetime="2023-02-20T19:04:39Z"
                        class="no-wrap"
                        title="Feb 20, 2023, 8:04 PM GMT+1"
                        >Feb 20, 2023</relative-time
                      >
                      <span
                        class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                        style="width: 16px"
                      >
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          class="octicon octicon-bookmark v-align-middle"
                        >
                          <path
                            d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                          ></path>
                        </svg>
                      </span>
                    </p>

                    <div
                      style="width: 70px; min-width: 70px"
                      class="AvatarStack AvatarStack--two AvatarStack--right mr-0 mr-sm-3 mr-md-0 mr-lg-0 clearfix d-inline-block"
                    >
                      <div class="AvatarStack-body">
                        <a
                          class="avatar avatar-user"
                          data-hovercard-type="user"
                          data-hovercard-url="/users/JonathanXDR/hovercard"
                          data-octo-click="hovercard-link-click"
                          data-octo-dimensions="link_type:self"
                          href="/JonathanXDR"
                          ><img
                            class="avatar-user"
                            src="https://avatars.githubusercontent.com/u/73559516?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@JonathanXDR"
                        /></a>
                        <a class="avatar avatar-user" href="/apps/dependabot"
                          ><img
                            src="https://avatars.githubusercontent.com/in/29110?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@dependabot"
                        /></a>
                      </div>
                    </div>

                    <span class="f6 flex-self-center ml-2 px-2 flex-shrink-0">subscribed</span>
                  </div>
                </div>

                <ul
                  class="notification-list-item-actions d-none position-absolute top-0 bottom-0 right-0 list-style-none mr-2 d-flex flex-items-center"
                >
                  <li class="js-notification-action notification-action-mark-unarchived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unarchive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="OWU-_WxWSS_G3O7A1eJfinQ1dvBalAfaFyAvS1X_C1bGfucevcn72vNhSD_h8q1UYkDcUH_n7BxtD-tQIJLTEg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjU1NjI2MjM2OjczNTU5NTE2"
                        />

                        <button type="submit" title="Move to inbox" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-arrow-right v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-mark-archived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/archive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="KPGO3G9ez-L6AO6QkZhPj3_usXZ9C21rCYAmR8ZwJ3_u0mEWrfMi1H9f9LyrVcjm9hr29soenlbfiMGt30zKZQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjU1NjI2MjM2OjczNTU5NTE2"
                        />

                        <button type="submit" title="Done" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-check v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unsubscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="unsubscribed"
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unsubscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="q2PZAmj0B8DE5tew3ZdOO26RPx6gzoC0mYUY3TdcxQnsHFaCu2wETDEfy9oANjSIIwWlUi_BKcuf7dNUQ2a47A"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjU1NjI2MjM2OjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsubscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-subscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="subscribed"
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/subscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="jrEhMIjFm2KsuK-BYfOo1nxehnjhZ6yvb9DTufzBdW82DiVNmR9WWYKloki3xK99PHHQCpO8WKo_ZKkfsgZjLg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjU1NjI2MjM2OjczNTU5NTE2"
                        />

                        <button type="submit" title="Subscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-star">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="starred"
                        data-turbo="false"
                        action="/notifications/beta/star"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="iLmwbPRgtUkaKAtUqunY28IgX5dyaXIS4Iy_DUqzA7DbPcYpUYBhtXx_gqrBjxf3ISyhLt-KudH0wUZcuYjLVQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjU1NjI2MjM2OjczNTU5NTE2"
                        />

                        <button type="submit" title="Save" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unstar">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="unstarred"
                        data-turbo="false"
                        action="/notifications/beta/unstar"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="xPoEiAB895BabJEWUSR4jVXx5I5qOVDbR8_VJTQT43Ef6t9fNXVjiMR-vypD5kj-dM_b-FtXiaAemG9tNGR9nw"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjU1NjI2MjM2OjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsave" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M1.19 1.143 4.182 3.31l.014.01 8.486 6.145.014.01 2.994 2.168a.75.75 0 1 1-.88 1.214L13 11.547v2.703a.75.75 0 0 1-1.206.596L8 11.944l-3.794 2.902A.75.75 0 0 1 3 14.25V4.305L.31 2.357a.75.75 0 1 1 .88-1.214ZM4.5 5.39v7.341l3.044-2.328a.75.75 0 0 1 .912 0l3.044 2.328V10.46ZM5.865 1h5.385c.966 0 1.75.784 1.75 1.75v3.624a.75.75 0 0 1-1.5 0V2.75a.25.25 0 0 0-.25-.25H5.865a.75.75 0 0 1 0-1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>
                </ul>
              </li>

              <li
                class="notifications-list-item p-0 pl-2 pb-2 pb-md-0 position-relative border-0 js-notifications-list-item js-navigation-item border-bottom color-border-muted notification-archived"
                data-notification-id="NT_kwDOBGJt3LM1NjQwMjI3NDc3OjczNTU5NTE2"
              >
                <div class="d-flex flex-column flex-md-row flex-md-items-center">
                  <div class="d-flex flex-row flex-md-1">
                    <div
                      class="d-flex flex-column flex-sm-row flex-self-start flex-items-center"
                      style="margin-top: 5px"
                    >
                      <div
                        class="notification-list-item-unread-indicator circle d-none d-md-block"
                      ></div>

                      <label class="p-2 clearfix">
                        <input
                          class="float-left js-notification-bulk-action-check-item"
                          type="checkbox"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI3NDc3OjczNTU5NTE2"
                          aria-labelledby="notification_NT_kwDOBGJt3LM1NjQwMjI3NDc3OjczNTU5NTE2_link"
                          data-check-all-item=""
                          autocomplete="off"
                        />
                      </label>
                    </div>

                    <a
                      class="d-flex flex-items-center flex-auto min-width-0 no-underline py-2 js-navigation-open notification-list-item-link wb-break-word"
                      href="https://github.com/JonathanXDR/ICT-Trade-17-Regional-Preparation-Tasks-2023/pull/6?notification_referrer_id=NT_kwDOBGJt3LM1NjQwMjI3NDc3OjczNTU5NTE2&amp;notifications_query=is%3Adone#event-8753007097"
                      data-hydro-click='{"event_type":"notifications.read","payload":{"list_type":"Repository","list_id":"603434507","thread_type":"Issue","thread_id":"1590354361","comment_type":"IssueEventNotification","comment_id":"8753007097","version":"V2","originating_url":"https://github.com/notifications?query=is%3Adone","user_id":73559516}}'
                      data-hydro-click-hmac="3bc881b6b44e5711f919158de6dadffc210a44dca494800f4c8334486e6f5aef"
                    >
                      <div
                        class="d-flex flex-column flex-md-row mr-2 flex-self-start flex-items-center"
                      >
                        <div class="flex-shrink-0 flex-self-start text-center" style="width: 16px">
                          <svg
                            class="octicon octicon-git-merge color-fg-done"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                          >
                            <path
                              d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"
                            ></path>
                          </svg>
                        </div>

                        <div
                          class="notification-list-item-unread-indicator circle d-md-none d-block mt-1"
                        ></div>
                      </div>

                      <div
                        class="d-flex flex-column flex-auto"
                        id="notification_NT_kwDOBGJt3LM1NjQwMjI3NDc3OjczNTU5NTE2_link"
                      >
                        <div class="d-flex">
                          <p class="m-0 f6 flex-auto">
                            JonathanXDR/ICT-Trade-17-Regional-Preparation-Tasks-2023
                            <span class="text-normal color-fg-muted"> #6 </span>
                          </p>
                          <p
                            class="note m-0 pr-2 d-block d-md-none color-fg-muted text-right flex-shrink-0"
                          >
                            <relative-time
                              datetime="2023-02-18T14:01:13Z"
                              class="no-wrap"
                              title="Feb 18, 2023, 3:01 PM GMT+1"
                              >Feb 18, 2023</relative-time
                            >
                            <span
                              class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                              style="width: 16px"
                            >
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="octicon octicon-bookmark notification-is-starred-icon ml-1 color-fg-severe"
                              >
                                <path
                                  d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                                ></path>
                              </svg>
                            </span>
                          </p>
                        </div>
                        <p class="m-0 text-normal pr-2 pr-md-0 markdown-title">
                          Bump socket.io-parser from 4.0.4 to 4.0.5 in /work/htmlcss/css-selectors
                        </p>
                      </div>

                      <div
                        class="d-md-flex d-none flex-items-center min-width-0 pl-3 flex-shrink-0"
                      ></div>
                    </a>
                  </div>

                  <div class="d-flex flex-row flex-md-row-reverse">
                    <p
                      class="note m-0 d-md-block d-none color-fg-muted text-right pr-3 flex-shrink-0 notification-list-item-hide-on-hover"
                      style="width: 140px; line-height: 20px"
                    >
                      <relative-time
                        datetime="2023-02-18T14:01:13Z"
                        class="no-wrap"
                        title="Feb 18, 2023, 3:01 PM GMT+1"
                        >Feb 18, 2023</relative-time
                      >
                      <span
                        class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                        style="width: 16px"
                      >
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          class="octicon octicon-bookmark v-align-middle"
                        >
                          <path
                            d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                          ></path>
                        </svg>
                      </span>
                    </p>

                    <div
                      style="width: 70px; min-width: 70px"
                      class="AvatarStack AvatarStack--two AvatarStack--right mr-0 mr-sm-3 mr-md-0 mr-lg-0 clearfix d-inline-block"
                    >
                      <div class="AvatarStack-body">
                        <a
                          class="avatar avatar-user"
                          data-hovercard-type="user"
                          data-hovercard-url="/users/JonathanXDR/hovercard"
                          data-octo-click="hovercard-link-click"
                          data-octo-dimensions="link_type:self"
                          href="/JonathanXDR"
                          ><img
                            class="avatar-user"
                            src="https://avatars.githubusercontent.com/u/73559516?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@JonathanXDR"
                        /></a>
                        <a class="avatar avatar-user" href="/apps/dependabot"
                          ><img
                            src="https://avatars.githubusercontent.com/in/29110?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@dependabot"
                        /></a>
                      </div>
                    </div>

                    <span class="f6 flex-self-center ml-2 px-2 flex-shrink-0">subscribed</span>
                  </div>
                </div>

                <ul
                  class="notification-list-item-actions d-none position-absolute top-0 bottom-0 right-0 list-style-none mr-2 d-flex flex-items-center"
                >
                  <li class="js-notification-action notification-action-mark-unarchived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unarchive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="ZQDDWnOObtPqWG6cKqSp4VSR-kMhf5a619DvzWgB-8SaGxq5ohHcJt_lyGMetFs_QuRQ4wQMfXyt_yvWHWwjgA"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI3NDc3OjczNTU5NTE2"
                        />

                        <button type="submit" title="Move to inbox" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-arrow-right v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-mark-archived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/archive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="6wDzt2AKnTe6QmQd3dvuc3zVpMpHa6GW4b1E817iPewtIxx9oqdwAT8dfjHnFmka9SHjSvB-Uqs3taMZR97Q9g"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI3NDc3OjczNTU5NTE2"
                        />

                        <button type="submit" title="Done" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-check v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unsubscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="unsubscribed"
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unsubscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="UR0fBB4vtz6-opbfTF9iz3x_nLTwicNMlmo3aX1l72sWYpCEzbe0sktbirWR_hh8MesG-H-GajOQAvzgCV-Sjg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI3NDc3OjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsubscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-subscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="subscribed"
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/subscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="YFLCzv0D-qh25DTl_stgxyZGTMBzIPlF4kSnOPvec1jY7caz7Nk3k1j5OSwo_GdsZmkasgH7DUCy8N2etRllGQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI3NDc3OjczNTU5NTE2"
                        />

                        <button type="submit" title="Subscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-star">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="starred"
                        data-turbo="false"
                        action="/notifications/beta/star"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="VEwUeeqGxGRawee_aMFwRhp043ingMZHsGBlwuBi8TIHyGI8T2YQmDyWbkEDp79q-XgdwQpjDYSkLZyTE1k51w"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI3NDc3OjczNTU5NTE2"
                        />

                        <button type="submit" title="Save" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unstar">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="unstarred"
                        data-turbo="false"
                        action="/notifications/beta/unstar"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="u5CtC-diCGXAqFVjubZmIaA8nL_cMzW5fKYQUwjpwX9ggHbc0mucfV66e1-rdFZSgQKjye1d7MIl8aobCJ5fkQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI3NDc3OjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsave" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M1.19 1.143 4.182 3.31l.014.01 8.486 6.145.014.01 2.994 2.168a.75.75 0 1 1-.88 1.214L13 11.547v2.703a.75.75 0 0 1-1.206.596L8 11.944l-3.794 2.902A.75.75 0 0 1 3 14.25V4.305L.31 2.357a.75.75 0 1 1 .88-1.214ZM4.5 5.39v7.341l3.044-2.328a.75.75 0 0 1 .912 0l3.044 2.328V10.46ZM5.865 1h5.385c.966 0 1.75.784 1.75 1.75v3.624a.75.75 0 0 1-1.5 0V2.75a.25.25 0 0 0-.25-.25H5.865a.75.75 0 0 1 0-1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>
                </ul>
              </li>

              <li
                class="notifications-list-item p-0 pl-2 pb-2 pb-md-0 position-relative border-0 js-notifications-list-item js-navigation-item border-bottom color-border-muted notification-archived"
                data-notification-id="NT_kwDOBGJt3LM1NjQwMjI3MzQ5OjczNTU5NTE2"
              >
                <div class="d-flex flex-column flex-md-row flex-md-items-center">
                  <div class="d-flex flex-row flex-md-1">
                    <div
                      class="d-flex flex-column flex-sm-row flex-self-start flex-items-center"
                      style="margin-top: 5px"
                    >
                      <div
                        class="notification-list-item-unread-indicator circle d-none d-md-block"
                      ></div>

                      <label class="p-2 clearfix">
                        <input
                          class="float-left js-notification-bulk-action-check-item"
                          type="checkbox"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI3MzQ5OjczNTU5NTE2"
                          aria-labelledby="notification_NT_kwDOBGJt3LM1NjQwMjI3MzQ5OjczNTU5NTE2_link"
                          data-check-all-item=""
                          autocomplete="off"
                        />
                      </label>
                    </div>

                    <a
                      class="d-flex flex-items-center flex-auto min-width-0 no-underline py-2 js-navigation-open notification-list-item-link wb-break-word"
                      href="https://github.com/JonathanXDR/ICT-Trade-17-Regional-Preparation-Tasks-2023/pull/5?notification_referrer_id=NT_kwDOBGJt3LM1NjQwMjI3MzQ5OjczNTU5NTE2&amp;notifications_query=is%3Adone#event-8753004957"
                      data-hydro-click='{"event_type":"notifications.read","payload":{"list_type":"Repository","list_id":"603434507","thread_type":"Issue","thread_id":"1590354358","comment_type":"IssueEventNotification","comment_id":"8753004957","version":"V2","originating_url":"https://github.com/notifications?query=is%3Adone","user_id":73559516}}'
                      data-hydro-click-hmac="d13ae9c2269fc5fbee05fa7be071f05b97a895a1313f4deda30393d2fb0b3058"
                    >
                      <div
                        class="d-flex flex-column flex-md-row mr-2 flex-self-start flex-items-center"
                      >
                        <div class="flex-shrink-0 flex-self-start text-center" style="width: 16px">
                          <svg
                            class="octicon octicon-git-merge color-fg-done"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                          >
                            <path
                              d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"
                            ></path>
                          </svg>
                        </div>

                        <div
                          class="notification-list-item-unread-indicator circle d-md-none d-block mt-1"
                        ></div>
                      </div>

                      <div
                        class="d-flex flex-column flex-auto"
                        id="notification_NT_kwDOBGJt3LM1NjQwMjI3MzQ5OjczNTU5NTE2_link"
                      >
                        <div class="d-flex">
                          <p class="m-0 f6 flex-auto">
                            JonathanXDR/ICT-Trade-17-Regional-Preparation-Tasks-2023
                            <span class="text-normal color-fg-muted"> #5 </span>
                          </p>
                          <p
                            class="note m-0 pr-2 d-block d-md-none color-fg-muted text-right flex-shrink-0"
                          >
                            <relative-time
                              datetime="2023-02-18T14:01:12Z"
                              class="no-wrap"
                              title="Feb 18, 2023, 3:01 PM GMT+1"
                              >Feb 18, 2023</relative-time
                            >
                            <span
                              class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                              style="width: 16px"
                            >
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="octicon octicon-bookmark notification-is-starred-icon ml-1 color-fg-severe"
                              >
                                <path
                                  d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                                ></path>
                              </svg>
                            </span>
                          </p>
                        </div>
                        <p class="m-0 text-normal pr-2 pr-md-0 markdown-title">
                          Bump minimist from 1.2.5 to 1.2.8 in /work/htmlcss/css-selectors
                        </p>
                      </div>

                      <div
                        class="d-md-flex d-none flex-items-center min-width-0 pl-3 flex-shrink-0"
                      ></div>
                    </a>
                  </div>

                  <div class="d-flex flex-row flex-md-row-reverse">
                    <p
                      class="note m-0 d-md-block d-none color-fg-muted text-right pr-3 flex-shrink-0 notification-list-item-hide-on-hover"
                      style="width: 140px; line-height: 20px"
                    >
                      <relative-time
                        datetime="2023-02-18T14:01:12Z"
                        class="no-wrap"
                        title="Feb 18, 2023, 3:01 PM GMT+1"
                        >Feb 18, 2023</relative-time
                      >
                      <span
                        class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                        style="width: 16px"
                      >
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          class="octicon octicon-bookmark v-align-middle"
                        >
                          <path
                            d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                          ></path>
                        </svg>
                      </span>
                    </p>

                    <div
                      style="width: 70px; min-width: 70px"
                      class="AvatarStack AvatarStack--two AvatarStack--right mr-0 mr-sm-3 mr-md-0 mr-lg-0 clearfix d-inline-block"
                    >
                      <div class="AvatarStack-body">
                        <a
                          class="avatar avatar-user"
                          data-hovercard-type="user"
                          data-hovercard-url="/users/JonathanXDR/hovercard"
                          data-octo-click="hovercard-link-click"
                          data-octo-dimensions="link_type:self"
                          href="/JonathanXDR"
                          ><img
                            class="avatar-user"
                            src="https://avatars.githubusercontent.com/u/73559516?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@JonathanXDR"
                        /></a>
                        <a class="avatar avatar-user" href="/apps/dependabot"
                          ><img
                            src="https://avatars.githubusercontent.com/in/29110?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@dependabot"
                        /></a>
                      </div>
                    </div>

                    <span class="f6 flex-self-center ml-2 px-2 flex-shrink-0">subscribed</span>
                  </div>
                </div>

                <ul
                  class="notification-list-item-actions d-none position-absolute top-0 bottom-0 right-0 list-style-none mr-2 d-flex flex-items-center"
                >
                  <li class="js-notification-action notification-action-mark-unarchived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unarchive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="avORi0gTFeegSrcw2iTMaadkzyS0dGbH1E0VmuZT6hGV6EhomYynEpX3Ec_uND63sRFlhJEHjQGuYtGBkz4yVQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI3MzQ5OjczNTU5NTE2"
                        />

                        <button type="submit" title="Move to inbox" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-arrow-right v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-mark-archived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/archive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="Ve7LwcMHMvjTHtZ8YvH00WarAfW_-FmBdSwDXaxaUiGTzSQLAarfzlZBzFBYPHO4719GdQjtqryjJOS3tWa_Ow"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI3MzQ5OjczNTU5NTE2"
                        />

                        <button type="submit" title="Done" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-check v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unsubscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="unsubscribed"
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unsubscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="_6HMPWWZ_0D_b18BpMju9_d7SHE5OMTZlMqi6ub0qDa43kO9tgH8zAqWQ2t5aZREuu_SPbY3baaSomljks7V0w"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI3MzQ5OjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsubscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-subscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="subscribed"
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/subscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="GYh9ygKkAV5fQ6FUIcX279skuKd5G5i6IsR8XJPABu6hN3m3E37MZXFerJ338vFEmwvu1QvAbL9ycAb63QcQrw"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI3MzQ5OjczNTU5NTE2"
                        />

                        <button type="submit" title="Subscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-star">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="starred"
                        data-turbo="false"
                        action="/notifications/beta/star"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="jrf2s-YeRI78erbtT_-JGkeir8CwqRsq3_dPmhzDpILdM4D2Q_6QcpotPxMkmUY2pK5ReR1K0OnLurbL7_hsZw"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI3MzQ5OjczNTU5NTE2"
                        />

                        <button type="submit" title="Save" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unstar">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="unstarred"
                        data-turbo="false"
                        action="/notifications/beta/unstar"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="6_JXmD4cnAiZZCFOSt3tafPPyxB7BS-kYf2J3Y9lR_Iw4oxPCxUIEAd2D3JYH90a0vH0Zkpr9t84qjOVjxLZHA"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI3MzQ5OjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsave" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M1.19 1.143 4.182 3.31l.014.01 8.486 6.145.014.01 2.994 2.168a.75.75 0 1 1-.88 1.214L13 11.547v2.703a.75.75 0 0 1-1.206.596L8 11.944l-3.794 2.902A.75.75 0 0 1 3 14.25V4.305L.31 2.357a.75.75 0 1 1 .88-1.214ZM4.5 5.39v7.341l3.044-2.328a.75.75 0 0 1 .912 0l3.044 2.328V10.46ZM5.865 1h5.385c.966 0 1.75.784 1.75 1.75v3.624a.75.75 0 0 1-1.5 0V2.75a.25.25 0 0 0-.25-.25H5.865a.75.75 0 0 1 0-1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>
                </ul>
              </li>

              <li
                class="notifications-list-item p-0 pl-2 pb-2 pb-md-0 position-relative border-0 js-notifications-list-item js-navigation-item border-bottom color-border-muted notification-archived"
                data-notification-id="NT_kwDOBGJt3LM1NjQwMjI3Mjg1OjczNTU5NTE2"
              >
                <div class="d-flex flex-column flex-md-row flex-md-items-center">
                  <div class="d-flex flex-row flex-md-1">
                    <div
                      class="d-flex flex-column flex-sm-row flex-self-start flex-items-center"
                      style="margin-top: 5px"
                    >
                      <div
                        class="notification-list-item-unread-indicator circle d-none d-md-block"
                      ></div>

                      <label class="p-2 clearfix">
                        <input
                          class="float-left js-notification-bulk-action-check-item"
                          type="checkbox"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI3Mjg1OjczNTU5NTE2"
                          aria-labelledby="notification_NT_kwDOBGJt3LM1NjQwMjI3Mjg1OjczNTU5NTE2_link"
                          data-check-all-item=""
                          autocomplete="off"
                        />
                      </label>
                    </div>

                    <a
                      class="d-flex flex-items-center flex-auto min-width-0 no-underline py-2 js-navigation-open notification-list-item-link wb-break-word"
                      href="https://github.com/JonathanXDR/ICT-Trade-17-Regional-Preparation-Tasks-2023/pull/4?notification_referrer_id=NT_kwDOBGJt3LM1NjQwMjI3Mjg1OjczNTU5NTE2&amp;notifications_query=is%3Adone#event-8753003224"
                      data-hydro-click='{"event_type":"notifications.read","payload":{"list_type":"Repository","list_id":"603434507","thread_type":"Issue","thread_id":"1590354352","comment_type":"IssueEventNotification","comment_id":"8753003224","version":"V2","originating_url":"https://github.com/notifications?query=is%3Adone","user_id":73559516}}'
                      data-hydro-click-hmac="7874d353a27dfbf632549fb4a24a83918439e7bf85038a51c4916c0f431a1acc"
                    >
                      <div
                        class="d-flex flex-column flex-md-row mr-2 flex-self-start flex-items-center"
                      >
                        <div class="flex-shrink-0 flex-self-start text-center" style="width: 16px">
                          <svg
                            class="octicon octicon-git-merge color-fg-done"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                          >
                            <path
                              d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"
                            ></path>
                          </svg>
                        </div>

                        <div
                          class="notification-list-item-unread-indicator circle d-md-none d-block mt-1"
                        ></div>
                      </div>

                      <div
                        class="d-flex flex-column flex-auto"
                        id="notification_NT_kwDOBGJt3LM1NjQwMjI3Mjg1OjczNTU5NTE2_link"
                      >
                        <div class="d-flex">
                          <p class="m-0 f6 flex-auto">
                            JonathanXDR/ICT-Trade-17-Regional-Preparation-Tasks-2023
                            <span class="text-normal color-fg-muted"> #4 </span>
                          </p>
                          <p
                            class="note m-0 pr-2 d-block d-md-none color-fg-muted text-right flex-shrink-0"
                          >
                            <relative-time
                              datetime="2023-02-18T14:01:11Z"
                              class="no-wrap"
                              title="Feb 18, 2023, 3:01 PM GMT+1"
                              >Feb 18, 2023</relative-time
                            >
                            <span
                              class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                              style="width: 16px"
                            >
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="octicon octicon-bookmark notification-is-starred-icon ml-1 color-fg-severe"
                              >
                                <path
                                  d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                                ></path>
                              </svg>
                            </span>
                          </p>
                        </div>
                        <p class="m-0 text-normal pr-2 pr-md-0 markdown-title">
                          Bump ua-parser-js from 0.7.31 to 0.7.33 in /work/htmlcss/css-selectors
                        </p>
                      </div>

                      <div
                        class="d-md-flex d-none flex-items-center min-width-0 pl-3 flex-shrink-0"
                      ></div>
                    </a>
                  </div>

                  <div class="d-flex flex-row flex-md-row-reverse">
                    <p
                      class="note m-0 d-md-block d-none color-fg-muted text-right pr-3 flex-shrink-0 notification-list-item-hide-on-hover"
                      style="width: 140px; line-height: 20px"
                    >
                      <relative-time
                        datetime="2023-02-18T14:01:11Z"
                        class="no-wrap"
                        title="Feb 18, 2023, 3:01 PM GMT+1"
                        >Feb 18, 2023</relative-time
                      >
                      <span
                        class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                        style="width: 16px"
                      >
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          class="octicon octicon-bookmark v-align-middle"
                        >
                          <path
                            d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                          ></path>
                        </svg>
                      </span>
                    </p>

                    <div
                      style="width: 70px; min-width: 70px"
                      class="AvatarStack AvatarStack--two AvatarStack--right mr-0 mr-sm-3 mr-md-0 mr-lg-0 clearfix d-inline-block"
                    >
                      <div class="AvatarStack-body">
                        <a
                          class="avatar avatar-user"
                          data-hovercard-type="user"
                          data-hovercard-url="/users/JonathanXDR/hovercard"
                          data-octo-click="hovercard-link-click"
                          data-octo-dimensions="link_type:self"
                          href="/JonathanXDR"
                          ><img
                            class="avatar-user"
                            src="https://avatars.githubusercontent.com/u/73559516?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@JonathanXDR"
                        /></a>
                        <a class="avatar avatar-user" href="/apps/dependabot"
                          ><img
                            src="https://avatars.githubusercontent.com/in/29110?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@dependabot"
                        /></a>
                      </div>
                    </div>

                    <span class="f6 flex-self-center ml-2 px-2 flex-shrink-0">subscribed</span>
                  </div>
                </div>

                <ul
                  class="notification-list-item-actions d-none position-absolute top-0 bottom-0 right-0 list-style-none mr-2 d-flex flex-items-center"
                >
                  <li class="js-notification-action notification-action-mark-unarchived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unarchive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="zohQQ01No0k2TR660M70n3ehK-29kWPwGRWUTPG2rRAxk4mgnNIRvAPwuEXk3gZBYdSBTZjiiDZjOlBXhNt1VA"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI3Mjg1OjczNTU5NTE2"
                        />

                        <button type="submit" title="Move to inbox" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-arrow-right v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-mark-archived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/archive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="3_CeikiLsswZSaVcEGyf1QUGjPmWSBUyIiIWuy6rEa4Z03FAiiZf-pwWv3AqoRi8jPLLeSFd5g_0KvFRN5f8tA"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI3Mjg1OjczNTU5NTE2"
                        />

                        <button type="submit" title="Done" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-check v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unsubscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="unsubscribed"
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unsubscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="0tDJBrhqhvBGIhNGcqQU3gZ2qdWFFpTcJ6-84DUnzWuVr0aGa_KFfLPbDyyvBW5tS-IzmQoZPaMhx3dpQR2wjg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI3Mjg1OjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsubscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-subscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="subscribed"
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/subscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="6LpwCcu-buC45_0lo4UJmEYlWKzeFSk5RdjBb3qpjbhQBXR02mSj25b68Ox1sg4zBgoO3qzO3TwVbLvJNG6b-Q"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI3Mjg1OjczNTU5NTE2"
                        />

                        <button type="submit" title="Subscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-star">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="starred"
                        data-turbo="false"
                        action="/notifications/beta/star"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="Y9HD1u4JMlJZYrSqU9dty6PQ_rBZRXlkUPZk9fWbsTQwVbWTS-nmrj81PVQ4saLnQNwACfSmsqdEu52kBqB50Q"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI3Mjg1OjczNTU5NTE2"
                        />

                        <button type="submit" title="Save" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unstar">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="unstarred"
                        data-turbo="false"
                        action="/notifications/beta/unstar"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="bCAtIzsnm4roFDBL0CWclyopmBJhvjaZYCuM2xytfiW3MPb0Di4PknYGHnfC56zkCxenZFDQ7-I5fDaTHNrgyw"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI3Mjg1OjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsave" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M1.19 1.143 4.182 3.31l.014.01 8.486 6.145.014.01 2.994 2.168a.75.75 0 1 1-.88 1.214L13 11.547v2.703a.75.75 0 0 1-1.206.596L8 11.944l-3.794 2.902A.75.75 0 0 1 3 14.25V4.305L.31 2.357a.75.75 0 1 1 .88-1.214ZM4.5 5.39v7.341l3.044-2.328a.75.75 0 0 1 .912 0l3.044 2.328V10.46ZM5.865 1h5.385c.966 0 1.75.784 1.75 1.75v3.624a.75.75 0 0 1-1.5 0V2.75a.25.25 0 0 0-.25-.25H5.865a.75.75 0 0 1 0-1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>
                </ul>
              </li>

              <li
                class="notifications-list-item p-0 pl-2 pb-2 pb-md-0 position-relative border-0 js-notifications-list-item js-navigation-item border-bottom color-border-muted notification-archived"
                data-notification-id="NT_kwDOBGJt3LM1NjQwMjI3MDE4OjczNTU5NTE2"
              >
                <div class="d-flex flex-column flex-md-row flex-md-items-center">
                  <div class="d-flex flex-row flex-md-1">
                    <div
                      class="d-flex flex-column flex-sm-row flex-self-start flex-items-center"
                      style="margin-top: 5px"
                    >
                      <div
                        class="notification-list-item-unread-indicator circle d-none d-md-block"
                      ></div>

                      <label class="p-2 clearfix">
                        <input
                          class="float-left js-notification-bulk-action-check-item"
                          type="checkbox"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI3MDE4OjczNTU5NTE2"
                          aria-labelledby="notification_NT_kwDOBGJt3LM1NjQwMjI3MDE4OjczNTU5NTE2_link"
                          data-check-all-item=""
                          autocomplete="off"
                        />
                      </label>
                    </div>

                    <a
                      class="d-flex flex-items-center flex-auto min-width-0 no-underline py-2 js-navigation-open notification-list-item-link wb-break-word"
                      href="https://github.com/JonathanXDR/ICT-Trade-17-Regional-Preparation-Tasks-2023/pull/3?notification_referrer_id=NT_kwDOBGJt3LM1NjQwMjI3MDE4OjczNTU5NTE2&amp;notifications_query=is%3Adone#event-8753001654"
                      data-hydro-click='{"event_type":"notifications.read","payload":{"list_type":"Repository","list_id":"603434507","thread_type":"Issue","thread_id":"1590354341","comment_type":"IssueEventNotification","comment_id":"8753001654","version":"V2","originating_url":"https://github.com/notifications?query=is%3Adone","user_id":73559516}}'
                      data-hydro-click-hmac="9363f7b8fa375a30c4f30d7c0d329119dee5a68bb6d1841385df3d4aa6077a95"
                    >
                      <div
                        class="d-flex flex-column flex-md-row mr-2 flex-self-start flex-items-center"
                      >
                        <div class="flex-shrink-0 flex-self-start text-center" style="width: 16px">
                          <svg
                            class="octicon octicon-git-merge color-fg-done"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                          >
                            <path
                              d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"
                            ></path>
                          </svg>
                        </div>

                        <div
                          class="notification-list-item-unread-indicator circle d-md-none d-block mt-1"
                        ></div>
                      </div>

                      <div
                        class="d-flex flex-column flex-auto"
                        id="notification_NT_kwDOBGJt3LM1NjQwMjI3MDE4OjczNTU5NTE2_link"
                      >
                        <div class="d-flex">
                          <p class="m-0 f6 flex-auto">
                            JonathanXDR/ICT-Trade-17-Regional-Preparation-Tasks-2023
                            <span class="text-normal color-fg-muted"> #3 </span>
                          </p>
                          <p
                            class="note m-0 pr-2 d-block d-md-none color-fg-muted text-right flex-shrink-0"
                          >
                            <relative-time
                              datetime="2023-02-18T14:01:10Z"
                              class="no-wrap"
                              title="Feb 18, 2023, 3:01 PM GMT+1"
                              >Feb 18, 2023</relative-time
                            >
                            <span
                              class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                              style="width: 16px"
                            >
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="octicon octicon-bookmark notification-is-starred-icon ml-1 color-fg-severe"
                              >
                                <path
                                  d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                                ></path>
                              </svg>
                            </span>
                          </p>
                        </div>
                        <p class="m-0 text-normal pr-2 pr-md-0 markdown-title">
                          Bump minimist from 1.2.5 to 1.2.8 in /work/htmlcss/health-department
                        </p>
                      </div>

                      <div
                        class="d-md-flex d-none flex-items-center min-width-0 pl-3 flex-shrink-0"
                      ></div>
                    </a>
                  </div>

                  <div class="d-flex flex-row flex-md-row-reverse">
                    <p
                      class="note m-0 d-md-block d-none color-fg-muted text-right pr-3 flex-shrink-0 notification-list-item-hide-on-hover"
                      style="width: 140px; line-height: 20px"
                    >
                      <relative-time
                        datetime="2023-02-18T14:01:10Z"
                        class="no-wrap"
                        title="Feb 18, 2023, 3:01 PM GMT+1"
                        >Feb 18, 2023</relative-time
                      >
                      <span
                        class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                        style="width: 16px"
                      >
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          class="octicon octicon-bookmark v-align-middle"
                        >
                          <path
                            d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                          ></path>
                        </svg>
                      </span>
                    </p>

                    <div
                      style="width: 70px; min-width: 70px"
                      class="AvatarStack AvatarStack--two AvatarStack--right mr-0 mr-sm-3 mr-md-0 mr-lg-0 clearfix d-inline-block"
                    >
                      <div class="AvatarStack-body">
                        <a
                          class="avatar avatar-user"
                          data-hovercard-type="user"
                          data-hovercard-url="/users/JonathanXDR/hovercard"
                          data-octo-click="hovercard-link-click"
                          data-octo-dimensions="link_type:self"
                          href="/JonathanXDR"
                          ><img
                            class="avatar-user"
                            src="https://avatars.githubusercontent.com/u/73559516?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@JonathanXDR"
                        /></a>
                        <a class="avatar avatar-user" href="/apps/dependabot"
                          ><img
                            src="https://avatars.githubusercontent.com/in/29110?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@dependabot"
                        /></a>
                      </div>
                    </div>

                    <span class="f6 flex-self-center ml-2 px-2 flex-shrink-0">subscribed</span>
                  </div>
                </div>

                <ul
                  class="notification-list-item-actions d-none position-absolute top-0 bottom-0 right-0 list-style-none mr-2 d-flex flex-items-center"
                >
                  <li class="js-notification-action notification-action-mark-unarchived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unarchive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="ZMvOSMF8yiwjVynhP-CYu3uV2Ieq8sA52Px5hVWm8mOb0BerEON42Rbqjx4L8GplbeByJ4-BK_-i072eIMsqJw"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI3MDE4OjczNTU5NTE2"
                        />

                        <button type="submit" title="Move to inbox" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-arrow-right v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-mark-archived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/archive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="jUI5KS30VS9MsVR5lNR9Tq1JVshnkRCZ9j6Un0ryAaVLYdbj71m4GcnuTlWuGfonJL0RSNCE46QgNnN1U87svw"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI3MDE4OjczNTU5NTE2"
                        />

                        <button type="submit" title="Done" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-check v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unsubscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="unsubscribed"
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unsubscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="cpe4LL69Xec60BzlYLmlolc1f4aqg0e7oatHK8WjPl416DesbSVea88pAI-9GN8RGqHlyiWM7sSnw4yisZlDuw"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI3MDE4OjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsubscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-subscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="subscribed"
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/subscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="MEkO25GSWJPYVgR4LJNEZSQayeqK3Cg5iS2TD3SFiLiI9gqmgEiVqPZLCbH6pEPOZDWfmPgH3DzZmempOkKe-Q"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI3MDE4OjczNTU5NTE2"
                        />

                        <button type="submit" title="Subscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-star">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="starred"
                        data-turbo="false"
                        action="/notifications/beta/star"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="7YAyqQ54RBBdFreh_eNYfaXFf-_QjzPF6R-Aob_Bngy-BETsq5iQ7DtBPl-WhZdRRsmBVn1s-Ab9UnnwTPpW6Q"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI3MDE4OjczNTU5NTE2"
                        />

                        <button type="submit" title="Save" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unstar">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="unstarred"
                        data-turbo="false"
                        action="/notifications/beta/unstar"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="l281_eU02Nd_onN4vCOGEJISWkemEdMhRqzl3wEXo59Mf-4q0D1Mz-GwXUSu4bZjsyxlMZd_Clof-1-XAWA9cQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI3MDE4OjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsave" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M1.19 1.143 4.182 3.31l.014.01 8.486 6.145.014.01 2.994 2.168a.75.75 0 1 1-.88 1.214L13 11.547v2.703a.75.75 0 0 1-1.206.596L8 11.944l-3.794 2.902A.75.75 0 0 1 3 14.25V4.305L.31 2.357a.75.75 0 1 1 .88-1.214ZM4.5 5.39v7.341l3.044-2.328a.75.75 0 0 1 .912 0l3.044 2.328V10.46ZM5.865 1h5.385c.966 0 1.75.784 1.75 1.75v3.624a.75.75 0 0 1-1.5 0V2.75a.25.25 0 0 0-.25-.25H5.865a.75.75 0 0 1 0-1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>
                </ul>
              </li>

              <li
                class="notifications-list-item p-0 pl-2 pb-2 pb-md-0 position-relative border-0 js-notifications-list-item js-navigation-item border-bottom color-border-muted notification-archived"
                data-notification-id="NT_kwDOBGJt3LM1NjQwMjI2ODgwOjczNTU5NTE2"
              >
                <div class="d-flex flex-column flex-md-row flex-md-items-center">
                  <div class="d-flex flex-row flex-md-1">
                    <div
                      class="d-flex flex-column flex-sm-row flex-self-start flex-items-center"
                      style="margin-top: 5px"
                    >
                      <div
                        class="notification-list-item-unread-indicator circle d-none d-md-block"
                      ></div>

                      <label class="p-2 clearfix">
                        <input
                          class="float-left js-notification-bulk-action-check-item"
                          type="checkbox"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI2ODgwOjczNTU5NTE2"
                          aria-labelledby="notification_NT_kwDOBGJt3LM1NjQwMjI2ODgwOjczNTU5NTE2_link"
                          data-check-all-item=""
                          autocomplete="off"
                        />
                      </label>
                    </div>

                    <a
                      class="d-flex flex-items-center flex-auto min-width-0 no-underline py-2 js-navigation-open notification-list-item-link wb-break-word"
                      href="https://github.com/JonathanXDR/ICT-Trade-17-Regional-Preparation-Tasks-2023/pull/2?notification_referrer_id=NT_kwDOBGJt3LM1NjQwMjI2ODgwOjczNTU5NTE2&amp;notifications_query=is%3Adone#event-8752998678"
                      data-hydro-click='{"event_type":"notifications.read","payload":{"list_type":"Repository","list_id":"603434507","thread_type":"Issue","thread_id":"1590354338","comment_type":"IssueEventNotification","comment_id":"8752998678","version":"V2","originating_url":"https://github.com/notifications?query=is%3Adone","user_id":73559516}}'
                      data-hydro-click-hmac="471de3b6434c9ecccccbd0996b0cf0a8ef496750ea0a56ba20670075f017529c"
                    >
                      <div
                        class="d-flex flex-column flex-md-row mr-2 flex-self-start flex-items-center"
                      >
                        <div class="flex-shrink-0 flex-self-start text-center" style="width: 16px">
                          <svg
                            class="octicon octicon-git-merge color-fg-done"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                          >
                            <path
                              d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"
                            ></path>
                          </svg>
                        </div>

                        <div
                          class="notification-list-item-unread-indicator circle d-md-none d-block mt-1"
                        ></div>
                      </div>

                      <div
                        class="d-flex flex-column flex-auto"
                        id="notification_NT_kwDOBGJt3LM1NjQwMjI2ODgwOjczNTU5NTE2_link"
                      >
                        <div class="d-flex">
                          <p class="m-0 f6 flex-auto">
                            JonathanXDR/ICT-Trade-17-Regional-Preparation-Tasks-2023
                            <span class="text-normal color-fg-muted"> #2 </span>
                          </p>
                          <p
                            class="note m-0 pr-2 d-block d-md-none color-fg-muted text-right flex-shrink-0"
                          >
                            <relative-time
                              datetime="2023-02-18T14:01:08Z"
                              class="no-wrap"
                              title="Feb 18, 2023, 3:01 PM GMT+1"
                              >Feb 18, 2023</relative-time
                            >
                            <span
                              class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                              style="width: 16px"
                            >
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="octicon octicon-bookmark notification-is-starred-icon ml-1 color-fg-severe"
                              >
                                <path
                                  d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                                ></path>
                              </svg>
                            </span>
                          </p>
                        </div>
                        <p class="m-0 text-normal pr-2 pr-md-0 markdown-title">
                          Bump qs from 6.5.2 to 6.5.3 in /work/htmlcss/health-department
                        </p>
                      </div>

                      <div
                        class="d-md-flex d-none flex-items-center min-width-0 pl-3 flex-shrink-0"
                      ></div>
                    </a>
                  </div>

                  <div class="d-flex flex-row flex-md-row-reverse">
                    <p
                      class="note m-0 d-md-block d-none color-fg-muted text-right pr-3 flex-shrink-0 notification-list-item-hide-on-hover"
                      style="width: 140px; line-height: 20px"
                    >
                      <relative-time
                        datetime="2023-02-18T14:01:08Z"
                        class="no-wrap"
                        title="Feb 18, 2023, 3:01 PM GMT+1"
                        >Feb 18, 2023</relative-time
                      >
                      <span
                        class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                        style="width: 16px"
                      >
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          class="octicon octicon-bookmark v-align-middle"
                        >
                          <path
                            d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                          ></path>
                        </svg>
                      </span>
                    </p>

                    <div
                      style="width: 70px; min-width: 70px"
                      class="AvatarStack AvatarStack--two AvatarStack--right mr-0 mr-sm-3 mr-md-0 mr-lg-0 clearfix d-inline-block"
                    >
                      <div class="AvatarStack-body">
                        <a
                          class="avatar avatar-user"
                          data-hovercard-type="user"
                          data-hovercard-url="/users/JonathanXDR/hovercard"
                          data-octo-click="hovercard-link-click"
                          data-octo-dimensions="link_type:self"
                          href="/JonathanXDR"
                          ><img
                            class="avatar-user"
                            src="https://avatars.githubusercontent.com/u/73559516?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@JonathanXDR"
                        /></a>
                        <a class="avatar avatar-user" href="/apps/dependabot"
                          ><img
                            src="https://avatars.githubusercontent.com/in/29110?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@dependabot"
                        /></a>
                      </div>
                    </div>

                    <span class="f6 flex-self-center ml-2 px-2 flex-shrink-0">subscribed</span>
                  </div>
                </div>

                <ul
                  class="notification-list-item-actions d-none position-absolute top-0 bottom-0 right-0 list-style-none mr-2 d-flex flex-items-center"
                >
                  <li class="js-notification-action notification-action-mark-unarchived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unarchive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="QeiXhb_1z03Tt-alSS-kQNt5a8PQWkPhRSXAV8XAdPG-805mbmp9uOYKQFp9P1aezQzBY_UpqCc_CgRMsK2stQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI2ODgwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Move to inbox" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-arrow-right v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-mark-archived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/archive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="2sZsNbbnPI7nJYjmadwRAH7UcNbV0Id5UCzc-rMkorMc5YP_dErRuGJ6kspTEZZp9yA3VmLFdESGJDsQqhhPqQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI2ODgwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Done" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-check v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unsubscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="unsubscribed"
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unsubscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="YMzTYtkG-hJoPKBSyLI0fK4nwMGhiJ1NwxvfDy5UmhMns1ziCp75np3FvDgVE07P47NajS6HNDLFcxSGWm7n9g"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI2ODgwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsubscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-subscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="subscribed"
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/subscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="qJd38w9EVd3f9fQopxQXwfRM3eSjdD4jSl34YJ4l3_UQKHOOHp6Y5vHo-eFxIxBqtGOLltGvyiYa6YLG0OLJtA"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI2ODgwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Subscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-star">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="starred"
                        data-turbo="false"
                        action="/notifications/beta/star"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="Ly14xqbgtGGvfp2Ql07cVuQE7OeMv6GxpciiCftPVe98qQ6DAwBgnckpFG78KBN6BwgSXiFcanKxhVtYCHSdCg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI2ODgwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Save" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unstar">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="unstarred"
                        data-turbo="false"
                        action="/notifications/beta/unstar"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="Vn8LoSNab44GqPSGW62qZlaXSGNA3Ps9FHZeyicknH-Nb9B2FlP7lpi62rpJb5oVd6l3FXGyIkZNIeSCJ1MCkQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI2ODgwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsave" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M1.19 1.143 4.182 3.31l.014.01 8.486 6.145.014.01 2.994 2.168a.75.75 0 1 1-.88 1.214L13 11.547v2.703a.75.75 0 0 1-1.206.596L8 11.944l-3.794 2.902A.75.75 0 0 1 3 14.25V4.305L.31 2.357a.75.75 0 1 1 .88-1.214ZM4.5 5.39v7.341l3.044-2.328a.75.75 0 0 1 .912 0l3.044 2.328V10.46ZM5.865 1h5.385c.966 0 1.75.784 1.75 1.75v3.624a.75.75 0 0 1-1.5 0V2.75a.25.25 0 0 0-.25-.25H5.865a.75.75 0 0 1 0-1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>
                </ul>
              </li>

              <li
                class="notifications-list-item p-0 pl-2 pb-2 pb-md-0 position-relative border-0 js-notifications-list-item js-navigation-item border-bottom color-border-muted notification-archived"
                data-notification-id="NT_kwDOBGJt3LM1NjQwMjI2ODU4OjczNTU5NTE2"
              >
                <div class="d-flex flex-column flex-md-row flex-md-items-center">
                  <div class="d-flex flex-row flex-md-1">
                    <div
                      class="d-flex flex-column flex-sm-row flex-self-start flex-items-center"
                      style="margin-top: 5px"
                    >
                      <div
                        class="notification-list-item-unread-indicator circle d-none d-md-block"
                      ></div>

                      <label class="p-2 clearfix">
                        <input
                          class="float-left js-notification-bulk-action-check-item"
                          type="checkbox"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI2ODU4OjczNTU5NTE2"
                          aria-labelledby="notification_NT_kwDOBGJt3LM1NjQwMjI2ODU4OjczNTU5NTE2_link"
                          data-check-all-item=""
                          autocomplete="off"
                        />
                      </label>
                    </div>

                    <a
                      class="d-flex flex-items-center flex-auto min-width-0 no-underline py-2 js-navigation-open notification-list-item-link wb-break-word"
                      href="https://github.com/JonathanXDR/ICT-Trade-17-Regional-Preparation-Tasks-2023/pull/1?notification_referrer_id=NT_kwDOBGJt3LM1NjQwMjI2ODU4OjczNTU5NTE2&amp;notifications_query=is%3Adone#event-8752996721"
                      data-hydro-click='{"event_type":"notifications.read","payload":{"list_type":"Repository","list_id":"603434507","thread_type":"Issue","thread_id":"1590354336","comment_type":"IssueEventNotification","comment_id":"8752996721","version":"V2","originating_url":"https://github.com/notifications?query=is%3Adone","user_id":73559516}}'
                      data-hydro-click-hmac="4ce88ca3f60e14053194932f85598d39494e80e56fbd84f9964be156cd51ff0e"
                    >
                      <div
                        class="d-flex flex-column flex-md-row mr-2 flex-self-start flex-items-center"
                      >
                        <div class="flex-shrink-0 flex-self-start text-center" style="width: 16px">
                          <svg
                            class="octicon octicon-git-merge color-fg-done"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                          >
                            <path
                              d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"
                            ></path>
                          </svg>
                        </div>

                        <div
                          class="notification-list-item-unread-indicator circle d-md-none d-block mt-1"
                        ></div>
                      </div>

                      <div
                        class="d-flex flex-column flex-auto"
                        id="notification_NT_kwDOBGJt3LM1NjQwMjI2ODU4OjczNTU5NTE2_link"
                      >
                        <div class="d-flex">
                          <p class="m-0 f6 flex-auto">
                            JonathanXDR/ICT-Trade-17-Regional-Preparation-Tasks-2023
                            <span class="text-normal color-fg-muted"> #1 </span>
                          </p>
                          <p
                            class="note m-0 pr-2 d-block d-md-none color-fg-muted text-right flex-shrink-0"
                          >
                            <relative-time
                              datetime="2023-02-18T14:01:08Z"
                              class="no-wrap"
                              title="Feb 18, 2023, 3:01 PM GMT+1"
                              >Feb 18, 2023</relative-time
                            >
                            <span
                              class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                              style="width: 16px"
                            >
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="octicon octicon-bookmark notification-is-starred-icon ml-1 color-fg-severe"
                              >
                                <path
                                  d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                                ></path>
                              </svg>
                            </span>
                          </p>
                        </div>
                        <p class="m-0 text-normal pr-2 pr-md-0 markdown-title">
                          Bump minimatch from 3.0.4 to 3.1.2 in /work/htmlcss/health-department
                        </p>
                      </div>

                      <div
                        class="d-md-flex d-none flex-items-center min-width-0 pl-3 flex-shrink-0"
                      ></div>
                    </a>
                  </div>

                  <div class="d-flex flex-row flex-md-row-reverse">
                    <p
                      class="note m-0 d-md-block d-none color-fg-muted text-right pr-3 flex-shrink-0 notification-list-item-hide-on-hover"
                      style="width: 140px; line-height: 20px"
                    >
                      <relative-time
                        datetime="2023-02-18T14:01:08Z"
                        class="no-wrap"
                        title="Feb 18, 2023, 3:01 PM GMT+1"
                        >Feb 18, 2023</relative-time
                      >
                      <span
                        class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                        style="width: 16px"
                      >
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          class="octicon octicon-bookmark v-align-middle"
                        >
                          <path
                            d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                          ></path>
                        </svg>
                      </span>
                    </p>

                    <div
                      style="width: 70px; min-width: 70px"
                      class="AvatarStack AvatarStack--two AvatarStack--right mr-0 mr-sm-3 mr-md-0 mr-lg-0 clearfix d-inline-block"
                    >
                      <div class="AvatarStack-body">
                        <a
                          class="avatar avatar-user"
                          data-hovercard-type="user"
                          data-hovercard-url="/users/JonathanXDR/hovercard"
                          data-octo-click="hovercard-link-click"
                          data-octo-dimensions="link_type:self"
                          href="/JonathanXDR"
                          ><img
                            class="avatar-user"
                            src="https://avatars.githubusercontent.com/u/73559516?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@JonathanXDR"
                        /></a>
                        <a class="avatar avatar-user" href="/apps/dependabot"
                          ><img
                            src="https://avatars.githubusercontent.com/in/29110?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@dependabot"
                        /></a>
                      </div>
                    </div>

                    <span class="f6 flex-self-center ml-2 px-2 flex-shrink-0">subscribed</span>
                  </div>
                </div>

                <ul
                  class="notification-list-item-actions d-none position-absolute top-0 bottom-0 right-0 list-style-none mr-2 d-flex flex-items-center"
                >
                  <li class="js-notification-action notification-action-mark-unarchived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unarchive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="B3WSY-je1VW_2uFx4-khMYGVd77M9mi2IYiy43Luh1f4bkuAOUFnoIpnR47X-dPvl-DdHumFg3Bbp3b4B4NfEw"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI2ODU4OjczNTU5NTE2"
                        />

                        <button type="submit" title="Move to inbox" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-arrow-right v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-mark-archived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/archive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="QslSzz8aJi2lTtIpKO9a6WjqaeSF8wRLqJLuD8BpSeqE6r0F_bfLGyARyAUSIt2A4R4uZDLm93Z-mgnl2VWk8A"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI2ODU4OjczNTU5NTE2"
                        />

                        <button type="submit" title="Done" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-check v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unsubscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="unsubscribed"
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unsubscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="i9O3vv9hP-KlocTBjUmi571vbuXJN6LEChpDjjXyWxHMrDg-LPk8blBY2KtQ6NhU8Pv0qUY4C7sMcogHQcgm9A"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI2ODU4OjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsubscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-subscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="subscribed"
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/subscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="mKJHoP9psrJUF6JDp3K7JEuuaNyrqEXt3WPrJ_gxEGsgHUPd7rN_iXoKr4pxRbyPC4E-rtlzseiN15GBtvYGKg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI2ODU4OjczNTU5NTE2"
                        />

                        <button type="submit" title="Subscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-star">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="starred"
                        data-turbo="false"
                        action="/notifications/beta/star"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="MBv7u8PPLqSWv5_3FSn5T8qOmci1sGqG2hscMM1Vh9Njn43-Zi_6WPDoFgl-TzZjKYJncRhToUXOVuVhPm5PNg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI2ODU4OjczNTU5NTE2"
                        />

                        <button type="submit" title="Save" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unstar">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="unstarred"
                        data-turbo="false"
                        action="/notifications/beta/unstar"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="51pZ7kZe_3H7ktcXKrDNnapb1bBvIfOAdMxbuWO7rhY8SoI5c1draWWA-Ss4cv3ui2Xqxl5PKvstm-HxY8ww-A"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI2ODU4OjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsave" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M1.19 1.143 4.182 3.31l.014.01 8.486 6.145.014.01 2.994 2.168a.75.75 0 1 1-.88 1.214L13 11.547v2.703a.75.75 0 0 1-1.206.596L8 11.944l-3.794 2.902A.75.75 0 0 1 3 14.25V4.305L.31 2.357a.75.75 0 1 1 .88-1.214ZM4.5 5.39v7.341l3.044-2.328a.75.75 0 0 1 .912 0l3.044 2.328V10.46ZM5.865 1h5.385c.966 0 1.75.784 1.75 1.75v3.624a.75.75 0 0 1-1.5 0V2.75a.25.25 0 0 0-.25-.25H5.865a.75.75 0 0 1 0-1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>
                </ul>
              </li>

              <li
                class="notifications-list-item p-0 pl-2 pb-2 pb-md-0 position-relative border-0 js-notifications-list-item js-navigation-item border-bottom color-border-muted notification-archived"
                data-notification-id="NT_kwDOBGJt3LM1NjQwMjI0ODkwOjczNTU5NTE2"
              >
                <div class="d-flex flex-column flex-md-row flex-md-items-center">
                  <div class="d-flex flex-row flex-md-1">
                    <div
                      class="d-flex flex-column flex-sm-row flex-self-start flex-items-center"
                      style="margin-top: 5px"
                    >
                      <div
                        class="notification-list-item-unread-indicator circle d-none d-md-block"
                      ></div>

                      <label class="p-2 clearfix">
                        <input
                          class="float-left js-notification-bulk-action-check-item"
                          type="checkbox"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI0ODkwOjczNTU5NTE2"
                          aria-labelledby="notification_NT_kwDOBGJt3LM1NjQwMjI0ODkwOjczNTU5NTE2_link"
                          data-check-all-item=""
                          autocomplete="off"
                        />
                      </label>
                    </div>

                    <a
                      class="d-flex flex-items-center flex-auto min-width-0 no-underline py-2 js-navigation-open notification-list-item-link wb-break-word"
                      href="https://github.com/JonathanXDR/ICT-Trade-17-Regional-Preparation-Tasks-2023/security/dependabot?notification_referrer_id=NT_kwDOBGJt3LM1NjQwMjI0ODkwOjczNTU5NTE2&amp;notifications_query=is%3Adone"
                      data-hydro-click='{"event_type":"notifications.read","payload":{"list_type":"Repository","list_id":"603434507","thread_type":"RepositoryDependabotAlertsThread","thread_id":"603434507","comment_type":"VulnerabilityAlertingEvent","comment_id":"","version":"V2","originating_url":"https://github.com/notifications?query=is%3Adone","user_id":73559516}}'
                      data-hydro-click-hmac="e180b2e58478a2536985858f2dbef2e305853794aa63006708d0420c0dc5a336"
                    >
                      <div
                        class="d-flex flex-column flex-md-row mr-2 flex-self-start flex-items-center"
                      >
                        <div class="flex-shrink-0 flex-self-start text-center" style="width: 16px">
                          <svg
                            class="octicon octicon-alert"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                          >
                            <path
                              d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                            ></path>
                          </svg>
                        </div>

                        <div
                          class="notification-list-item-unread-indicator circle d-md-none d-block mt-1"
                        ></div>
                      </div>

                      <div
                        class="d-flex flex-column flex-auto"
                        id="notification_NT_kwDOBGJt3LM1NjQwMjI0ODkwOjczNTU5NTE2_link"
                      >
                        <div class="d-flex">
                          <p class="m-0 f6 flex-auto">
                            JonathanXDR/ICT-Trade-17-Regional-Preparation-Tasks-2023
                          </p>
                          <p
                            class="note m-0 pr-2 d-block d-md-none color-fg-muted text-right flex-shrink-0"
                          >
                            <relative-time
                              datetime="2023-02-18T14:00:50Z"
                              class="no-wrap"
                              title="Feb 18, 2023, 3:00 PM GMT+1"
                              >Feb 18, 2023</relative-time
                            >
                            <span
                              class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                              style="width: 16px"
                            >
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="octicon octicon-bookmark notification-is-starred-icon ml-1 color-fg-severe"
                              >
                                <path
                                  d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                                ></path>
                              </svg>
                            </span>
                          </p>
                        </div>
                        <p class="m-0 text-normal pr-2 pr-md-0 markdown-title">
                          Your repository has dependencies with security vulnerabilities
                        </p>
                      </div>
                    </a>
                  </div>

                  <div class="d-flex flex-row flex-md-row-reverse">
                    <p
                      class="note m-0 d-md-block d-none color-fg-muted text-right pr-3 flex-shrink-0 notification-list-item-hide-on-hover"
                      style="width: 140px; line-height: 20px"
                    >
                      <relative-time
                        datetime="2023-02-18T14:00:50Z"
                        class="no-wrap"
                        title="Feb 18, 2023, 3:00 PM GMT+1"
                        >Feb 18, 2023</relative-time
                      >
                      <span
                        class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                        style="width: 16px"
                      >
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          class="octicon octicon-bookmark v-align-middle"
                        >
                          <path
                            d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                          ></path>
                        </svg>
                      </span>
                    </p>

                    <div
                      style="width: 70px; min-width: 70px"
                      class="AvatarStack AvatarStack--right mr-0 mr-sm-3 mr-md-0 mr-lg-0 clearfix d-inline-block"
                    >
                      <div class="AvatarStack-body">
                        <a
                          class="avatar avatar-user"
                          data-hovercard-type="organization"
                          data-hovercard-url="/orgs/github/hovercard"
                          data-octo-click="hovercard-link-click"
                          data-octo-dimensions="link_type:self"
                          href="/github"
                          ><img
                            src="https://avatars.githubusercontent.com/u/9919?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@github"
                        /></a>
                      </div>
                    </div>

                    <span class="f6 flex-self-center ml-2 px-2 flex-shrink-0">security alert</span>
                  </div>
                </div>

                <ul
                  class="notification-list-item-actions d-none position-absolute top-0 bottom-0 right-0 list-style-none mr-2 d-flex flex-items-center"
                >
                  <li class="js-notification-action notification-action-mark-unarchived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unarchive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="Qg5fGZM2Ici-LvuYQ1YNIf1i9hp4tUOkCwEf0T7gx6G9FYb6QqmTPYuTXWd3Rv__6xdcul3GqGJxLtvKS40f5Q"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI0ODkwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Move to inbox" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-arrow-right v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-mark-archived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/archive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="rRHLtc5A8wA3ZYCYVUTxhezU4IyeWDUwsMn5-uO_VstrMiR_DO0eNrI6mrRviXbsZSCnDClNxg1mwR4Q-oO70Q"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI0ODkwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Done" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-check v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unsubscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="unsubscribed"
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unsubscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="VGk6u7Rb1-8knmTNoawVeqbQZVLGSX0MJ-w8W-R-dewTFrU7Z8PUY9FneKd8DW_J60T_HklG1HMhhPfSkEQICQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI0ODkwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsubscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-subscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="subscribed"
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/subscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="X4OpfR0L17CRQhLLsRksS9BEjmj3RzOsQUnRSpXx2P3nPK0ADNEai79fHwJnLivgkGvYGoWcx6kR_avs2zbOvA"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI0ODkwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Subscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-star">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="starred"
                        data-turbo="false"
                        action="/notifications/beta/star"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="POkoCShLITPF2tGhkaSZHI9HvFb4J-jd2DQf2lP3vYFvbV5Mjav1z6ONWF_6wlYwbEtC71XEIx7MeeaLoMx1ZA"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI0ODkwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Save" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unstar">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="unstarred"
                        data-turbo="false"
                        action="/notifications/beta/unstar"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="c9NRbDUhrWl_hPU0Edsd99g9Ox_2Y12-uMPpyJTGqcWow4q7ACg5ceGW2wgDGS2E-QMEaccNhMXhlFOAlLE3Kw"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NjQwMjI0ODkwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsave" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M1.19 1.143 4.182 3.31l.014.01 8.486 6.145.014.01 2.994 2.168a.75.75 0 1 1-.88 1.214L13 11.547v2.703a.75.75 0 0 1-1.206.596L8 11.944l-3.794 2.902A.75.75 0 0 1 3 14.25V4.305L.31 2.357a.75.75 0 1 1 .88-1.214ZM4.5 5.39v7.341l3.044-2.328a.75.75 0 0 1 .912 0l3.044 2.328V10.46ZM5.865 1h5.385c.966 0 1.75.784 1.75 1.75v3.624a.75.75 0 0 1-1.5 0V2.75a.25.25 0 0 0-.25-.25H5.865a.75.75 0 0 1 0-1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>
                </ul>
              </li>

              <li
                class="notifications-list-item p-0 pl-2 pb-2 pb-md-0 position-relative border-0 js-notifications-list-item js-navigation-item border-bottom color-border-muted notification-archived"
                data-notification-id="NT_kwDOBGJt3LM1NTkyMjIxMzMxOjczNTU5NTE2"
              >
                <div class="d-flex flex-column flex-md-row flex-md-items-center">
                  <div class="d-flex flex-row flex-md-1">
                    <div
                      class="d-flex flex-column flex-sm-row flex-self-start flex-items-center"
                      style="margin-top: 5px"
                    >
                      <div
                        class="notification-list-item-unread-indicator circle d-none d-md-block"
                      ></div>

                      <label class="p-2 clearfix">
                        <input
                          class="float-left js-notification-bulk-action-check-item"
                          type="checkbox"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTkyMjIxMzMxOjczNTU5NTE2"
                          aria-labelledby="notification_NT_kwDOBGJt3LM1NTkyMjIxMzMxOjczNTU5NTE2_link"
                          data-check-all-item=""
                          autocomplete="off"
                        />
                      </label>
                    </div>

                    <a
                      class="d-flex flex-items-center flex-auto min-width-0 no-underline py-2 js-navigation-open notification-list-item-link wb-break-word"
                      href="https://github.com/JonathanXDR/UEK-210-Portfolio/pull/49?notification_referrer_id=NT_kwDOBGJt3LM1NTkyMjIxMzMxOjczNTU5NTE2&amp;notifications_query=is%3Adone#event-8513709988"
                      data-hydro-click='{"event_type":"notifications.read","payload":{"list_type":"Repository","list_id":"566202774","thread_type":"Issue","thread_id":"1582904619","comment_type":"IssueEventNotification","comment_id":"8513709988","version":"V2","originating_url":"https://github.com/notifications?query=is%3Adone","user_id":73559516}}'
                      data-hydro-click-hmac="8dc33cd36775ede575c770524b724ca7a12a45449199203eee5bd0a2480cb16e"
                    >
                      <div
                        class="d-flex flex-column flex-md-row mr-2 flex-self-start flex-items-center"
                      >
                        <div class="flex-shrink-0 flex-self-start text-center" style="width: 16px">
                          <svg
                            class="octicon octicon-git-merge color-fg-done"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                          >
                            <path
                              d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"
                            ></path>
                          </svg>
                        </div>

                        <div
                          class="notification-list-item-unread-indicator circle d-md-none d-block mt-1"
                        ></div>
                      </div>

                      <div
                        class="d-flex flex-column flex-auto"
                        id="notification_NT_kwDOBGJt3LM1NTkyMjIxMzMxOjczNTU5NTE2_link"
                      >
                        <div class="d-flex">
                          <p class="m-0 f6 flex-auto">
                            JonathanXDR/UEK-210-Portfolio
                            <span class="text-normal color-fg-muted"> #49 </span>
                          </p>
                          <p
                            class="note m-0 pr-2 d-block d-md-none color-fg-muted text-right flex-shrink-0"
                          >
                            <relative-time
                              datetime="2023-02-13T19:08:51Z"
                              class="no-wrap"
                              title="Feb 13, 2023, 8:08 PM GMT+1"
                              >Feb 13, 2023</relative-time
                            >
                            <span
                              class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                              style="width: 16px"
                            >
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="octicon octicon-bookmark notification-is-starred-icon ml-1 color-fg-severe"
                              >
                                <path
                                  d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                                ></path>
                              </svg>
                            </span>
                          </p>
                        </div>
                        <p class="m-0 text-normal pr-2 pr-md-0 markdown-title">
                          Bump react-router-dom from 6.8.0 to 6.8.1 in /frontend
                        </p>
                      </div>

                      <div
                        class="d-md-flex d-none flex-items-center min-width-0 pl-3 flex-shrink-0"
                      ></div>
                    </a>
                  </div>

                  <div class="d-flex flex-row flex-md-row-reverse">
                    <p
                      class="note m-0 d-md-block d-none color-fg-muted text-right pr-3 flex-shrink-0 notification-list-item-hide-on-hover"
                      style="width: 140px; line-height: 20px"
                    >
                      <relative-time
                        datetime="2023-02-13T19:08:51Z"
                        class="no-wrap"
                        title="Feb 13, 2023, 8:08 PM GMT+1"
                        >Feb 13, 2023</relative-time
                      >
                      <span
                        class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                        style="width: 16px"
                      >
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          class="octicon octicon-bookmark v-align-middle"
                        >
                          <path
                            d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                          ></path>
                        </svg>
                      </span>
                    </p>

                    <div
                      style="width: 70px; min-width: 70px"
                      class="AvatarStack AvatarStack--two AvatarStack--right mr-0 mr-sm-3 mr-md-0 mr-lg-0 clearfix d-inline-block"
                    >
                      <div class="AvatarStack-body">
                        <a
                          class="avatar avatar-user"
                          data-hovercard-type="user"
                          data-hovercard-url="/users/JonathanXDR/hovercard"
                          data-octo-click="hovercard-link-click"
                          data-octo-dimensions="link_type:self"
                          href="/JonathanXDR"
                          ><img
                            class="avatar-user"
                            src="https://avatars.githubusercontent.com/u/73559516?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@JonathanXDR"
                        /></a>
                        <a class="avatar avatar-user" href="/apps/dependabot"
                          ><img
                            src="https://avatars.githubusercontent.com/in/29110?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@dependabot"
                        /></a>
                      </div>
                    </div>

                    <span class="f6 flex-self-center ml-2 px-2 flex-shrink-0">subscribed</span>
                  </div>
                </div>

                <ul
                  class="notification-list-item-actions d-none position-absolute top-0 bottom-0 right-0 list-style-none mr-2 d-flex flex-items-center"
                >
                  <li class="js-notification-action notification-action-mark-unarchived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unarchive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="a2okmGjd8BpwHHlI_lbPGifPz90KjfDwBRzKZXfTQXmUcf17uUJC70Wh37fKRj3EMbplfS_-GzZ_Mw5-Ar6ZPQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTkyMjIxMzMxOjczNTU5NTE2"
                        />

                        <button type="submit" title="Move to inbox" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-arrow-right v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-mark-archived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/archive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="y3ODNOge89EDEuNOY0ucv88hVwFhjM4okZEWoq72rykNUGz-KrMe54ZN-WJZhhvWRtUQgdaZPRVHmfFIt8pCMw"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTkyMjIxMzMxOjczNTU5NTE2"
                        />

                        <button type="submit" title="Done" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-check v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unsubscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="unsubscribed"
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unsubscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="-Mid6PU0YyLQzUL9H-DEbByUKeRWdJ3wfu9bpwixtna_txJoJqxgriU0XpfCQb7fUQCzqNl7NI94h5AufIvLkw"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTkyMjIxMzMxOjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsubscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-subscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="subscribed"
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/subscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="9NL99ddnE3DGEhJ0_JbVrmj3QQa6AtQgZj7bW6na_A9MbfmIxr3eS-gPH70qodIFKNgXdMjZICU2iqH95x3qTg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTkyMjIxMzMxOjczNTU5NTE2"
                        />

                        <button type="submit" title="Subscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-star">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="starred"
                        data-turbo="false"
                        action="/notifications/beta/star"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="sCemG68N1QwCQUQ6IK5bqwQkhhEnVgWuvgRN35xA8onjo9BeCu0B8GQWzcRLyJSH5yh4qIq1zm2qSbSOb3s6bA"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTkyMjIxMzMxOjczNTU5NTE2"
                        />

                        <button type="submit" title="Save" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unstar">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="unstarred"
                        data-turbo="false"
                        action="/notifications/beta/unstar"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="IQs00Xp1SUzzgxmEQiawRa_BXYG_xk7qMLFLAli2Ohr6G-8GT3zdVG2RN7hQ5IA2jv9i946ol5Fp5vFKWMGk9A"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTkyMjIxMzMxOjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsave" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M1.19 1.143 4.182 3.31l.014.01 8.486 6.145.014.01 2.994 2.168a.75.75 0 1 1-.88 1.214L13 11.547v2.703a.75.75 0 0 1-1.206.596L8 11.944l-3.794 2.902A.75.75 0 0 1 3 14.25V4.305L.31 2.357a.75.75 0 1 1 .88-1.214ZM4.5 5.39v7.341l3.044-2.328a.75.75 0 0 1 .912 0l3.044 2.328V10.46ZM5.865 1h5.385c.966 0 1.75.784 1.75 1.75v3.624a.75.75 0 0 1-1.5 0V2.75a.25.25 0 0 0-.25-.25H5.865a.75.75 0 0 1 0-1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>
                </ul>
              </li>

              <li
                class="notifications-list-item p-0 pl-2 pb-2 pb-md-0 position-relative border-0 js-notifications-list-item js-navigation-item border-bottom color-border-muted notification-archived"
                data-notification-id="NT_kwDOBGJt3LM1NTI4MDU3NDI2OjczNTU5NTE2"
              >
                <div class="d-flex flex-column flex-md-row flex-md-items-center">
                  <div class="d-flex flex-row flex-md-1">
                    <div
                      class="d-flex flex-column flex-sm-row flex-self-start flex-items-center"
                      style="margin-top: 5px"
                    >
                      <div
                        class="notification-list-item-unread-indicator circle d-none d-md-block"
                      ></div>

                      <label class="p-2 clearfix">
                        <input
                          class="float-left js-notification-bulk-action-check-item"
                          type="checkbox"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTI4MDU3NDI2OjczNTU5NTE2"
                          aria-labelledby="notification_NT_kwDOBGJt3LM1NTI4MDU3NDI2OjczNTU5NTE2_link"
                          data-check-all-item=""
                          autocomplete="off"
                        />
                      </label>
                    </div>

                    <a
                      class="d-flex flex-items-center flex-auto min-width-0 no-underline py-2 js-navigation-open notification-list-item-link wb-break-word"
                      href="https://github.com/JonathanXDR/UEK-210-Portfolio/pull/48?notification_referrer_id=NT_kwDOBGJt3LM1NTI4MDU3NDI2OjczNTU5NTE2&amp;notifications_query=is%3Adone#event-8450385006"
                      data-hydro-click='{"event_type":"notifications.read","payload":{"list_type":"Repository","list_id":"566202774","thread_type":"Issue","thread_id":"1573045860","comment_type":"IssueEventNotification","comment_id":"8450385006","version":"V2","originating_url":"https://github.com/notifications?query=is%3Adone","user_id":73559516}}'
                      data-hydro-click-hmac="5c7eaa7a1dc7ca5bb6716e0ced89d284e2ceafeae34851142e7597dc146a7317"
                    >
                      <div
                        class="d-flex flex-column flex-md-row mr-2 flex-self-start flex-items-center"
                      >
                        <div class="flex-shrink-0 flex-self-start text-center" style="width: 16px">
                          <svg
                            class="octicon octicon-git-merge color-fg-done"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                          >
                            <path
                              d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"
                            ></path>
                          </svg>
                        </div>

                        <div
                          class="notification-list-item-unread-indicator circle d-md-none d-block mt-1"
                        ></div>
                      </div>

                      <div
                        class="d-flex flex-column flex-auto"
                        id="notification_NT_kwDOBGJt3LM1NTI4MDU3NDI2OjczNTU5NTE2_link"
                      >
                        <div class="d-flex">
                          <p class="m-0 f6 flex-auto">
                            JonathanXDR/UEK-210-Portfolio
                            <span class="text-normal color-fg-muted"> #48 </span>
                          </p>
                          <p
                            class="note m-0 pr-2 d-block d-md-none color-fg-muted text-right flex-shrink-0"
                          >
                            <relative-time
                              datetime="2023-02-06T18:10:06Z"
                              class="no-wrap"
                              title="Feb 6, 2023, 7:10 PM GMT+1"
                              >Feb 6, 2023</relative-time
                            >
                            <span
                              class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                              style="width: 16px"
                            >
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="octicon octicon-bookmark notification-is-starred-icon ml-1 color-fg-severe"
                              >
                                <path
                                  d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                                ></path>
                              </svg>
                            </span>
                          </p>
                        </div>
                        <p class="m-0 text-normal pr-2 pr-md-0 markdown-title">
                          Bump node from 19.5.0-alpine to 19.6.0-alpine in /frontend
                        </p>
                      </div>

                      <div
                        class="d-md-flex d-none flex-items-center min-width-0 pl-3 flex-shrink-0"
                      ></div>
                    </a>
                  </div>

                  <div class="d-flex flex-row flex-md-row-reverse">
                    <p
                      class="note m-0 d-md-block d-none color-fg-muted text-right pr-3 flex-shrink-0 notification-list-item-hide-on-hover"
                      style="width: 140px; line-height: 20px"
                    >
                      <relative-time
                        datetime="2023-02-06T18:10:06Z"
                        class="no-wrap"
                        title="Feb 6, 2023, 7:10 PM GMT+1"
                        >Feb 6, 2023</relative-time
                      >
                      <span
                        class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                        style="width: 16px"
                      >
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          class="octicon octicon-bookmark v-align-middle"
                        >
                          <path
                            d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                          ></path>
                        </svg>
                      </span>
                    </p>

                    <div
                      style="width: 70px; min-width: 70px"
                      class="AvatarStack AvatarStack--two AvatarStack--right mr-0 mr-sm-3 mr-md-0 mr-lg-0 clearfix d-inline-block"
                    >
                      <div class="AvatarStack-body">
                        <a
                          class="avatar avatar-user"
                          data-hovercard-type="user"
                          data-hovercard-url="/users/JonathanXDR/hovercard"
                          data-octo-click="hovercard-link-click"
                          data-octo-dimensions="link_type:self"
                          href="/JonathanXDR"
                          ><img
                            class="avatar-user"
                            src="https://avatars.githubusercontent.com/u/73559516?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@JonathanXDR"
                        /></a>
                        <a class="avatar avatar-user" href="/apps/dependabot"
                          ><img
                            src="https://avatars.githubusercontent.com/in/29110?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@dependabot"
                        /></a>
                      </div>
                    </div>

                    <span class="f6 flex-self-center ml-2 px-2 flex-shrink-0">subscribed</span>
                  </div>
                </div>

                <ul
                  class="notification-list-item-actions d-none position-absolute top-0 bottom-0 right-0 list-style-none mr-2 d-flex flex-items-center"
                >
                  <li class="js-notification-action notification-action-mark-unarchived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unarchive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="s0YsE4m89rPOSdFSqdhj0o9tJwFmSDcYkVrE8nIhzWdMXfXwWCNERvv0d62dyJEMmRiNoUM73N7rdQDpB0wVIw"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTI4MDU3NDI2OjczNTU5NTE2"
                        />

                        <button type="submit" title="Move to inbox" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-arrow-right v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-mark-archived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/archive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="nCpQ4TOq0ZBqsN2QWJOybOYnNdcxP_Z-V_U7J9MwhKlaCb8r8Qc8pu_vx7xiXjUFb9NyV4YqBUOB_dzNygxpsw"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTI4MDU3NDI2OjczNTU5NTE2"
                        />

                        <button type="submit" title="Done" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-check v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unsubscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="unsubscribed"
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unsubscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="2ZShnmz0xphMAus7nmLvQ-zMXIPPLVuSHHwtUF3Yz7ye6y4ev2zFFLn791FDw5XwoVjGz0Ai8u0aFObZKeKyWQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTI4MDU3NDI2OjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsubscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-subscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="subscribed"
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/subscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="bFhteQch30p2nDdYoPy-Otw5DWPPKai97f-xHmlDAoLU52kEFvsScViBOpF2y7mRnBZbEb3yXLi9S8u4J4QUww"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTI4MDU3NDI2OjczNTU5NTE2"
                        />

                        <button type="submit" title="Subscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-star">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="starred"
                        data-turbo="false"
                        action="/notifications/beta/star"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="oUN4QitWjNwHF3QXmvEKBBCTXIXsKpGMQuABvPaH213yxw4HjrZYIGFA_enxl8Uo85-iPEHJWk9WrfjtBbwTuA"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTI4MDU3NDI2OjczNTU5NTE2"
                        />

                        <button type="submit" title="Save" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unstar">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="unstarred"
                        data-turbo="false"
                        action="/notifications/beta/unstar"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="bNcJEZv2RTsBELf5Esn9l_sDEUEiYsO3wwSMTlNpkUK3x9LGrv_RI58CmcUAC83k2j0uNxMMGsyaUzYGUx4PrA"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTI4MDU3NDI2OjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsave" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M1.19 1.143 4.182 3.31l.014.01 8.486 6.145.014.01 2.994 2.168a.75.75 0 1 1-.88 1.214L13 11.547v2.703a.75.75 0 0 1-1.206.596L8 11.944l-3.794 2.902A.75.75 0 0 1 3 14.25V4.305L.31 2.357a.75.75 0 1 1 .88-1.214ZM4.5 5.39v7.341l3.044-2.328a.75.75 0 0 1 .912 0l3.044 2.328V10.46ZM5.865 1h5.385c.966 0 1.75.784 1.75 1.75v3.624a.75.75 0 0 1-1.5 0V2.75a.25.25 0 0 0-.25-.25H5.865a.75.75 0 0 1 0-1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>
                </ul>
              </li>

              <li
                class="notifications-list-item p-0 pl-2 pb-2 pb-md-0 position-relative border-0 js-notifications-list-item js-navigation-item border-bottom color-border-muted notification-archived"
                data-notification-id="NT_kwDOBGJt3LM1NTI4MDU2MTQzOjczNTU5NTE2"
              >
                <div class="d-flex flex-column flex-md-row flex-md-items-center">
                  <div class="d-flex flex-row flex-md-1">
                    <div
                      class="d-flex flex-column flex-sm-row flex-self-start flex-items-center"
                      style="margin-top: 5px"
                    >
                      <div
                        class="notification-list-item-unread-indicator circle d-none d-md-block"
                      ></div>

                      <label class="p-2 clearfix">
                        <input
                          class="float-left js-notification-bulk-action-check-item"
                          type="checkbox"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTI4MDU2MTQzOjczNTU5NTE2"
                          aria-labelledby="notification_NT_kwDOBGJt3LM1NTI4MDU2MTQzOjczNTU5NTE2_link"
                          data-check-all-item=""
                          autocomplete="off"
                        />
                      </label>
                    </div>

                    <a
                      class="d-flex flex-items-center flex-auto min-width-0 no-underline py-2 js-navigation-open notification-list-item-link wb-break-word"
                      href="https://github.com/JonathanXDR/UEK-210-Portfolio/pull/47?notification_referrer_id=NT_kwDOBGJt3LM1NTI4MDU2MTQzOjczNTU5NTE2&amp;notifications_query=is%3Adone#event-8450383310"
                      data-hydro-click='{"event_type":"notifications.read","payload":{"list_type":"Repository","list_id":"566202774","thread_type":"Issue","thread_id":"1573045637","comment_type":"IssueEventNotification","comment_id":"8450383310","version":"V2","originating_url":"https://github.com/notifications?query=is%3Adone","user_id":73559516}}'
                      data-hydro-click-hmac="0b239e27661a10aa5ab47f88a09fe7a45cc38dd405e5c8d6281b55372ce0c336"
                    >
                      <div
                        class="d-flex flex-column flex-md-row mr-2 flex-self-start flex-items-center"
                      >
                        <div class="flex-shrink-0 flex-self-start text-center" style="width: 16px">
                          <svg
                            class="octicon octicon-git-merge color-fg-done"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                          >
                            <path
                              d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"
                            ></path>
                          </svg>
                        </div>

                        <div
                          class="notification-list-item-unread-indicator circle d-md-none d-block mt-1"
                        ></div>
                      </div>

                      <div
                        class="d-flex flex-column flex-auto"
                        id="notification_NT_kwDOBGJt3LM1NTI4MDU2MTQzOjczNTU5NTE2_link"
                      >
                        <div class="d-flex">
                          <p class="m-0 f6 flex-auto">
                            JonathanXDR/UEK-210-Portfolio
                            <span class="text-normal color-fg-muted"> #47 </span>
                          </p>
                          <p
                            class="note m-0 pr-2 d-block d-md-none color-fg-muted text-right flex-shrink-0"
                          >
                            <relative-time
                              datetime="2023-02-06T18:09:57Z"
                              class="no-wrap"
                              title="Feb 6, 2023, 7:09 PM GMT+1"
                              >Feb 6, 2023</relative-time
                            >
                            <span
                              class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                              style="width: 16px"
                            >
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="octicon octicon-bookmark notification-is-starred-icon ml-1 color-fg-severe"
                              >
                                <path
                                  d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                                ></path>
                              </svg>
                            </span>
                          </p>
                        </div>
                        <p class="m-0 text-normal pr-2 pr-md-0 markdown-title">
                          Bump node from 19.5.0-alpine3.16 to 19.6.0-alpine3.16 in /backend
                        </p>
                      </div>

                      <div
                        class="d-md-flex d-none flex-items-center min-width-0 pl-3 flex-shrink-0"
                      ></div>
                    </a>
                  </div>

                  <div class="d-flex flex-row flex-md-row-reverse">
                    <p
                      class="note m-0 d-md-block d-none color-fg-muted text-right pr-3 flex-shrink-0 notification-list-item-hide-on-hover"
                      style="width: 140px; line-height: 20px"
                    >
                      <relative-time
                        datetime="2023-02-06T18:09:57Z"
                        class="no-wrap"
                        title="Feb 6, 2023, 7:09 PM GMT+1"
                        >Feb 6, 2023</relative-time
                      >
                      <span
                        class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                        style="width: 16px"
                      >
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          class="octicon octicon-bookmark v-align-middle"
                        >
                          <path
                            d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                          ></path>
                        </svg>
                      </span>
                    </p>

                    <div
                      style="width: 70px; min-width: 70px"
                      class="AvatarStack AvatarStack--two AvatarStack--right mr-0 mr-sm-3 mr-md-0 mr-lg-0 clearfix d-inline-block"
                    >
                      <div class="AvatarStack-body">
                        <a
                          class="avatar avatar-user"
                          data-hovercard-type="user"
                          data-hovercard-url="/users/JonathanXDR/hovercard"
                          data-octo-click="hovercard-link-click"
                          data-octo-dimensions="link_type:self"
                          href="/JonathanXDR"
                          ><img
                            class="avatar-user"
                            src="https://avatars.githubusercontent.com/u/73559516?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@JonathanXDR"
                        /></a>
                        <a class="avatar avatar-user" href="/apps/dependabot"
                          ><img
                            src="https://avatars.githubusercontent.com/in/29110?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@dependabot"
                        /></a>
                      </div>
                    </div>

                    <span class="f6 flex-self-center ml-2 px-2 flex-shrink-0">subscribed</span>
                  </div>
                </div>

                <ul
                  class="notification-list-item-actions d-none position-absolute top-0 bottom-0 right-0 list-style-none mr-2 d-flex flex-items-center"
                >
                  <li class="js-notification-action notification-action-mark-unarchived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unarchive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="Wxyf0oaiyWKc5Ru3cjMh6-QgRuKqpsBzIEeyWA91ysqkB0YxVz17l6lYvUhGI9M18lXsQo_VK7VaaHZDehgSjg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTI4MDU2MTQzOjczNTU5NTE2"
                        />

                        <button type="submit" title="Move to inbox" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-arrow-right v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-mark-archived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/archive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="ziJa6AGM09Rfnzon4VT8MRs1Qboz-Z8bcpcYVj5g8QQIAbUiwyE-4trAIAvbmXtYksEGOoTsbCakn_-8J1wcHg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTI4MDU2MTQzOjczNTU5NTE2"
                        />

                        <button type="submit" title="Done" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-check v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unsubscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="unsubscribed"
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unsubscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="RB4QJj1rRrGOFuWqDM02aKZ-vQ1zgfqW9HEgIbF5V9cDYZ-m7vNFPXvv-cDRbEzb6-onQfyOU-nyGeuoxUMqMg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTI4MDU2MTQzOjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsubscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-subscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="subscribed"
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/subscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="csB7bxYq_GB4vdkXr8Q0RCk6LTYhhLjuKeX8XoBBiWTKf38SB_AxW1ag1N558zPvaRV7RFNfTOt5UYb4zoafJQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTI4MDU2MTQzOjczNTU5NTE2"
                        />

                        <button type="submit" title="Subscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-star">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="starred"
                        data-turbo="false"
                        action="/notifications/beta/star"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="ACXFOi7u-yP69B2NoD9OXqQ_jCwFA79ffmabPyUE0zBTobN_iw4v35yjlHPLWYFyRzNylajgdJxqK2Ju1j8b1Q"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTI4MDU2MTQzOjczNTU5NTE2"
                        />

                        <button type="submit" title="Save" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unstar">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="unstarred"
                        data-turbo="false"
                        action="/notifications/beta/unstar"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="01D-OmuCm-ckDaRmyQerQ_-bMx7LulkpOo-Jfzj8tV4IQCXtXosP_7ofilrbxZsw3qUMaPrUgFJj2DM3OIsrsA"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTI4MDU2MTQzOjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsave" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M1.19 1.143 4.182 3.31l.014.01 8.486 6.145.014.01 2.994 2.168a.75.75 0 1 1-.88 1.214L13 11.547v2.703a.75.75 0 0 1-1.206.596L8 11.944l-3.794 2.902A.75.75 0 0 1 3 14.25V4.305L.31 2.357a.75.75 0 1 1 .88-1.214ZM4.5 5.39v7.341l3.044-2.328a.75.75 0 0 1 .912 0l3.044 2.328V10.46ZM5.865 1h5.385c.966 0 1.75.784 1.75 1.75v3.624a.75.75 0 0 1-1.5 0V2.75a.25.25 0 0 0-.25-.25H5.865a.75.75 0 0 1 0-1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>
                </ul>
              </li>

              <li
                class="notifications-list-item p-0 pl-2 pb-2 pb-md-0 position-relative border-0 js-notifications-list-item js-navigation-item border-bottom color-border-muted notification-archived"
                data-notification-id="NT_kwDOBGJt3LM1NTE4NTc1OTYxOjczNTU5NTE2"
              >
                <div class="d-flex flex-column flex-md-row flex-md-items-center">
                  <div class="d-flex flex-row flex-md-1">
                    <div
                      class="d-flex flex-column flex-sm-row flex-self-start flex-items-center"
                      style="margin-top: 5px"
                    >
                      <div
                        class="notification-list-item-unread-indicator circle d-none d-md-block"
                      ></div>

                      <label class="p-2 clearfix">
                        <input
                          class="float-left js-notification-bulk-action-check-item"
                          type="checkbox"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTE4NTc1OTYxOjczNTU5NTE2"
                          aria-labelledby="notification_NT_kwDOBGJt3LM1NTE4NTc1OTYxOjczNTU5NTE2_link"
                          data-check-all-item=""
                          autocomplete="off"
                        />
                      </label>
                    </div>

                    <a
                      class="d-flex flex-items-center flex-auto min-width-0 no-underline py-2 js-navigation-open notification-list-item-link wb-break-word"
                      href="https://github.com/JonathanXDR/Application-Website-Backend/pull/2?notification_referrer_id=NT_kwDOBGJt3LM1NTE4NTc1OTYxOjczNTU5NTE2&amp;notifications_query=is%3Adone#event-8450439227"
                      data-hydro-click='{"event_type":"notifications.read","payload":{"list_type":"Repository","list_id":"591797964","thread_type":"Issue","thread_id":"1571517995","comment_type":"IssueEventNotification","comment_id":"8450439227","version":"V2","originating_url":"https://github.com/notifications?query=is%3Adone","user_id":73559516}}'
                      data-hydro-click-hmac="f0c947f5c7e5baa422584b9b6ec53a1d89d2265fdf14082147048b1a658d7ad2"
                    >
                      <div
                        class="d-flex flex-column flex-md-row mr-2 flex-self-start flex-items-center"
                      >
                        <div class="flex-shrink-0 flex-self-start text-center" style="width: 16px">
                          <svg
                            class="octicon octicon-git-merge color-fg-done"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                          >
                            <path
                              d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"
                            ></path>
                          </svg>
                        </div>

                        <div
                          class="notification-list-item-unread-indicator circle d-md-none d-block mt-1"
                        ></div>
                      </div>

                      <div
                        class="d-flex flex-column flex-auto"
                        id="notification_NT_kwDOBGJt3LM1NTE4NTc1OTYxOjczNTU5NTE2_link"
                      >
                        <div class="d-flex">
                          <p class="m-0 f6 flex-auto">
                            JonathanXDR/Application-Website-Backend
                            <span class="text-normal color-fg-muted"> #2 </span>
                          </p>
                          <p
                            class="note m-0 pr-2 d-block d-md-none color-fg-muted text-right flex-shrink-0"
                          >
                            <relative-time
                              datetime="2023-02-05T16:46:24Z"
                              class="no-wrap"
                              title="Feb 5, 2023, 5:46 PM GMT+1"
                              >Feb 5, 2023</relative-time
                            >
                            <span
                              class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                              style="width: 16px"
                            >
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="octicon octicon-bookmark notification-is-starred-icon ml-1 color-fg-severe"
                              >
                                <path
                                  d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                                ></path>
                              </svg>
                            </span>
                          </p>
                        </div>
                        <p class="m-0 text-normal pr-2 pr-md-0 markdown-title">
                          Bump knex and @strapi/strapi
                        </p>
                      </div>

                      <div
                        class="d-md-flex d-none flex-items-center min-width-0 pl-3 flex-shrink-0"
                      ></div>
                    </a>
                  </div>

                  <div class="d-flex flex-row flex-md-row-reverse">
                    <p
                      class="note m-0 d-md-block d-none color-fg-muted text-right pr-3 flex-shrink-0 notification-list-item-hide-on-hover"
                      style="width: 140px; line-height: 20px"
                    >
                      <relative-time
                        datetime="2023-02-05T16:46:24Z"
                        class="no-wrap"
                        title="Feb 5, 2023, 5:46 PM GMT+1"
                        >Feb 5, 2023</relative-time
                      >
                      <span
                        class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                        style="width: 16px"
                      >
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          class="octicon octicon-bookmark v-align-middle"
                        >
                          <path
                            d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                          ></path>
                        </svg>
                      </span>
                    </p>

                    <div
                      style="width: 70px; min-width: 70px"
                      class="AvatarStack AvatarStack--two AvatarStack--right mr-0 mr-sm-3 mr-md-0 mr-lg-0 clearfix d-inline-block"
                    >
                      <div class="AvatarStack-body">
                        <a
                          class="avatar avatar-user"
                          data-hovercard-type="user"
                          data-hovercard-url="/users/JonathanXDR/hovercard"
                          data-octo-click="hovercard-link-click"
                          data-octo-dimensions="link_type:self"
                          href="/JonathanXDR"
                          ><img
                            class="avatar-user"
                            src="https://avatars.githubusercontent.com/u/73559516?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@JonathanXDR"
                        /></a>
                        <a class="avatar avatar-user" href="/apps/dependabot"
                          ><img
                            src="https://avatars.githubusercontent.com/in/29110?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@dependabot"
                        /></a>
                      </div>
                    </div>

                    <span class="f6 flex-self-center ml-2 px-2 flex-shrink-0">subscribed</span>
                  </div>
                </div>

                <ul
                  class="notification-list-item-actions d-none position-absolute top-0 bottom-0 right-0 list-style-none mr-2 d-flex flex-items-center"
                >
                  <li class="js-notification-action notification-action-mark-unarchived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unarchive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="Glcn8gkii3n60Iz86QvXwoEwuLVPaP80RWsSYAktk6zlTP4R2L05jM9tKgPdGyUcl0USFWobFPI_RNZ7fEBL6A"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTE4NTc1OTYxOjczNTU5NTE2"
                        />

                        <button type="submit" title="Move to inbox" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-arrow-right v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-mark-archived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/archive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="md07hdEEV0mGYZ9huEwnZXkUjVxNOAL8xo4dhUHjLEtf_tRPE6m6fwM-hU2CgaAM8ODK3Pot8cEQhvpvWN_BUQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTE4NTc1OTYxOjczNTU5NTE2"
                        />

                        <button type="submit" title="Done" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-check v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unsubscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="unsubscribed"
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unsubscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="K0Jsa0QRcDwsEOc_C0DKpiwuXcqXpKKlWxXeFz7D58dsPePrl4lzsNnp-1XW4bAVYbrHhhirC9pdfRWeSvmaIg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTE4NTc1OTYxOjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsubscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-subscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="subscribed"
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/subscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="ui6UbZf88kyWEq5kET-K7y1DOU96mktpZLx-hfPGlucCkZAQhiY_d7gPo63HCI1EbWxvPQhBv2w0CAQjvQGApg"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTE4NTc1OTYxOjczNTU5NTE2"
                        />

                        <button type="submit" title="Subscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-star">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="starred"
                        data-turbo="false"
                        action="/notifications/beta/star"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="jBreAXgOpbDQD496W76gt8JK2gHuu9bMhJfRxtlDtmzfnqhE3e5xTLZYBoQw2G-bIUYkuENYHQ-Q2iiXKnh-iQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTE4NTc1OTYxOjczNTU5NTE2"
                        />

                        <button type="submit" title="Save" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unstar">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="unstarred"
                        data-turbo="false"
                        action="/notifications/beta/unstar"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="jkYE6LEQ4nc-YbRSJ7j-6VVliA-GTq-NOFy5YEmrH59VVt8_hBl2b6Bzmm41es6adFu3ebcgdvZhCwMoSdyBcQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTE4NTc1OTYxOjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsave" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M1.19 1.143 4.182 3.31l.014.01 8.486 6.145.014.01 2.994 2.168a.75.75 0 1 1-.88 1.214L13 11.547v2.703a.75.75 0 0 1-1.206.596L8 11.944l-3.794 2.902A.75.75 0 0 1 3 14.25V4.305L.31 2.357a.75.75 0 1 1 .88-1.214ZM4.5 5.39v7.341l3.044-2.328a.75.75 0 0 1 .912 0l3.044 2.328V10.46ZM5.865 1h5.385c.966 0 1.75.784 1.75 1.75v3.624a.75.75 0 0 1-1.5 0V2.75a.25.25 0 0 0-.25-.25H5.865a.75.75 0 0 1 0-1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>
                </ul>
              </li>

              <li
                class="notifications-list-item p-0 pl-2 pb-2 pb-md-0 position-relative border-0 js-notifications-list-item js-navigation-item border-bottom color-border-muted notification-archived"
                data-notification-id="NT_kwDOBGJt3LM1NTE0Nzc4OTgwOjczNTU5NTE2"
              >
                <div class="d-flex flex-column flex-md-row flex-md-items-center">
                  <div class="d-flex flex-row flex-md-1">
                    <div
                      class="d-flex flex-column flex-sm-row flex-self-start flex-items-center"
                      style="margin-top: 5px"
                    >
                      <div
                        class="notification-list-item-unread-indicator circle d-none d-md-block"
                      ></div>

                      <label class="p-2 clearfix">
                        <input
                          class="float-left js-notification-bulk-action-check-item"
                          type="checkbox"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTE0Nzc4OTgwOjczNTU5NTE2"
                          aria-labelledby="notification_NT_kwDOBGJt3LM1NTE0Nzc4OTgwOjczNTU5NTE2_link"
                          data-check-all-item=""
                          autocomplete="off"
                        />
                      </label>
                    </div>

                    <a
                      class="d-flex flex-items-center flex-auto min-width-0 no-underline py-2 js-navigation-open notification-list-item-link wb-break-word"
                      href="https://github.com/JonathanXDR/Application-Website-Backend/pull/1?notification_referrer_id=NT_kwDOBGJt3LM1NTE0Nzc4OTgwOjczNTU5NTE2&amp;notifications_query=is%3Adone#event-8440583905"
                      data-hydro-click='{"event_type":"notifications.read","payload":{"list_type":"Repository","list_id":"591797964","thread_type":"Issue","thread_id":"1571155903","comment_type":"IssueEventNotification","comment_id":"8440583905","version":"V2","originating_url":"https://github.com/notifications?query=is%3Adone","user_id":73559516}}'
                      data-hydro-click-hmac="1071e9dd4b00e98b06421e3cdcd8906b8e52c7355696006158a58d3f03c1ab9e"
                    >
                      <div
                        class="d-flex flex-column flex-md-row mr-2 flex-self-start flex-items-center"
                      >
                        <div class="flex-shrink-0 flex-self-start text-center" style="width: 16px">
                          <svg
                            class="octicon octicon-git-merge color-fg-done"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                          >
                            <path
                              d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z"
                            ></path>
                          </svg>
                        </div>

                        <div
                          class="notification-list-item-unread-indicator circle d-md-none d-block mt-1"
                        ></div>
                      </div>

                      <div
                        class="d-flex flex-column flex-auto"
                        id="notification_NT_kwDOBGJt3LM1NTE0Nzc4OTgwOjczNTU5NTE2_link"
                      >
                        <div class="d-flex">
                          <p class="m-0 f6 flex-auto">
                            JonathanXDR/Application-Website-Backend
                            <span class="text-normal color-fg-muted"> #1 </span>
                          </p>
                          <p
                            class="note m-0 pr-2 d-block d-md-none color-fg-muted text-right flex-shrink-0"
                          >
                            <relative-time
                              datetime="2023-02-04T22:46:57Z"
                              class="no-wrap"
                              title="Feb 4, 2023, 11:46 PM GMT+1"
                              >Feb 4, 2023</relative-time
                            >
                            <span
                              class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                              style="width: 16px"
                            >
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="octicon octicon-bookmark notification-is-starred-icon ml-1 color-fg-severe"
                              >
                                <path
                                  d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                                ></path>
                              </svg>
                            </span>
                          </p>
                        </div>
                        <p class="m-0 text-normal pr-2 pr-md-0 markdown-title">
                          Bump http-cache-semantics from 4.1.0 to 4.1.1
                        </p>
                      </div>

                      <div
                        class="d-md-flex d-none flex-items-center min-width-0 pl-3 flex-shrink-0"
                      ></div>
                    </a>
                  </div>

                  <div class="d-flex flex-row flex-md-row-reverse">
                    <p
                      class="note m-0 d-md-block d-none color-fg-muted text-right pr-3 flex-shrink-0 notification-list-item-hide-on-hover"
                      style="width: 140px; line-height: 20px"
                    >
                      <relative-time
                        datetime="2023-02-04T22:46:57Z"
                        class="no-wrap"
                        title="Feb 4, 2023, 11:46 PM GMT+1"
                        >Feb 4, 2023</relative-time
                      >
                      <span
                        class="text-center d-inline-block notification-is-starred-icon color-fg-severe ml-1"
                        style="width: 16px"
                      >
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          class="octicon octicon-bookmark v-align-middle"
                        >
                          <path
                            d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                          ></path>
                        </svg>
                      </span>
                    </p>

                    <div
                      style="width: 70px; min-width: 70px"
                      class="AvatarStack AvatarStack--two AvatarStack--right mr-0 mr-sm-3 mr-md-0 mr-lg-0 clearfix d-inline-block"
                    >
                      <div class="AvatarStack-body">
                        <a
                          class="avatar avatar-user"
                          data-hovercard-type="user"
                          data-hovercard-url="/users/JonathanXDR/hovercard"
                          data-octo-click="hovercard-link-click"
                          data-octo-dimensions="link_type:self"
                          href="/JonathanXDR"
                          ><img
                            class="avatar-user"
                            src="https://avatars.githubusercontent.com/u/73559516?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@JonathanXDR"
                        /></a>
                        <a class="avatar avatar-user" href="/apps/dependabot"
                          ><img
                            src="https://avatars.githubusercontent.com/in/29110?s=40&amp;v=4"
                            width="20"
                            height="20"
                            alt="@dependabot"
                        /></a>
                      </div>
                    </div>

                    <span class="f6 flex-self-center ml-2 px-2 flex-shrink-0">subscribed</span>
                  </div>
                </div>

                <ul
                  class="notification-list-item-actions d-none position-absolute top-0 bottom-0 right-0 list-style-none mr-2 d-flex flex-items-center"
                >
                  <li class="js-notification-action notification-action-mark-unarchived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unarchive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="mjzZwGobhY1xuBv_oLzhx3qIEcn3yJ9SOVkUxiv6ZjxlJwAju4Q3eEQFvQCUrBMZbP27adK7dJRDdtDdXpe-eA"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTE0Nzc4OTgwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Move to inbox" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-arrow-right v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-mark-archived mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/archive"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="K_YTVt1JPSz94-maMs53q0hFt1rpzqaAsYADwaJ-wp_t1fycH-TQGni887YIA_DCwbHw2l7bVb1niOQru0IvhQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTE0Nzc4OTgwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Done" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-check v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unsubscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="unsubscribed"
                        data-status="archived"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/unsubscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="Kt-Cbg4IzTR7QJCalv6HBriWsMSi7m-OW7tFDZcl4FBtoA3u3ZDOuI65jPBLX_219QIqiC3hxvFd046E4x-dtQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTE0Nzc4OTgwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsubscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-subscribe mr-2">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-subscription-status="subscribed"
                        data-status="read"
                        data-update="true"
                        data-turbo="false"
                        action="/notifications/beta/subscribe"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="jy1PhTmWc30_7gfczhBFgLou2OmSPQhgX1v1CL4_NAg3kkv4KEy-RhHzChUYJ0Ir-gGOm-Dm_GUP74-u8PgiSQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTE0Nzc4OTgwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Subscribe" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bell v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-star">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="starred"
                        data-turbo="false"
                        action="/notifications/beta/star"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="XjM3eXcp_xBtQEdPTgqzRT61W8mg5uPOl741rfFrYzINt0E80skr7AsXzrElbHxp3bmlcA0FKA2D88z8AlCr1w"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTE0Nzc4OTgwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Save" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 0 1-1.227.579L8 11.722l-3.773 3.107A.751.751 0 0 1 3 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.91l3.023-2.489a.75.75 0 0 1 .954 0l3.023 2.49V2.75a.25.25 0 0 0-.25-.25Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>

                  <li class="js-notification-action notification-action-unstar">
                    <span
                      class="d-flex flex-items-center flex-justify-center height-full width-full"
                    >
                      <form
                        data-starred-status="unstarred"
                        data-turbo="false"
                        action="/notifications/beta/unstar"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="nc2RRUYYRQxajoqb_SnvBXdDQ9mW9Zr0yvBi-yzFd39G3UqScxHRFMScpKfv6992Vn18r6ebQ4-Tp9izLLLpkQ"
                        />
                        <input
                          type="hidden"
                          name="notification_ids[]"
                          value="NT_kwDOBGJt3LM1NTE0Nzc4OTgwOjczNTU5NTE2"
                        />

                        <button type="submit" title="Unsave" class="btn px-2">
                          <span class="text-center d-inline-block" style="width: 16px">
                            <svg
                              class="octicon octicon-bookmark-slash v-align-text-bottom color-fg-inherit"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              height="16"
                              aria-hidden="true"
                            >
                              <path
                                d="M1.19 1.143 4.182 3.31l.014.01 8.486 6.145.014.01 2.994 2.168a.75.75 0 1 1-.88 1.214L13 11.547v2.703a.75.75 0 0 1-1.206.596L8 11.944l-3.794 2.902A.75.75 0 0 1 3 14.25V4.305L.31 2.357a.75.75 0 1 1 .88-1.214ZM4.5 5.39v7.341l3.044-2.328a.75.75 0 0 1 .912 0l3.044 2.328V10.46ZM5.865 1h5.385c.966 0 1.75.784 1.75 1.75v3.624a.75.75 0 0 1-1.5 0V2.75a.25.25 0 0 0-.25-.25H5.865a.75.75 0 0 1 0-1.5Z"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </form>
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="d-flex flex-md-row flex-column flex-items-center width-full pb-6 pt-4 pt-md-0 mb-6 mb-md-0 f6 flex-auto flex-justify-end flex-shrink-0"
        >
          <div
            style="margin-right: auto"
            class="d-flex flex-items-center color-fg-muted js-notifications-list-protip"
          >
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="octicon octicon-light-bulb color-fg-muted"
            >
              <path
                d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"
              ></path>
            </svg>
            <div class="ml-1">
              <strong>ProTip!</strong>
              Create custom filters to quickly access your most important notifications.
            </div>
          </div>

          <div class="mr-0 mr-md-3 mb-2 mb-md-0 js-notifications-list-paginator-counts">
            <strong>1-25</strong> of 136
          </div>

          <nav
            class="paginate-container BtnGroup m-0 d-flex flex-items-center js-notifications-list-paginator-buttons"
            aria-label="Pagination"
            data-pjax=""
          >
            <button
              aria-label="Previous"
              disabled
              type="button"
              data-view-component="true"
              class="btn-outline btn BtnGroup-item"
            >
              Prev
            </button>

            <a
              class="btn btn-outline BtnGroup-item"
              aria-label="Next"
              href="/notifications?after=Y3Vyc29yOjI1&amp;query=is%3Adone"
            >
              Next
            </a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./NotificationView.ts"></script>
<style scoped src="./NotificationView.css"></style>
