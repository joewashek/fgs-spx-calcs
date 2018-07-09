<template>
        <v-card flat>
            <v-card-actions>
                <v-btn large flat icon color="info" @click.prevent="$emit('back')">
                        <v-icon>arrow_back</v-icon>
                 </v-btn>
            </v-card-actions>
            <v-card-title>
                <div class="title primary--text">Weight</div>
            </v-card-title>
            <v-card-text>
                <v-container fluid grid-list-md>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md4>
                            <v-text-field v-model="lbs" label="Pounds" @input="lbsKeyed" type="number"/>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-text-field v-model='kilos' label='Kilograms' @input="kilosKeyed" type="number"/>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-text-field v-model='ounces' label='Ounces' @input="ouncesKeyed" type="number"/>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-text-field v-model='grams' label='Grams' @input="gramsKeyed" type="number"/>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
        </v-card>
</template>

<script>
import mixin from '../mixins/mixin.js';

   export default {
        name: "WeightConverter",
        data: function() {
            return {
                lbs: '',
                kilos: '',
                ounces: '',
                grams: ''
            }
        },
        mixins:[mixin],
        methods: {
            lbsKeyed: function() {
                const lbs = this.parseVal(this.lbs);
                this.kilos = (lbs / 2.2046).toFixed(2);
                this.ounces = (lbs * 16).toFixed(2);
                this.grams = (lbs / 0.0022046).toFixed();
            },
            kilosKeyed: function() {
                const kilos = this.parseVal(this.kilos);
                this.lbs = (kilos * 2.2046).toFixed(2);
                this.ounces = (kilos * 35.274).toFixed(2);
                this.grams = (kilos * 1000).toFixed();
            },
            ouncesKeyed: function() {
                const ounces = this.parseVal(this.ounces);
                this.kilos = (ounces / 35.274).toFixed(4);
                this.lbs = (ounces * 0.0625).toFixed(4);
                this.grams = (ounces / 0.035274).toFixed(1);
            },
            gramsKeyed: function() {
                const grams = this.parseVal(this.grams);
                this.kilos = (grams / 1000).toFixed(4);
                this.ounces = (grams * 0.035274).toFixed(3);
                this.lbs = (grams * 0.0022046).toFixed(4);
            }
        }
    }
</script>


