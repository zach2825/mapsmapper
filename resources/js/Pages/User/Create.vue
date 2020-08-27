<template>
    <div class="container">
        This is working {{ JSON.stringify(form) }}
        <div>
            Errors:
            <pre v-html="errors"/>
        </div>
        <div v-if="loading">
            Loading . . .
        </div>
        <hr>
        <form @submit.prevent="handleFormSubmit" method="post">
            <div class="row">
                <div class="col-md-6">
                    <input-text label="Name" name="name" v-model="form.name"/>
                </div>
                <div class="col-md-6">
                    <input-text label="Email" name="email" v-model="form.email"/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <input-text label="Password" name="password" type="password" v-model="form.password"/>
                </div>
                <div class="col-md-6">
                    <input-text label="Password Confirm" name="password_confirmation"
                                type="password" v-model="form.password_confirmation"/>
                </div>
            </div>

            <button class="btn btn-primary" type="submit">
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

    data() {
        return {
            form: {},
            loading: false,
        }
    },

    methods: {
        handleFormSubmit() {
            this.loading = true;
            this.$inertia.post('/user', this.form)
        }
    }

}
</script>
