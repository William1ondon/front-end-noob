import { isRef, ref, unref, watch, watchEffect } from 'vue';

export function useFetch(url) {
    const data = ref(null);
    const error = ref(null);

    async function doFetch(){
        data.value = null;
        error.value = null;

        let tempUrl = unref(url);
        await fetch(unref(url))
            .then((res) => res.json())
            .then((json) => data.value = json)
            .catch((err) => error.value = err);
    }

    if(isRef(url)){
        watchEffect(doFetch);
    }else{
        doFetch();
    }

    return {data, error, retry: doFetch};
}