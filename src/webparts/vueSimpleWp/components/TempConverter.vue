<template>
    <v-card flat>
            <v-card-actions>
                <v-btn large flat icon color="info" @click.prevent="$emit('back')">
                        <v-icon>arrow_back</v-icon>
                 </v-btn>
            </v-card-actions>
            <v-card-title>
                <div class="title primary--text">Temperature</div>
            </v-card-title>
            <v-card-text>
                <v-container fluid grid-list-md>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md4>
                            <v-text-field v-model='fahr' label='Fahrenheit' @input="fahrKeyed" type="number"/>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-text-field v-model='cels' label='Celsius' @input="celsKeyed" type="number"/>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-text-field v-model='kelv' label='Kelvin' @input="kelvKeyed" type="number"/>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
        </v-card>
</template>

<script>
import mixin from '../mixins/mixin.js';
export default {
        name: "TempConverter",
        data: function() {
            return {
                fahr: '',
                cels:'',
                kelv: '',
            }
        },
        mixins:[mixin],
        methods: {
            fahrKeyed: function() {
                const valNum = this.parseVal(this.fahr);
                this.cels = ((valNum - 32) / 1.8).toFixed(2);
                this.kelv = (((valNum - 32) / 1.8) + 273.15).toFixed(2);
            },
            celsKeyed: function() {
                const valNum = this.parseVal(this.cels);
                this.fahr = ((valNum * 1.8) + 32).toFixed(2);
                this.kelv = ((valNum) + 273.15).toFixed(2);
            },
            kelvKeyed: function() {
                const valNum = this.parseVal(this.kelv);
                this.fahr = (((valNum - 273.15) * 1.8) + 32).toFixed(2);
                this.cels = ((valNum) - 273.15).toFixed(2);
            }
        }
    }
</script>
