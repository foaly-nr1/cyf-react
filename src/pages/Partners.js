import React from 'react'
import { TopSection } from '../components/TopSection'



export const Partners = () => {
  const partnersText = (
      <div>
        <p>The tech industry is facing a big challenge to find developers to fill the ever increasing number of vacancies. At the same time, asylum seekers and refugees lack the necessary opportunities to update their skills and integrate better in society.</p>
        <p>Together we’ll help to solve both of these issues.</p>

        <div className="section-bottom-link">
          <a className="big-link-3 btn" href="mailto:contact@codeyourfuture.co?subject=Interested in partnership">Get in Touch</a>
        </div>
      </div>
  )
  return (
    <div>
        <TopSection title="Partner with us" content={partnersText}/>
    </div>
  )
}

