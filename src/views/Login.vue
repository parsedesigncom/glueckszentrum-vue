<script>
import {onMounted, ref} from 'vue';
import {useAuthStore} from "@/stores/auth";
import {useRouter} from "vue-router";
export default {
  name: "LoginPage",
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const username = ref('');
    const password = ref('');
    const error = ref(null);

    const handleLogin = async () => {
      const success = await authStore.login(username.value, password.value);
      if (success) {
        router.push('/cpanel/');
      } else {
        error.value = 'Login fehlgeschlagen';
      }
    };

    onMounted(() => {
      if (authStore.token) {
        router.push('/cpanel/');
      }
    });

    return { username, password, handleLogin, error };
  },

};
</script>

<template>
  <div class="view-login">
    <form @submit.prevent="handleLogin">
      <h1>Anmelden</h1>
      <input v-model="username" type="email" id="username" class="form-control" placeholder="name@example.com" />
      <input v-model="password" type="password" id="password" class="form-control" placeholder="Kennwort" />
      <button type="submit" class="btn btn-primary mb-3">Anmelden</button>
    </form>
    <div v-if="error">
      <p class="alert alert-danger" role="alert">
        {{ error }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>