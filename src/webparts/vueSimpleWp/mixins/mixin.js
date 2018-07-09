
export default{
    methods:{
        parseVal: function(input){
            var output = parseFloat(input);
            return isNaN(output) ? 0 : output;
        }
    }
}