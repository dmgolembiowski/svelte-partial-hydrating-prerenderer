<script>
    import { cx } from '/utils/common';
    export let multiline = false;
    export let placeholder = '';
    export let label;
    export let secret = false;
    export let email = false;
    export let hideLabel = false;
    export let value = '';
    export let valid = true;

    $: classes = cx('wrapper', !valid && 'invalid');
</script>

<div class={classes}>
    {#if !hideLabel}
        <label>
            <div class="label">{label}</div>
            {#if multiline}
                <textarea bind:value={value} class="input" title={label} {placeholder} />
            {:else if secret}
                <input bind:value={value} type="password" class="input" title={label} {placeholder} />
            {:else if email}
                <input bind:value={value} type="email" class="input" title={label} {placeholder} />
            {:else}
                <input bind:value={value} class="input" title={label} {placeholder} />
            {/if}
        </label>
    {:else}
        {#if multiline}
            <textarea bind:value={value} class="input" title={label} {placeholder} aria-label={label} />
        {:else if secret}
            <input bind:value={value} type="password" class="input" title={label} {placeholder} aria-label={label} />
        {:else if email}
            <input bind:value={value} type="email" class="input" title={label} {placeholder} aria-label={label} />
        {:else}
            <input bind:value={value} class="input" title={label} {placeholder} aria-label={label} />
        {/if}
    {/if}
</div>


<style>
    .wrapper {
        width: 100%;
    }

    .input {
        display: block;
        background-color: rgb(255, 255, 255);
        border: 2px solid #ccc;
        border-radius: 4px;
        color: #606f7b;
        font-size: 16px;
        line-height: 20px;
        padding: 8px 12px;
        width: 100%;
        min-width: 100%;
        max-width: 100%;
        -webkit-appearance: none;
        appearance: none;
    }

    .input:focus {
        outline: 0;
        background-color: #fff;
    }

    .invalid .input, .invalid .input:focus {
        border-color: rgb(255, 140, 140);
    }

    .label  {
        margin: 0 0 10px;
        font-weight: bold;
        color: #ee811c;
    }
</style>
