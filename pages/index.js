import Head from 'next/head'
import Link from 'next/link'
const fs = require('fs')
//const mdx = require('../posts/my-first-day.md')
//import Layout from '../../components/Layout'

const Home = ({ slugs }) => (
  <div>
  slugs:
    {slugs.map(slug => {
      return (
        <div key={slug}>
          <Link href={slug}>
            <a>{slug}</a>
          </Link>
        </div>
      )
      })}
      
  </div>
) 

export const getStaticProps = async() => {  // gets the contents of the posts. // get data
  // take the slug and read the contents/mark up within the file
  //const contents = fs.readFileSync(path.join('posts', slug + '.md')).toString() //cannot pass objects, must be cealized objects. numbers, floats, booleans, strings
  const files = fs.readdirSync("posts")

  return {
      props: {
          slugs: files.map(filename => filename.replace(".md", ""))
      } 
  }
}

export default Home

//https://dev.to/tinacms/creating-a-markdown-blog-with-next-js-52hk   // create markdown blog in next article


// Next.js is unique in that you can use either approach depending on the project.

// For this blog, we will implement static generation, this means HTML pages for each route will be generated 
// at build time. 
// Static generation allows pages to be cached by a CDN, improving performance.


// This is your bread and butter for retrieving page-level data in Next. 
// You can use getStaticProps to fetch data from an external api, or as seen in this example, 
// you can get a hold of local data sources.

// Note: this method only works for components defined in the pages/ directory, i.e., page components. 
// You cannot use this method on child components, but you can pass down 
// the data received to these child components, as you see being done with Layout in the example above


// Note again that global styles and fonts are handled in the Meta component via the <style jsx global> tag. 
// Use this anywhere you need to implement global styles.


// Since we can only use getStaticProps on page components, we will get a hold of all the blog
//  data in the Index component and then pass it down as a prop for BlogList to render.