const port=4000;
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const multer=require("multer");
const path=require("path");
const cors=require("cors");
const { error } = require("console");

app.use(express.json());
app.use(cors());

//database connection
mongoose.connect("mongodb+srv://ritikmahakalkar:9763767457@cluster0.un05aqh.mongodb.net/e-commerce")

//api
app.get("/",(req,res)=>{
    res.send("express running")
})
//image
const storage=multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null, `${file.filename}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload=multer({storage:storage})

//upload endpoint for image
app.use('/images',express.static('upload/images'))
app.post("/upload",upload.single('product'),(req,resp)=>{
    resp.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})
//creating products
const Product=mongoose.model("product",{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    }
    ,
    date:{
        type:Date,
       default:Date.now,
    },
    avalible:{
        type:Boolean,
        default:true,
    },
    
})
app.post('/addproduct',async(req,res)=>{
    let products=await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array=products.slice(-1);
        let last_product=last_product_array[0];
        id=last_product.id+1;
    }
    else{
        id=1;
    }
    const product=new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,

    });
    console.log(product);
    await product.save();
    console.log("saved");
    res.json({
        success:true,
        name:req.body.name,

    })
})


//api for deleting
app.post('/removeproduct',async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})
//new collection data
app.get('/newcollections',async(req,resp)=>{
    let products=await product.find({});
    let newcollection=products.slice(1).slice(-8);
    console.log("New collection launched");
    resp.send(newcollection);
})

//api to get product
app.get('/allproducts',async (req,res)=>{
    let products=await Product.find({});
    console.log("all product fetched");
    res.send(products);
})
//crating user
const Users=mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,

    },
    cartData:{
        type:Object,

    },
    date:{
        type:Date,
        default:Date.now,
    },
    Mobile:{
        type:String,
    },
    Plot_No:{
        type:String, 
    },
    Area:{
        type:String, 
    },
    Landmark:{
        type:String,
    },
    City:{
        type:String,
    },
    State:{
        type:String,
    },
    Countory:{
        type:String, 
    },
    Pin_Code:{
        type:String,
    },
})

//creating endpoint of registration
app.post('/signUp',async (req,resp)=>{
    let check=await Users.findOne({email:req.body.email});
    if(check){
        return resp.status(400).json({success:false,errors:" The user is exist on that email "})
    }
    let cart={};
    for(let i=0;i<300;i++){
        cart[i]=0;
    }
    const user=new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
        confirm_password:req.body.confirm_password,
        Mobile:req.body.Mobile,
        Plot_No:req.body.Plot_No,
        Area:req.body.Area,
        Landmark:req.body.Landmark,
        City:req.body.City,
        State:req.body.State,
        Countory:req.body.Countory,
        Pin_Code:req.body.Pin_Code,
    })
    await user.save();

    const data ={
        user:{
            id:user.id
        }
    }
    const token=jwt.sign(data,'secreat');
    resp.json({success:true,token})
})
//user login
app.post('/Login',async (req ,resp)=>{
    let user =await Users.findOne({email:req.body.email});
    if(user){
        const password_comparison=req.body.password===user.password;
        if(password_comparison){
            const data={
                user:{
                    id:user.id
                }
            }
            const token=jwt.sign(data,'secreat');
            resp.json({success:true,token});
        }
        else{
            resp.json({success:false,errors:"Wrong Password"});
        }
    }
    else{
        resp.json({success:false,errors:"Wrong email"});
    }
})




app.get('/newcollection',async (req,resp)=>{
    let products=await Product.find({});
    let newcollection=products.slice(1).slice(-8);
    console.log("new collection fetche");
    resp.send(newcollection);
})

//for cart items
/*app.post('/addtocart',async(req,resp)=>{

})*/

app.listen(port,(error)=>{
    if(!error){
        console.log("server running on"+port)
    }
    else{
        console.log("error"+error)
    }
})