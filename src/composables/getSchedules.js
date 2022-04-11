import {ref} from 'vue';

const getSchedules = () => {
   const schedules = ref([]);
   const scheduleError = ref(null);
   const loadSchedule = async () => {
      try {
        let data = await fetch("http://localhost:3000/schedules");
        if (!data.ok) {
          throw Error("No data Available");
        }
        schedules.value = await data.json();
      } catch (err) {
        scheduleError.value = err.message;
        console.log(scheduleError.value);
      }
    };
   return {schedules,scheduleError,loadSchedule}
}

export default getSchedules