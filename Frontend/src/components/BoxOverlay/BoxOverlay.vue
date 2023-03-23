<template>
  <details
    class="details-reset details-overlay details-overlay-dark lh-default color-fg-default hx_rsm"
    open
  >
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog
      class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal feature-preview-dialog"
      role="dialog"
      aria-modal="true"
      tabindex="-1"
    >
      <div data-replace-remote-form-target="" class="height-fit">
        <div class="Box-header color-bg-default">
          <h3 class="Box-title color-fg-default f4">Feature preview</h3>
        </div>

        <div class="d-flex feature-preview-info">
          <div class="col-4 border-right height-fit overflow-auto">
            <ul>
              <li class="d-flex flex-row">
                <form
                  data-replace-remote-form="true"
                  class="width-full"
                  data-turbo="false"
                  action="/users/JonathanXDR/feature_previews"
                  accept-charset="UTF-8"
                  method="get"
                >
                  <input type="hidden" name="selected_slug" value="code_search_code_view" />

                  <button
                    class="d-inline-flex width-full p-3 Box-row--hover-blue border-bottom text-left border-0 color-bg-default"
                    type="submit"
                  >
                    <div class="mr-2">
                      <span class="color-fg-success">
                        <OctIcon name="eye" />
                      </span>
                    </div>
                    <div class="col-10">
                      <h4
                        class="css-truncate css-truncate-target f5 color-fg-default text-normal color-fg-default"
                        style="max-width: 100%"
                      >
                        New Code Search and Code View
                      </h4>
                    </div>
                  </button>
                </form>
              </li>
              <li class="d-flex flex-row">
                <form
                  data-replace-remote-form="true"
                  class="width-full"
                  data-turbo="false"
                  action="/users/JonathanXDR/feature_previews"
                  accept-charset="UTF-8"
                  method="get"
                >
                  <input
                    type="hidden"
                    name="selected_slug"
                    value="color_modes_color_blind_themes_2"
                  />

                  <button
                    class="d-inline-flex width-full p-3 Box-row--hover-blue border-bottom text-left border-0 color-bg-default"
                    type="submit"
                  >
                    <div class="mr-2">
                      <span class="color-fg-success">
                        <OctIcon name="eye" />
                      </span>
                    </div>
                    <div class="col-10">
                      <h4
                        class="css-truncate css-truncate-target f5 color-fg-default text-normal color-fg-default"
                        style="max-width: 100%"
                      >
                        Colorblind themes
                      </h4>
                    </div>
                  </button>
                </form>
              </li>
              <li class="d-flex flex-row">
                <form
                  data-replace-remote-form="true"
                  class="width-full"
                  data-turbo="false"
                  action="/users/JonathanXDR/feature_previews"
                  accept-charset="UTF-8"
                  method="get"
                >
                  <input type="hidden" name="selected_slug" value="command_palette" />

                  <button
                    class="d-inline-flex width-full p-3 Box-row--hover-blue border-bottom text-left border-0 color-bg-default"
                    type="submit"
                  >
                    <div class="mr-2">
                      <span class="color-fg-success">
                        <OctIcon name="eye" />
                      </span>
                    </div>
                    <div class="col-10">
                      <h4
                        class="css-truncate css-truncate-target f5 color-fg-default text-normal color-fg-default"
                        style="max-width: 100%"
                      >
                        Command Palette
                      </h4>
                    </div>
                  </button>
                </form>
              </li>
              <li class="d-flex flex-row">
                <form
                  data-replace-remote-form="true"
                  class="width-full"
                  data-turbo="false"
                  action="/users/JonathanXDR/feature_previews"
                  accept-charset="UTF-8"
                  method="get"
                >
                  <input type="hidden" name="selected_slug" value="ipynb-diff" />

                  <button
                    class="d-inline-flex width-full p-3 Box-row--hover-blue border-bottom text-left border-0 color-bg-default"
                    type="submit"
                  >
                    <div class="mr-2">
                      <span class="color-fg-muted">
                        <OctIcon name="eye-closed" />
                      </span>
                    </div>
                    <div class="col-10">
                      <h4
                        class="css-truncate css-truncate-target f5 color-fg-default text-normal color-fg-default"
                        style="max-width: 100%"
                      >
                        Rich Jupyter Notebook Diffs
                      </h4>
                    </div>
                  </button>
                </form>
              </li>
              <li class="d-flex flex-row">
                <form
                  data-replace-remote-form="true"
                  class="width-full"
                  data-turbo="false"
                  action="/users/JonathanXDR/feature_previews"
                  accept-charset="UTF-8"
                  method="get"
                >
                  <input type="hidden" name="selected_slug" value="memex_project_migration" />

                  <button
                    class="d-inline-flex width-full p-3 Box-row--hover-blue border-bottom text-left border-0 color-bg-default"
                    type="submit"
                  >
                    <div class="mr-2">
                      <span class="color-fg-success">
                        <OctIcon name="eye" />
                      </span>
                    </div>
                    <div class="col-10">
                      <h4
                        class="css-truncate css-truncate-target f5 color-fg-default text-normal color-fg-default"
                        style="max-width: 100%"
                      >
                        Project Migration
                      </h4>
                    </div>
                  </button>
                </form>
              </li>
              <li class="d-flex flex-row">
                <form
                  data-replace-remote-form="true"
                  class="width-full"
                  data-turbo="false"
                  action="/users/JonathanXDR/feature_previews"
                  accept-charset="UTF-8"
                  method="get"
                >
                  <input type="hidden" name="selected_slug" value="slash_commands_beta" />

                  <button
                    class="d-inline-flex width-full p-3 Box-row--hover-blue border-bottom text-left border-0 color-bg-accent-emphasis"
                    type="submit"
                  >
                    <div class="mr-2">
                      <span class="color-text-white">
                        <OctIcon name="eye" />
                      </span>
                    </div>
                    <div class="col-10">
                      <h4
                        class="css-truncate css-truncate-target f5 color-fg-default text-bold color-text-white"
                        style="max-width: 100%"
                      >
                        Slash Commands
                      </h4>
                    </div>
                  </button>
                </form>
              </li>
            </ul>
          </div>
          <div class="col-8 p-3 overflow-auto">
            <div>
              <div class="d-flex mb-3">
                <h3 class="color-fg-default flex-auto">Slash Commands</h3>
                <div>
                  <form
                    class="js-feature-preview-unenroll"
                    data-replace-remote-form="true"
                    data-turbo="false"
                    action="/users/JonathanXDR/feature_preview/slash_commands_beta/unenroll"
                    accept-charset="UTF-8"
                    method="post"
                  >
                    <input type="hidden" name="_method" value="patch" autocomplete="off" /><input
                      type="hidden"
                      name="authenticity_token"
                      value="hN4kBEUt-Ll4vi-l8PMeHcHfMZW52yZrLmSJVtwddmngTYXxzeeFTTDyn4BZ5WRp9OZxYHRnE8X8AK-d6Wwurw"
                    />
                    <input
                      type="hidden"
                      class="js-feature-preview-slug"
                      name="selected_slug"
                      value="slash_commands_beta"
                    />
                    <button type="submit" data-view-component="true" class="btn">Disable</button>
                  </form>
                </div>
              </div>

              <div data-view-component="true" class="markdown-body mt-3">
                <p>
                  Slash commands make it easier to type more complex Markdown, such as tables,
                  tasklists, and code blocks.
                </p>
                <p>
                  Simply type <code class="notranslate">/</code> on Issues, PRs and Discussions to
                  check out a list of available commands!
                </p>
              </div>
              <div class="mt-3">
                <a
                  href="https://docs.github.com/en/issues/tracking-your-work-with-issues/about-slash-commands"
                  data-hydro-click='{"event_type":"feature_preview.clicks.documentation","payload":{"feature_slug":"slash_commands_beta","originating_url":"https://github.com/users/JonathanXDR/feature_previews","user_id":73559516}}'
                  data-hydro-click-hmac="44e8d0a259adfc82bd75162e4fb5c57bece9e97d34b982e348382a3c6e046f20"
                  >Documentation</a
                >
                <span class="color-fg-muted">•</span>
                <a
                  href="https://github.com/feedback/slash-commands"
                  class="text-bold"
                  data-hydro-click='{"event_type":"feature_preview.clicks.feedback","payload":{"feature_slug":"slash_commands_beta","display_location":"permanent","originating_url":"https://github.com/users/JonathanXDR/feature_previews","user_id":73559516}}'
                  data-hydro-click-hmac="d4b5cf3b659330c2595c19ec65d055cfcbca4b637d0638bdf2e9638165d44d5b"
                  >Give feedback</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0"
        type="button"
        aria-label="Close dialog"
        data-close-dialog=""
      >
        <OctIcon name="x" />
      </button>
    </details-dialog>
  </details>
</template>

<script lang="ts" src="./BoxOverlay.ts"></script>
<style scoped src="./BoxOverlay.css"></style>
