<script>
    import { cx } from '/utils/common';

    export let submit = false;
    export let plain = false;
    export let primary = false;
    export let danger = false;
    export let disabled = false;
    export let cancel = false;

    $: type = submit ? 'submit' : 'button';

    $: classes = cx(
        'plain',
        (!plain && !cancel) && 'filled',
        primary && 'primary',
        danger && 'danger',
        disabled && 'disabled',
        cancel && 'cancel'
    );
</script>


<button {type} class={classes} on:click>
    <slot />
</button>



<style>
    .plain {
        background-color: transparent;
        color: #67a8c1;
        cursor: pointer;
        font-size: 18px;
        font-weight: bold;
        margin: 0 10px;
        padding: 10px;
        display: inline-block;
        text-align: center;
        vertical-align: middle;
        flex-shrink: 0;
    }

    .plain:hover {
        color: #4f8499;
    }

    .filled {
        background: #67a8c1;
        border-radius: 100px;
        padding: 10px 18px;
        color: #fff;
        min-width: 100px;
    }

    .filled:hover {
        color: #fff;
        background: #4f8499;
    }

    .filled.danger {
        background: #dd4747;
    }

    .filled.danger:hover {
        background: #b92525;
    }

    .primary {
        background: #61c689;
    }

    .primary:hover {
        background: #3e9d63;
    }

    .loading {
        padding: 2px 0;
    }

    .disabled {
        background: #8f8f8f;
        cursor: not-allowed;
    }

    .disabled:hover {
        background: #8f8f8f;
    }

    .cancel {
        color: #606f7b;
    }

    @media (max-width: 550px) {
        .plain {
            font-size: 15px;
        }
    }
</style>
