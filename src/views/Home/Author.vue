<template>
    <v-card flat @click="redirect(author)">
        <v-img :src="require('../../assets/backgrounds/' + author.image)" width="100%" height="250" class="align-end">
            <p class="text-title white--text ml-3 mb-2">{{ author.name }}</p>
        </v-img>
    </v-card>
</template>
  
<script>
// import { mapActions, mapState } from 'vuex'

export default {
    name: 'Author',
    props: [
        'author'
    ],
    date: () => ({
        //
    }),

    methods: {
        // ...mapActions('poem', ['getPoems']),
        redirect: function (author) {
            this.$router.push({name: 'poems', params: {author: author}})
        }
    },

    // computed: {
    //     ...mapState('poem', {
    //         poems: state => state.poems
    //     })
    // }
}
</script>

<style scope>
/* * {
    border: 1px solid white
} */
</style>