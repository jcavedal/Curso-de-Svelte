<script>
    let variable = 'HOLA MUNDO';
    let count = 0;

    function clickCount() {
        count += 1;
    }

</script>

<style>
    p {
        color: var(--theme-color);
    }
</style>

<div class="About">
    <p>{variable}</p>
    <button on:click={clickCount}>Click {count === 0 ? '' : count}</button>
</div>