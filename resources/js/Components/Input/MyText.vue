<template>
    <div class="form-group">
        <label :for="name" v-if="label" v-text="label"/>
        <input :aria-describedby="`_${name}`" :id="name" :placeholder="label" :type="type" class="form-control"
               name="test" v-model="fieldValue">
        <small :id="`_${name}`" class="form-text text-muted" v-if="help" v-text="help"/>
    </div>
</template>

<script>
export default {
    name: "Text",
    props: {
        value: {
            required: true,
        },
        label: {
            required: false,
            default: false,
        },
        name: {
            required: true,
            type: String,
        },
        type: {
            required: false,
            type: String,
            default: 'text',
        },
        help: {
            required: false,
            default: false,
        }
    },

    computed: {
        fieldValue: {
            get() {
                return this.value;
            },
            set( val ) {
                this.$emit('input', val);
            }
        }
    }
}
</script>

<style scoped>

</style>
