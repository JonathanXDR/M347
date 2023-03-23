<template>
  <aside
    class="col-md-4 col-lg-3 team-left-column color-border-muted border-bottom hide-md hide-sm border-right color-bg-default"
    :class="{ 'd-none': !navOpen }"
  >
    <div class="dashboard-sidebar top-0 px-3 px-md-4 px-lg-5 overflow-auto">
      <loading-context class="loading-context position-relative height-full">
        <div class="d-flex flex-column flex-justify-between">
          <div class="mb-4 Details js-repos-container mt-5 ml-2">
            <div class="width-full d-flex flex-wrap mt-2">
              <a class="mr-2 d-flex flex-items-center" href="/JonathanXDR">
                <img
                  src="https://github.com/jonathanxdr.png?v=3&s=128"
                  class="avatar avatar-6 circle mb-2"
                  width="40"
                  height="40"
                  alt="JonathanXDR"
                />
              </a>
              <h2>Jonathan Russ</h2>
            </div>
          </div>
          <div>
            <!-- <FilterList /> -->
            <ActionList />
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
