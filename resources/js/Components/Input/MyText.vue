<template>
    <div class="form-group">
        <label v-if="label" :for="name" v-text="label"/>
        <input :type="type" class="form-control" name="test" :id="name" :aria-describedby="`_${name}`"
               :placeholder="label" v-model="fieldValue">
        <small v-if="help" :id="`_${name}`" class="form-text text-muted" v-text="help"/>
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
