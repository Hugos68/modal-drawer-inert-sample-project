import { writable } from "svelte/store";

function createModalStore() {

    const { subscribe, update, set } = writable(false);

    function toggle() {
        update(value => {
            value = !value;
            return value;
        })
    }
    return {
        subscribe,
        update,
        set,
        toggle
    }
}

export const modalStore = createModalStore();