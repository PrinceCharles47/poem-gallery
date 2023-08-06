<template>
    <v-card dark flat>
        <v-text-field outlined label="Search" v-model="search"></v-text-field>
        <v-data-table :headers="headers" :items="tableItems" :search="search" @click:row="getSinglePoem"></v-data-table>
    </v-card>
</template>
  
<script>
import { mapActions, mapState } from 'vuex'

export default {
    name: 'Titles',
    props: [
        'poems'
    ],
    data: () => ({
        search: null,
        headers: [
            {text: 'Title', value: 'title', align: 'start'},
            {text: 'Author', value: 'author'}
        ]
    }),

    methods: {
        ...mapActions('poem', ['getPoems', 'getPoem']),

        getSinglePoem: function (poem) {
            this.getPoem(poem.title)
        }
    },

    computed: {
        // ...mapState('poem', {
        //     poem: state => state.poem
        // })
        tableItems(){
            let items = []
            this.poems.forEach(poem => {
                items.push({
                    title: poem.title,
                    author: poem.author
                })
            })
            console.log(items);
            return items
        }
    }
}
</script>

<style scope>
/* * {
    border: 1px solid white
} */

.titles {
    border-top: 1px solid #a3a3a3;
}
</style>