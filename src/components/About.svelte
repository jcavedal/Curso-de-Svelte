<script>
    //let variable = 'HOLA MUNDO';
    let count = 0;
    let styles = { darkMode: true }

    function clickCount() {
        count += 1;
    }

    function toggle() {
        styles.darkMode =!styles.darkMode;
        //La linea anterior niega el estado anterior de la variable, si era true ahora es false y viceversa
        window.document.body.classList.toggle("dark-mode");
    }

</script>

<style>
    p {
        color: var(--theme-color);
    }
</style>

<div class="About">

    {#if !styles.darkMode}
    <p>
        <span>DarkMode: On</span>
    </p>
    {:else}
        <p>
            <span>DarkMode: Off</span>
        </p>
    {/if}

    <button on:click={clickCount}>ClickCount {count === 0 ? '' : count}</button>
    <button on:click={toggle}>DarkMode</button>
</div>