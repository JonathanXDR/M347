<template>
  <details
    class="details-reset details-overlay details-overlay-dark js-command-palette-dialog"
    id="command-palette-pjax-container"
    data-turbo-replace=""
    open
  >
    <summary aria-label="command palette trigger" tabindex="-1" role="button"></summary>
    <details-dialog
      class="command-palette-details-dialog d-flex flex-column flex-justify-center height-fit"
      aria-label="command palette"
      role="dialog"
      aria-modal="true"
      tabindex="-1"
    >
      <command-palette
        class="command-palette color-bg-default rounded-3 border color-shadow-small"
        return-to="/"
        user-id="73559516"
        activation-hotkey="Mod+k,Mod+Alt+k"
        command-mode-hotkey="Mod+Shift+k"
        data-action="
        command-palette-input-ready:command-palette#inputReady
        command-palette-page-stack-updated:command-palette#updateInputScope
        itemsUpdated:command-palette#itemsUpdated
        keydown:command-palette#onKeydown
        loadingStateChanged:command-palette#loadingStateChanged
        selectedItemChanged:command-palette#selectedItemChanged
        pageFetchError:command-palette#pageFetchError
      "
        data-catalyst=""
      >
        <command-palette-mode
          data-char="#"
          data-scope-types='[""]'
          data-placeholder="Search issues and pull requests"
          data-catalyst=""
        ></command-palette-mode>
        <command-palette-mode
          data-char="#"
          data-scope-types='["owner","repository"]'
          data-placeholder="Search issues, pull requests, discussions, and projects"
          data-catalyst=""
        ></command-palette-mode>
        <command-palette-mode
          data-char="!"
          data-scope-types='["owner","repository"]'
          data-placeholder="Search projects"
          data-catalyst=""
        ></command-palette-mode>
        <command-palette-mode
          data-char="@"
          data-scope-types='[""]'
          data-placeholder="Search or jump to a user, organization, or repository"
          data-catalyst=""
        ></command-palette-mode>
        <command-palette-mode
          data-char="@"
          data-scope-types='["owner"]'
          data-placeholder="Search or jump to a repository"
          data-catalyst=""
        ></command-palette-mode>
        <command-palette-mode
          data-char="/"
          data-scope-types='["repository"]'
          data-placeholder="Search files"
          data-catalyst=""
        ></command-palette-mode>
        <command-palette-mode
          data-char="?"
          data-placeholder=""
          data-catalyst=""
          data-scope-types=""
        ></command-palette-mode>
        <command-palette-mode
          data-char=">"
          data-placeholder="Run a command"
          data-scope-types=""
          data-catalyst=""
        ></command-palette-mode>
        <command-palette-mode
          data-char=""
          data-scope-types='[""]'
          data-placeholder="Search or jump to..."
          data-catalyst=""
        ></command-palette-mode>
        <command-palette-mode
          data-char=""
          data-scope-types='["owner"]'
          data-placeholder="Search or jump to..."
          data-catalyst=""
        ></command-palette-mode>
        <command-palette-mode
          class="js-command-palette-default-mode"
          data-char=""
          data-placeholder="Search or jump to..."
          data-scope-types=""
          data-catalyst=""
        ></command-palette-mode>

        <command-palette-input
          placeholder="Search or jump to..."
          data-action="
          command-palette-input:command-palette#onInput
          command-palette-select:command-palette#onSelect
          command-palette-descope:command-palette#onDescope
          command-palette-cleared:command-palette#onInputClear
        "
          data-catalyst=""
          class="d-flex flex-items-center flex-nowrap py-1 pl-3 pr-2 border-bottom"
        >
          <div class="js-search-icon d-flex flex-items-center mr-2" style="height: 26px">
            <OctIcon name="search" class="color-fg-muted" />
          </div>
          <div class="js-spinner d-flex flex-items-center mr-2 color-fg-muted" hidden>
            <svg
              aria-label="Loading"
              class="anim-rotate"
              viewBox="0 0 16 16"
              fill="none"
              width="16"
              height="16"
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
          <command-palette-scope hidden data-catalyst="" class="d-inline-flex">
            <div data-target="command-palette-scope.placeholder" hidden class="color-fg-subtle">
              /&nbsp;&nbsp;<span class="text-semibold color-fg-default">...</span
              >&nbsp;&nbsp;/&nbsp;&nbsp;
            </div>
          </command-palette-scope>
          <div
            class="command-palette-input-group flex-1 form-control border-0 box-shadow-none"
            style="z-index: 0"
          >
            <div
              class="command-palette-typeahead position-absolute d-flex flex-items-center Truncate"
            >
              <span
                class="typeahead-segment input-mirror"
                data-target="command-palette-input.mirror"
              ></span>
              <span class="Truncate-text" data-target="command-palette-input.typeaheadText"
                >JonathanXDR/Application-Website-Frontend</span
              >
              <span
                class="typeahead-segment"
                data-target="command-palette-input.typeaheadPlaceholder"
              ></span>
            </div>
            <input
              class="js-overlay-input typeahead-input d-none"
              disabled
              tabindex="-1"
              aria-label="Hidden input for typeahead"
            />
            <input
              type="text"
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
              spellcheck="false"
              class="js-input typeahead-input form-control border-0 box-shadow-none input-block width-full no-focus-indicator"
              aria-label="Command palette input"
              aria-haspopup="listbox"
              aria-expanded="false"
              aria-autocomplete="list"
              aria-controls="command-palette-page-stack"
              role="combobox"
              data-action="
              input:command-palette-input#onInput
              keydown:command-palette-input#onKeydown
            "
              placeholder=""
            />
          </div>
          <div data-view-component="true" class="position-relative d-inline-block">
            <button
              aria-keyshortcuts="Meta+Delete"
              data-action="click:command-palette-input#onClear keypress:command-palette-input#onClear"
              data-target="command-palette-input.clearButton"
              id="command-palette-clear-button"
              hidden
              type="button"
              data-view-component="true"
              class="btn-octicon command-palette-input-clear-button"
              aria-labelledby="tooltip-0be904f8-fc2d-406d-8ab3-8b46c9382b2f"
            >
              <OctIcon name="x-circle-fill" />
            </button>
            <tool-tip
              id="tooltip-0be904f8-fc2d-406d-8ab3-8b46c9382b2f"
              for="command-palette-clear-button"
              data-direction="w"
              data-type="label"
              data-view-component="true"
              class="sr-only position-absolute"
              aria-hidden="true"
              role="tooltip"
              >Clear Command Palette</tool-tip
            >
          </div>
        </command-palette-input>

        <command-palette-page-stack
          data-default-scope-id=""
          data-default-scope-type=""
          data-action="command-palette-page-octicons-cached:command-palette-page-stack#cacheOcticons"
          data-current-mode=""
          data-catalyst=""
          data-target="command-palette.pageStack"
          data-current-query-text=""
          data-has-visible-tip=""
        >
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
            data-scope-types='["","owner","repository"]'
            data-mode=""
            data-value=""
            data-match-mode=""
            data-catalyst=""
            hidden
          >
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                Type <kbd class="hx_kbd">#</kbd> to search pull requests
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
            data-scope-types='["","owner","repository"]'
            data-mode=""
            data-value=""
            data-match-mode=""
            data-catalyst=""
            hidden
          >
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                Type <kbd class="hx_kbd">#</kbd> to search issues
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
            data-scope-types='["owner","repository"]'
            data-mode=""
            data-value=""
            data-match-mode=""
            data-catalyst=""
            hidden
          >
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                Type <kbd class="hx_kbd">#</kbd> to search discussions
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
            data-scope-types='["owner","repository"]'
            data-mode=""
            data-value=""
            data-match-mode=""
            data-catalyst=""
            hidden
          >
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                Type <kbd class="hx_kbd">!</kbd> to search projects
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
            data-scope-types='["owner"]'
            data-mode=""
            data-value=""
            data-match-mode=""
            data-catalyst=""
            hidden
          >
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                Type <kbd class="hx_kbd">@</kbd> to search teams
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
            data-scope-types='[""]'
            data-mode=""
            data-value=""
            data-match-mode=""
            data-catalyst=""
          >
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                Type <kbd class="hx_kbd">@</kbd> to search people and organizations
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
            data-scope-types='["","owner","repository"]'
            data-mode=""
            data-value=""
            data-match-mode=""
            data-catalyst=""
            hidden
          >
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                Type <kbd class="hx_kbd">&gt;</kbd> to activate command mode
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
            data-scope-types='["","owner","repository"]'
            data-mode=""
            data-value=""
            data-match-mode=""
            data-catalyst=""
            hidden
          >
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                Go to your accessibility settings to change your keyboard shortcuts
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
            data-scope-types='["","owner","repository"]'
            data-mode="#"
            data-value=""
            data-match-mode=""
            data-catalyst=""
            hidden
          >
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                Type author:@me to search your content
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
            data-scope-types='["","owner","repository"]'
            data-mode="#"
            data-value=""
            data-match-mode=""
            data-catalyst=""
            hidden
          >
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                Type is:pr to filter to pull requests
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
            data-scope-types='["","owner","repository"]'
            data-mode="#"
            data-value=""
            data-match-mode=""
            data-catalyst=""
            hidden
          >
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                Type is:issue to filter to issues
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
            data-scope-types='["owner","repository"]'
            data-mode="#"
            data-value=""
            data-match-mode=""
            data-catalyst=""
            hidden
          >
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                Type is:project to filter to projects
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="color-fg-muted f6 px-3 py-1 my-2"
            data-scope-types='["","owner","repository"]'
            data-mode="#"
            data-value=""
            data-match-mode=""
            data-catalyst=""
            hidden
          >
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                Type is:open to filter to open content
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="mx-3 my-2 flash flash-error d-flex flex-items-center"
            data-scope-types="*"
            data-on-error=""
            data-mode="*"
            data-catalyst=""
            hidden
            data-match-mode=""
            data-value="*"
          >
            <div>
              <OctIcon name="alert" />
            </div>
            <div class="px-2">
              We’ve encountered an error and some results aren't available at this time. Type a new
              search or try again later.
            </div>
          </command-palette-tip>
          <command-palette-tip
            class="h4 color-fg-default pl-3 pb-2 pt-3"
            data-on-empty=""
            data-scope-types="*"
            data-match-mode="[^?]|^$"
            data-mode="*"
            data-catalyst=""
            hidden
            data-value="*"
          >
            No results matched your search
          </command-palette-tip>

          <div hidden>
            <div
              data-targets="command-palette-page-stack.localOcticons"
              data-octicon-id="arrow-right-color-fg-muted"
            >
              <OctIcon name="arrow-right" class="color-fg-muted" />
            </div>
            <div
              data-targets="command-palette-page-stack.localOcticons"
              data-octicon-id="arrow-right-color-fg-default"
            >
              <OctIcon name="arrow-right" class="color-fg-default" />
            </div>
            <div
              data-targets="command-palette-page-stack.localOcticons"
              data-octicon-id="codespaces-color-fg-muted"
            >
              <OctIcon name="codespaces" class="color-fg-muted" />
            </div>
            <div
              data-targets="command-palette-page-stack.localOcticons"
              data-octicon-id="copy-color-fg-muted"
            >
              <OctIcon name="copy" class="color-fg-muted" />
            </div>
            <div
              data-targets="command-palette-page-stack.localOcticons"
              data-octicon-id="dash-color-fg-muted"
            >
              <OctIcon name="dash" class="color-fg-muted" />
            </div>
            <div
              data-targets="command-palette-page-stack.localOcticons"
              data-octicon-id="file-color-fg-muted"
            >
              <OctIcon name="file" class="color-fg-muted" />
            </div>
            <div
              data-targets="command-palette-page-stack.localOcticons"
              data-octicon-id="gear-color-fg-muted"
            >
              <OctIcon name="gear" class="color-fg-muted" />
            </div>
            <div
              data-targets="command-palette-page-stack.localOcticons"
              data-octicon-id="lock-color-fg-muted"
            >
              <OctIcon name="lock" class="color-fg-muted" />
            </div>
            <div
              data-targets="command-palette-page-stack.localOcticons"
              data-octicon-id="moon-color-fg-muted"
            >
              <OctIcon name="moon" class="color-fg-muted" />
            </div>
            <div
              data-targets="command-palette-page-stack.localOcticons"
              data-octicon-id="person-color-fg-muted"
            >
              <OctIcon name="person" class="color-fg-muted" />
            </div>
            <div
              data-targets="command-palette-page-stack.localOcticons"
              data-octicon-id="pencil-color-fg-muted"
            >
              <OctIcon name="pencil" class="color-fg-muted" />
            </div>
            <div
              data-targets="command-palette-page-stack.localOcticons"
              data-octicon-id="issue-opened-open"
            >
              <OctIcon name="issue-opened" class="open" />
            </div>
            <div
              data-targets="command-palette-page-stack.localOcticons"
              data-octicon-id="git-pull-request-draft-color-fg-muted"
            >
              <OctIcon name="git-pull-request-draft" class="color-fg-muted" />
            </div>
            <div
              data-targets="command-palette-page-stack.localOcticons"
              data-octicon-id="search-color-fg-muted"
            >
              <OctIcon name="search" class="color-fg-muted" />
            </div>
            <div
              data-targets="command-palette-page-stack.localOcticons"
              data-octicon-id="sun-color-fg-muted"
            >
              <OctIcon name="sun" class="color-fg-muted" />
            </div>
            <div
              data-targets="command-palette-page-stack.localOcticons"
              data-octicon-id="sync-color-fg-muted"
            >
              <OctIcon name="sync" class="color-fg-muted" />
            </div>
            <div
              data-targets="command-palette-page-stack.localOcticons"
              data-octicon-id="trash-color-fg-muted"
            >
              <OctIcon name="trash" class="color-fg-muted" />
            </div>
            <div
              data-targets="command-palette-page-stack.localOcticons"
              data-octicon-id="key-color-fg-muted"
            >
              <OctIcon name="key" class="color-fg-muted" />
            </div>
            <div
              data-targets="command-palette-page-stack.localOcticons"
              data-octicon-id="comment-discussion-color-fg-muted"
            >
              <OctIcon name="comment-discussion" class="color-fg-muted" />
            </div>
            <div
              data-targets="command-palette-page-stack.localOcticons"
              data-octicon-id="bell-color-fg-muted"
            >
              <OctIcon name="bell" class="color-fg-muted" />
            </div>
            <div
              data-targets="command-palette-page-stack.localOcticons"
              data-octicon-id="bell-slash-color-fg-muted"
            >
              <OctIcon name="bell-slash" class="color-fg-muted" />
            </div>
            <div
              data-targets="command-palette-page-stack.localOcticons"
              data-octicon-id="paintbrush-color-fg-muted"
            >
              <OctIcon name="paintbrush" class="color-fg-muted" />
            </div>

            <command-palette-item-group
              data-group-id="top"
              data-group-title="Top result"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="0"
              data-catalyst=""
              class="py-2 border-top"
              hidden="true"
              data-skip-template=""
            >
              <div class="d-flex flex-justify-between my-2 px-3">
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted text-bold f6 text-normal"
                >
                  Top result
                </span>
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted f6 text-normal"
                >
                </span>
              </div>
              <div
                role="listbox"
                class="list-style-none"
                data-target="command-palette-item-group.list"
                aria-label="Top result results"
              ></div>
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="commands"
              data-group-title="Commands"
              data-group-hint="Type > to filter"
              data-group-limits='{"static_items_page":50,"issue":50,"pull_request":50,"discussion":50}'
              data-default-priority="1"
              data-catalyst=""
              class="py-2 border-top"
              hidden="true"
              data-skip-template=""
            >
              <div class="d-flex flex-justify-between my-2 px-3">
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted text-bold f6 text-normal"
                >
                  Commands
                </span>
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted f6 text-normal"
                >
                  Type &gt; to filter
                </span>
              </div>
              <div
                role="listbox"
                class="list-style-none"
                data-target="command-palette-item-group.list"
                aria-label="Commands results"
              ></div>
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="global_commands"
              data-group-title="Global Commands"
              data-group-hint="Type > to filter"
              data-group-limits='{"issue":0,"pull_request":0,"discussion":0}'
              data-default-priority="2"
              data-catalyst=""
              class="py-2 border-top"
              hidden="true"
              data-skip-template=""
            >
              <div class="d-flex flex-justify-between my-2 px-3">
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted text-bold f6 text-normal"
                >
                  Global Commands
                </span>
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted f6 text-normal"
                >
                  Type &gt; to filter
                </span>
              </div>
              <div
                role="listbox"
                class="list-style-none"
                data-target="command-palette-item-group.list"
                aria-label="Global Commands results"
              ></div>
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="this_page"
              data-group-title="This Page"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="3"
              data-catalyst=""
              class="py-2 border-top"
              hidden="true"
              data-skip-template=""
            >
              <div class="d-flex flex-justify-between my-2 px-3">
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted text-bold f6 text-normal"
                >
                  This Page
                </span>
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted f6 text-normal"
                >
                </span>
              </div>
              <div
                role="listbox"
                class="list-style-none"
                data-target="command-palette-item-group.list"
                aria-label="This Page results"
              ></div>
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="files"
              data-group-title="Files"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="4"
              data-catalyst=""
              class="py-2 border-top"
              hidden="true"
              data-skip-template=""
            >
              <div class="d-flex flex-justify-between my-2 px-3">
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted text-bold f6 text-normal"
                >
                  Files
                </span>
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted f6 text-normal"
                >
                </span>
              </div>
              <div
                role="listbox"
                class="list-style-none"
                data-target="command-palette-item-group.list"
                aria-label="Files results"
              ></div>
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="default"
              data-group-title="Default"
              data-group-hint=""
              data-group-limits='{"static_items_page":50}'
              data-default-priority="5"
              data-catalyst=""
              class="py-2 border-top"
              hidden="true"
              data-skip-template=""
            >
              <div
                role="listbox"
                class="list-style-none"
                data-target="command-palette-item-group.list"
                aria-label="Default results"
              ></div>
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="pages"
              data-group-title="Pages"
              data-group-hint=""
              data-group-limits='{"repository":10}'
              data-default-priority="6"
              data-catalyst=""
              class="py-2 border-top"
              hidden="true"
              data-skip-template=""
            >
              <div class="d-flex flex-justify-between my-2 px-3">
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted text-bold f6 text-normal"
                >
                  Pages
                </span>
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted f6 text-normal"
                >
                </span>
              </div>
              <div
                role="listbox"
                class="list-style-none"
                data-target="command-palette-item-group.list"
                aria-label="Pages results"
              ></div>
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="access_policies"
              data-group-title="Access Policies"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="7"
              data-catalyst=""
              class="py-2 border-top"
              hidden="true"
              data-skip-template=""
            >
              <div class="d-flex flex-justify-between my-2 px-3">
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted text-bold f6 text-normal"
                >
                  Access Policies
                </span>
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted f6 text-normal"
                >
                </span>
              </div>
              <div
                role="listbox"
                class="list-style-none"
                data-target="command-palette-item-group.list"
                aria-label="Access Policies results"
              ></div>
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="organizations"
              data-group-title="Organizations"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="8"
              data-catalyst=""
              class="py-2 border-top"
              hidden="true"
              data-skip-template=""
            >
              <div class="d-flex flex-justify-between my-2 px-3">
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted text-bold f6 text-normal"
                >
                  Organizations
                </span>
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted f6 text-normal"
                >
                </span>
              </div>
              <div
                role="listbox"
                class="list-style-none"
                data-target="command-palette-item-group.list"
                aria-label="Organizations results"
              ></div>
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="repositories"
              data-group-title="Repositories"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="9"
              data-catalyst=""
              class="py-2 border-top"
              hidden="true"
              data-skip-template=""
            >
              <div class="d-flex flex-justify-between my-2 px-3">
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted text-bold f6 text-normal"
                >
                  Repositories
                </span>
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted f6 text-normal"
                >
                </span>
              </div>
              <div
                role="listbox"
                class="list-style-none"
                data-target="command-palette-item-group.list"
                aria-label="Repositories results"
              ></div>
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="references"
              data-group-title="Issues, pull requests, and discussions"
              data-group-hint="Type # to filter"
              data-group-limits="{}"
              data-default-priority="10"
              data-catalyst=""
              class="py-2 border-top"
              hidden="true"
              data-skip-template=""
            >
              <div class="d-flex flex-justify-between my-2 px-3">
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted text-bold f6 text-normal"
                >
                  Issues, pull requests, and discussions
                </span>
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted f6 text-normal"
                >
                  Type # to filter
                </span>
              </div>
              <div
                role="listbox"
                class="list-style-none"
                data-target="command-palette-item-group.list"
                aria-label="Issues, pull requests, and discussions results"
              ></div>
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="teams"
              data-group-title="Teams"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="11"
              data-catalyst=""
              class="py-2 border-top"
              hidden="true"
              data-skip-template=""
            >
              <div class="d-flex flex-justify-between my-2 px-3">
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted text-bold f6 text-normal"
                >
                  Teams
                </span>
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted f6 text-normal"
                >
                </span>
              </div>
              <div
                role="listbox"
                class="list-style-none"
                data-target="command-palette-item-group.list"
                aria-label="Teams results"
              ></div>
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="users"
              data-group-title="Users"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="12"
              data-catalyst=""
              class="py-2 border-top"
              hidden="true"
              data-skip-template=""
            >
              <div class="d-flex flex-justify-between my-2 px-3">
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted text-bold f6 text-normal"
                >
                  Users
                </span>
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted f6 text-normal"
                >
                </span>
              </div>
              <div
                role="listbox"
                class="list-style-none"
                data-target="command-palette-item-group.list"
                aria-label="Users results"
              ></div>
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="projects"
              data-group-title="Projects"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="13"
              data-catalyst=""
              class="py-2 border-top"
              hidden="true"
              data-skip-template=""
            >
              <div class="d-flex flex-justify-between my-2 px-3">
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted text-bold f6 text-normal"
                >
                  Projects
                </span>
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted f6 text-normal"
                >
                </span>
              </div>
              <div
                role="listbox"
                class="list-style-none"
                data-target="command-palette-item-group.list"
                aria-label="Projects results"
              ></div>
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="footer"
              data-group-title="Footer"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="14"
              data-catalyst=""
              class="py-2 border-top"
              hidden="true"
              data-skip-template=""
            >
              <div
                role="listbox"
                class="list-style-none"
                data-target="command-palette-item-group.list"
                aria-label="Footer results"
              ></div>
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="modes_help"
              data-group-title="Modes"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="15"
              data-catalyst=""
              class="py-2 border-top"
              hidden="true"
              data-skip-template=""
            >
              <div class="d-flex flex-justify-between my-2 px-3">
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted text-bold f6 text-normal"
                >
                  Modes
                </span>
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted f6 text-normal"
                >
                </span>
              </div>
              <div
                role="listbox"
                class="list-style-none"
                data-target="command-palette-item-group.list"
                aria-label="Modes results"
              ></div>
            </command-palette-item-group>
            <command-palette-item-group
              data-group-id="filters_help"
              data-group-title="Use filters in issues, pull requests, discussions, and projects"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="16"
              data-catalyst=""
              class="py-2 border-top"
              hidden="true"
              data-skip-template=""
            >
              <div class="d-flex flex-justify-between my-2 px-3">
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted text-bold f6 text-normal"
                >
                  Use filters in issues, pull requests, discussions, and projects
                </span>
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted f6 text-normal"
                >
                </span>
              </div>
              <div
                role="listbox"
                class="list-style-none"
                data-target="command-palette-item-group.list"
                aria-label="Use filters in issues, pull requests, discussions, and projects results"
              ></div>
            </command-palette-item-group>
          </div>

          <command-palette-page
            data-is-root=""
            data-page-title=""
            data-catalyst=""
            class="rounded-bottom-2 page-stack-transition-height"
            data-targets="command-palette-page-stack.pages"
            style="max-height: 475px; min-height: 475px"
            data-scope-id=""
            data-scope-type=""
            data-has-visible-tip=""
            ><command-palette-item-group
              data-group-id="top"
              data-group-title="Top result"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="0"
              data-catalyst=""
              class="py-2 border-top"
              hidden="true"
              data-skip-template=""
            >
              <div class="d-flex flex-justify-between my-2 px-3">
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted text-bold f6 text-normal"
                >
                  Top result
                </span>
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted f6 text-normal"
                >
                </span>
              </div>
              <div
                role="listbox"
                class="list-style-none"
                data-target="command-palette-item-group.list"
                aria-label="Top result results"
              ></div> </command-palette-item-group
            ><command-palette-item-group
              data-group-id="default"
              data-group-title="Default"
              data-group-hint=""
              data-group-limits='{"static_items_page":50}'
              data-default-priority="5"
              data-catalyst=""
              class="py-2 border-top"
              hidden="true"
              data-skip-template=""
            >
              <div
                role="listbox"
                class="list-style-none"
                data-target="command-palette-item-group.list"
                aria-label="Default results"
              ></div> </command-palette-item-group
            ><command-palette-item-group
              data-group-id="pages"
              data-group-title="Pages"
              data-group-hint=""
              data-group-limits='{"repository":10}'
              data-default-priority="6"
              data-catalyst=""
              class="mb-2"
              data-skip-template=""
            >
              <div class="d-flex flex-justify-between my-2 px-3">
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted text-bold f6 text-normal"
                >
                  Pages
                </span>
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted f6 text-normal"
                >
                </span>
              </div>
              <div
                role="listbox"
                class="list-style-none"
                data-target="command-palette-item-group.list"
                aria-label="Pages results"
              >
                <command-palette-item
                  data-catalyst=""
                  data-item-id="21841824"
                  data-item-title="Dashboard"
                  data-subtitle=""
                  data-score="0"
                >
                  <a
                    data-target="command-palette-item.containerElement"
                    data-action="click:command-palette-item#onClick"
                    href="http://github.com/"
                    class="mx-2 px-2 rounded-2 d-flex flex-items-start no-underline border-0"
                    style="padding-top: 10px; padding-bottom: 10px; cursor: pointer"
                  >
                    <div
                      data-target="command-palette-item.iconElement"
                      class="mr-2 color-fg-muted d-flex flex-items-center"
                      style="height: 24px; min-width: 16px"
                    >
                      <OctIcon name="home" class="color-fg-muted" />
                    </div>
                    <div class="flex-1 d-flex flex-column" style="line-height: 24px">
                      <span
                        data-target="command-palette-item.titleElement"
                        class="color-fg-default f5"
                        >Dashboard</span
                      >
                      <p
                        data-target="command-palette-item.subtitleElement"
                        class="color-fg-muted f6 mb-0"
                        hidden
                      ></p>
                    </div>
                    <div class="color-fg-muted f5" style="line-height: 20px">
                      <span
                        class="hide-sm"
                        data-target="command-palette-item.hintText"
                        style="line-height: 24px"
                        hidden
                        ><span class="hide-sm">Jump to</span></span
                      >
                      <span
                        class="hide-sm"
                        data-target="command-palette-item.persistentHint"
                        style="line-height: 24px"
                        hidden
                      ></span>
                    </div>
                  </a> </command-palette-item
                ><command-palette-item
                  data-catalyst=""
                  data-item-id="797545907"
                  data-item-title="Notifications"
                  data-subtitle=""
                  data-score="0"
                >
                  <a
                    data-target="command-palette-item.containerElement"
                    data-action="click:command-palette-item#onClick"
                    href="/notifications"
                    class="mx-2 px-2 rounded-2 d-flex flex-items-start no-underline border-0"
                    style="padding-top: 10px; padding-bottom: 10px; cursor: pointer"
                  >
                    <div
                      data-target="command-palette-item.iconElement"
                      class="mr-2 color-fg-muted d-flex flex-items-center"
                      style="height: 24px; min-width: 16px"
                    >
                      <OctIcon name="bell" class="color-fg-muted" />
                    </div>
                    <div class="flex-1 d-flex flex-column" style="line-height: 24px">
                      <span
                        data-target="command-palette-item.titleElement"
                        class="color-fg-default f5"
                        >Notifications</span
                      >
                      <p
                        data-target="command-palette-item.subtitleElement"
                        class="color-fg-muted f6 mb-0"
                        hidden
                      ></p>
                    </div>
                    <div class="color-fg-muted f5" style="line-height: 20px">
                      <span
                        class="hide-sm"
                        data-target="command-palette-item.hintText"
                        style="line-height: 24px"
                        hidden
                        ><span class="hide-sm">Jump to</span></span
                      >
                      <span
                        class="hide-sm"
                        data-target="command-palette-item.persistentHint"
                        style="line-height: 24px"
                        hidden
                      ></span>
                    </div>
                  </a> </command-palette-item
                ><command-palette-item
                  data-catalyst=""
                  data-item-id="1979188620"
                  data-item-title="Issues"
                  data-subtitle=""
                  data-score="0"
                >
                  <a
                    data-target="command-palette-item.containerElement"
                    data-action="click:command-palette-item#onClick"
                    href="/issues"
                    class="mx-2 px-2 rounded-2 d-flex flex-items-start no-underline border-0"
                    style="padding-top: 10px; padding-bottom: 10px; cursor: pointer"
                  >
                    <div
                      data-target="command-palette-item.iconElement"
                      class="mr-2 color-fg-muted d-flex flex-items-center"
                      style="height: 24px; min-width: 16px"
                    >
                      <OctIcon name="issue-opened" class="color-fg-muted" />
                    </div>
                    <div class="flex-1 d-flex flex-column" style="line-height: 24px">
                      <span
                        data-target="command-palette-item.titleElement"
                        class="color-fg-default f5"
                        >Issues</span
                      >
                      <p
                        data-target="command-palette-item.subtitleElement"
                        class="color-fg-muted f6 mb-0"
                        hidden
                      ></p>
                    </div>
                    <div class="color-fg-muted f5" style="line-height: 20px">
                      <span
                        class="hide-sm"
                        data-target="command-palette-item.hintText"
                        style="line-height: 24px"
                        hidden
                        ><span class="hide-sm">Jump to</span></span
                      >
                      <span
                        class="hide-sm"
                        data-target="command-palette-item.persistentHint"
                        style="line-height: 24px"
                        hidden
                      ></span>
                    </div>
                  </a> </command-palette-item
                ><command-palette-item
                  data-catalyst=""
                  data-item-id="2766144732"
                  data-item-title="Pull requests"
                  data-subtitle=""
                  data-score="0"
                >
                  <a
                    data-target="command-palette-item.containerElement"
                    data-action="click:command-palette-item#onClick"
                    href="/pulls"
                    class="mx-2 px-2 rounded-2 d-flex flex-items-start no-underline border-0"
                    style="padding-top: 10px; padding-bottom: 10px; cursor: pointer"
                  >
                    <div
                      data-target="command-palette-item.iconElement"
                      class="mr-2 color-fg-muted d-flex flex-items-center"
                      style="height: 24px; min-width: 16px"
                    >
                      <OctIcon name="git-pull-request" class="color-fg-muted" />
                    </div>
                    <div class="flex-1 d-flex flex-column" style="line-height: 24px">
                      <span
                        data-target="command-palette-item.titleElement"
                        class="color-fg-default f5"
                        >Pull requests</span
                      >
                      <p
                        data-target="command-palette-item.subtitleElement"
                        class="color-fg-muted f6 mb-0"
                        hidden
                      ></p>
                    </div>
                    <div class="color-fg-muted f5" style="line-height: 20px">
                      <span
                        class="hide-sm"
                        data-target="command-palette-item.hintText"
                        style="line-height: 24px"
                        hidden
                        ><span class="hide-sm">Jump to</span></span
                      >
                      <span
                        class="hide-sm"
                        data-target="command-palette-item.persistentHint"
                        style="line-height: 24px"
                        hidden
                      ></span>
                    </div>
                  </a> </command-palette-item
                ><command-palette-item
                  data-catalyst=""
                  data-item-id="292377916"
                  data-item-title="Discussions"
                  data-subtitle=""
                  data-score="0"
                >
                  <a
                    data-target="command-palette-item.containerElement"
                    data-action="click:command-palette-item#onClick"
                    href="/discussions"
                    class="mx-2 px-2 rounded-2 d-flex flex-items-start no-underline border-0"
                    style="padding-top: 10px; padding-bottom: 10px; cursor: pointer"
                  >
                    <div
                      data-target="command-palette-item.iconElement"
                      class="mr-2 color-fg-muted d-flex flex-items-center"
                      style="height: 24px; min-width: 16px"
                    >
                      <OctIcon name="comment-discussion" class="color-fg-muted" />
                    </div>
                    <div class="flex-1 d-flex flex-column" style="line-height: 24px">
                      <span
                        data-target="command-palette-item.titleElement"
                        class="color-fg-default f5"
                        >Discussions</span
                      >
                      <p
                        data-target="command-palette-item.subtitleElement"
                        class="color-fg-muted f6 mb-0"
                        hidden
                      ></p>
                    </div>
                    <div class="color-fg-muted f5" style="line-height: 20px">
                      <span
                        class="hide-sm"
                        data-target="command-palette-item.hintText"
                        style="line-height: 24px"
                        hidden
                        ><span class="hide-sm">Jump to</span></span
                      >
                      <span
                        class="hide-sm"
                        data-target="command-palette-item.persistentHint"
                        style="line-height: 24px"
                        hidden
                      ></span>
                    </div>
                  </a>
                </command-palette-item>
              </div> </command-palette-item-group
            ><command-palette-item-group
              data-group-id="repositories"
              data-group-title="Repositories"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="9"
              data-catalyst=""
              class="py-2 border-top"
              data-skip-template=""
            >
              <div class="d-flex flex-justify-between my-2 px-3">
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted text-bold f6 text-normal"
                >
                  Repositories
                </span>
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted f6 text-normal"
                >
                </span>
              </div>
              <div
                role="listbox"
                class="list-style-none"
                data-target="command-palette-item-group.list"
                aria-label="Repositories results"
              >
                <command-palette-item
                  data-catalyst=""
                  data-item-id="46648718"
                  data-item-title="JonathanXDR/Application-Website-Frontend"
                  data-subtitle=""
                  data-score="0"
                  data-selected=""
                >
                  <a
                    data-target="command-palette-item.containerElement"
                    data-action="click:command-palette-item#onClick"
                    href="/JonathanXDR/Application-Website-Frontend"
                    class="mx-2 px-2 rounded-2 d-flex flex-items-start no-underline border-0 color-bg-subtle"
                    style="padding-top: 10px; padding-bottom: 10px; cursor: pointer"
                  >
                    <div
                      data-target="command-palette-item.iconElement"
                      class="mr-2 color-fg-muted d-flex flex-items-center"
                      style="height: 24px; min-width: 16px"
                    >
                      <OctIcon name="repo" class="color-fg-muted" />
                    </div>
                    <div class="flex-1 d-flex flex-column" style="line-height: 24px">
                      <span
                        data-target="command-palette-item.titleElement"
                        class="color-fg-default f5"
                        >JonathanXDR/Application-Website-Frontend</span
                      >
                      <p
                        data-target="command-palette-item.subtitleElement"
                        class="color-fg-muted f6 mb-0"
                        hidden
                      ></p>
                    </div>
                    <div class="color-fg-muted f5" style="line-height: 20px">
                      <span
                        class="hide-sm"
                        data-target="command-palette-item.hintText"
                        style="line-height: 24px"
                        ><div class="hide-sm">
                          <kbd class="hx_kbd">Enter</kbd>
                          to jump to
                          <kbd class="hx_kbd ml-1">Tab</kbd>
                          to search
                        </div></span
                      >
                      <span
                        class="hide-sm"
                        data-target="command-palette-item.persistentHint"
                        style="line-height: 24px"
                        hidden
                      ></span>
                    </div>
                  </a> </command-palette-item
                ><command-palette-item
                  data-catalyst=""
                  data-item-id="3678107624"
                  data-item-title="JonathanXDR/Application-Website"
                  data-subtitle=""
                  data-score="0"
                >
                  <a
                    data-target="command-palette-item.containerElement"
                    data-action="click:command-palette-item#onClick"
                    href="/JonathanXDR/Application-Website"
                    class="mx-2 px-2 rounded-2 d-flex flex-items-start no-underline border-0"
                    style="padding-top: 10px; padding-bottom: 10px; cursor: pointer"
                  >
                    <div
                      data-target="command-palette-item.iconElement"
                      class="mr-2 color-fg-muted d-flex flex-items-center"
                      style="height: 24px; min-width: 16px"
                    >
                      <OctIcon name="repo" class="color-fg-muted" />
                    </div>
                    <div class="flex-1 d-flex flex-column" style="line-height: 24px">
                      <span
                        data-target="command-palette-item.titleElement"
                        class="color-fg-default f5"
                        >JonathanXDR/Application-Website</span
                      >
                      <p
                        data-target="command-palette-item.subtitleElement"
                        class="color-fg-muted f6 mb-0"
                        hidden
                      ></p>
                    </div>
                    <div class="color-fg-muted f5" style="line-height: 20px">
                      <span
                        class="hide-sm"
                        data-target="command-palette-item.hintText"
                        style="line-height: 24px"
                        hidden
                        ><div class="hide-sm">
                          <kbd class="hx_kbd">Enter</kbd>
                          to jump to
                          <kbd class="hx_kbd ml-1">Tab</kbd>
                          to search
                        </div></span
                      >
                      <span
                        class="hide-sm"
                        data-target="command-palette-item.persistentHint"
                        style="line-height: 24px"
                        hidden
                      ></span>
                    </div>
                  </a> </command-palette-item
                ><command-palette-item
                  data-catalyst=""
                  data-item-id="911428146"
                  data-item-title="JonathanXDR/UEK-210-Portfolio"
                  data-subtitle=""
                  data-score="0"
                >
                  <a
                    data-target="command-palette-item.containerElement"
                    data-action="click:command-palette-item#onClick"
                    href="/JonathanXDR/UEK-210-Portfolio"
                    class="mx-2 px-2 rounded-2 d-flex flex-items-start no-underline border-0"
                    style="padding-top: 10px; padding-bottom: 10px; cursor: pointer"
                  >
                    <div
                      data-target="command-palette-item.iconElement"
                      class="mr-2 color-fg-muted d-flex flex-items-center"
                      style="height: 24px; min-width: 16px"
                    >
                      <OctIcon name="repo" class="color-fg-muted" />
                    </div>
                    <div class="flex-1 d-flex flex-column" style="line-height: 24px">
                      <span
                        data-target="command-palette-item.titleElement"
                        class="color-fg-default f5"
                        >JonathanXDR/UEK-210-Portfolio</span
                      >
                      <p
                        data-target="command-palette-item.subtitleElement"
                        class="color-fg-muted f6 mb-0"
                        hidden
                      ></p>
                    </div>
                    <div class="color-fg-muted f5" style="line-height: 20px">
                      <span
                        class="hide-sm"
                        data-target="command-palette-item.hintText"
                        style="line-height: 24px"
                        hidden
                        ><div class="hide-sm">
                          <kbd class="hx_kbd">Enter</kbd>
                          to jump to
                          <kbd class="hx_kbd ml-1">Tab</kbd>
                          to search
                        </div></span
                      >
                      <span
                        class="hide-sm"
                        data-target="command-palette-item.persistentHint"
                        style="line-height: 24px"
                        hidden
                      ></span>
                    </div>
                  </a> </command-palette-item
                ><command-palette-item
                  data-catalyst=""
                  data-item-id="3392743795"
                  data-item-title="JonathanXDR/Unity-Galaxy-Game"
                  data-subtitle=""
                  data-score="0"
                >
                  <a
                    data-target="command-palette-item.containerElement"
                    data-action="click:command-palette-item#onClick"
                    href="/JonathanXDR/Unity-Galaxy-Game"
                    class="mx-2 px-2 rounded-2 d-flex flex-items-start no-underline border-0"
                    style="padding-top: 10px; padding-bottom: 10px; cursor: pointer"
                  >
                    <div
                      data-target="command-palette-item.iconElement"
                      class="mr-2 color-fg-muted d-flex flex-items-center"
                      style="height: 24px; min-width: 16px"
                    >
                      <OctIcon name="lock" class="repo-private-icon" />
                    </div>
                    <div class="flex-1 d-flex flex-column" style="line-height: 24px">
                      <span
                        data-target="command-palette-item.titleElement"
                        class="color-fg-default f5"
                        >JonathanXDR/Unity-Galaxy-Game</span
                      >
                      <p
                        data-target="command-palette-item.subtitleElement"
                        class="color-fg-muted f6 mb-0"
                        hidden
                      ></p>
                    </div>
                    <div class="color-fg-muted f5" style="line-height: 20px">
                      <span
                        class="hide-sm"
                        data-target="command-palette-item.hintText"
                        style="line-height: 24px"
                        hidden
                        ><div class="hide-sm">
                          <kbd class="hx_kbd">Enter</kbd>
                          to jump to
                          <kbd class="hx_kbd ml-1">Tab</kbd>
                          to search
                        </div></span
                      >
                      <span
                        class="hide-sm"
                        data-target="command-palette-item.persistentHint"
                        style="line-height: 24px"
                        hidden
                      ></span>
                    </div>
                  </a> </command-palette-item
                ><command-palette-item
                  data-catalyst=""
                  data-item-id="2397310295"
                  data-item-title="JonathanXDR/Memory"
                  data-subtitle=""
                  data-score="0"
                >
                  <a
                    data-target="command-palette-item.containerElement"
                    data-action="click:command-palette-item#onClick"
                    href="/JonathanXDR/Memory"
                    class="mx-2 px-2 rounded-2 d-flex flex-items-start no-underline border-0"
                    style="padding-top: 10px; padding-bottom: 10px; cursor: pointer"
                  >
                    <div
                      data-target="command-palette-item.iconElement"
                      class="mr-2 color-fg-muted d-flex flex-items-center"
                      style="height: 24px; min-width: 16px"
                    >
                      <OctIcon name="repo" class="color-fg-muted" />
                    </div>
                    <div class="flex-1 d-flex flex-column" style="line-height: 24px">
                      <span
                        data-target="command-palette-item.titleElement"
                        class="color-fg-default f5"
                        >JonathanXDR/Memory</span
                      >
                      <p
                        data-target="command-palette-item.subtitleElement"
                        class="color-fg-muted f6 mb-0"
                        hidden
                      ></p>
                    </div>
                    <div class="color-fg-muted f5" style="line-height: 20px">
                      <span
                        class="hide-sm"
                        data-target="command-palette-item.hintText"
                        style="line-height: 24px"
                        hidden
                        ><div class="hide-sm">
                          <kbd class="hx_kbd">Enter</kbd>
                          to jump to
                          <kbd class="hx_kbd ml-1">Tab</kbd>
                          to search
                        </div></span
                      >
                      <span
                        class="hide-sm"
                        data-target="command-palette-item.persistentHint"
                        style="line-height: 24px"
                        hidden
                      ></span>
                    </div>
                  </a>
                </command-palette-item>
              </div> </command-palette-item-group
            ><command-palette-item-group
              data-group-id="users"
              data-group-title="Users"
              data-group-hint=""
              data-group-limits="{}"
              data-default-priority="12"
              data-catalyst=""
              class="py-2 border-top"
              data-skip-template=""
            >
              <div class="d-flex flex-justify-between my-2 px-3">
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted text-bold f6 text-normal"
                >
                  Users
                </span>
                <span
                  data-target="command-palette-item-group.header"
                  class="color-fg-muted f6 text-normal"
                >
                </span>
              </div>
              <div
                role="listbox"
                class="list-style-none"
                data-target="command-palette-item-group.list"
                aria-label="Users results"
              >
                <command-palette-item
                  data-catalyst=""
                  data-item-id="3812010080"
                  data-item-title="@JonathanXDR - Jonathan Russ"
                  data-subtitle=""
                  data-score="0"
                >
                  <a
                    data-target="command-palette-item.containerElement"
                    data-action="click:command-palette-item#onClick"
                    href="/JonathanXDR"
                    class="mx-2 px-2 rounded-2 d-flex flex-items-start no-underline border-0"
                    style="padding-top: 10px; padding-bottom: 10px; cursor: pointer"
                  >
                    <div
                      data-target="command-palette-item.iconElement"
                      class="mr-2 color-fg-muted d-flex flex-items-center"
                      style="height: 24px; min-width: 16px"
                    >
                      <img
                        src="https://avatars.githubusercontent.com/u/73559516?v=4"
                        alt="@JonathanXDR"
                        class="avatar avatar-1 avatar-small circle"
                      />
                    </div>
                    <div class="flex-1 d-flex flex-column" style="line-height: 24px">
                      <span
                        data-target="command-palette-item.titleElement"
                        class="color-fg-default f5"
                        >@JonathanXDR - Jonathan Russ</span
                      >
                      <p
                        data-target="command-palette-item.subtitleElement"
                        class="color-fg-muted f6 mb-0"
                        hidden
                      ></p>
                    </div>
                    <div class="color-fg-muted f5" style="line-height: 20px">
                      <span
                        class="hide-sm"
                        data-target="command-palette-item.hintText"
                        style="line-height: 24px"
                        hidden
                        ><div class="hide-sm">
                          <kbd class="hx_kbd">Enter</kbd>
                          to jump to
                          <kbd class="hx_kbd ml-1">Tab</kbd>
                          to search
                        </div></span
                      >
                      <span
                        class="hide-sm"
                        data-target="command-palette-item.persistentHint"
                        style="line-height: 24px"
                        hidden
                      ></span>
                    </div>
                  </a>
                </command-palette-item>
              </div> </command-palette-item-group
          ></command-palette-page>
        </command-palette-page-stack>

        <server-defined-provider
          data-type="search-links"
          data-targets="command-palette.serverDefinedProviderElements"
          data-supported-modes=""
          data-catalyst=""
          data-fetch-debounce=""
          data-supported-scope-types=""
          data-src=""
          data-supports-commands=""
        ></server-defined-provider>
        <server-defined-provider
          data-type="help"
          data-targets="command-palette.serverDefinedProviderElements"
          data-supported-modes=""
          data-catalyst=""
          data-fetch-debounce=""
          data-supported-scope-types=""
          data-src=""
          data-supports-commands=""
        >
          <command-palette-help
            data-group="modes_help"
            data-prefix="#"
            data-scope-types='[""]'
            data-catalyst=""
            hidden
          >
            <span data-target="command-palette-help.titleElement"
              >Search for <strong>issues</strong> and <strong>pull requests</strong></span
            >
            <span data-target="command-palette-help.hintElement">
              <kbd class="hx_kbd">#</kbd>
            </span>
          </command-palette-help>
          <command-palette-help
            data-group="modes_help"
            data-prefix="#"
            data-scope-types='["owner","repository"]'
            data-catalyst=""
            hidden
          >
            <span data-target="command-palette-help.titleElement"
              >Search for <strong>issues, pull requests, discussions,</strong> and
              <strong>projects</strong></span
            >
            <span data-target="command-palette-help.hintElement">
              <kbd class="hx_kbd">#</kbd>
            </span>
          </command-palette-help>
          <command-palette-help
            data-group="modes_help"
            data-prefix="@"
            data-scope-types='[""]'
            data-catalyst=""
            hidden
          >
            <span data-target="command-palette-help.titleElement"
              >Search for <strong>organizations, repositories,</strong> and
              <strong>users</strong></span
            >
            <span data-target="command-palette-help.hintElement">
              <kbd class="hx_kbd">@</kbd>
            </span>
          </command-palette-help>
          <command-palette-help
            data-group="modes_help"
            data-prefix="!"
            data-scope-types='["owner","repository"]'
            data-catalyst=""
            hidden
          >
            <span data-target="command-palette-help.titleElement"
              >Search for <strong>projects</strong></span
            >
            <span data-target="command-palette-help.hintElement">
              <kbd class="hx_kbd">!</kbd>
            </span>
          </command-palette-help>
          <command-palette-help
            data-group="modes_help"
            data-prefix="/"
            data-scope-types='["repository"]'
            data-catalyst=""
            hidden
          >
            <span data-target="command-palette-help.titleElement"
              >Search for <strong>files</strong></span
            >
            <span data-target="command-palette-help.hintElement">
              <kbd class="hx_kbd">/</kbd>
            </span>
          </command-palette-help>
          <command-palette-help
            data-group="modes_help"
            data-prefix=">"
            data-scope-types=""
            data-catalyst=""
            hidden
          >
            <span data-target="command-palette-help.titleElement"
              >Activate <strong>command mode</strong></span
            >
            <span data-target="command-palette-help.hintElement">
              <kbd class="hx_kbd">&gt;</kbd>
            </span>
          </command-palette-help>
          <command-palette-help
            data-group="filters_help"
            data-prefix="# author:@me"
            data-scope-types=""
            data-catalyst=""
            hidden
          >
            <span data-target="command-palette-help.titleElement"
              >Search your issues, pull requests, and discussions</span
            >
            <span data-target="command-palette-help.hintElement">
              <kbd class="hx_kbd"># author:@me</kbd>
            </span>
          </command-palette-help>
          <command-palette-help
            data-group="filters_help"
            data-prefix="# author:@me"
            data-scope-types=""
            data-catalyst=""
            hidden
          >
            <span data-target="command-palette-help.titleElement"
              >Search your issues, pull requests, and discussions</span
            >
            <span data-target="command-palette-help.hintElement">
              <kbd class="hx_kbd"># author:@me</kbd>
            </span>
          </command-palette-help>
          <command-palette-help
            data-group="filters_help"
            data-prefix="# is:pr"
            data-scope-types=""
            data-catalyst=""
            hidden
          >
            <span data-target="command-palette-help.titleElement">Filter to pull requests</span>
            <span data-target="command-palette-help.hintElement">
              <kbd class="hx_kbd"># is:pr</kbd>
            </span>
          </command-palette-help>
          <command-palette-help
            data-group="filters_help"
            data-prefix="# is:issue"
            data-scope-types=""
            data-catalyst=""
            hidden
          >
            <span data-target="command-palette-help.titleElement">Filter to issues</span>
            <span data-target="command-palette-help.hintElement">
              <kbd class="hx_kbd"># is:issue</kbd>
            </span>
          </command-palette-help>
          <command-palette-help
            data-group="filters_help"
            data-prefix="# is:discussion"
            data-scope-types='["owner","repository"]'
            data-catalyst=""
            hidden
          >
            <span data-target="command-palette-help.titleElement">Filter to discussions</span>
            <span data-target="command-palette-help.hintElement">
              <kbd class="hx_kbd"># is:discussion</kbd>
            </span>
          </command-palette-help>
          <command-palette-help
            data-group="filters_help"
            data-prefix="# is:project"
            data-scope-types='["owner","repository"]'
            data-catalyst=""
            hidden
          >
            <span data-target="command-palette-help.titleElement">Filter to projects</span>
            <span data-target="command-palette-help.hintElement">
              <kbd class="hx_kbd"># is:project</kbd>
            </span>
          </command-palette-help>
          <command-palette-help
            data-group="filters_help"
            data-prefix="# is:open"
            data-scope-types=""
            data-catalyst=""
            hidden
          >
            <span data-target="command-palette-help.titleElement"
              >Filter to open issues, pull requests, and discussions</span
            >
            <span data-target="command-palette-help.hintElement">
              <kbd class="hx_kbd"># is:open</kbd>
            </span>
          </command-palette-help>
        </server-defined-provider>

        <server-defined-provider
          data-type="commands"
          data-fetch-debounce="0"
          data-src="/command_palette/commands"
          data-supported-modes="[]"
          data-supports-commands=""
          data-targets="command-palette.serverDefinedProviderElements"
          data-supported-scope-types=""
          data-catalyst=""
        ></server-defined-provider>
        <server-defined-provider
          data-type="prefetched"
          data-fetch-debounce="0"
          data-src="/command_palette/jump_to_page_navigation"
          data-supported-modes='[""]'
          data-supported-scope-types='["","owner","repository"]'
          data-targets="command-palette.serverDefinedProviderElements"
          data-supports-commands=""
          data-catalyst=""
        ></server-defined-provider>
        <server-defined-provider
          data-type="remote"
          data-fetch-debounce="200"
          data-src="/command_palette/issues"
          data-supported-modes='["#","#"]'
          data-supported-scope-types='["owner","repository",""]'
          data-targets="command-palette.serverDefinedProviderElements"
          data-supports-commands=""
          data-catalyst=""
        ></server-defined-provider>
        <server-defined-provider
          data-type="remote"
          data-fetch-debounce="200"
          data-src="/command_palette/jump_to"
          data-supported-modes='["@","@"]'
          data-supported-scope-types='["","owner"]'
          data-targets="command-palette.serverDefinedProviderElements"
          data-supports-commands=""
          data-catalyst=""
        ></server-defined-provider>
        <server-defined-provider
          data-type="remote"
          data-fetch-debounce="200"
          data-src="/command_palette/jump_to_members_only"
          data-supported-modes='["@","@","",""]'
          data-supported-scope-types='["","owner"]'
          data-targets="command-palette.serverDefinedProviderElements"
          data-supports-commands=""
          data-catalyst=""
        ></server-defined-provider>
        <server-defined-provider
          data-type="prefetched"
          data-fetch-debounce="0"
          data-src="/command_palette/jump_to_members_only_prefetched"
          data-supported-modes='["@","@","",""]'
          data-supported-scope-types='["","owner"]'
          data-targets="command-palette.serverDefinedProviderElements"
          data-supports-commands=""
          data-catalyst=""
        ></server-defined-provider>
        <server-defined-provider
          data-type="files"
          data-fetch-debounce="0"
          data-src="/command_palette/files"
          data-supported-modes='["/"]'
          data-supported-scope-types='["repository"]'
          data-targets="command-palette.serverDefinedProviderElements"
          data-supports-commands=""
          data-catalyst=""
        ></server-defined-provider>
        <server-defined-provider
          data-type="remote"
          data-fetch-debounce="200"
          data-src="/command_palette/discussions"
          data-supported-modes='["#"]'
          data-supported-scope-types='["owner","repository"]'
          data-targets="command-palette.serverDefinedProviderElements"
          data-supports-commands=""
          data-catalyst=""
        ></server-defined-provider>
        <server-defined-provider
          data-type="remote"
          data-fetch-debounce="200"
          data-src="/command_palette/projects"
          data-supported-modes='["#","!"]'
          data-supported-scope-types='["owner","repository"]'
          data-targets="command-palette.serverDefinedProviderElements"
          data-supports-commands=""
          data-catalyst=""
        ></server-defined-provider>
        <server-defined-provider
          data-type="prefetched"
          data-fetch-debounce="0"
          data-src="/command_palette/recent_issues"
          data-supported-modes='["#","#"]'
          data-supported-scope-types='["owner","repository",""]'
          data-targets="command-palette.serverDefinedProviderElements"
          data-supports-commands=""
          data-catalyst=""
        ></server-defined-provider>
        <server-defined-provider
          data-type="remote"
          data-fetch-debounce="200"
          data-src="/command_palette/teams"
          data-supported-modes='["@",""]'
          data-supported-scope-types='["owner"]'
          data-targets="command-palette.serverDefinedProviderElements"
          data-supports-commands=""
          data-catalyst=""
        ></server-defined-provider>
        <server-defined-provider
          data-type="remote"
          data-fetch-debounce="200"
          data-src="/command_palette/name_with_owner_repository"
          data-supported-modes='["@","@","",""]'
          data-supported-scope-types='["","owner"]'
          data-targets="command-palette.serverDefinedProviderElements"
          data-supports-commands=""
          data-catalyst=""
        ></server-defined-provider>
        <client-defined-provider
          data-catalyst=""
          data-provider-id="main-window-commands-provider"
          data-targets="command-palette.clientDefinedProviderElements"
        ></client-defined-provider
      ></command-palette>
    </details-dialog>
  </details>
</template>

<script lang="ts" src="./SpotlightSearch.ts"></script>
<style scoped src="./SpotlightSearch.css"></style>
