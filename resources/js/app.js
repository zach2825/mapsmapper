import { InertiaApp } from '@inertiajs/inertia-vue'
import Vue from 'vue'

window._ = require('lodash');

Vue.use(InertiaApp)
Vue.prototype.$_ = window._;

const app = document.getElementById('app')

Vue.component('input-text', require('./Components/Input/MyText').default);

new Vue({
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
        },
    }),
}).$mount(app)
