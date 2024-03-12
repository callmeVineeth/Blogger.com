import React,{ useState } from 'react'
import AuthorItem from './AuthorItem';

import avathar1 from '../Images/st1.jpg'
import avathar2 from '../Images/st2.jpg'
import avathar3 from '../Images/st3.jpg'

const Dummy_Authors = [
  {
    id: 1,
    name: 'John Doe',
    image:  avathar1 ,
    posts: '4',
    Joined: 'May 2023'
  },
  {
    id: 2,
    name: 'Jane Smith',
    image:  avathar1 ,
    posts: '7',
    Joined: 'June 2022'
  },
  {
    id: 3,
    name: 'David Johnson',
    image:  avathar3 ,
    posts: '10',
    Joined: 'August 2021'
  },
  {
    id: 4,
    name: 'Emily Brown',
    image:  avathar2 ,
    posts: '5',
    Joined: 'January 2024'
  },
  {
    id: 5,
    name: 'Michael Wilson',
    image:  avathar1 ,
    posts: '12',
    Joined: 'December 2020'
  },
  {
    id: 6,
    name: 'Sophia Lee',
    image:  avathar3 ,
    posts: '8',
    Joined: 'March 2023'
  }
  ];

  
function Authors() {
  const[authorData, setAuthorData]= useState([...Dummy_Authors])

  return (
    <section className=' bg-light d-flex flex-wrap justify-content-evenly flex-row p-5'>
      
      {authorData.map((item,id)=>(

        <AuthorItem key={id} authorPic={item.image} name={item.name} posts={item.posts} joinDate={item.Joined} />
      ))}
        
      
    </section>
  )
}

export default Authors
