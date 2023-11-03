<script>
    import {count} from "../store/store.js" 

    function clickCount() {
        count.update(n => n + 1);
    }

</script>

<style>
    button {
        background-color: ff6a00;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 0.5rem;
        text-transform: uppercase;
        cursor: pointer;
    }
</style>

<button con:click={clickCount}>
    Click {$count === 0 ? '' : $count}
</button>