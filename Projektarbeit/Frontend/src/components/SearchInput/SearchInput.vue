<template>
  <div
    class="search-input d-none d-md-block"
    data-scope=""
    data-custom-scopes-path="/search/custom_scopes"
    data-delete-custom-scopes-csrf="sp4bCl3aD0Mb7peIDnQrpiIfMqpp34jnR6wn58xInPVhl80DPNMwnCqGp3_lDGOJabCkD_D1kI-qPxz7Zvt7AQ"
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
          <OctIcon name="search" />
        </div>
        <span class="flex-1" data-target="search-input.inputButtonText">Search or jump to...</span>
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
                    <span class="text-input-icon">
                      <OctIcon name="search" />
                    </span>
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
                          value="rUZr9Y2SBLKE0YrR8IPmsSaEPLKaExI9aqypcozNoX9vnlVYiOaMcAH3cwDHY_qjBmrN3xT_81m1PWa9vjeDpA"
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
                      <OctIcon name="x" />
                    </button>
                  </styled-text-input>
                </div>
                <li class="ActionList-sectionDivider mb-0" role="separator" aria-hidden="true"></li>
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
                  <OctIcon name="x" />
                </button>
              </div>
            </div>
          </div>
          <div data-view-component="true" class="Overlay-body">
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
                value="A4amHbV51qjX7_XeO19IIy0l8jLbVKLzzusW_aHXn-RVHn-NMngW4yGpiLCBvQ3oRs8P0XEQgz5yNmEorubVLQ"
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
                  <OctIcon name="x" />
                </button>
              </div>
            </div>
          </div>
          <div data-view-component="true" class="Overlay-body">
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
                value="hwTg4g518NaXfYMq4qmPYhSyZsuEYxPUDyirZ3_TpbU9Im-LEvCUIMe0P8idvOylRKMGIRiC_NeH9Q_yxIjhJw"
              />
              <div data-target="search-input.customScopesModalDialogFlash"></div>

              <input
                type="hidden"
                id="custom_scope_id"
                name="custom_scope_id"
                data-target="search-input.customScopesIdField"
              />

              <p>
                Use a saved search to filter your results. For example, to restrict your search to a
                few repositories:<br /><code
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
                    value="lI5SzHPg-V3kBSD4Tsdsp02U9wLAShwooEKdUVvyEL2yx5bG0qCjMAfmVgxt0MtSBK2nLevkJyYYqCi5n58VAg"
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
                  <OctIcon name="x" />
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
  </div>
</template>

<script lang="ts" src="./SearchInput.ts"></script>
<style scoped src="./SearchInput.css"></style>
