import { ref } from 'vue';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

export function useCoaches() {
  const coaches = ref([]);
  const coachDetails = ref(null);
  const isLoading = ref(false);
  const error = ref(null);

  const fetchCoaches = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await axios.get('/coaches/');
      coaches.value = response.data;
    } catch (err) {
      error.value = 'Fehler beim Laden der Daten. Bitte versuchen Sie es später erneut.';
      console.error(err);
    } finally {
      isLoading.value = false;
    }
  };

  const fetchCoachDetails = async (id) => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await axios.get(`/coach/${id}`);
      coachDetails.value = response.data;
    } catch (err) {
      error.value = 'Fehler beim Laden der Coach-Details. Bitte versuchen Sie es später erneut.';
      console.error(err);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    coaches,
    coachDetails,
    isLoading,
    error,
    fetchCoaches,
    fetchCoachDetails,
  };
}
