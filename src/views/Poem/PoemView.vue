<template>
    <v-card v-if="selectedPoem !== null" dark outlined flat class="pa-4 pb-10">
        <v-card flat outlined class="pa-1" id="image" max-width="150">
            <v-img
                :src="require(`../../assets/backgrounds/${authorData !== null && authorData !== undefined ? authorData.image : 'bird.jpg'}`)"
                max-width="150"></v-img>
        </v-card>
        <div>
            <v-card-title class="mx-0 px-0">{{ selectedPoem[0].title.toUpperCase() }}</v-card-title>
            <v-card-subtitle class="text-body font-italic mx-0 px-0">{{ selectedPoem[0].author }}</v-card-subtitle>
            <v-divider class="mt-2 mb-5" color="#a3a3a3"></v-divider>
            <v-card-text v-for="(line, i) in selectedPoem[0].lines" :key="i" class="mb-0 py-0 mx-0 px-0">{{ line }}</v-card-text>
        </div>
    </v-card>
</template>
  
<script>
import { mapActions, mapState } from 'vuex'

export default {
    name: 'PoemView',
    props: [
        'authorData',
        'poem'
    ],
    date: () => ({

    }),

    methods: {
        // ...mapActions('poem', ['getPoems']),
        // redirect: function (author) {
        //     this.getPoems(author)
        // }
    },

    computed: {
        ...mapState('poem', {
            poems: state => state.poems,
            singlePoem: state => state.poem
        }),

        selectedPoem(){
            return this.singlePoem
        }
    }
}
</script>

<style scope>
/* * {
    border: 1px solid white
} */
#image {
    border: 1px solid #a3a3a3;
}
</style>