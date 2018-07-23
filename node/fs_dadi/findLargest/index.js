const fs = require('fs')
const path = require('path')

function findLargest (dir, callback) {
    fs.readdir(dir, (err, files) => {
        if (err) return callback(err)
        let count = files.length
        let errored = false
        let stats = []
        files.forEach( file => {
            fs.stat(path.join(dir, file), (err, stat) => {
                if (errored) return
                if (err) {
                    errored = true
                    return callback(err)
                }
                stats.push(stat)

                if (--count === 0) {
                    let largest = stats
                        .filter( (stat) => stat.isFile() )
                        .reduce( (prev, next) => {
                            if (prev.size > next.size ) return prev
                            return next
                        })
                    callback(null, files[stats.indexOf(largest)])
                }
            })
        })
    })
}