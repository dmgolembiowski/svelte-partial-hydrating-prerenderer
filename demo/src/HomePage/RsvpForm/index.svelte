<script>
    import Button from '/components/ui/Button';
    import Guest from './Guest';

    let submitted = false;

    const newGuest = () => ({
        fullName: '',
        isAttending: true,
        wantHotel: false,
        wantShuttle: false,
        foodAllergies: '',
    });
    let guests = [newGuest(), newGuest()];

    function handleSubmit() {
        submitted = true;
    }

    function handleAddGuest() {
        guests = [...guests, newGuest()];
    }

    function handleRemoveGuest(index) {
        guests.splice(index, 1);
        guests = guests;
    }
</script>

<div>
    {#if !submitted}
        <form on:submit|preventDefault={handleSubmit} novalidate>
            {#each guests as g, i}
                <Guest
                    num={i+1}
                    onRemove="{() => handleRemoveGuest(i)}"
                    bind:fullName={g.fullName}
                    bind:isAttending={g.isAttending}
                    bind:wantHotel={g.wantHotel}
                    bind:wantShuttle={g.wantShuttle}
                    bind:foodAllergies={g.foodAllergies} />
                <div class="spacer" />
            {/each}

            <div class="buttons">
                <Button primary submit>
                    Submit
                </Button>

                {#if guests.length < 5}
                    <Button on:click={handleAddGuest}>
                        Add Guest
                    </Button>
                {/if}
            </div>
        </form>
    {:else}
        <div class="info">
            Thanks for responding!
        </div>
    {/if}
</div>



<style>
    form {
        margin: 2em auto;
        max-width: 500px;
    }

    .spacer {
        min-height: 20px;
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
