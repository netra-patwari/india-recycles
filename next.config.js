/** @type {import('next').NextConfig} */
import path from 'path'
// const path = require('path')

// const nextConfig = {
//     sassOptions: {
//         includePaths: [path.join(__dirname, 'styles')],
//       },
// }

const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
