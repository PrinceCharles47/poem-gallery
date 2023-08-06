<template>
    <v-container>
        <v-row dense class="px-16 mt-5">
            <v-col cols="12">
                <p class="text-title white--text mb-0">A Collection of Poems</p>
                <v-divider color="white" class="my-3"></v-divider>
            </v-col>
            <v-col md="7" class="pt-0">
                <v-row dense>
                    <v-col cols="12">
                        <Author :author="authors.shakespeare" />
                    </v-col>
                </v-row>

                <v-row dense>
                    <v-col cols="12" sm="6">
                        <Author :author="authors.jackson" />
                    </v-col>
                    <v-col cols="12" sm="6" class="mb-1">
                        <Author :author="authors.wordsworth" />
                    </v-col>
                </v-row>
            </v-col>
            <v-col md="5" class="pt-0">
                <v-row dense>
                    <v-col cols="12">
                        <Author :author="authors.moore" />
                    </v-col>
                    <v-col cols="12">
                        <Author :author="authors.browning" />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
import Author from './Author.vue';
import { mapActions, mapState } from 'vuex'

export default {
    name: 'Home',
    components: { Author },
    data: () => ({
        authors: {
            shakespeare: {
                name: 'William Shakespeare',
                image: 'bg_1.png'
            },
            jackson: {
                name: 'Helen Hunt Jackson',
                image: 'bg_2.png'
            },
            wordsworth: {
                name: 'William Wordsworth',
                image: 'bg_3.png'
            },
            moore: {
                name: 'Thomas Moore',
                image: 'bg_4.png'
            },
            browning: {
                name: 'Elizabeth Barrett Browning',
                image: 'bg_5.png'
            },
        }
    }),

    methods: {
        ...mapActions('poem', ['getPoems', 'getPoem', 'emptyPoems']),

        searchPoem: function () {
            this.getSearchedPoems(this.searchedPoem)
        }
    },
    mounted() {
        this.emptyPoems()
    }
}
</script>

<style scope>
/* * {
    border: 1px solid white
} */
</style>