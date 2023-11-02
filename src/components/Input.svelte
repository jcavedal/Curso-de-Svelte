<script>
    export let name = "User";
</script>

<div class="Input">
    <input type="text" bind:value={name}>
    <p>Hello {name}!</p>
</div>