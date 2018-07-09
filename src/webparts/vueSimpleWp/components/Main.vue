<template>
    <v-app>
        <v-content>
            <!-- <div v-if="view == 'Home'">
                <v-btn color="info" dark large v-for="(item,i) in modules" :key="i" @click.prevent="view = item.title">
                    <v-icon dark left>{{item.icon}}</v-icon>{{item.title}}
                </v-btn>
            </div>
            <v-container v-else fluid pa-0>
                <v-layout row>
                    <v-flex xs12>
                        <weight-converter v-if="view == 'Weight'" v-on:back="view = 'Home'" />
                        <length-converter v-else-if="view == 'Length'" v-on:back="view = 'Home'" />
                        <temp-converter v-else-if="view == 'Temperature'" v-on:back="view = 'Home'" />
                    </v-flex>
                </v-layout>
            </v-container> -->
            <v-card flat color="primary">
                <v-toolbar color="accent" dark>
                    <v-toolbar-title>{{view}}</v-toolbar-title>
                    <v-menu bottom offset-y>
                         <v-btn slot="activator">A Menu</v-btn>
                        <v-list>
                            <v-list-tile v-for="item in items" :key="item" @click.prevent="view = item">
                                <v-list-tile-title v-text="item"></v-list-tile-title>
                            </v-list-tile>
                        </v-list>
                    </v-menu>
                </v-toolbar>
                <v-container fluid pa-0>
                    <v-layout row>
                        <v-flex xs12>
                            <weight-converter v-if="view == 'Weight'" v-on:back="view = 'Home'" />
                            <length-converter v-else-if="view == 'Length'" v-on:back="view = 'Home'" />
                            <temp-converter v-else-if="view == 'Temperature'" v-on:back="view = 'Home'" />
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12>
                             <v-menu bottom left class="menuFix">
                                <v-btn slot="activator">A Menu</v-btn>
                                <v-list>
                                    <v-list-tile v-for="item in items" :key="item" @click.prevent="view = item">
                                        <v-list-tile-title v-text="item"></v-list-tile-title>
                                    </v-list-tile>
                                </v-list>
                            </v-menu>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-content>
    </v-app>
</template>
<script>
    import LengthConverter from './LengthConverter.vue';
    import WeightConverter from './WeightConverter.vue';
    import TempConverter from './TempConverter.vue';

    export default{
        data: function(){
            return{
                items: ['Weight','Length','Temperature'],
                view: 'Weight'
            }
        },
        props:['description'],
        components:{
            LengthConverter,
            WeightConverter,
            TempConverter
        }
    }
</script>
<style>
    .btn{
        padding-top: 0 !important;
        padding-bottom: 0 !important;
    }
    .menu__content{
        position: fixed !important;
    }
</style>



