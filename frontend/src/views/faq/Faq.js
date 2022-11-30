import React from 'react'
import "./faq.css"

const Faq = () => {
  return (
    <div className='faq'>
      <div className='faq--common'>
        <h1 id='faq--common'>COMMONLY ASKED QUESTIONS</h1>
        <h3 id="faq--info">The Info You're After</h3>
      </div>

      <div className='faq--pay'>
        <h2 id='faq--options'>WHAT ARE THE PAYMENT OPTIONS</h2>
        <p id='faq--pop'>Enter your answer here. Be thoughtful, write clearly and concisely, and consider adding written as well as visual examples. Go over what you've written to make sure that if it was the first time you were visiting the site, you'd understand your answer.</p>
      </div>

      <div className='faq--policy'>
        <h2 id="faq--policy">WHAT IS YOUR RETURN POLICY?</h2>
        <p id="faq--return">Enter your answer here. Be thoughtful, write clearly and concisely, and consider adding written as well as visual examples. Go over what you've written to make sure that if it was the first time you were visiting the site, you'd understand your answer.</p>
      </div>

      <div className='faq--gift'>
        <h2 id="faq--card">DO YOU OFFER GIFT CARDS?</h2>
        <p id='faq--offer'>Enter your answer here. Be thoughtful, write clearly and concisely, and consider adding written as well as visual examples. Go over what you've written to make sure that if it was the first time you were visiting the site, you'd understand your answer.</p>
      </div>
    </div>
  )
}

export default Faq