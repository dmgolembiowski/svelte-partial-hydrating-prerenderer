<script>
    import Input from '/components/ui/Input';
    import Radio from '/components/ui/Radio';
    import Button from '/components/ui/Button';

    export let num;
    export let onRemove;
    export let fullName;
    export let isAttending;
    export let wantHotel;
    export let wantShuttle;
    export let foodAllergies;
</script>

<div class="guest">
    <div class="guestNumber">
        Guest #{num}
        <button type="button" on:click={onRemove}>Remove</button>
    </div>

    <div class="form">
        <div class="groupLabel">Will you be attending?</div>
        <div class="radioGroup">
            <Radio label="Yes" bind:group={isAttending} value={true} />
            <Radio label="No" bind:group={isAttending} value={false} />
        </div>

        <div class="nameAndCheckbox">
            <Input label="Full Name" bind:value={fullName} />
        </div>

        {#if isAttending}
            <div class="groupLabel">Are you going to book a hotel room?</div>
            <div class="radioGroup">
                <Radio label="Yes" bind:group={wantHotel} value={true} />
                <Radio label="No" bind:group={wantHotel} value={false} />
            </div>

            {#if wantHotel}
                <div class="groupLabel">Are you interested in a hotel shuttle bus?</div>
                <div class="radioGroup">
                    <Radio label="Yes" bind:group={wantShuttle} value={true} />
                    <Radio label="No" bind:group={wantShuttle} value={false} />
                </div>
            {/if}
            <Input label="Any Food Allergies?" bind:value={foodAllergies} />
        {/if}
    </div>
</div>


<style>
    .guest {
        border: 1px solid #e8e8e8;
        border-radius: 10px;
        margin: 0 10px;
    }

    .groupLabel {
        margin: 0 0 10px;
        font-weight: bold;
        color: #ee811c;
    }

    .form {
        padding: 12px 20px;
    }

    .guestNumber {
        font-size: 20px;
        padding: 10px 14px;
        margin: 0;
        border-bottom: 1px solid #e8e8e8;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .guestNumber>button {
        font-size: 14px;
        background-color: transparent;
        color: #aaaaaa;
        cursor: pointer;
        font-weight: bold;
        text-align: center;
        vertical-align: middle;
        flex-shrink: 0;
    }

    .guestNumber>button:hover {
        color: #b92525;
    }

    .radioGroup {
        display: flex;
        margin: 0 0 12px;
    }

    .radioGroup> :global(:first-child) {
        padding: 0 20px 0 0;
    }

    .nameAndCheckbox {
        display: flex;
        align-items: center;
        margin: 0 0 12px;
    }

    .nameAndCheckbox>div {
        min-width: 72px;
        display: flex;
        justify-content: flex-end;
        padding: 28px 0 0 0;
    }
</style>
