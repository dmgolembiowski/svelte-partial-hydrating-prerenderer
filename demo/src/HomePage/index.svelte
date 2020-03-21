<script>
    import RsvpForm from './RsvpForm/index';
    import Accommodations from './Accommodations';
    import Registry from './Registry';
    import SongRequestForm from './SongRequestForm';
    import Faq from './Faq';
</script>

<main>
    <h2 id="rsvp">RSVP</h2>
    <div>
        <!-- Must be the single child within a parent to make it partially-hydratable -->
        <RsvpForm />
    </div>
    <hr />

    <h2 id="accommodations">Accommodations</h2>
    <Accommodations />
    <hr />

    <h2 id="registry">Registry</h2>
    <Registry />
    <hr />

    <h2 id="request-a-song">Request a Song</h2>
    <div>
        <!-- Must be the single child within a parent to make it partially-hydratable -->
        <SongRequestForm />
    </div>
    <hr />

    <h2 id="faq">Frequently Asked Questions</h2>
    <Faq />
</main>


<style>
    main {
        margin: 0 auto;
    }

    hr {
        border-bottom: 1px solid #b4bdc8;
        display: block;
        height: 0;
        margin: 35px auto 30px;
        width: 10em;
    }

    h2 {
        font-weight: bold;
        font-size: 30px;
        margin: 0 auto 15px;
        text-align: center;
    }
</style>
