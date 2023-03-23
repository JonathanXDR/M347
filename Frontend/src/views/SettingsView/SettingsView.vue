<template>
  <div class="pt-4 container-xl p-responsive clearfix">
    <div class="d-md-flex flex-items-center flex-justify-between mt-1 mb-4">
      <div class="d-flex flex-items-center mb-2 mb-md-0">
        <img
          src="https://avatars.githubusercontent.com/u/73559516?s=96&amp;v=4"
          alt="@JonathanXDR"
          size="48"
          height="48"
          width="48"
          data-view-component="true"
          class="avatar circle mr-3"
        />
        <div class="flex-auto">
          <h1 class="h3 lh-condensed">
            <a href="/JonathanXDR" class="color-fg-default"> Jonathan Russ </a>
            <span class="sr-only">settings</span>
          </h1>
          <div class="d-flex flex-items-center flex-wrap">
            <p class="color-fg-muted mb-0 mr-3">Your personal account</p>
          </div>
        </div>
      </div>
      <a href="/JonathanXDR" class="btn btn-sm"> Go to your personal profile </a>
    </div>

    <div
      data-view-component="true"
      class="Layout Layout--flowRow-until-md Layout--sidebarPosition-start Layout--sidebarPosition-flowRow-start"
    >
      <div data-view-component="true" class="Layout-sidebar">
        <navigation-list data-turbo-frame="settings-frame" data-catalyst="">
          <div class="pr-md-4 pr-0">
            <nav
              aria-label="User settings"
              item_classes="org-menu-item"
              nav_classes="org-sub-menu"
              data-view-component="true"
            >
              <ul data-catalyst="">
                <!-- <div data-view-component="true">
                  <ul
                    aria-label="Profile settings"
                    data-target="nav-list.list"
                    role="list"
                    data-view-component="true"
                    class="ActionListWrap"
                  >
                    <li
                      data-item-id="settings_user_profile"
                      data-targets="nav-list.items"
                      data-view-component="true"
                      class="ActionListItem"
                    >
                      <a
                        id="item-98dc4483-6a8a-4601-8182-5bc2d3b0fe60"
                        href="/settings/profile"
                        data-view-component="true"
                        class="ActionListContent ActionListContent--visual16"
                        data-turbo-frame="settings-frame"
                      >
                        <span class="ActionListItem-visual ActionListItem-visual--leading">
                          <svg
                            aria-hidden="true"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            data-view-component="true"
                            class="octicon octicon-person"
                          >
                            <path
                              d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"
                            ></path>
                          </svg>
                        </span>

                        <span data-view-component="true" class="ActionListItem-label">
                          Public profile
                        </span></a
                      >
                    </li>

                    <li
                      data-item-id=""
                      data-targets="nav-list.items"
                      data-view-component="true"
                      class="ActionListItem"
                    >
                      <a
                        id="item-e88fba4a-eb34-4265-88f0-9df2d9e8d647"
                        href="/settings/admin"
                        data-view-component="true"
                        class="ActionListContent ActionListContent--visual16"
                        data-turbo-frame="settings-frame"
                      >
                        <span class="ActionListItem-visual ActionListItem-visual--leading">
                          <svg
                            aria-hidden="true"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            data-view-component="true"
                            class="octicon octicon-gear"
                          >
                            <path
                              d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"
                            ></path>
                          </svg>
                        </span>

                        <span data-view-component="true" class="ActionListItem-label">
                          Account
                        </span></a
                      >
                    </li>

                    <li
                      data-item-id=""
                      data-targets="nav-list.items"
                      data-view-component="true"
                      class="ActionListItem ActionListItem--navActive"
                    >
                      <a
                        id="item-62001449-8752-4beb-a374-d07f9d96e1bb"
                        href="/settings/appearance"
                        data-view-component="true"
                        class="ActionListContent ActionListContent--visual16"
                        data-turbo-frame="settings-frame"
                      >
                        <span class="ActionListItem-visual ActionListItem-visual--leading">
                          <svg
                            aria-hidden="true"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            data-view-component="true"
                            class="octicon octicon-paintbrush"
                          >
                            <path
                              d="M11.134 1.535c.7-.509 1.416-.942 2.076-1.155.649-.21 1.463-.267 2.069.34.603.601.568 1.411.368 2.07-.202.668-.624 1.39-1.125 2.096-1.011 1.424-2.496 2.987-3.775 4.249-1.098 1.084-2.132 1.839-3.04 2.3a3.744 3.744 0 0 1-1.055 3.217c-.431.431-1.065.691-1.657.861-.614.177-1.294.287-1.914.357A21.151 21.151 0 0 1 .797 16H.743l.007-.75H.749L.742 16a.75.75 0 0 1-.743-.742l.743-.008-.742.007v-.054a21.25 21.25 0 0 1 .13-2.284c.067-.647.187-1.287.358-1.914.17-.591.43-1.226.86-1.657a3.746 3.746 0 0 1 3.227-1.054c.466-.893 1.225-1.907 2.314-2.982 1.271-1.255 2.833-2.75 4.245-3.777ZM1.62 13.089c-.051.464-.086.929-.104 1.395.466-.018.932-.053 1.396-.104a10.511 10.511 0 0 0 1.668-.309c.526-.151.856-.325 1.011-.48a2.25 2.25 0 1 0-3.182-3.182c-.155.155-.329.485-.48 1.01a10.515 10.515 0 0 0-.309 1.67Zm10.396-10.34c-1.224.89-2.605 2.189-3.822 3.384l1.718 1.718c1.21-1.205 2.51-2.597 3.387-3.833.47-.662.78-1.227.912-1.662.134-.444.032-.551.009-.575h-.001V1.78c-.014-.014-.113-.113-.548.027-.432.14-.995.462-1.655.942Zm-4.832 7.266-.001.001a9.859 9.859 0 0 0 1.63-1.142L7.155 7.216a9.7 9.7 0 0 0-1.161 1.607c.482.302.889.71 1.19 1.192Z"
                            ></path>
                          </svg>
                        </span>

                        <span data-view-component="true" class="ActionListItem-label">
                          Appearance
                        </span></a
                      >
                    </li>

                    <li
                      data-item-id=""
                      data-targets="nav-list.items"
                      data-view-component="true"
                      class="ActionListItem"
                    >
                      <a
                        id="item-2c10ed58-8431-4001-9994-a456e2469fd1"
                        href="/settings/accessibility"
                        data-view-component="true"
                        class="ActionListContent ActionListContent--visual16"
                        data-turbo-frame="settings-frame"
                      >
                        <span class="ActionListItem-visual ActionListItem-visual--leading">
                          <svg
                            aria-hidden="true"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            data-view-component="true"
                            class="octicon octicon-accessibility"
                          >
                            <path
                              d="M9.923 5.302c.063.063.122.129.178.198H14A.75.75 0 0 1 14 7h-3.3l.578 5.163.362 2.997a.75.75 0 0 1-1.49.18L9.868 13H6.132l-.282 2.34a.75.75 0 0 1-1.49-.18l.362-2.997L5.3 7H2a.75.75 0 0 1 0-1.5h3.9a2.54 2.54 0 0 1 .176-.198 3 3 0 1 1 3.847 0ZM9.2 7.073h-.001a1.206 1.206 0 0 0-2.398 0L6.305 11.5h3.39ZM9.5 3a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 3Z"
                            ></path>
                          </svg>
                        </span>

                        <span data-view-component="true" class="ActionListItem-label">
                          Accessibility
                        </span></a
                      >
                    </li>

                    <li
                      data-item-id=""
                      data-targets="nav-list.items"
                      data-view-component="true"
                      class="ActionListItem"
                    >
                      <a
                        id="item-e6b2c93b-9223-40c2-a158-3044e36ff32c"
                        href="/settings/notifications"
                        data-view-component="true"
                        class="ActionListContent ActionListContent--visual16"
                        data-turbo-frame="settings-frame"
                      >
                        <span class="ActionListItem-visual ActionListItem-visual--leading">
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
                        </span>

                        <span data-view-component="true" class="ActionListItem-label">
                          Notifications
                        </span></a
                      >
                    </li>
                  </ul>
                </div> -->
                <li v-for="(category, index) in categories" :key="index">
                  <div
                    role="presentation"
                    aria-hidden="true"
                    data-view-component="true"
                    class="ActionList-sectionDivider"
                  ></div>
                  <div data-view-component="true">
                    <div data-view-component="true" class="ActionList-sectionDivider">
                      <h3
                        id="group-d66d3d24-5d30-43bd-bc1e-41192a4697f9"
                        data-view-component="true"
                        class="ActionList-sectionDivider-title"
                      >
                        {{ category.title }}
                      </h3>
                    </div>
                    <ul
                      v-for="(setting, index) in category.settings"
                      :key="index"
                      data-target="nav-list.list"
                      role="list"
                      aria-labelledby="group-d66d3d24-5d30-43bd-bc1e-41192a4697f9"
                      data-view-component="true"
                      class="ActionListWrap"
                    >
                      <li
                        data-targets="nav-list.items"
                        data-item-id=""
                        data-view-component="true"
                        class="ActionListItem"
                      >
                        <a
                          id="item-7d81b18a-058c-42d3-be76-2ff35e0658b6"
                          href="/settings/billing"
                          data-view-component="true"
                          class="ActionListContent ActionListContent--visual16"
                          data-turbo-frame="settings-frame"
                        >
                          <span class="ActionListItem-visual ActionListItem-visual--leading">
                            <OctIcon :name="setting.icon" />
                          </span>

                          <span data-view-component="true" class="ActionListItem-label">
                            {{ setting.title }}
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </navigation-list>
      </div>
      <div data-view-component="true" class="Layout-main">
        <div data-view-component="true" class="Layout-main-centered-md">
          <div data-view-component="true" class="container-md">
            <turbo-frame id="settings-frame" data-turbo-action="advance">
              <appearance-form data-catalyst="">
                <div data-view-component="true" class="Subhead">
                  <div data-view-component="true" class="Subhead-heading">
                    <h2 id="color-mode-heading" class="d-inline-block h2 text-normal">
                      Theme preferences
                    </h2>
                  </div>

                  <div data-view-component="true" class="Subhead-actions">
                    <span
                      class="hx_status-indicator status-indicator"
                      data-target="appearance-form.saveMessage"
                    >
                      <svg
                        style="box-sizing: content-box; color: var(--color-icon-primary)"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        data-view-component="true"
                        class="status-indicator-spinner anim-rotate"
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
                    </span>
                  </div>
                </div>
                <p class="mb-3">
                  Choose how GitHub looks to you. Select a single theme, or sync with your system
                  and automatically switch between day and night themes.
                </p>
                <h3 class="h5" id="theme-mode-heading">Theme mode</h3>
                <div class="d-flex flex-items-center mt-2 mb-4">
                  <select
                    id="color_mode_type_select"
                    class="form-select mr-2"
                    aria-labelledby="theme-mode-heading"
                    data-action="change:appearance-form#modeSelectChange"
                  >
                    <option selected value="single">Single theme</option>
                    <option value="auto">Sync with system</option>
                  </select>
                  <span
                    class="flex-auto color-fg-muted f6"
                    data-targets="appearance-form.modePanels"
                    data-mode-panel="single"
                    >GitHub will use your selected theme</span
                  >
                  <span
                    class="flex-auto color-fg-muted f6"
                    data-targets="appearance-form.modePanels"
                    data-mode-panel="auto"
                    hidden
                    >GitHub theme will match your system active settings</span
                  >
                </div>
                <div data-targets="appearance-form.modePanels" data-mode-panel="single">
                  <form
                    aria-labelledby="color-mode-heading"
                    data-action="submit:appearance-form#saveTheme"
                    data-turbo="false"
                    action="/settings/appearance/color_mode"
                    accept-charset="UTF-8"
                    method="post"
                  >
                    <input type="hidden" name="_method" value="put" autocomplete="off" /><input
                      type="hidden"
                      name="authenticity_token"
                      value="GlWYfbG9t1kBRZSqVRH74lDd617fCKSQRpXDO6UR2p_JlUCRMX04evSwJS4XoKhaduhtaG31ImYJQ3Ycj_cYjg"
                    />
                    <div
                      class="d-flex gutter-condensed flex-wrap"
                      role="radiogroup"
                      aria-label="Single theme picker"
                    >
                      <div class="position-relative mb-3 flex-shrink-0 col-6 col-md-4">
                        <input
                          class="position-absolute"
                          id="option-light"
                          type="radio"
                          name="user_theme"
                          data-type="light"
                          data-mode="light"
                          value="light"
                          style="
                            position: absolute;
                            z-index: 5;
                            margin-top: calc(52.6315789474% + 4px);
                            left: 19px;
                          "
                          data-action="click:appearance-form#themeClicked"
                          data-throttled-autosubmit=""
                        />
                        <label
                          class="radio-label pl-0 pr-0 pt-0 pb-2 overflow-hidden color-theme-toggle-label width-full height-full"
                          for="option-light"
                        >
                          <img
                            alt=""
                            class="d-block border-bottom mb-2 width-full"
                            src="https://github.githubassets.com/images/modules/settings/color_modes/light_preview.svg"
                          />
                          <div class="ml-5 pr-1">Light default</div>
                        </label>
                      </div>
                      <div class="position-relative mb-3 flex-shrink-0 col-6 col-md-4">
                        <input
                          class="position-absolute"
                          id="option-light_high_contrast"
                          type="radio"
                          name="user_theme"
                          data-type="light"
                          data-mode="light"
                          value="light_high_contrast"
                          style="
                            position: absolute;
                            z-index: 5;
                            margin-top: calc(52.6315789474% + 4px);
                            left: 19px;
                          "
                          data-action="click:appearance-form#themeClicked"
                          data-throttled-autosubmit=""
                        />
                        <label
                          class="radio-label pl-0 pr-0 pt-0 pb-2 overflow-hidden color-theme-toggle-label width-full height-full"
                          for="option-light_high_contrast"
                        >
                          <img
                            alt=""
                            class="d-block border-bottom mb-2 width-full"
                            src="https://github.githubassets.com/images/modules/settings/color_modes/light_high_contrast_preview.svg"
                          />
                          <div class="ml-5 pr-1">Light high contrast</div>
                        </label>
                      </div>
                      <div class="position-relative mb-3 flex-shrink-0 col-6 col-md-4">
                        <input
                          class="position-absolute"
                          id="option-light_colorblind"
                          type="radio"
                          name="user_theme"
                          data-type="light"
                          data-mode="light"
                          value="light_colorblind"
                          style="
                            position: absolute;
                            z-index: 5;
                            margin-top: calc(52.6315789474% + 4px);
                            left: 19px;
                          "
                          data-action="click:appearance-form#themeClicked"
                          data-throttled-autosubmit=""
                        />
                        <label
                          class="radio-label pl-0 pr-0 pt-0 pb-2 overflow-hidden color-theme-toggle-label width-full height-full"
                          for="option-light_colorblind"
                        >
                          <img
                            alt=""
                            class="d-block border-bottom mb-2 width-full"
                            src="https://github.githubassets.com/images/modules/settings/color_modes/light_colorblind_preview.svg"
                          />
                          <div class="ml-5 pr-1">Light Protanopia &amp; Deuteranopia</div>
                        </label>
                      </div>
                      <div class="position-relative mb-3 flex-shrink-0 col-6 col-md-4">
                        <input
                          class="position-absolute"
                          id="option-light_tritanopia"
                          type="radio"
                          name="user_theme"
                          data-type="light"
                          data-mode="light"
                          value="light_tritanopia"
                          style="
                            position: absolute;
                            z-index: 5;
                            margin-top: calc(52.6315789474% + 4px);
                            left: 19px;
                          "
                          data-action="click:appearance-form#themeClicked"
                          data-throttled-autosubmit=""
                        />
                        <label
                          class="radio-label pl-0 pr-0 pt-0 pb-2 overflow-hidden color-theme-toggle-label width-full height-full"
                          for="option-light_tritanopia"
                        >
                          <img
                            alt=""
                            class="d-block border-bottom mb-2 width-full"
                            src="https://github.githubassets.com/images/modules/settings/color_modes/light_tritanopia_preview.svg"
                          />
                          <div class="ml-5 pr-1">Light Tritanopia</div>
                        </label>
                      </div>
                      <div class="position-relative mb-3 flex-shrink-0 col-6 col-md-4">
                        <input
                          class="position-absolute"
                          id="option-dark"
                          type="radio"
                          name="user_theme"
                          data-type="dark"
                          data-mode="dark"
                          value="dark"
                          checked
                          style="
                            position: absolute;
                            z-index: 5;
                            margin-top: calc(52.6315789474% + 4px);
                            left: 19px;
                          "
                          data-action="click:appearance-form#themeClicked"
                          data-throttled-autosubmit=""
                        />
                        <label
                          class="radio-label pl-0 pr-0 pt-0 pb-2 overflow-hidden color-theme-toggle-label width-full height-full"
                          for="option-dark"
                        >
                          <img
                            alt=""
                            class="d-block border-bottom mb-2 width-full"
                            src="https://github.githubassets.com/images/modules/settings/color_modes/dark_preview.svg"
                          />
                          <div class="ml-5 pr-1">Dark default</div>
                        </label>
                      </div>
                      <div class="position-relative mb-3 flex-shrink-0 col-6 col-md-4">
                        <input
                          class="position-absolute"
                          id="option-dark_high_contrast"
                          type="radio"
                          name="user_theme"
                          data-type="dark"
                          data-mode="dark"
                          value="dark_high_contrast"
                          style="
                            position: absolute;
                            z-index: 5;
                            margin-top: calc(52.6315789474% + 4px);
                            left: 19px;
                          "
                          data-action="click:appearance-form#themeClicked"
                          data-throttled-autosubmit=""
                        />
                        <label
                          class="radio-label pl-0 pr-0 pt-0 pb-2 overflow-hidden color-theme-toggle-label width-full height-full"
                          for="option-dark_high_contrast"
                        >
                          <img
                            alt=""
                            class="d-block border-bottom mb-2 width-full"
                            src="https://github.githubassets.com/images/modules/settings/color_modes/dark_high_contrast_preview.svg"
                          />
                          <div class="ml-5 pr-1">Dark high contrast</div>
                        </label>
                      </div>
                      <div class="position-relative mb-3 flex-shrink-0 col-6 col-md-4">
                        <input
                          class="position-absolute"
                          id="option-dark_colorblind"
                          type="radio"
                          name="user_theme"
                          data-type="dark"
                          data-mode="dark"
                          value="dark_colorblind"
                          style="
                            position: absolute;
                            z-index: 5;
                            margin-top: calc(52.6315789474% + 4px);
                            left: 19px;
                          "
                          data-action="click:appearance-form#themeClicked"
                          data-throttled-autosubmit=""
                        />
                        <label
                          class="radio-label pl-0 pr-0 pt-0 pb-2 overflow-hidden color-theme-toggle-label width-full height-full"
                          for="option-dark_colorblind"
                        >
                          <img
                            alt=""
                            class="d-block border-bottom mb-2 width-full"
                            src="https://github.githubassets.com/images/modules/settings/color_modes/dark_colorblind_preview.svg"
                          />
                          <div class="ml-5 pr-1">Dark Protanopia &amp; Deuteranopia</div>
                        </label>
                      </div>
                      <div class="position-relative mb-3 flex-shrink-0 col-6 col-md-4">
                        <input
                          class="position-absolute"
                          id="option-dark_tritanopia"
                          type="radio"
                          name="user_theme"
                          data-type="dark"
                          data-mode="dark"
                          value="dark_tritanopia"
                          style="
                            position: absolute;
                            z-index: 5;
                            margin-top: calc(52.6315789474% + 4px);
                            left: 19px;
                          "
                          data-action="click:appearance-form#themeClicked"
                          data-throttled-autosubmit=""
                        />
                        <label
                          class="radio-label pl-0 pr-0 pt-0 pb-2 overflow-hidden color-theme-toggle-label width-full height-full"
                          for="option-dark_tritanopia"
                        >
                          <img
                            alt=""
                            class="d-block border-bottom mb-2 width-full"
                            src="https://github.githubassets.com/images/modules/settings/color_modes/dark_tritanopia_preview.svg"
                          />
                          <div class="ml-5 pr-1">Dark Tritanopia</div>
                        </label>
                      </div>
                      <div class="position-relative mb-3 flex-shrink-0 col-6 col-md-4">
                        <input
                          class="position-absolute"
                          id="option-dark_dimmed"
                          type="radio"
                          name="user_theme"
                          data-type="dark"
                          data-mode="dark"
                          value="dark_dimmed"
                          style="
                            position: absolute;
                            z-index: 5;
                            margin-top: calc(52.6315789474% + 4px);
                            left: 19px;
                          "
                          data-action="click:appearance-form#themeClicked"
                          data-throttled-autosubmit=""
                        />
                        <label
                          class="radio-label pl-0 pr-0 pt-0 pb-2 overflow-hidden color-theme-toggle-label width-full height-full"
                          for="option-dark_dimmed"
                        >
                          <img
                            alt=""
                            class="d-block border-bottom mb-2 width-full"
                            src="https://github.githubassets.com/images/modules/settings/color_modes/dark_dimmed_preview.svg"
                          />
                          <div class="ml-5 pr-1">Dark dimmed</div>
                        </label>
                      </div>
                    </div>
                    <noscript>
                      <button type="submit" data-view-component="true" class="btn mt-3 d-block">
                        Update preference
                      </button>
                    </noscript>
                  </form>
                </div>
                <div data-targets="appearance-form.modePanels" data-mode-panel="auto" hidden>
                  <form
                    aria-labelledby="color-mode-heading"
                    data-action="submit:appearance-form#saveTheme"
                    data-turbo="false"
                    action="/settings/appearance/color_mode"
                    accept-charset="UTF-8"
                    method="post"
                  >
                    <input type="hidden" name="_method" value="put" autocomplete="off" /><input
                      type="hidden"
                      name="authenticity_token"
                      value="TMIfFoI7dtUoLnVp6mnmTBbGe8YGi3MgtbVnuAxIAySfAsf6Avv59t3bxO2o2LX0MPP98LR29db6Y9KfJq7BNQ"
                    />
                    <input
                      type="hidden"
                      name="color_mode"
                      id="color_mode"
                      value="auto"
                      autocomplete="off"
                      class="form-control"
                    />
                    <div class="d-flex flex-column flex-md-row mb-3">
                      <appearance-preview
                        class="col-md-5 mr-0 mr-md-3 mb-3 mb-md-0"
                        data-mode="light"
                        data-catalyst=""
                      >
                        <div
                          data-target="appearance-preview.boxElement"
                          data-view-component="true"
                          class="Box"
                        >
                          <div data-view-component="true" class="Box-header d-flex">
                            <h4 class="h5 flex-auto">
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="octicon octicon-sun"
                              >
                                <path
                                  d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-1.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm5.657-8.157a.75.75 0 0 1 0 1.061l-1.061 1.06a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l1.06-1.06a.75.75 0 0 1 1.06 0Zm-9.193 9.193a.75.75 0 0 1 0 1.06l-1.06 1.061a.75.75 0 1 1-1.061-1.06l1.06-1.061a.75.75 0 0 1 1.061 0ZM8 0a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V.75A.75.75 0 0 1 8 0ZM3 8a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 3 8Zm13 0a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 16 8Zm-8 5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 13Zm3.536-1.464a.75.75 0 0 1 1.06 0l1.061 1.06a.75.75 0 0 1-1.06 1.061l-1.061-1.06a.75.75 0 0 1 0-1.061ZM2.343 2.343a.75.75 0 0 1 1.061 0l1.06 1.061a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018l-1.06-1.06a.75.75 0 0 1 0-1.06Z"
                                ></path>
                              </svg>
                              Day theme
                            </h4>
                            <span
                              title="Active Mode"
                              data-target="appearance-preview.activeLabel"
                              hidden
                              data-view-component="true"
                              class="Label Label--info"
                            >
                              Active
                            </span>
                          </div>
                          <div data-view-component="true" class="Box-body">
                            <div class="color-fg-muted mb-3 f6">
                              This theme will be active when your system is set to “light mode”
                            </div>
                            <div
                              data-theme="light"
                              data-targets="appearance-preview.themePreviews"
                              class="border mb-3 rounded-2"
                            >
                              <div class="border-bottom rounded-top-2 overflow-hidden">
                                <img
                                  alt=""
                                  class="d-block width-full"
                                  src="https://github.githubassets.com/images/modules/settings/color_modes/light_preview.svg"
                                />
                              </div>
                              <div class="py-2 px-3 text-bold">Light default</div>
                            </div>
                            <div
                              data-theme="light_high_contrast"
                              data-targets="appearance-preview.themePreviews"
                              class="border mb-3 rounded-2"
                              hidden
                            >
                              <div class="border-bottom rounded-top-2 overflow-hidden">
                                <img
                                  alt=""
                                  class="d-block width-full"
                                  src="https://github.githubassets.com/images/modules/settings/color_modes/light_high_contrast_preview.svg"
                                />
                              </div>
                              <div class="py-2 px-3 text-bold">Light high contrast</div>
                            </div>
                            <div
                              data-theme="light_colorblind"
                              data-targets="appearance-preview.themePreviews"
                              class="border mb-3 rounded-2"
                              hidden
                            >
                              <div class="border-bottom rounded-top-2 overflow-hidden">
                                <img
                                  alt=""
                                  class="d-block width-full"
                                  src="https://github.githubassets.com/images/modules/settings/color_modes/light_colorblind_preview.svg"
                                />
                              </div>
                              <div class="py-2 px-3 text-bold">
                                Light Protanopia &amp; Deuteranopia
                              </div>
                            </div>
                            <div
                              data-theme="light_tritanopia"
                              data-targets="appearance-preview.themePreviews"
                              class="border mb-3 rounded-2"
                              hidden
                            >
                              <div class="border-bottom rounded-top-2 overflow-hidden">
                                <img
                                  alt=""
                                  class="d-block width-full"
                                  src="https://github.githubassets.com/images/modules/settings/color_modes/light_tritanopia_preview.svg"
                                />
                              </div>
                              <div class="py-2 px-3 text-bold">Light Tritanopia</div>
                            </div>
                            <div
                              data-theme="dark"
                              data-targets="appearance-preview.themePreviews"
                              class="border mb-3 rounded-2"
                              hidden
                            >
                              <div class="border-bottom rounded-top-2 overflow-hidden">
                                <img
                                  alt=""
                                  class="d-block width-full"
                                  src="https://github.githubassets.com/images/modules/settings/color_modes/dark_preview.svg"
                                />
                              </div>
                              <div class="py-2 px-3 text-bold">Dark default</div>
                            </div>
                            <div
                              data-theme="dark_high_contrast"
                              data-targets="appearance-preview.themePreviews"
                              class="border mb-3 rounded-2"
                              hidden
                            >
                              <div class="border-bottom rounded-top-2 overflow-hidden">
                                <img
                                  alt=""
                                  class="d-block width-full"
                                  src="https://github.githubassets.com/images/modules/settings/color_modes/dark_high_contrast_preview.svg"
                                />
                              </div>
                              <div class="py-2 px-3 text-bold">Dark high contrast</div>
                            </div>
                            <div
                              data-theme="dark_colorblind"
                              data-targets="appearance-preview.themePreviews"
                              class="border mb-3 rounded-2"
                              hidden
                            >
                              <div class="border-bottom rounded-top-2 overflow-hidden">
                                <img
                                  alt=""
                                  class="d-block width-full"
                                  src="https://github.githubassets.com/images/modules/settings/color_modes/dark_colorblind_preview.svg"
                                />
                              </div>
                              <div class="py-2 px-3 text-bold">
                                Dark Protanopia &amp; Deuteranopia
                              </div>
                            </div>
                            <div
                              data-theme="dark_tritanopia"
                              data-targets="appearance-preview.themePreviews"
                              class="border mb-3 rounded-2"
                              hidden
                            >
                              <div class="border-bottom rounded-top-2 overflow-hidden">
                                <img
                                  alt=""
                                  class="d-block width-full"
                                  src="https://github.githubassets.com/images/modules/settings/color_modes/dark_tritanopia_preview.svg"
                                />
                              </div>
                              <div class="py-2 px-3 text-bold">Dark Tritanopia</div>
                            </div>
                            <div
                              data-theme="dark_dimmed"
                              data-targets="appearance-preview.themePreviews"
                              class="border mb-3 rounded-2"
                              hidden
                            >
                              <div class="border-bottom rounded-top-2 overflow-hidden">
                                <img
                                  alt=""
                                  class="d-block width-full"
                                  src="https://github.githubassets.com/images/modules/settings/color_modes/dark_dimmed_preview.svg"
                                />
                              </div>
                              <div class="py-2 px-3 text-bold">Dark dimmed</div>
                            </div>
                            <div
                              class="d-flex flex-wrap mb-n2"
                              role="radiogroup"
                              aria-label="Day theme picker"
                            >
                              <input
                                class="hidden-radio-input"
                                id="option-light-light"
                                type="radio"
                                name="light_theme"
                                data-type="light"
                                data-mode="auto"
                                value="light"
                                data-theme="light"
                                aria-label="Light default"
                                checked
                                data-action="focus:appearance-preview#themePreview
                        blur:appearance-preview#previewReset
                        click:appearance-form#themeClicked"
                                data-throttled-autosubmit=""
                              />
                              <label
                                class="radio-label-theme-discs circle radio-label m-0 mr-2 mb-2 d-flex flex-items-center flex-justify-center overflow-hidden color-bg-subtle flex-grow-0 flex-shrink-0"
                                style="width: 40px; height: 40px; border-width: 2px"
                                for="option-light-light"
                                title="Light default"
                                data-theme="light"
                                aria-hidden="true"
                                data-action="mouseenter:appearance-preview#themePreview
                        mouseleave:appearance-preview#previewReset"
                              >
                                <span
                                  class="border circle d-flex flex-items-center flex-justify-center mt-n1 mb-n1 mr-n1 ml-n1"
                                >
                                  <img
                                    alt="Light default"
                                    width="100%"
                                    height="100%"
                                    src="https://github.githubassets.com/images/modules/settings/color_modes/light_disc.svg"
                                  />
                                </span>
                              </label>
                              <input
                                class="hidden-radio-input"
                                id="option-light-light_high_contrast"
                                type="radio"
                                name="light_theme"
                                data-type="light"
                                data-mode="auto"
                                value="light_high_contrast"
                                data-theme="light_high_contrast"
                                aria-label="Light high contrast"
                                data-action="focus:appearance-preview#themePreview
                        blur:appearance-preview#previewReset
                        click:appearance-form#themeClicked"
                                data-throttled-autosubmit=""
                              />
                              <label
                                class="radio-label-theme-discs circle radio-label m-0 mr-2 mb-2 d-flex flex-items-center flex-justify-center overflow-hidden color-bg-subtle flex-grow-0 flex-shrink-0"
                                style="width: 40px; height: 40px; border-width: 2px"
                                for="option-light-light_high_contrast"
                                title="Light high contrast"
                                data-theme="light_high_contrast"
                                aria-hidden="true"
                                data-action="mouseenter:appearance-preview#themePreview
                        mouseleave:appearance-preview#previewReset"
                              >
                                <span
                                  class="border circle d-flex flex-items-center flex-justify-center mt-n1 mb-n1 mr-n1 ml-n1"
                                >
                                  <img
                                    alt="Light high contrast"
                                    width="100%"
                                    height="100%"
                                    src="https://github.githubassets.com/images/modules/settings/color_modes/light_high_contrast_disc.svg"
                                  />
                                </span>
                              </label>
                              <input
                                class="hidden-radio-input"
                                id="option-light-light_colorblind"
                                type="radio"
                                name="light_theme"
                                data-type="light"
                                data-mode="auto"
                                value="light_colorblind"
                                data-theme="light_colorblind"
                                aria-label="Light colorblind"
                                data-action="focus:appearance-preview#themePreview
                        blur:appearance-preview#previewReset
                        click:appearance-form#themeClicked"
                                data-throttled-autosubmit=""
                              />
                              <label
                                class="radio-label-theme-discs circle radio-label m-0 mr-2 mb-2 d-flex flex-items-center flex-justify-center overflow-hidden color-bg-subtle flex-grow-0 flex-shrink-0"
                                style="width: 40px; height: 40px; border-width: 2px"
                                for="option-light-light_colorblind"
                                title="Light colorblind"
                                data-theme="light_colorblind"
                                aria-hidden="true"
                                data-action="mouseenter:appearance-preview#themePreview
                        mouseleave:appearance-preview#previewReset"
                              >
                                <span
                                  class="border circle d-flex flex-items-center flex-justify-center mt-n1 mb-n1 mr-n1 ml-n1"
                                >
                                  <img
                                    alt="Light colorblind"
                                    width="100%"
                                    height="100%"
                                    src="https://github.githubassets.com/images/modules/settings/color_modes/light_colorblind_disc.svg"
                                  />
                                </span>
                              </label>
                              <input
                                class="hidden-radio-input"
                                id="option-light-light_tritanopia"
                                type="radio"
                                name="light_theme"
                                data-type="light"
                                data-mode="auto"
                                value="light_tritanopia"
                                data-theme="light_tritanopia"
                                aria-label="Light Tritanopia"
                                data-action="focus:appearance-preview#themePreview
                        blur:appearance-preview#previewReset
                        click:appearance-form#themeClicked"
                                data-throttled-autosubmit=""
                              />
                              <label
                                class="radio-label-theme-discs circle radio-label m-0 mr-2 mb-2 d-flex flex-items-center flex-justify-center overflow-hidden color-bg-subtle flex-grow-0 flex-shrink-0"
                                style="width: 40px; height: 40px; border-width: 2px"
                                for="option-light-light_tritanopia"
                                title="Light Tritanopia"
                                data-theme="light_tritanopia"
                                aria-hidden="true"
                                data-action="mouseenter:appearance-preview#themePreview
                        mouseleave:appearance-preview#previewReset"
                              >
                                <span
                                  class="border circle d-flex flex-items-center flex-justify-center mt-n1 mb-n1 mr-n1 ml-n1"
                                >
                                  <img
                                    alt="Light Tritanopia"
                                    width="100%"
                                    height="100%"
                                    src="https://github.githubassets.com/images/modules/settings/color_modes/light_tritanopia_disc.svg"
                                  />
                                </span>
                              </label>
                              <input
                                class="hidden-radio-input"
                                id="option-light-dark"
                                type="radio"
                                name="light_theme"
                                data-type="light"
                                data-mode="auto"
                                value="dark"
                                data-theme="dark"
                                aria-label="Dark default"
                                data-action="focus:appearance-preview#themePreview
                        blur:appearance-preview#previewReset
                        click:appearance-form#themeClicked"
                                data-throttled-autosubmit=""
                              />
                              <label
                                class="radio-label-theme-discs circle radio-label m-0 mr-2 mb-2 d-flex flex-items-center flex-justify-center overflow-hidden color-bg-subtle flex-grow-0 flex-shrink-0"
                                style="width: 40px; height: 40px; border-width: 2px"
                                for="option-light-dark"
                                title="Dark default"
                                data-theme="dark"
                                aria-hidden="true"
                                data-action="mouseenter:appearance-preview#themePreview
                        mouseleave:appearance-preview#previewReset"
                              >
                                <span
                                  class="border circle d-flex flex-items-center flex-justify-center mt-n1 mb-n1 mr-n1 ml-n1"
                                >
                                  <img
                                    alt="Dark default"
                                    width="100%"
                                    height="100%"
                                    src="https://github.githubassets.com/images/modules/settings/color_modes/dark_disc.svg"
                                  />
                                </span>
                              </label>
                              <input
                                class="hidden-radio-input"
                                id="option-light-dark_high_contrast"
                                type="radio"
                                name="light_theme"
                                data-type="light"
                                data-mode="auto"
                                value="dark_high_contrast"
                                data-theme="dark_high_contrast"
                                aria-label="Dark high contrast"
                                data-action="focus:appearance-preview#themePreview
                        blur:appearance-preview#previewReset
                        click:appearance-form#themeClicked"
                                data-throttled-autosubmit=""
                              />
                              <label
                                class="radio-label-theme-discs circle radio-label m-0 mr-2 mb-2 d-flex flex-items-center flex-justify-center overflow-hidden color-bg-subtle flex-grow-0 flex-shrink-0"
                                style="width: 40px; height: 40px; border-width: 2px"
                                for="option-light-dark_high_contrast"
                                title="Dark high contrast"
                                data-theme="dark_high_contrast"
                                aria-hidden="true"
                                data-action="mouseenter:appearance-preview#themePreview
                        mouseleave:appearance-preview#previewReset"
                              >
                                <span
                                  class="border circle d-flex flex-items-center flex-justify-center mt-n1 mb-n1 mr-n1 ml-n1"
                                >
                                  <img
                                    alt="Dark high contrast"
                                    width="100%"
                                    height="100%"
                                    src="https://github.githubassets.com/images/modules/settings/color_modes/dark_high_contrast_disc.svg"
                                  />
                                </span>
                              </label>
                              <input
                                class="hidden-radio-input"
                                id="option-light-dark_colorblind"
                                type="radio"
                                name="light_theme"
                                data-type="light"
                                data-mode="auto"
                                value="dark_colorblind"
                                data-theme="dark_colorblind"
                                aria-label="Dark colorblind"
                                data-action="focus:appearance-preview#themePreview
                        blur:appearance-preview#previewReset
                        click:appearance-form#themeClicked"
                                data-throttled-autosubmit=""
                              />
                              <label
                                class="radio-label-theme-discs circle radio-label m-0 mr-2 mb-2 d-flex flex-items-center flex-justify-center overflow-hidden color-bg-subtle flex-grow-0 flex-shrink-0"
                                style="width: 40px; height: 40px; border-width: 2px"
                                for="option-light-dark_colorblind"
                                title="Dark colorblind"
                                data-theme="dark_colorblind"
                                aria-hidden="true"
                                data-action="mouseenter:appearance-preview#themePreview
                        mouseleave:appearance-preview#previewReset"
                              >
                                <span
                                  class="border circle d-flex flex-items-center flex-justify-center mt-n1 mb-n1 mr-n1 ml-n1"
                                >
                                  <img
                                    alt="Dark colorblind"
                                    width="100%"
                                    height="100%"
                                    src="https://github.githubassets.com/images/modules/settings/color_modes/dark_colorblind_disc.svg"
                                  />
                                </span>
                              </label>
                              <input
                                class="hidden-radio-input"
                                id="option-light-dark_tritanopia"
                                type="radio"
                                name="light_theme"
                                data-type="light"
                                data-mode="auto"
                                value="dark_tritanopia"
                                data-theme="dark_tritanopia"
                                aria-label="Dark Tritanopia"
                                data-action="focus:appearance-preview#themePreview
                        blur:appearance-preview#previewReset
                        click:appearance-form#themeClicked"
                                data-throttled-autosubmit=""
                              />
                              <label
                                class="radio-label-theme-discs circle radio-label m-0 mr-2 mb-2 d-flex flex-items-center flex-justify-center overflow-hidden color-bg-subtle flex-grow-0 flex-shrink-0"
                                style="width: 40px; height: 40px; border-width: 2px"
                                for="option-light-dark_tritanopia"
                                title="Dark Tritanopia"
                                data-theme="dark_tritanopia"
                                aria-hidden="true"
                                data-action="mouseenter:appearance-preview#themePreview
                        mouseleave:appearance-preview#previewReset"
                              >
                                <span
                                  class="border circle d-flex flex-items-center flex-justify-center mt-n1 mb-n1 mr-n1 ml-n1"
                                >
                                  <img
                                    alt="Dark Tritanopia"
                                    width="100%"
                                    height="100%"
                                    src="https://github.githubassets.com/images/modules/settings/color_modes/dark_tritanopia_disc.svg"
                                  />
                                </span>
                              </label>
                              <input
                                class="hidden-radio-input"
                                id="option-light-dark_dimmed"
                                type="radio"
                                name="light_theme"
                                data-type="light"
                                data-mode="auto"
                                value="dark_dimmed"
                                data-theme="dark_dimmed"
                                aria-label="Dark dimmed"
                                data-action="focus:appearance-preview#themePreview
                        blur:appearance-preview#previewReset
                        click:appearance-form#themeClicked"
                                data-throttled-autosubmit=""
                              />
                              <label
                                class="radio-label-theme-discs circle radio-label m-0 mr-2 mb-2 d-flex flex-items-center flex-justify-center overflow-hidden color-bg-subtle flex-grow-0 flex-shrink-0"
                                style="width: 40px; height: 40px; border-width: 2px"
                                for="option-light-dark_dimmed"
                                title="Dark dimmed"
                                data-theme="dark_dimmed"
                                aria-hidden="true"
                                data-action="mouseenter:appearance-preview#themePreview
                        mouseleave:appearance-preview#previewReset"
                              >
                                <span
                                  class="border circle d-flex flex-items-center flex-justify-center mt-n1 mb-n1 mr-n1 ml-n1"
                                >
                                  <img
                                    alt="Dark dimmed"
                                    width="100%"
                                    height="100%"
                                    src="https://github.githubassets.com/images/modules/settings/color_modes/dark_dimmed_disc.svg"
                                  />
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </appearance-preview>
                      <appearance-preview class="col-md-5" data-mode="dark" data-catalyst="">
                        <div
                          data-target="appearance-preview.boxElement"
                          data-view-component="true"
                          class="Box Box--blue"
                        >
                          <div data-view-component="true" class="Box-header d-flex">
                            <h4 class="h5 flex-auto">
                              <svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                                data-view-component="true"
                                class="octicon octicon-moon"
                              >
                                <path
                                  d="M9.598 1.591a.749.749 0 0 1 .785-.175 7.001 7.001 0 1 1-8.967 8.967.75.75 0 0 1 .961-.96 5.5 5.5 0 0 0 7.046-7.046.75.75 0 0 1 .175-.786Zm1.616 1.945a7 7 0 0 1-7.678 7.678 5.499 5.499 0 1 0 7.678-7.678Z"
                                ></path>
                              </svg>
                              Night theme
                            </h4>
                            <span
                              title="Active Mode"
                              data-target="appearance-preview.activeLabel"
                              data-view-component="true"
                              class="Label Label--info"
                            >
                              Active
                            </span>
                          </div>
                          <div data-view-component="true" class="Box-body">
                            <div class="color-fg-muted mb-3 f6">
                              This theme will be active when your system is set to “dark mode”
                            </div>
                            <div
                              data-theme="light"
                              data-targets="appearance-preview.themePreviews"
                              class="border mb-3 rounded-2"
                              hidden
                            >
                              <div class="border-bottom rounded-top-2 overflow-hidden">
                                <img
                                  alt=""
                                  class="d-block width-full"
                                  src="https://github.githubassets.com/images/modules/settings/color_modes/light_preview.svg"
                                />
                              </div>
                              <div class="py-2 px-3 text-bold">Light default</div>
                            </div>
                            <div
                              data-theme="light_high_contrast"
                              data-targets="appearance-preview.themePreviews"
                              class="border mb-3 rounded-2"
                              hidden
                            >
                              <div class="border-bottom rounded-top-2 overflow-hidden">
                                <img
                                  alt=""
                                  class="d-block width-full"
                                  src="https://github.githubassets.com/images/modules/settings/color_modes/light_high_contrast_preview.svg"
                                />
                              </div>
                              <div class="py-2 px-3 text-bold">Light high contrast</div>
                            </div>
                            <div
                              data-theme="light_colorblind"
                              data-targets="appearance-preview.themePreviews"
                              class="border mb-3 rounded-2"
                              hidden
                            >
                              <div class="border-bottom rounded-top-2 overflow-hidden">
                                <img
                                  alt=""
                                  class="d-block width-full"
                                  src="https://github.githubassets.com/images/modules/settings/color_modes/light_colorblind_preview.svg"
                                />
                              </div>
                              <div class="py-2 px-3 text-bold">
                                Light Protanopia &amp; Deuteranopia
                              </div>
                            </div>
                            <div
                              data-theme="light_tritanopia"
                              data-targets="appearance-preview.themePreviews"
                              class="border mb-3 rounded-2"
                              hidden
                            >
                              <div class="border-bottom rounded-top-2 overflow-hidden">
                                <img
                                  alt=""
                                  class="d-block width-full"
                                  src="https://github.githubassets.com/images/modules/settings/color_modes/light_tritanopia_preview.svg"
                                />
                              </div>
                              <div class="py-2 px-3 text-bold">Light Tritanopia</div>
                            </div>
                            <div
                              data-theme="dark"
                              data-targets="appearance-preview.themePreviews"
                              class="border mb-3 rounded-2"
                            >
                              <div class="border-bottom rounded-top-2 overflow-hidden">
                                <img
                                  alt=""
                                  class="d-block width-full"
                                  src="https://github.githubassets.com/images/modules/settings/color_modes/dark_preview.svg"
                                />
                              </div>
                              <div class="py-2 px-3 text-bold">Dark default</div>
                            </div>
                            <div
                              data-theme="dark_high_contrast"
                              data-targets="appearance-preview.themePreviews"
                              class="border mb-3 rounded-2"
                              hidden
                            >
                              <div class="border-bottom rounded-top-2 overflow-hidden">
                                <img
                                  alt=""
                                  class="d-block width-full"
                                  src="https://github.githubassets.com/images/modules/settings/color_modes/dark_high_contrast_preview.svg"
                                />
                              </div>
                              <div class="py-2 px-3 text-bold">Dark high contrast</div>
                            </div>
                            <div
                              data-theme="dark_colorblind"
                              data-targets="appearance-preview.themePreviews"
                              class="border mb-3 rounded-2"
                              hidden
                            >
                              <div class="border-bottom rounded-top-2 overflow-hidden">
                                <img
                                  alt=""
                                  class="d-block width-full"
                                  src="https://github.githubassets.com/images/modules/settings/color_modes/dark_colorblind_preview.svg"
                                />
                              </div>
                              <div class="py-2 px-3 text-bold">
                                Dark Protanopia &amp; Deuteranopia
                              </div>
                            </div>
                            <div
                              data-theme="dark_tritanopia"
                              data-targets="appearance-preview.themePreviews"
                              class="border mb-3 rounded-2"
                              hidden
                            >
                              <div class="border-bottom rounded-top-2 overflow-hidden">
                                <img
                                  alt=""
                                  class="d-block width-full"
                                  src="https://github.githubassets.com/images/modules/settings/color_modes/dark_tritanopia_preview.svg"
                                />
                              </div>
                              <div class="py-2 px-3 text-bold">Dark Tritanopia</div>
                            </div>
                            <div
                              data-theme="dark_dimmed"
                              data-targets="appearance-preview.themePreviews"
                              class="border mb-3 rounded-2"
                              hidden
                            >
                              <div class="border-bottom rounded-top-2 overflow-hidden">
                                <img
                                  alt=""
                                  class="d-block width-full"
                                  src="https://github.githubassets.com/images/modules/settings/color_modes/dark_dimmed_preview.svg"
                                />
                              </div>
                              <div class="py-2 px-3 text-bold">Dark dimmed</div>
                            </div>
                            <div
                              class="d-flex flex-wrap mb-n2"
                              role="radiogroup"
                              aria-label="Night theme picker"
                            >
                              <input
                                class="hidden-radio-input"
                                id="option-dark-light"
                                type="radio"
                                name="dark_theme"
                                data-type="dark"
                                data-mode="auto"
                                aria-label="Light default"
                                value="light"
                                data-theme="light"
                                data-action="focus:appearance-preview#themePreview
                        blur:appearance-preview#previewReset
                        click:appearance-form#themeClicked"
                                data-throttled-autosubmit=""
                              />
                              <label
                                class="radio-label-theme-discs circle radio-label m-0 mr-2 mb-2 d-flex flex-items-center flex-justify-center overflow-hidden color-bg-subtle flex-grow-0 flex-shrink-0"
                                style="width: 40px; height: 40px; border-width: 2px"
                                for="option-dark-light"
                                title="Light default"
                                data-theme="light"
                                aria-hidden="true"
                                data-action="mouseenter:appearance-preview#themePreview
                        mouseleave:appearance-preview#previewReset"
                              >
                                <span
                                  class="border circle d-flex flex-items-center flex-justify-center mt-n1 mb-n1 mr-n1 ml-n1"
                                >
                                  <img
                                    alt="Light default"
                                    width="100%"
                                    height="100%"
                                    src="https://github.githubassets.com/images/modules/settings/color_modes/light_disc.svg"
                                  />
                                </span>
                              </label>
                              <input
                                class="hidden-radio-input"
                                id="option-dark-light_high_contrast"
                                type="radio"
                                name="dark_theme"
                                data-type="dark"
                                data-mode="auto"
                                aria-label="Light high contrast"
                                value="light_high_contrast"
                                data-theme="light_high_contrast"
                                data-action="focus:appearance-preview#themePreview
                        blur:appearance-preview#previewReset
                        click:appearance-form#themeClicked"
                                data-throttled-autosubmit=""
                              />
                              <label
                                class="radio-label-theme-discs circle radio-label m-0 mr-2 mb-2 d-flex flex-items-center flex-justify-center overflow-hidden color-bg-subtle flex-grow-0 flex-shrink-0"
                                style="width: 40px; height: 40px; border-width: 2px"
                                for="option-dark-light_high_contrast"
                                title="Light high contrast"
                                data-theme="light_high_contrast"
                                aria-hidden="true"
                                data-action="mouseenter:appearance-preview#themePreview
                        mouseleave:appearance-preview#previewReset"
                              >
                                <span
                                  class="border circle d-flex flex-items-center flex-justify-center mt-n1 mb-n1 mr-n1 ml-n1"
                                >
                                  <img
                                    alt="Light high contrast"
                                    width="100%"
                                    height="100%"
                                    src="https://github.githubassets.com/images/modules/settings/color_modes/light_high_contrast_disc.svg"
                                  />
                                </span>
                              </label>
                              <input
                                class="hidden-radio-input"
                                id="option-dark-light_colorblind"
                                type="radio"
                                name="dark_theme"
                                data-type="dark"
                                data-mode="auto"
                                aria-label="Light colorblind"
                                value="light_colorblind"
                                data-theme="light_colorblind"
                                data-action="focus:appearance-preview#themePreview
                        blur:appearance-preview#previewReset
                        click:appearance-form#themeClicked"
                                data-throttled-autosubmit=""
                              />
                              <label
                                class="radio-label-theme-discs circle radio-label m-0 mr-2 mb-2 d-flex flex-items-center flex-justify-center overflow-hidden color-bg-subtle flex-grow-0 flex-shrink-0"
                                style="width: 40px; height: 40px; border-width: 2px"
                                for="option-dark-light_colorblind"
                                title="Light colorblind"
                                data-theme="light_colorblind"
                                aria-hidden="true"
                                data-action="mouseenter:appearance-preview#themePreview
                        mouseleave:appearance-preview#previewReset"
                              >
                                <span
                                  class="border circle d-flex flex-items-center flex-justify-center mt-n1 mb-n1 mr-n1 ml-n1"
                                >
                                  <img
                                    alt="Light colorblind"
                                    width="100%"
                                    height="100%"
                                    src="https://github.githubassets.com/images/modules/settings/color_modes/light_colorblind_disc.svg"
                                  />
                                </span>
                              </label>
                              <input
                                class="hidden-radio-input"
                                id="option-dark-light_tritanopia"
                                type="radio"
                                name="dark_theme"
                                data-type="dark"
                                data-mode="auto"
                                aria-label="Light Tritanopia"
                                value="light_tritanopia"
                                data-theme="light_tritanopia"
                                data-action="focus:appearance-preview#themePreview
                        blur:appearance-preview#previewReset
                        click:appearance-form#themeClicked"
                                data-throttled-autosubmit=""
                              />
                              <label
                                class="radio-label-theme-discs circle radio-label m-0 mr-2 mb-2 d-flex flex-items-center flex-justify-center overflow-hidden color-bg-subtle flex-grow-0 flex-shrink-0"
                                style="width: 40px; height: 40px; border-width: 2px"
                                for="option-dark-light_tritanopia"
                                title="Light Tritanopia"
                                data-theme="light_tritanopia"
                                aria-hidden="true"
                                data-action="mouseenter:appearance-preview#themePreview
                        mouseleave:appearance-preview#previewReset"
                              >
                                <span
                                  class="border circle d-flex flex-items-center flex-justify-center mt-n1 mb-n1 mr-n1 ml-n1"
                                >
                                  <img
                                    alt="Light Tritanopia"
                                    width="100%"
                                    height="100%"
                                    src="https://github.githubassets.com/images/modules/settings/color_modes/light_tritanopia_disc.svg"
                                  />
                                </span>
                              </label>
                              <input
                                class="hidden-radio-input"
                                id="option-dark-dark"
                                type="radio"
                                name="dark_theme"
                                data-type="dark"
                                data-mode="auto"
                                aria-label="Dark default"
                                value="dark"
                                data-theme="dark"
                                checked
                                data-action="focus:appearance-preview#themePreview
                        blur:appearance-preview#previewReset
                        click:appearance-form#themeClicked"
                                data-throttled-autosubmit=""
                              />
                              <label
                                class="radio-label-theme-discs circle radio-label m-0 mr-2 mb-2 d-flex flex-items-center flex-justify-center overflow-hidden color-bg-subtle flex-grow-0 flex-shrink-0"
                                style="width: 40px; height: 40px; border-width: 2px"
                                for="option-dark-dark"
                                title="Dark default"
                                data-theme="dark"
                                aria-hidden="true"
                                data-action="mouseenter:appearance-preview#themePreview
                        mouseleave:appearance-preview#previewReset"
                              >
                                <span
                                  class="border circle d-flex flex-items-center flex-justify-center mt-n1 mb-n1 mr-n1 ml-n1"
                                >
                                  <img
                                    alt="Dark default"
                                    width="100%"
                                    height="100%"
                                    src="https://github.githubassets.com/images/modules/settings/color_modes/dark_disc.svg"
                                  />
                                </span>
                              </label>
                              <input
                                class="hidden-radio-input"
                                id="option-dark-dark_high_contrast"
                                type="radio"
                                name="dark_theme"
                                data-type="dark"
                                data-mode="auto"
                                aria-label="Dark high contrast"
                                value="dark_high_contrast"
                                data-theme="dark_high_contrast"
                                data-action="focus:appearance-preview#themePreview
                        blur:appearance-preview#previewReset
                        click:appearance-form#themeClicked"
                                data-throttled-autosubmit=""
                              />
                              <label
                                class="radio-label-theme-discs circle radio-label m-0 mr-2 mb-2 d-flex flex-items-center flex-justify-center overflow-hidden color-bg-subtle flex-grow-0 flex-shrink-0"
                                style="width: 40px; height: 40px; border-width: 2px"
                                for="option-dark-dark_high_contrast"
                                title="Dark high contrast"
                                data-theme="dark_high_contrast"
                                aria-hidden="true"
                                data-action="mouseenter:appearance-preview#themePreview
                        mouseleave:appearance-preview#previewReset"
                              >
                                <span
                                  class="border circle d-flex flex-items-center flex-justify-center mt-n1 mb-n1 mr-n1 ml-n1"
                                >
                                  <img
                                    alt="Dark high contrast"
                                    width="100%"
                                    height="100%"
                                    src="https://github.githubassets.com/images/modules/settings/color_modes/dark_high_contrast_disc.svg"
                                  />
                                </span>
                              </label>
                              <input
                                class="hidden-radio-input"
                                id="option-dark-dark_colorblind"
                                type="radio"
                                name="dark_theme"
                                data-type="dark"
                                data-mode="auto"
                                aria-label="Dark colorblind"
                                value="dark_colorblind"
                                data-theme="dark_colorblind"
                                data-action="focus:appearance-preview#themePreview
                        blur:appearance-preview#previewReset
                        click:appearance-form#themeClicked"
                                data-throttled-autosubmit=""
                              />
                              <label
                                class="radio-label-theme-discs circle radio-label m-0 mr-2 mb-2 d-flex flex-items-center flex-justify-center overflow-hidden color-bg-subtle flex-grow-0 flex-shrink-0"
                                style="width: 40px; height: 40px; border-width: 2px"
                                for="option-dark-dark_colorblind"
                                title="Dark colorblind"
                                data-theme="dark_colorblind"
                                aria-hidden="true"
                                data-action="mouseenter:appearance-preview#themePreview
                        mouseleave:appearance-preview#previewReset"
                              >
                                <span
                                  class="border circle d-flex flex-items-center flex-justify-center mt-n1 mb-n1 mr-n1 ml-n1"
                                >
                                  <img
                                    alt="Dark colorblind"
                                    width="100%"
                                    height="100%"
                                    src="https://github.githubassets.com/images/modules/settings/color_modes/dark_colorblind_disc.svg"
                                  />
                                </span>
                              </label>
                              <input
                                class="hidden-radio-input"
                                id="option-dark-dark_tritanopia"
                                type="radio"
                                name="dark_theme"
                                data-type="dark"
                                data-mode="auto"
                                aria-label="Dark Tritanopia"
                                value="dark_tritanopia"
                                data-theme="dark_tritanopia"
                                data-action="focus:appearance-preview#themePreview
                        blur:appearance-preview#previewReset
                        click:appearance-form#themeClicked"
                                data-throttled-autosubmit=""
                              />
                              <label
                                class="radio-label-theme-discs circle radio-label m-0 mr-2 mb-2 d-flex flex-items-center flex-justify-center overflow-hidden color-bg-subtle flex-grow-0 flex-shrink-0"
                                style="width: 40px; height: 40px; border-width: 2px"
                                for="option-dark-dark_tritanopia"
                                title="Dark Tritanopia"
                                data-theme="dark_tritanopia"
                                aria-hidden="true"
                                data-action="mouseenter:appearance-preview#themePreview
                        mouseleave:appearance-preview#previewReset"
                              >
                                <span
                                  class="border circle d-flex flex-items-center flex-justify-center mt-n1 mb-n1 mr-n1 ml-n1"
                                >
                                  <img
                                    alt="Dark Tritanopia"
                                    width="100%"
                                    height="100%"
                                    src="https://github.githubassets.com/images/modules/settings/color_modes/dark_tritanopia_disc.svg"
                                  />
                                </span>
                              </label>
                              <input
                                class="hidden-radio-input"
                                id="option-dark-dark_dimmed"
                                type="radio"
                                name="dark_theme"
                                data-type="dark"
                                data-mode="auto"
                                aria-label="Dark dimmed"
                                value="dark_dimmed"
                                data-theme="dark_dimmed"
                                data-action="focus:appearance-preview#themePreview
                        blur:appearance-preview#previewReset
                        click:appearance-form#themeClicked"
                                data-throttled-autosubmit=""
                              />
                              <label
                                class="radio-label-theme-discs circle radio-label m-0 mr-2 mb-2 d-flex flex-items-center flex-justify-center overflow-hidden color-bg-subtle flex-grow-0 flex-shrink-0"
                                style="width: 40px; height: 40px; border-width: 2px"
                                for="option-dark-dark_dimmed"
                                title="Dark dimmed"
                                data-theme="dark_dimmed"
                                aria-hidden="true"
                                data-action="mouseenter:appearance-preview#themePreview
                        mouseleave:appearance-preview#previewReset"
                              >
                                <span
                                  class="border circle d-flex flex-items-center flex-justify-center mt-n1 mb-n1 mr-n1 ml-n1"
                                >
                                  <img
                                    alt="Dark dimmed"
                                    width="100%"
                                    height="100%"
                                    src="https://github.githubassets.com/images/modules/settings/color_modes/dark_dimmed_disc.svg"
                                  />
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </appearance-preview>
                    </div>
                  </form>
                </div>
              </appearance-form>

              <form
                aria-labelledby="emoji-heading"
                data-autosubmit="true"
                class="js-setting-toggle"
                data-turbo="false"
                action="/settings/appearance/skin_tone"
                accept-charset="UTF-8"
                method="post"
              >
                <input type="hidden" name="_method" value="put" autocomplete="off" /><input
                  type="hidden"
                  name="authenticity_token"
                  value="sPr7uspgGcxDANdqmqgwPpwSDvlZokQiBC6QNZDw_nFq-SlvMrWoBFyPg3QWpERlIBtqq6jNdyMqEQk__A64cA"
                />
                <div data-view-component="true" class="Subhead Subhead--spacious">
                  <h2 id="emoji-heading" data-view-component="true" class="Subhead-heading">
                    Emoji skin tone preference
                  </h2>

                  <div data-view-component="true" class="Subhead-actions">
                    <span class="hx_status-indicator status-indicator js-status-indicator">
                      <svg
                        style="box-sizing: content-box; color: var(--color-icon-primary)"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        data-view-component="true"
                        class="status-indicator-spinner anim-rotate"
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
                    </span>
                  </div>
                </div>
                <div id="emoji-skin-tone-heading" class="text-bold mb-2">
                  Preferred default emoji skin tone
                </div>
                <div role="radiogroup" aria-labelledby="emoji-skin-tone-heading">
                  <label class="mr-2">
                    <input
                      type="radio"
                      name="emoji_skin_tone_preference"
                      value="0"
                      data-throttled-autosubmit=""
                    />
                    <g-emoji
                      alias="wave"
                      fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png"
                      >👋</g-emoji
                    ><span class="sr-only">Neutral</span>
                  </label>
                  <label class="mr-2">
                    <input
                      type="radio"
                      name="emoji_skin_tone_preference"
                      value="1"
                      data-throttled-autosubmit=""
                      checked
                    />
                    <g-emoji alias="wave" tone="1">👋🏻</g-emoji
                    ><span class="sr-only">Light Skin Tone</span>
                  </label>
                  <label class="mr-2">
                    <input
                      type="radio"
                      name="emoji_skin_tone_preference"
                      value="2"
                      data-throttled-autosubmit=""
                    />
                    <g-emoji alias="wave" tone="2">👋🏼</g-emoji
                    ><span class="sr-only">Medium-Light Skin Tone</span>
                  </label>
                  <label class="mr-2">
                    <input
                      type="radio"
                      name="emoji_skin_tone_preference"
                      value="3"
                      data-throttled-autosubmit=""
                    />
                    <g-emoji alias="wave" tone="3">👋🏽</g-emoji
                    ><span class="sr-only">Medium Skin Tone</span>
                  </label>
                  <label class="mr-2">
                    <input
                      type="radio"
                      name="emoji_skin_tone_preference"
                      value="4"
                      data-throttled-autosubmit=""
                    />
                    <g-emoji alias="wave" tone="4">👋🏾</g-emoji
                    ><span class="sr-only">Medium-Dark Skin Tone</span>
                  </label>
                  <label class="mr-2">
                    <input
                      type="radio"
                      name="emoji_skin_tone_preference"
                      value="5"
                      data-throttled-autosubmit=""
                    />
                    <g-emoji alias="wave" tone="5">👋🏿</g-emoji
                    ><span class="sr-only">Dark Skin Tone</span>
                  </label>
                </div>
                <noscript>
                  <button type="submit" data-view-component="true" class="btn mt-3 d-block">
                    Update preference
                  </button>
                </noscript>
              </form>

              <form
                data-autosubmit="true"
                class="js-setting-toggle"
                data-turbo="false"
                action="/settings/appearance/tab_size"
                accept-charset="UTF-8"
                method="post"
              >
                <input type="hidden" name="_method" value="put" autocomplete="off" /><input
                  type="hidden"
                  name="authenticity_token"
                  value="vfX-qcckdx8w4Eh5FWq34xOitqJH8NLXfgJ58dJEwUCg9erKliy9IdlvUFKmQ_tkeFyx7J-hXTDiPmRAvMM2Cw"
                  autocomplete="off"
                />
                <div data-view-component="true" class="Subhead Subhead--spacious">
                  <h2 id="tab-size-heading" data-view-component="true" class="Subhead-heading">
                    Tab size preference
                  </h2>

                  <div data-view-component="true" class="Subhead-actions">
                    <span class="hx_status-indicator status-indicator js-status-indicator">
                      <svg
                        style="box-sizing: content-box; color: var(--color-icon-primary)"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        data-view-component="true"
                        class="status-indicator-spinner anim-rotate"
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
                    </span>
                  </div>
                </div>
                <div class="text-bold mb-2" id="user_tab_size_rendering_preference_label">
                  Choose the number of spaces a tab is equal to when rendering code
                </div>
                <select
                  name="tab_size_rendering_preference"
                  id="tab_size_rendering_preference"
                  aria-labelledby="user_tab_size_rendering_preference_label"
                  class="form-select form-control"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option selected value="8">8 (Default)</option>
                  <option value="10">10</option>
                  <option value="12">12</option>
                </select>

                <noscript>
                  <button type="submit" data-view-component="true" class="btn mt-3 d-block">
                    Update preference
                  </button>
                </noscript>
              </form>

              <form
                data-autosubmit="true"
                class="js-setting-toggle"
                data-turbo="false"
                action="/settings/appearance/fixed_width_font"
                accept-charset="UTF-8"
                method="post"
              >
                <input type="hidden" name="_method" value="put" autocomplete="off" /><input
                  type="hidden"
                  name="authenticity_token"
                  value="kIR10jdqTC2gKWnY8pPpH36gWElc6nZJfC8uPl_LsiIGfWr6TzT1AIlzUSRpyESzBLqerRuH8INWQcn4nwrqoA"
                  autocomplete="off"
                />
                <div data-view-component="true" class="Subhead Subhead--spacious">
                  <h2 data-view-component="true" class="Subhead-heading">
                    Markdown editor font preference
                  </h2>

                  <div data-view-component="true" class="Subhead-actions">
                    <span class="hx_status-indicator status-indicator js-status-indicator">
                      <svg
                        style="box-sizing: content-box; color: var(--color-icon-primary)"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        data-view-component="true"
                        class="status-indicator-spinner anim-rotate"
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
                    </span>
                  </div>
                </div>
                <p class="mb-2">
                  Font preference for plain text editors that support Markdown styling (e.g. pull
                  request and issue descriptions, comments.)
                </p>

                <label class="mr-2">
                  <input
                    type="hidden"
                    name="use_fixed_width_font_preference"
                    id="use_variable_width"
                    value="0"
                    autocomplete="off"
                  />
                  <input
                    type="checkbox"
                    name="use_fixed_width_font_preference"
                    id="use_fixed_width"
                    value="1"
                    data-throttled-autosubmit=""
                  />
                  Use a fixed-width (monospace) font when editing Markdown
                </label>

                <noscript>
                  <button type="submit" data-view-component="true" class="btn mt-3 d-block">
                    Update preference
                  </button>
                </noscript>
              </form>
            </turbo-frame>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./SettingsView.ts"></script>
<style scoped src="./SettingsView.css"></style>
