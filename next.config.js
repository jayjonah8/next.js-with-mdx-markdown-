const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  //use: ['babel-loader', '@mdx-js/loader']
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
})

// const withMDX = require('@next/mdx')({
//     extension: /\.(md|mdx)?$/
//   })
//   module.exports = withMDX({
//     pageExtensions: ['js', 'jsx', 'md', 'mdx']
//   })


// const withMDX = require('@next/mdx')({
//     extension: /\.mdx?$/
//   })
//   module.exports = withMDX({
//     pageExtensions: ['js', 'jsx', 'md', 'mdx']
//   })





// next.config.js
// const withMDX = require('@next/mdx')({
//     extension: /\.(md|mdx)$/,
//   })
//   module.exports = withMDX({
//     pageExtensions: ['js', 'jsx', 'mdx'],
//   })








// old module.exports = {};
