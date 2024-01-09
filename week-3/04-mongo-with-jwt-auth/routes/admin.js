const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const router = Router();


// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const admin = await Admin.create({
        username: req.body.username,
        password: req.body.password
    })
    if(admin){
        res.json({
            msg: "Admin created successfully"
        })
    }
    else{
        res.status(403).json({
            msg: "Error occured!!"
        })
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const admin = await Admin.findOne({username,password})
    if(admin){
        const token = jwt.sign(username,JWTsecret)
        res.json({
            msg: `Bearer ${token}`
        })
    }
    else{
        res.status(403).json({
            msg: "Admin does not exist."
        })
    }
    }
);

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const response = await Course.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
    })
    res.json({
        msg: "Course created successfully",
        course_id: response.course_id
    })


});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;