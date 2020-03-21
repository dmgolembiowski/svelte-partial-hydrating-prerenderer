<div class="header">
    <h1>
        <a href="/">Svelte Demo</a>
    </h1>
    <nav>
        <span>
            <a href="#rsvp">RSVP</a>
        </span>
        <span>
            <a href="#accommodations">Accommodations</a>
        </span>
        <span>
            <a href="#registry">Registry</a>
        </span>
        <span>
            <a href="#request-a-song">Request a Song</a>
        </span>
        <span>
            <a href="#faq">FAQ</a>
        </span>
    </nav>
</div>

<style>
    .header {
        padding: 2em 1em 0;
        margin: 0 auto 3em;
        text-align: center;
    }

    nav span {
        font-size: 20px;
    }

    nav span:not(:last-child)::after {
        content: ' × ';
        color: #b4bdc8;
        padding: 0 0.2em;
        font-weight: 400;
        position: relative;
    }

    a {
        color: rgb(53, 62, 72);
    }

    h1 {
        font-size: 50px;
        font-weight: bold;
        line-height: 1;
        margin: 0 0 30px;
    }

    @media (max-width: 500px) {
        h1 {
            font-size: 38px;
        }
    }
</style>
