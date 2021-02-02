const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

app.get("/", (req, res) => {
    res.json([
        {
            name: "Timothé Luwawu-Cabarrot",
            url: "https://usports.org/wp-content/uploads/Timothe.jpg"
        },
        {
            name: "Austin Rivers",
            url: "https://balldurham.com/wp-content/uploads/getty-images/2017/07/1185724785.jpeg"
        },
        {
            name: "Dillon Brooks",
            url: "https://media.gettyimages.com/photos/dillon-brooks-of-the-memphis-grizzlies-in-action-against-the-brooklyn-picture-id1293805505"
        }
    ])
})

app.listen(5000, () => {
    console.log("Listening on port 5000")
})