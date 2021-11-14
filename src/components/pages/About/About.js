import React from "react";

function About() {
  return (
    <section className='section' id='about'>
      <h1 className='sectionHeader'>ABOUT</h1>
      <p className='sectionWelcomeText'>Welcome to Villa Emily!</p>
      <div className='flexContainer'>
        <div className='img-container'>
          <img
            className='img-about'
            src='https://www.wallpapers4u.org/wp-content/uploads/building_house_cottage_style_design_49252_1920x1080.jpg'
            alt=''
          ></img>
        </div>
        <div className='text-about'>
          <p className='sectionText'>
            Villa Emily is a luxury villa - with a private pool - for your
            summer holidays in Zakynthos. The private property is extremely
            spacious, with 210 square metres of indoor living space, three
            terraces and gardens - even 2 families will have enough space to
            relax and to feel privacy. The location is ideal for unwinding,
            close to beaches and the island town, perfect location for exploring
            the island for those who choose to visit and explore a different
            beach/part of the island every day. Other benefits include the
            aforementioned private swimming pool and a garden with eco-style
            designed areas to rest and cool down in. There are three balconies
            facing different directions, so you can always be in or out of the
            sun! Throughout the house, you can enjoy the beautiful landscape
            views. You can spend quality time indoors as well as outdoors under
            the Greek sun! Dive in for a refreshing dip in the pool or bask on
            one of the sun loungers. Grill up a meal on the Garden BBQ and serve
            it in the outdoor dining area. Laze on the huge outdoor hammock,
            shaded and cool. Walk the gardens. Stop and smell the greek jasmine
            and other beautiful flowers.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
