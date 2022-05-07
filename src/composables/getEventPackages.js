import {ref} from 'vue';

const getEventPackages = () => {
   const eventPackages = ref([]);
   const error = ref(null);
   const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/eventPackages");
        if (!data.ok) {
          throw Error("No data Available");
        }
        eventPackages.value = await data.json();
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };
   return {eventPackages,error,load}
}

export default getEventPackages