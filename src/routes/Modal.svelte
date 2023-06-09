<script lang="ts">
	import { portal } from "$lib/actions/portal";
	import { modalStore } from "$lib/modalStore";
	import { onMount } from "svelte";

    let domAvailable = false;
    onMount(() => {
        domAvailable = true;
    });

    $: if (domAvailable) {
        console.log(document.activeElement);
        if ($modalStore) document.body.children[0].setAttribute('inert', '');
        else document.body.children[0].removeAttribute('inert');
    }

    function focusFirstElement(node: HTMLElement) {
        const focusable: HTMLElement[] = Array.from(node.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
        if (focusable.length) focusable[0].focus();
    }
</script>


{#if $modalStore}
    <div id="modal" use:portal={{ target: document.body }} use:focusFirstElement>
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
