import React, { Component } from 'react'

export default class Quote extends Component {
  render() {
    return (

<div id="colorlib-counter" class="colorlib-counters" style= {{backgroundImage: 'url(images/chicago.jpg)'}} data-stellar-background-ratio="0.5">
<div class="overlay"></div>
<div class="colorlib-narrow-content">
    <div class="row">
    </div>
    <div class="row">
        <div class="text-center animate-box">
            {/* <span class="colorlib-counter js-counter" data-from="0" data-to="309" data-speed="5000" data-refresh-interval="50"></span> */}
            <span class="colorlib-counter-label" style= {{fontStyles :'bold'}}>Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.
— Albert Einstein</span>
        </div>
    </div>
</div>
</div>
    )
}
}