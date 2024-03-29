const users=require('../Modals/userSchema')

const accounts=require('../Modals/registerSchema')

exports.addUser=async(req,res)=>{
    console.log('inside add user function');

    const{fname,lname,email,mobile,gender,year,department,father,mother,location,faculty,subject1,subject2,subject3,subject4,subject5,subject6}=req.body

    try{
        const preuser=await users.findOne({email})

        if(preuser){
            res.status(406).json("user already exists")
        }
        else{
            const newuser=new users({
                fname,lname,email,mobile,gender,year,department,father,mother,profile:req.file.filename,location,faculty,subject1,subject2,subject3,subject4,subject5,subject6
            })

            await newuser.save()
            res.status(200).json(newuser)
        }
    }catch(err){
        res.status(401).json("Error:"+err)
    }

}

// get data

exports.getallUser=async(req,res)=>{

    const search=req.query.search

    const query={
        $or: [
            { fname: { $regex: search, $options: "i" } },
            { lname: { $regex: search, $options: "i" } }
        ]
    }

    try{

        const allUsers=await users.find(query)
        res.status(200).json(allUsers)

    }catch(err){
        res.status(406).json(err)
    }
}

// delete student

exports.deleteUser=async(req,res)=>{
    // req id
    const {id}=req.params

    try{
        const removeData=await users.findByIdAndDelete({_id:id})
        res.status(200).json(removeData)
    }catch(err){
        res.status(401).json(err)
    }
}

// edit user 

exports.editUser=async(req,res)=>{
    const{id}=req.params
    const{fname,lname,email,mobile,gender,year,department,father,mother,profile,location,faculty,subject1,subject2,subject3,subject4,subject5,subject6}=req.body
    const file=req.file?req.file.filename:profile

    try{

        const updateUser=await users.findByIdAndUpdate({_id:id},{
            fname,lname,email,mobile,gender,year,department,father,mother,profile:file,location,faculty,subject1,subject2,subject3,subject4,subject5,subject6
        },{new:true})

        await updateUser.save()
        res.status(200).json(updateUser)

    }catch(err){
        res.status(401).json(err)
    }
}

// register user

exports.regUser = async (req, res) => {
    console.log('Inside register user');
    const { uname, email, password } = req.body;

    try {
        const preregister = await accounts.findOne({ email });
        if (preregister) {
            return res.status(406).json("User already exists");
        } else {
            const newregister = new accounts({
                uname,
                email,
                password
            });
            await newregister.save();
            return res.status(200).json(newregister);
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
};


exports.getAllAccounts = async (req, res) => {
    console.log('Inside get all accounts');

    try {
        const allAccounts = await accounts.find({}); // Using find() without any query retrieves all documents
        return res.status(200).json(allAccounts);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
};


