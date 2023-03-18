<template>
  <aside
    data-turbo="false"
    class="team-left-column col-md-4 col-lg-3 color-border-muted border-bottom hide-md hide-sm border-right color-bg-default"
    aria-label="Account"
  >
    <div class="dashboard-sidebar top-0 px-3 px-md-4 px-lg-5 overflow-auto">
      <loading-context
        data-view-component="true"
        class="loading-context position-relative height-full"
        data-catalyst=""
      >
        <div data-target="loading-context.details">
          <div
            class="mb-4 Details js-repos-container mt-5"
            data-repository-hovercards-enabled=""
            role="navigation"
            aria-label="Repositories"
          >
            <div class="js-repos-container">
              <h2 class="f4 hide-sm hide-md mb-1 f5 d-flex flex-justify-between flex-items-center">
                Top Repositories
                <a
                  data-hydro-click='{"event_type":"dashboard.click","payload":{"event_context":"REPOSITORIES","target":"NEW_REPOSITORY_BUTTON","dashboard_context":"user","dashboard_version":2,"user_id":73559516,"metadata":null,"originating_url":"https://github.com/dashboard/my_top_repositories?location=left"}}'
                  data-hydro-click-hmac="83d0faa60d06bbf539067a8b1fa70742e4ba77c677bedad665ea6e56e717c91f"
                  href="/new"
                  data-view-component="true"
                  class="btn btn-sm btn-primary"
                >
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
                  New
                </a>
              </h2>

              <div class="mt-2 mb-3" role="search" aria-label="Top Repositories">
                <input
                  type="text"
                  class="form-control input-contrast input-block mb-3 js-filterable-field js-your-repositories-search"
                  id="dashboard-repos-filter-left"
                  placeholder="Find a repository…"
                  aria-label="Find a repository…"
                  data-url="/"
                  data-query-name="q"
                  value=""
                  autocomplete="off"
                />
              </div>

              <ul
                class="list-style-none"
                data-filterable-for="dashboard-repos-filter-left"
                data-filterable-type="substring"
              >
                <li class="public source">
                  <div class="width-full d-flex mt-2">
                    <a
                      data-hydro-click='{"event_type":"dashboard.click","payload":{"event_context":"REPOSITORIES","target":"REPOSITORY","record_id":532311684,"dashboard_context":"user","dashboard_version":2,"user_id":73559516,"metadata":null,"originating_url":"https://github.com/dashboard/my_top_repositories?location=left"}}'
                      data-hydro-click-hmac="cbae7aa3f5c0218110a6ab73d971bf51edf3d8084e9736f9b4b5c03c7ad6b7a6"
                      data-hovercard-type="repository"
                      data-hovercard-url="/JonathanXDR/Application-Website-Frontend/hovercard"
                      class="mr-2 d-flex flex-items-center"
                      href="/JonathanXDR/Application-Website-Frontend"
                    >
                      <img
                        src="https://avatars.githubusercontent.com/u/73559516?s=16&amp;v=4"
                        class="avatar avatar-user avatar-small circle"
                        width="16"
                        height="16"
                        alt="Application-Website-Frontend"
                        aria-label="Repository"
                      />
                    </a>
                    <div class="wb-break-word">
                      <a
                        data-hydro-click='{"event_type":"dashboard.click","payload":{"event_context":"REPOSITORIES","target":"REPOSITORY","record_id":532311684,"dashboard_context":"user","dashboard_version":2,"user_id":73559516,"metadata":null,"originating_url":"https://github.com/dashboard/my_top_repositories?location=left"}}'
                        data-hydro-click-hmac="cbae7aa3f5c0218110a6ab73d971bf51edf3d8084e9736f9b4b5c03c7ad6b7a6"
                        data-hovercard-type="repository"
                        data-hovercard-url="/JonathanXDR/Application-Website-Frontend/hovercard"
                        class="color-fg-default lh-0 mb-2 markdown-title"
                        href="/JonathanXDR/Application-Website-Frontend"
                      >
                        JonathanXDR<span class="color-fg-muted">/</span>Application-Website-Frontend
                      </a>
                    </div>
                  </div>
                </li>
                <li class="public source">
                  <div class="width-full d-flex mt-2">
                    <a
                      data-hydro-click='{"event_type":"dashboard.click","payload":{"event_context":"REPOSITORIES","target":"REPOSITORY","record_id":406336548,"dashboard_context":"user","dashboard_version":2,"user_id":73559516,"metadata":null,"originating_url":"https://github.com/dashboard/my_top_repositories?location=left"}}'
                      data-hydro-click-hmac="55536bb605a1c07463a4cb1d27e889099b40d2821639a6a457ec34e11abaea26"
                      data-hovercard-type="repository"
                      data-hovercard-url="/JonathanXDR/Application-Website/hovercard"
                      class="mr-2 d-flex flex-items-center"
                      href="/JonathanXDR/Application-Website"
                    >
                      <img
                        src="https://avatars.githubusercontent.com/u/73559516?s=16&amp;v=4"
                        class="avatar avatar-user avatar-small circle"
                        width="16"
                        height="16"
                        alt="Application-Website"
                        aria-label="Repository"
                      />
                    </a>
                    <div class="wb-break-word">
                      <a
                        data-hydro-click='{"event_type":"dashboard.click","payload":{"event_context":"REPOSITORIES","target":"REPOSITORY","record_id":406336548,"dashboard_context":"user","dashboard_version":2,"user_id":73559516,"metadata":null,"originating_url":"https://github.com/dashboard/my_top_repositories?location=left"}}'
                        data-hydro-click-hmac="55536bb605a1c07463a4cb1d27e889099b40d2821639a6a457ec34e11abaea26"
                        data-hovercard-type="repository"
                        data-hovercard-url="/JonathanXDR/Application-Website/hovercard"
                        class="color-fg-default lh-0 mb-2 markdown-title"
                        href="/JonathanXDR/Application-Website"
                      >
                        JonathanXDR<span class="color-fg-muted">/</span>Application-Website
                      </a>
                    </div>
                  </div>
                </li>
                <li class="public source no-description">
                  <div class="width-full d-flex mt-2">
                    <a
                      data-hydro-click='{"event_type":"dashboard.click","payload":{"event_context":"REPOSITORIES","target":"REPOSITORY","record_id":566202774,"dashboard_context":"user","dashboard_version":2,"user_id":73559516,"metadata":null,"originating_url":"https://github.com/dashboard/my_top_repositories?location=left"}}'
                      data-hydro-click-hmac="b9d8512c6d4b6f08bc5a96be2980eae2a6c875125e04d43d534c0b46db3992ea"
                      data-hovercard-type="repository"
                      data-hovercard-url="/JonathanXDR/UEK-210-Portfolio/hovercard"
                      class="mr-2 d-flex flex-items-center"
                      href="/JonathanXDR/UEK-210-Portfolio"
                    >
                      <img
                        src="https://avatars.githubusercontent.com/u/73559516?s=16&amp;v=4"
                        class="avatar avatar-user avatar-small circle"
                        width="16"
                        height="16"
                        alt="UEK-210-Portfolio"
                        aria-label="Repository"
                      />
                    </a>
                    <div class="wb-break-word">
                      <a
                        data-hydro-click='{"event_type":"dashboard.click","payload":{"event_context":"REPOSITORIES","target":"REPOSITORY","record_id":566202774,"dashboard_context":"user","dashboard_version":2,"user_id":73559516,"metadata":null,"originating_url":"https://github.com/dashboard/my_top_repositories?location=left"}}'
                        data-hydro-click-hmac="b9d8512c6d4b6f08bc5a96be2980eae2a6c875125e04d43d534c0b46db3992ea"
                        data-hovercard-type="repository"
                        data-hovercard-url="/JonathanXDR/UEK-210-Portfolio/hovercard"
                        class="color-fg-default lh-0 mb-2 markdown-title"
                        href="/JonathanXDR/UEK-210-Portfolio"
                      >
                        JonathanXDR<span class="color-fg-muted">/</span>UEK-210-Portfolio
                      </a>
                    </div>
                  </div>
                </li>
                <li class="private source no-description">
                  <div class="width-full d-flex mt-2">
                    <a
                      data-hydro-click='{"event_type":"dashboard.click","payload":{"event_context":"REPOSITORIES","target":"REPOSITORY","record_id":486747136,"dashboard_context":"user","dashboard_version":2,"user_id":73559516,"metadata":null,"originating_url":"https://github.com/dashboard/my_top_repositories?location=left"}}'
                      data-hydro-click-hmac="84fb91908bdc50c612b9acd42fa07f375421d8049a6a73a6e410d9ead23fd709"
                      data-hovercard-type="repository"
                      data-hovercard-url="/JonathanXDR/Unity-Galaxy-Game/hovercard"
                      class="mr-2 d-flex flex-items-center"
                      href="/JonathanXDR/Unity-Galaxy-Game"
                    >
                      <img
                        src="https://avatars.githubusercontent.com/u/73559516?s=16&amp;v=4"
                        class="avatar avatar-user avatar-small circle"
                        width="16"
                        height="16"
                        alt="Unity-Galaxy-Game"
                        aria-label="Repository"
                      />
                    </a>
                    <div class="wb-break-word">
                      <a
                        data-hydro-click='{"event_type":"dashboard.click","payload":{"event_context":"REPOSITORIES","target":"REPOSITORY","record_id":486747136,"dashboard_context":"user","dashboard_version":2,"user_id":73559516,"metadata":null,"originating_url":"https://github.com/dashboard/my_top_repositories?location=left"}}'
                        data-hydro-click-hmac="84fb91908bdc50c612b9acd42fa07f375421d8049a6a73a6e410d9ead23fd709"
                        data-hovercard-type="repository"
                        data-hovercard-url="/JonathanXDR/Unity-Galaxy-Game/hovercard"
                        class="color-fg-default lh-0 mb-2 markdown-title"
                        href="/JonathanXDR/Unity-Galaxy-Game"
                      >
                        JonathanXDR<span class="color-fg-muted">/</span>Unity-Galaxy-Game
                      </a>
                    </div>
                  </div>
                </li>
                <li class="public source no-description">
                  <div class="width-full d-flex mt-2">
                    <a
                      data-hydro-click='{"event_type":"dashboard.click","payload":{"event_context":"REPOSITORIES","target":"REPOSITORY","record_id":536500303,"dashboard_context":"user","dashboard_version":2,"user_id":73559516,"metadata":null,"originating_url":"https://github.com/dashboard/my_top_repositories?location=left"}}'
                      data-hydro-click-hmac="4730eea2cfdff146a8ee60cc5c1615148ca38e663dbe1565d5c8bc98a98ab396"
                      data-hovercard-type="repository"
                      data-hovercard-url="/JonathanXDR/Memory/hovercard"
                      class="mr-2 d-flex flex-items-center"
                      href="/JonathanXDR/Memory"
                    >
                      <img
                        src="https://avatars.githubusercontent.com/u/73559516?s=16&amp;v=4"
                        class="avatar avatar-user avatar-small circle"
                        width="16"
                        height="16"
                        alt="Memory"
                        aria-label="Repository"
                      />
                    </a>
                    <div class="wb-break-word">
                      <a
                        data-hydro-click='{"event_type":"dashboard.click","payload":{"event_context":"REPOSITORIES","target":"REPOSITORY","record_id":536500303,"dashboard_context":"user","dashboard_version":2,"user_id":73559516,"metadata":null,"originating_url":"https://github.com/dashboard/my_top_repositories?location=left"}}'
                        data-hydro-click-hmac="4730eea2cfdff146a8ee60cc5c1615148ca38e663dbe1565d5c8bc98a98ab396"
                        data-hovercard-type="repository"
                        data-hovercard-url="/JonathanXDR/Memory/hovercard"
                        class="color-fg-default lh-0 mb-2 markdown-title"
                        href="/JonathanXDR/Memory"
                      >
                        JonathanXDR<span class="color-fg-muted">/</span>Memory
                      </a>
                    </div>
                  </div>
                </li>
                <li class="public source no-description">
                  <div class="width-full d-flex mt-2">
                    <a
                      data-hydro-click='{"event_type":"dashboard.click","payload":{"event_context":"REPOSITORIES","target":"REPOSITORY","record_id":534128189,"dashboard_context":"user","dashboard_version":2,"user_id":73559516,"metadata":null,"originating_url":"https://github.com/dashboard/my_top_repositories?location=left"}}'
                      data-hydro-click-hmac="0ae7b8a36d5ae3feea6e48b12facc70518437e1079f5b00ba0750b0d581c6576"
                      data-hovercard-type="repository"
                      data-hovercard-url="/JonathanXDR/M426-Portfolio/hovercard"
                      class="mr-2 d-flex flex-items-center"
                      href="/JonathanXDR/M426-Portfolio"
                    >
                      <img
                        src="https://avatars.githubusercontent.com/u/73559516?s=16&amp;v=4"
                        class="avatar avatar-user avatar-small circle"
                        width="16"
                        height="16"
                        alt="M426-Portfolio"
                        aria-label="Repository"
                      />
                    </a>
                    <div class="wb-break-word">
                      <a
                        data-hydro-click='{"event_type":"dashboard.click","payload":{"event_context":"REPOSITORIES","target":"REPOSITORY","record_id":534128189,"dashboard_context":"user","dashboard_version":2,"user_id":73559516,"metadata":null,"originating_url":"https://github.com/dashboard/my_top_repositories?location=left"}}'
                        data-hydro-click-hmac="0ae7b8a36d5ae3feea6e48b12facc70518437e1079f5b00ba0750b0d581c6576"
                        data-hovercard-type="repository"
                        data-hovercard-url="/JonathanXDR/M426-Portfolio/hovercard"
                        class="color-fg-default lh-0 mb-2 markdown-title"
                        href="/JonathanXDR/M426-Portfolio"
                      >
                        JonathanXDR<span class="color-fg-muted">/</span>M426-Portfolio
                      </a>
                    </div>
                  </div>
                </li>
                <li class="public source no-description">
                  <div class="width-full d-flex mt-2">
                    <a
                      data-hydro-click='{"event_type":"dashboard.click","payload":{"event_context":"REPOSITORIES","target":"REPOSITORY","record_id":567155926,"dashboard_context":"user","dashboard_version":2,"user_id":73559516,"metadata":null,"originating_url":"https://github.com/dashboard/my_top_repositories?location=left"}}'
                      data-hydro-click-hmac="68bc9cee735baca5742f2d295d3bd85dcbe039408a4876628a4e7eb3ac7d1f63"
                      data-hovercard-type="repository"
                      data-hovercard-url="/JonathanXDR/M320-Portfolio/hovercard"
                      class="mr-2 d-flex flex-items-center"
                      href="/JonathanXDR/M320-Portfolio"
                    >
                      <img
                        src="https://avatars.githubusercontent.com/u/73559516?s=16&amp;v=4"
                        class="avatar avatar-user avatar-small circle"
                        width="16"
                        height="16"
                        alt="M320-Portfolio"
                        aria-label="Repository"
                      />
                    </a>
                    <div class="wb-break-word">
                      <a
                        data-hydro-click='{"event_type":"dashboard.click","payload":{"event_context":"REPOSITORIES","target":"REPOSITORY","record_id":567155926,"dashboard_context":"user","dashboard_version":2,"user_id":73559516,"metadata":null,"originating_url":"https://github.com/dashboard/my_top_repositories?location=left"}}'
                        data-hydro-click-hmac="68bc9cee735baca5742f2d295d3bd85dcbe039408a4876628a4e7eb3ac7d1f63"
                        data-hovercard-type="repository"
                        data-hovercard-url="/JonathanXDR/M320-Portfolio/hovercard"
                        class="color-fg-default lh-0 mb-2 markdown-title"
                        href="/JonathanXDR/M320-Portfolio"
                      >
                        JonathanXDR<span class="color-fg-muted">/</span>M320-Portfolio
                      </a>
                    </div>
                  </div>
                </li>
              </ul>

              <!-- '"` --><!-- </textarea></xmp> -->
              <form
                class="ajax-pagination-form js-ajax-pagination js-more-repos-form"
                data-turbo="false"
                action="/dashboard/ajax_my_repositories?location=left"
                accept-charset="UTF-8"
                method="get"
              >
                <input name="repos_cursor" type="hidden" value="2" />
                <button
                  name="button"
                  type="submit"
                  class="width-full text-left btn-link f6 Link--muted text-left mt-3 border-md-0 border-top py-md-0 py-3 px-md-0 px-2"
                  data-disable-with="Loading more&amp;hellip;"
                  data-hydro-click='{"event_type":"dashboard.click","payload":{"event_context":"REPOSITORIES","target":"SEE_MORE","dashboard_context":"user","dashboard_version":2,"user_id":73559516,"metadata":null,"originating_url":"https://github.com/dashboard/my_top_repositories?location=left"}}'
                  data-hydro-click-hmac="9ed074c5bc73c7050dc456c813e393f51f6b78fca3ee0c8a288c8cd3ed3ef2cc"
                >
                  Show more
                </button>
              </form>
            </div>
          </div>

          <div>
            <h2 class="f5 mt-md-3 mt-0">Recent activity</h2>
            <div class="mt-2 mb-4">
              <div class="border border-dashed rounded-2 p-3 mt-2">
                <p class="note mt-0">
                  When you take actions across GitHub, we’ll provide links to that activity here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </loading-context>
    </div>
  </aside>
</template>

<script lang="ts" src="./SideBar.ts"></script>
<style scoped src="./SideBar.css"></style>
