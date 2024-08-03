const mongoose =require('mongoose');

const newflavortextentries =new mongoose.Schema({
    flavor_text:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    version:{
        type:String,
        required:true
    }
})
const newPokemon=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  base_happiness:{
    type:Number,
    required:true
  },
  capture_rate:{
    type:Number,
    required:true
  },
  color:{
    type:String,
    required:true
  },
  egg_groups:{
    type:[String],
    required:true
  },
  evolution_chain:{
    type:String,
    required:true
  },
  flavor_text_entries:{
    type:[newflavortextentries],
    required:true
  }
},{timeseries:true});
const pokemon=mongoose.model('Pokemon',newPokemon);
module.exports=pokemon;