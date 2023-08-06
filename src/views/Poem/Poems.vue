<template>
    <v-container class="mt-10">
        <v-row>
            <v-col cols="12" class="order-first">
                <v-img id="header-image"
                    :src="require(`../../assets/backgrounds/${authorData ? authorData.image : 'bird.jpg'}`)" max-height="150" class="align-end">
                    <p class="text-title white--text ml-3 mb-2">{{ authorData ? authorData.name.toUpperCase() : '' }}</p>
                </v-img>
            </v-col>
            <v-col cols="12" md="9" class="order-last order-md-2">
                <Titles :poems="poems" />
            </v-col>
            <v-col cols="12" md="3" class="order-2 order-md-3">
                <PoemView :authorData="authorData" />
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
import { mapActions, mapState } from 'vuex'
import Titles from '../../views/Poem/Titles.vue'
import PoemView from '../../views/Poem/PoemView.vue'

export default {
    name: 'Poems',
    components: {
        Titles,
        PoemView
    },
    date: () => ({
        authorData: null,
    }),

    methods: {
        ...mapActions('poem', ['getPoems', 'getPoem', 'getSearchedPoems']),

        searchPoem: function () {
            this.getSearchedPoems(this.searchedPoem)
        }
    },

    computed: {
        ...mapState('poem', {
            poems: state => state.poems,
            singlePoem: state => state.poem
        }),
    },

    async mounted() {
        if (this.$route.params.author) {
            await this.getPoems(this.$route.params.author.name)
            this.authorData = this.$route.params.author
        }
    }
}
</script>

<style scope>
/* * {
    border: 1px solid white
} */
/* #search-bar{
    border: 1px solid #a3a3a3;
    border-radius: 5px;
} */
#header-image {
    border-radius: 5px;
}
</style>