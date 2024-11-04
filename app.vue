<template>
  <div>
    <!-- NuxtRouteAnnouncer is used to improce screen readability -->
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <header>
        <nav>
          <ul>
            <li>
              <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/profile">Profile</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/events">Events</NuxtLink>
            </li>
          </ul>
        </nav>
      </header>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
