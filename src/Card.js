import React from 'react'

const Card = ({posts}) => {
  return (
    <div >
      
        {
            posts?.map((post)=>{
              return (
                <div className="card-item" key={post.id}>
                  <div className='name'>
                  <p>{post.name}</p>
                  </div>
                  <div className='contact'>
                    <h5>Contact</h5>
                    <p>{post.name}</p>
                  </div>
                  <div className='city'>
                    <h5>City</h5>
                    <p>{post.address.city}</p>
                  </div>
                  <div className='state'>
                    <h5>State</h5>
                    <p>{post.address.suite}</p>
                  </div>
                  <div className='button'>
                    <button>view details</button>
                  </div>
                </div>                  
              )
            })
        }
    </div>
  )
}

export default Card

