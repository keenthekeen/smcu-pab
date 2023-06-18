import './bootstrap';
import '../css/app.css';

// Import modules...
import {createApp, h} from 'vue';
import {App as InertiaApp, Link, plugin as InertiaPlugin} from '@inertiajs/inertia-vue3';
import {InertiaProgress} from '@inertiajs/progress';

const el = document.getElementById('app');

createApp({
    render: () =>
        h(InertiaApp, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: (name) => require(`./Pages/${name}`).default,
        }),
})
    .mixin({ methods: { route } })
    .use(InertiaPlugin)
    .component('inertia-link', Link)
    .mount(el);

InertiaProgress.init({ color: '#4B5563' });
