import React from 'react'

const ContactCard = ({data}) => {
  return (
    <a href={data.link} target='_blank' rel="noopener noreferrer" className='contact-card'>
        <div className='contact-card-icon'>{data.icon}</div>
        <h1 className='contact-card-title'>{data.title}</h1>
        <h4 className='contact-card-value'>{data.value}</h4> 
        <div className='contact-card-footer'><h6>Send a message</h6></div>
    </a>
  )
}

export default ContactCard
