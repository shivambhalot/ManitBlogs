import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";
import multer from "multer";


const app=express();

app.use(express.json());
app.use(cookieParser());
// app.get("/test",(req,res)=>{
//     res.json("it works!!")
// })
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/upload');
    },
    filename: function (req, file, cb) {
      
      cb(null, Date.now()+file.originalname );
    },
  });

const upload=multer({storage});
// app.post("/api/upload",upload.single('file'),function (req,res){
//     const file=req.file;
//     res.status(200).json(file.filename);

// });


app.post("/api/upload", (req, res) => {
  upload.single("file")(req, res, (err) => {
    if (err) {
      // Handle the upload error here
      console.error(err);
      return res.status(500).json({ error: "File upload failed." });
    }

    const file = req.file;
    console.log('file');
    res.status(200).json(file.filename);
  });
});




app.use("/api/posts",postRoutes);
app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);


app.listen(8800,()=>{
console.log("Connected");
});