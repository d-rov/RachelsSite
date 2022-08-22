import { Link } from 'react-router-dom'

import headshot from './avatar_sample.png'

import './About.css'

function About() {

  return (
    <div className="About">
      <img id="pic" src={headshot} alt="Rachel Headshot" />
      <p className="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam pellentesque nec nam aliquam sem et. Elit ullamcorper dignissim cras tincidunt lobortis feugiat. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Quam lacus suspendisse faucibus interdum posuere. Aliquet sagittis id consectetur purus ut. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Et molestie ac feugiat sed lectus vestibulum mattis. Interdum varius sit amet mattis vulputate enim. Sem integer vitae justo eget.
      </p>
      <p className="content">
      Sit amet tellus cras adipiscing enim. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Eget mi proin sed libero enim sed faucibus turpis. Consequat ac felis donec et odio pellentesque diam volutpat commodo. Lacinia quis vel eros donec ac odio tempor orci. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Magna sit amet purus gravida quis. Habitant morbi tristique senectus et netus et. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Purus gravida quis blandit turpis cursus in hac. Tellus cras adipiscing enim eu. Id ornare arcu odio ut sem nulla pharetra. Nulla facilisi etiam dignissim diam quis enim. In pellentesque massa placerat duis. Consequat semper viverra nam libero.
      </p>
      <p className="content">
      Sollicitudin aliquam ultrices sagittis orci. Maecenas sed enim ut sem. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Auctor eu augue ut lectus arcu bibendum. Magna fermentum iaculis eu non diam phasellus. Habitant morbi tristique senectus et. Morbi leo urna molestie at elementum eu. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Massa massa ultricies mi quis hendrerit dolor magna eget. Tempor orci eu lobortis elementum. Neque sodales ut etiam sit amet. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Arcu risus quis varius quam quisque. Diam in arcu cursus euismod quis.
      </p>
      <Link className="home__link" to="/">Home</Link>
    </div>
  );
}

export default About;
