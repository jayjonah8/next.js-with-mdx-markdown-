import React from 'react'
const fs = require('fs') // 4:49 he said that this will run on the surver. idk what that implies. may cause later problems
import matter from 'gray-matter'
const path = require('path')
import Head from 'next/head'
import marked from 'marked'

import ReactMarkdown from 'react-markdown'
// const {read, write} = require('to-vfile') // new test example
// const remark = require('remark')
// const mdx = require('remark-mdx')

// ;(async () => {
//     const path = './example.mdx'
//     const file = await read(path)
//     const contents = await remark()
//       .use(mdx)
//       .use(() => tree => {
//         console.log(tree)
//       })
//       .process(file)
//     await write({
//       path,
//       contents
//     })
//   })()


// i need to turn file into mdx before is appears on the sceen rendered



 
const Post = ({ htmlString, data }) => { // template is here. the two functions below deal with how we get the data we need for our template
  return (
    <React.Fragment>
        <Head>
            <title>{data.title}</title>
            <meta title="description" content={data.description} />
        </Head>
        <div dangerouslySetInnerHTML={{__html: htmlString}} />
        <ReactMarkdown source={htmlString} />
    </React.Fragment>
  )
};

export const getStaticPaths = async() => {
    const files = fs.readdirSync('posts')// this gives array of strings. gets paths  // you can use the async versino of readdirSync() to await things
    console.log('files: ', files)

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))
    
    console.log('paths: ', paths)


    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = async({ params: { slug } }) => {  // gets the contents of the posts. // get data
    //take the slug and read the contents/mark up within the file
    const markdownWithMetadata = fs.readFileSync(path.join('posts', slug + '.md')).toString() //cannot pass objects, must be cealized objects. numbers, floats, booleans, strings
    console.log("mkd with meta", markdownWithMetadata)
    const parsedMarkdown = matter(markdownWithMetadata)
    console.log("parsedmkd", parsedMarkdown)
    const htmlString = marked(parsedMarkdown.content) // takes markdown string and turns it into html string

    // const myTest = async () => {
    //     const path = './posts/my-first-day.md'
    //     const file = await read(path)
    //     const contents = await remark()
    //       .use(mdx)
    //       .use(() => tree => {
    //         console.log(tree)
    //       })
    //       .process(file)
    //     await write({
    //       path,
    //       contents
    //     })
    //   }//)()
      
    //   console.log(myTest())



    return {
        props: {
            htmlString,
            data: parsedMarkdown.data
        } 
    }
}

export default Post 

// 14:30 installs grey matter


//https://spectrum.chat/mdx/general/how-do-i-read-only-mdx-exports-without-parsing-the-mdx-itself~3c6313de-4943-43c6-9d19-e22395f9df57