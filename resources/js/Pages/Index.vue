<template>
    <div class="container">
        This is working {{JSON.stringify(form)}}
        <div>
            Errors:
            <pre v-html="errors" />
        </div>
        <div v-if="loading">
            Loading . . .
        </div>
        <hr>
        <form method="post" @submit.prevent="handleFormSubmit">
            <div class="row">
                <div class="col-md-6">
                    <input-text name="name" v-model="form.name" label="Name" />
                </div>
                <div class="col-md-6">
                    <input-text name="email" v-model="form.email" label="Email" />
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <input-text name="password" v-model="form.password" label="Password" type="password" />
                </div>
                <div class="col-md-6">
                    <input-text name="password_confirmation" v-model="form.password_confirmation" label="Password Confirm" type="password" />
                </div>
            </div>

            <button type="submit" class="btn btn-primary">
                Submit
            </button>
        </form>
    </div>
</template>
<script>
export default {
    props: {
        errors: {
            required: false,
            default: [],
        }
    },

    remember: 'form',

    data(){
        return {
            form: {},
            loading: false,
        }
    },

    methods: {
        async handleFormSubmit(){
            this.loading = true;
            await this.$inertia.post('users', this.form);
            this.loading = false;
        }
    }

}
</script>
