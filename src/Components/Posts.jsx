import React,{useState} from 'react'
import PostItem from './PostItem'

import Thumbnail1 from '../Images/beautiful-landscape.jpg'
import Thumbnail2 from '../Images/fun-party.jpg'
import Thumbnail3 from '../Images/technologyImage.jpg'

import avathar1 from '../Images/st1.jpg'
import avathar2 from '../Images/st2.jpg'
import avathar3 from '../Images/st3.jpg'

const Dummy_Posts = [
    {

        id:1,
        image: Thumbnail1,
        title: "The Future of AI in Technology",
        description: "Artificial intelligence is rapidly changing the landscape of technology. This post explores some of the potential implications.",
        author: "John Doe",
        category: "technology",
        time: "2 hours ago",
        authorImage: avathar1,
      },
      {
        id:1,
        image: Thumbnail2,
        title: "Breathtaking Landscapes Around the World",
        description: "Discover the beauty of nature with a glimpse of stunning landscapes from various corners of the globe.",
        author: "Jane Smith",
        category: "nature",
        time: "1 day ago",
        authorImage: avathar1,
      },
      {
        id:1,
        image: Thumbnail3,
        title: "Essential Tips for Small Business Growth",
        description: "Starting and running a small business can be challenging. This post offers some practical tips to help your business thrive.",
        author: "Michael Brown",
        category: "business",
        time: "3 days ago",
        authorImage: avathar2,
      },
      {
        id:1,
        image: Thumbnail1,
        title: "Unlocking the Power of Automation",
        description: "Automation is transforming various industries. Learn how automation can streamline processes and boost productivity.",
        author: "Sarah Lee",
        category: "technology",
        time: "1 week ago",
        authorImage: avathar3,
      },
      {
        id:1,
        image: Thumbnail3,
        title: "The Importance of Sustainability Practices",
        description: "Sustainability is crucial for the environment and our future. Explore how businesses can implement sustainable practices.",
        author: "David Miller",
        category: "business",
        time: "2 weeks ago",
        authorImage: avathar2,
      },
]

function Posts() {
    const [posts, setPosts] = useState([...Dummy_Posts])
  return (
    <section className=' d-flex justify-content-center flex-row flex-wrap gap-5 p-4'>
    {posts.map(({id, thumbnail , category, title, description, image, authorImage, author, time})=>
        <PostItem  key={id} thumbnail={image} title={title} description={description} avathar={authorImage} upload_time={time}
        authorName={author}/>
    )}
      
    </section>
  )
}

export default Posts
