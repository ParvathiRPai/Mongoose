var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema= new mongoose.Schema({
   name: String, 
   age:Number,
   temperament:String
});

var Cat=mongoose.model("cat", catSchema);
var george=new Cat({
    name:"George",
    age:"11",
    temperament:"Grouchy"
});
george.save(function(err, cat){
    if(err)
    {
        console.log("some thing went wrong");
    }
    else
    {
        console.log("saved");
        console.log(cat);
    }
});
Cat.create({
    name:"snow white",
    age:15,
    temperament:"nice"
},function(err, cat)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(cat);
    }
});
Cat.find({},function(err,cats)
{
    if(err)
    {
        console.log("error");
        console.log(err);
    }
    else
    {
        console.log("all the cats");
        console.log(cats);
    }
});