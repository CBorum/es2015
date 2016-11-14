/**
 * Created by ChristopherBorum on 12/11/2016.
 */
import fs = require('fs')

fs.readFile('package.json', (err, data) => {
    if (err) console.log(err)
    else console.log(data.toString())
})