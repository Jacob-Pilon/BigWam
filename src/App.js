import Welcome from "./Welcome";
import Timeline from "./Timeline";
import React, { useState } from "react";

const App = () => {
  const [showTimeline, setShowTimeline] = useState(false);

  const handleButtonClick = () => {
    setShowTimeline(true);
  };

  const fadingMessages = [
    'Hi Pookie',
    'Happy 21st Birthday',
    'I have been planning this for a little while.', 
    'I Made a Timeline of our most cherished memories.', 'I hope you like it, I Love you so much','<3 -Jacob'
  ];

  // Placeholder photos array
  const photos = [
    { url: './BigWam/images/June10th.PNG', month: 'June', date: '2023-06-10', description: 'Our first words to eachother on discord. I love you' },
    { url: './BigWam/images/July3rd.PNG', month: 'July', date: '2023-07-03', description: 'NERF ROCKET LAUNCHER, Ill bite you.' },
    { url: './BigWam/images/July9th.PNG', month: 'July', date: '2023-07-09', description: 'Cute Giggly girly hehehe.' },
    { url: './BigWam/images/July11th.PNG', month: 'July', date: '2023-07-11', description: 'First time I fell asleep on da camera, FARM GAME FARM GAME.' },
    { url: './BigWam/images/firstTimeAsleep.jpg', month: 'July', date: '2023-07-12', description: 'Sleepy head.' },
    { url: './BigWam/images/July13th.PNG', month: 'July', date: '2023-07-13', description: 'We still need to watch the stars together.' },
    { url: './BigWam/images/July14th.jpg', month: 'July', date: '2023-07-14', description: 'The very first photo I took of you, I fell in love with your smile the moment saw you.' },
    { url: './BigWam/images/July14thpt2.jpg', month: 'July', date: '2023-07-14', description: 'The very second photo I took of you, whenever I feel down I look at this picture.' },
    { url: './BigWam/images/July17th.PNG', month: 'July', date: '2023-07-17', description: 'The night we made it oficial <3.' },
    { url: './BigWam/images/July18th.jpg', month: 'July', date: '2023-07-18', description: 'Nerd.' },
    { url: './BigWam/images/July19th.jpg', month: 'July', date: '2023-07-19', description: 'Sleepy eepy head, I miss da doodles.' },
    { url: './BigWam/images/July20th.jpg', month: 'July', date: '2023-07-20', description: 'Nervous study sess, Nerd.' },
    { url: './BigWam/images/July21st.PNG', month: 'July', date: '2023-07-21', description: 'I can\'t believe you hung up on me smh.' },
    { url: './BigWam/images/July27th.PNG', month: 'July', date: '2023-07-27', description: 'The first time you told me to go fuck somebody hehehehehe.' },
    { url: './BigWam/images/July28th.PNG', month: 'July', date: '2023-07-28', description: 'SPIN DUCK' },
    { url: './BigWam/images/July29th.PNG', month: 'July', date: '2023-07-29', description: 'I miss you more and more everyday we\'re not next to eachother <3. (you were also very drunk)' },
    { url: './BigWam/images/July30th.PNG', month: 'July', date: '2023-07-30', description: 'The moment I knew you were the one.' },
    { url: './BigWam/images/August6th.PNG', month: 'August', date: '2023-08-06', description: 'When I asked u to come to DUSTED poggers. (U still need to get covies)' },
    { url: './BigWam/images/August10th.png', month: 'August', date: '2023-08-10', description: 'ANGERY' },
    { url: './BigWam/images/August12th.PNG', month: 'August', date: '2023-08-12', description: '5 Days before we met for the first time, I was so excited.' },
    { url: './BigWam/images/August13th.PNG', month: 'August', date: '2023-08-13', description: 'WELCOME TO THE PACK ARRROOOOOOOOO!!!!!!!!!' },
    { url: './BigWam/images/August14th.PNG', month: 'August', date: '2023-08-14', description: 'EXAMS!!!' },
    { url: './BigWam/images/August16th.PNG', month: 'August', date: '2023-08-16', description: 'Twas the night before we met, I was so nervous.' },
    { url: './BigWam/images/August17th.PNG', month: 'August', date: '2023-08-17', description: 'My place was only a little messy.' },
    { url: './BigWam/images/August17thpt2.PNG', month: 'August', date: '2023-08-17', description: 'Your first words to me when we met were "I need to pee" after we hugged. I will never forget that moment. Thank you for taking the risk and coming 6 hours away to spend 10 days with me.' },
    { url: './BigWam/images/August26th.PNG', month: 'August', date: '2023-08-26', description: 'THE PACK ARRROOOOOO!' },
    { url: './BigWam/images/August26thpt2.PNG', month: 'August', date: '2023-08-26', description: 'You did say it first. I was ready to say it the moment I saw you get off that train.' },
    { url: './BigWam/images/August27th.PNG', month: 'August', date: '2023-08-27', description: 'Bently when he was still the womb' },
    { url: './BigWam/images/August28th.PNG', month: 'August', date: '2023-08-28', description: 'I LIKE BEARS' },
    { url: './BigWam/images/August29th.PNG', month: 'August', date: '2023-08-29', description: 'After you stole my FORTNITE SHIRT' },
    { url: './BigWam/images/August31st.PNG', month: 'August', date: '2023-08-31', description: 'Fuck I really got to build that lego sword soon ruh roh' },
    { url: './BigWam/images/Banana.PNG', month: 'August', date: '2023-08-31', description: 'It\'s not what it looks like I swear' },
    { url: './BigWam/images/September1st.PNG', month: 'September', date: '2023-09-01', description: 'POV I locked you out of my room.' },
    { url: './BigWam/images/September3rd.PNG', month: 'September', date: '2023-09-03', description: 'Future goals, u be playin farm game or sims while I be sticking my tongue out while playing league.' },
    { url: './BigWam/images/September7th.PNG', month: 'September', date: '2023-09-07', description: 'Scared hamster.' },
    { url: './BigWam/images/September8th.PNG', month: 'September', date: '2023-09-08', description: 'Friendship bracelets are never coming off I can\'t believe you.' },
    { url: './BigWam/images/September9th.PNG', month: 'September', date: '2023-09-09', description: 'LEGOOOOO PICKACHUUUU.' },
    { url: './BigWam/images/September11th.PNG', month: 'September', date: '2023-09-11', description: 'The audacity.' },
    { url: './BigWam/images/September13th.PNG', month: 'September', date: '2023-09-13', description: 'Foreshadowing.' },
    { url: './BigWam/images/September16th.PNG', month: 'September', date: '2023-09-16', description: 'It really isn\'t fair to everyone else. I no joke have the best GF on the planet.' },
    { url: './BigWam/images/September17th.PNG', month: 'September', date: '2023-09-17', description: 'IM NOT THAT OLD I SWEAR' },
    { url: './BigWam/images/uhhh.PNG', month: 'September', date: '2023-09-17', description: 'uhhhhhhh' },
    { url: './BigWam/images/September17thpt2.PNG', month: 'September', date: '2023-09-17', description: 'You\'re so drunk, it\'s so cute I hope I get even more of these <3.' },
    { url: './BigWam/images/September18th.PNG', month: 'September', date: '2023-09-18', description: 'B' },
    { url: './BigWam/images/September19th.PNG', month: 'September', date: '2023-09-19', description: 'POG 3' },
    { url: './BigWam/images/September20th.PNG', month: 'September', date: '2023-09-20', description: 'AMOGUS' },
    { url: './BigWam/images/September22nd.PNG', month: 'September', date: '2023-09-22', description: 'I hope one day my wall is filled with your paintings.' },
    { url: './BigWam/images/September23rd.PNG', month: 'September', date: '2023-09-23', description: 'Yea I have the ass in the relationship I\'ll finally admit it.' },
    { url: './BigWam/images/September25th.PNG', month: 'September', date: '2023-09-25', description: 'Will you marry me?' },
    { url: './BigWam/images/September29th.PNG', month: 'September', date: '2023-09-29', description: 'I. \n in fact. \n \n \n \n Did not have it.' },
    { url: './BigWam/images/September29thpt2.PNG', month: 'September', date: '2023-09-29', description: 'I had to wait an extra hour >:(, I didn\'t tell you this but I had a very nice chat with a drunk homeless dude that reeked of piss.' },
    { url: './BigWam/images/whitey.jpg', month: '?????', date: '??????', description: '????' },
    { url: './BigWam/images/October1st.jpg', month: 'October', date: '2023-10-01', description: 'I will never forget how you look at me <3.' },
    { url: './BigWam/images/October1stpt2.jpg', month: 'October', date: '2023-10-01', description: 'I love you so much.' },
    { url: './BigWam/images/October2nd.jpg', month: 'October', date: '2023-10-02', description: 'She watchin' },
    { url: './BigWam/images/October2ndpt2.jpg', month: 'October', date: '2023-10-02', description: 'She observin' },
    { url: './BigWam/images/October2ndpt3.jpg', month: 'October', date: '2023-10-02', description: 'She percievin' },
    { url: './BigWam/images/October2ndpt4.jpg', month: 'October', date: '2023-10-02', description: 'RUPERTO' },
    { url: './BigWam/images/October2ndpt5.jpg', month: 'October', date: '2023-10-02', description: 'Cuddle bug I miss you.' },
    { url: './BigWam/images/October3rd.PNG', month: 'October', date: '2023-10-03', description: 'Now I know how you so smarty.' },
    { url: './BigWam/images/October9th.jpg', month: 'October', date: '2023-10-09', description: 'Before thanksgiving in MTL, you be schlepin' },
    { url: './BigWam/images/October9th.PNG', month: 'October', date: '2023-10-09', description: 'I\'m still impressed you and Ella pulled that shit off.' },
    { url: './BigWam/images/October9thpt2.jpg', month: 'October', date: '2023-10-09', description: 'After thanksgiving in MTL, You still be schlepin' },
    { url: './BigWam/images/October11th.PNG', month: 'October', date: '2023-10-11', description: 'I STILL DONT KNOW WHY MY COMPUTER DISCONNECTS IM SORRY :(' },
    { url: './BigWam/images/October13th.PNG', month: 'October', date: '2023-10-13', description: 'Hey guess what?' },
    { url: './BigWam/images/October15th.PNG', month: 'October', date: '2023-10-15', description: 'Chicken Butt.' },
    { url: './BigWam/images/October16th.PNG', month: 'October', date: '2023-10-16', description: 'You\'re just jealous this isn\'t you' },
    { url: './BigWam/images/October19th.PNG', month: 'October', date: '2023-10-19', description: 'Duckie <3' },
    { url: './BigWam/images/October22nd.PNG', month: 'October', date: '2023-10-22', description: 'Petition to rename PRIDE MONTH TO RIDE MONTH MFerrrrr !!!' },
    { url: './BigWam/images/October23rd.PNG', month: 'October', date: '2023-10-23', description: 'Planning for the B U B B L E.' },
    { url: './BigWam/images/October29th.PNG', month: 'October', date: '2023-10-29', description: 'I be winning this race a little too often now h mmmmmmm??' },
    { url: './BigWam/images/Screenshot_20230723_011526_Discord.jpg', month: 'I dunno', date: '???', description: 'Cutie' },
    { url: './BigWam/images/November2nd.PNG', month: 'November', date: '2023-11-02', description: 'I will never say "love you" again it is always I love you from now on <3 (love you).' },
    { url: './BigWam/images/November 3rd.PNG', month: 'November', date: '2023-11-03', description: 'POG 4 (im so glad you booked it)' },
    { url: './BigWam/images/November24th.jpg', month: 'November', date: '2023-11-24', description: 'Wanna cut my hair again?' },
    { url: './BigWam/images/November25th.jpg', month: 'November', date: '2023-11-25', description: 'Post haircut cuddles, smh not even paying attention me' },
    { url: './BigWam/images/Novemeber25thpt2.jpg', month: 'November', date: '2023-11-25', description: 'I kith you <3' },
    { url: './BigWam/images/November25thpt3.jpg', month: 'November', date: '2023-11-25', description: 'SURPRISE' },
    { url: './BigWam/images/December9th.jpg', month: 'December', date: '2023-12-9', description: 'I need to buy you more flowers.' },
    { url: './BigWam/images/December9thpt2.jpg', month: 'December', date: '2023-12-9', description: 'DOGGY' },
    { url: './BigWam/images/December9thpt3.jpg', month: 'December', date: '2023-12-9', description: 'SHE YELPIN' },
    { url: './BigWam/images/December15th.jpg', month: 'December', date: '2023-12-15', description: 'Your eyes are so fucking beautiful' },
    { url: './BigWam/images/December15thpt2.jpg', month: 'December', date: '2023-12-15', description: 'ANGERY KITTY' },
    { url: './BigWam/images/December21st.jpg', month: 'December', date: '2023-12-21', description: 'balls' },



    // Add more photo objects with their respective details
  ];

  return (
    <div>
      {!showTimeline ? (
        <Welcome messages={fadingMessages} onButtonClick={handleButtonClick} />
      ) : (
        <Timeline photos={photos} />
      )}
    </div>
  );
};

export default App;