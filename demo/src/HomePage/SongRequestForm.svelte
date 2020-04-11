<script>
    import Button from '/components/ui/Button';
    import Input from '/components/ui/Input';

    let submitted = false;
    let artist = '';
    let song = '';

    function handleSubmit() {
        submitted = true;
    }
</script>

<div>
    {#if !submitted}
        <form on:submit|preventDefault={handleSubmit} novalidate>
            <div class="inputs">
                <Input label="Title" bind:value={song} />
                <Input label="Artist" bind:value={artist} />
            </div>
            <div class="buttons">
                <Button primary submit>
                    Submit
                </Button>
            </div>
        </form>
    {:else}
        <div class="info">
            Thanks for submitting!
        </div>
    {/if}
</div>



<style>
    form {
        margin: 2em auto;
        max-width: 300px;
    }

    .inputs {
        margin: 2em 0;
    }

    .inputs > :global(div) {
        margin: 0 0 12px 0;
    }

    .info {
        font-weight: bold;
        text-align: center;
        color: #ee811c;
        padding: 10px 0 0 0;
    }

    .buttons {
        display: flex;
        justify-content: center;
    }
</style>
