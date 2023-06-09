<script lang="ts">
	import { modalStore } from "$lib/modalStore";
</script>

<h1>Content</h1>
<p>This page contains some sample content</p>

<button on:click={modalStore.toggle}>Toggle Modal</button>

