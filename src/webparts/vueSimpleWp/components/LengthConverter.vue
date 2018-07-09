<template>
        <v-card flat>
            <v-card-actions>
                <v-btn large flat icon color="info" @click.prevent="$emit('back')">
                        <v-icon>arrow_back</v-icon>
                 </v-btn>
            </v-card-actions>
            <v-card-title>
                <div class="title primary--text">Length</div>
            </v-card-title>
            <v-card-text>
                <v-container fluid grid-list-md>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md4>
                            <v-text-field v-model='feet' label='Feet' @input="feetKeyed" type="number"/>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-text-field v-model='meters' label='Meters' @input="metersKeyed" type="number"/>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-text-field v-model='inches' label='Inches' @input="inchesKeyed" type="number"/>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-text-field v-model='cm' label='cm' @input="cmKeyed" type="number"/>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-text-field v-model='yards' label='Yards' @input="yardsKeyed" type="number"/>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-text-field v-model='kilos' label='Kilometers' @input="kilosKeyed" type="number"/>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-text-field v-model='miles' label='Miles' @input="milesKeyed" type="number"/>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
        </v-card>
</template>

<script>
import mixin from '../mixins/mixin.js';
export default {
    name:"LengthConverter",
    data: function() {
            return {
                feet: '',
                meters: '',
                inches: '',
                cm: '',
                yards: '',
                kilos: '',
                miles: ''
            }
        },
        mixins:[mixin],
        methods: {
            feetKeyed: function() {
                const valNum = this.parseVal(this.feet);
                this.meters = (valNum / 3.2808).toFixed(2);
                this.inches = (valNum * 12).toFixed(2);
                this.cm = (valNum / 0.032808).toFixed();
                this.yards = (valNum * 0.33333).toFixed(2);
                this.kilos = (valNum / 3280.8).toFixed(5);
                this.miles = (valNum * 0.00018939).toFixed(5);
            },
            metersKeyed: function() {
                const valNum = this.parseVal(this.meters);
                this.feet = (valNum * 3.2808).toFixed(2);
                this.inches = (valNum * 39.370).toFixed(2);
                this.cm = (valNum / 0.01).toFixed();
                this.yards = (valNum * 1.0936).toFixed(2);
                this.kilos = (valNum / 1000).toFixed(5);
                this.miles = (valNum * 0.00062137).toFixed(5);
            },
            inchesKeyed: function() {
                const valNum = this.parseVal(this.inches);
                this.feet = (valNum * 0.083333).toFixed(3);
                this.meters = (valNum / 39.370).toFixed(3);
                this.cm = (valNum / 0.39370).toFixed(2);
                this.yards = (valNum * 0.027778).toFixed(3);
                this.kilos = (valNum / 39370).toFixed(6);
                this.miles = (valNum * 0.000015783).toFixed(6);
            },
            cmKeyed: function() {
                const valNum = this.parseVal(this.cm);
                this.feet = (valNum * 0.032808).toFixed(3);
                this.meters = (valNum / 100).toFixed(3);
                this.inches = (valNum * 0.39370).toFixed(2);
                this.yards = (valNum * 0.010936).toFixed(3);
                this.kilos = (valNum / 100000).toFixed(6);
                this.miles = (valNum * 0.0000062137).toFixed(6);
            },
            yardsKeyed: function() {
                const valNum = this.parseVal(this.yards);
                this.feet = (valNum * 3).toFixed();
                this.meters = (valNum / 1.0936).toFixed(2);
                this.inches = (valNum * 36).toFixed();
                this.cm = (valNum / 0.010936).toFixed();
                this.kilos = (valNum / 1093.6).toFixed(5);
                this.miles = (valNum * 0.00056818).toFixed(5);
            },
            kilosKeyed: function() {
                const valNum = this.parseVal(this.kilos);
                this.feet = (valNum * 3280.8).toFixed();
                this.meters = (valNum * 1000).toFixed();
                this.inches = (valNum * 39370).toFixed();
                this.cm = (valNum * 100000).toFixed();
                this.yards = (valNum * 1093.6).toFixed();
                this.miles = (valNum * 0.62137).toFixed(2);
            },
            milesKeyed: function() {
                const valNum = this.parseVal(this.miles);
                this.feet = (valNum * 5280).toFixed();
                this.meters = (valNum / 0.00062137).toFixed();
                this.inches = (valNum * 63360).toFixed();
                this.cm = (valNum / 0.0000062137).toFixed();
                this.yards = (valNum * 1760).toFixed();
                this.kilos = (valNum / 0.62137).toFixed(2);
            }
        }
}
</script>
