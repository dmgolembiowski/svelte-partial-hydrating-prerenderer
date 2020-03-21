<script>
    export let value = false;
    export let group;
    export let label;
</script>


<label>
    <input type="radio" bind:group={group} {value} />
    {label}
</label>


<style>
    label {
        display: block;
    }

    input {
        margin: 0 5px 0 0;
    }
</style>
