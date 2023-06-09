<script lang="ts">
	import { modalStore } from "$lib/modalStore";
	import { onMount } from "svelte";

    let domAvailable = false;
    onMount(() => {
        domAvailable = true;
    });

    $: if (domAvailable) {
        if ($modalStore) document.body.children[0].setAttribute('inert', '');
        else document.body.children[0].removeAttribute('inert');
    }

    function portal(element: HTMLElement) {
        element.remove();
        document.body.appendChild(element);
    }
</script>


{#if $modalStore}
    <div id="modal" use:portal>
        <p>This is a modal</p>
        <button on:click={modalStore.toggle}>Close</button>
    </div>
{/if}

<style>
    #modal {
        background: red;
        padding: 1rem;
        width: 50vw;
        height: 50vh;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 10vh;
    }
</style>
