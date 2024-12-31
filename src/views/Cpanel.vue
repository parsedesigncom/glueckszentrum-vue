<script>
import {useAuthStore} from "@/stores/auth";
import {useRouter} from "vue-router";

export default {
  name: "Cpanel",
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const logout = () => {
      authStore.logout();
      router.push('/login');
    };

    return { userData: authStore.userData, logout };
  },
};
</script>

<template>
  <div class="view-cpanel">
    <h1>Willkommen im Control Panel</h1>
    <p>Hallo, {{ userData.userDisplayName }}</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<style scoped lang="scss">

</style>