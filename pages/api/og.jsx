import { ImageResponse } from '@vercel/og';
import React from 'react';

export const config = {
  runtime: 'experimental-edge',
};
const montserratFont = fetch(
  new URL('../../fonts/Montserrat/Montserrat-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

const fuzzyBubblesFont = fetch(
  new URL(
    '../../fonts/Fuzzy_Bubbles/FuzzyBubbles-Regular.ttf',
    import.meta.url
  )
).then((res) => res.arrayBuffer())

const pressStart2PFont = fetch(
  new URL('../../fonts/Press_Start_2P/PressStart2P-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

const greatVibesFont = fetch(
  new URL('../../fonts/Great_Vibes/GreatVibes-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

export default async function handler(req, res) {

  const montserratFontData = await montserratFont;
  const fuzzyBubblesFontData = await fuzzyBubblesFont;
  const pressStart2PFontData = await pressStart2PFont;
  const greatVibesFontData = await greatVibesFont;

  const current = new Date();
  const date = `${String(current.getDate()).padStart(2, '0')}/${String(current.getMonth() + 1).padStart(2, '0')}/${current.getFullYear()} 
    ${String(current.getHours()).padStart(2, '0')}:${String(current.getMinutes()).padStart(2, '0')}:${String(current.getSeconds()).padStart(2, '0')}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 128,
          //background: 'white',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          //backgroundImage: 'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
            //backgroundSize: '100px 100px',
          //backgroundImage: 'linear-gradient(-45deg, rgba(255,255,255, 0.1), rgba(255,255,255, 0.1) 1px, transparent 1px, transparent 6px)',
            //backgroundSize: '4px 4px',
          //fontFamily: '"Montserrat"',
          //fontFamily: '"Fuzzy Bubbles"',
          //fontFamily: '"Press Start 2P"',
          fontFamily: '"Great Vibes"',
          borderRadius: '100px 100px 100px 100px',
        }}
      > { // 

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              justifyItems: 'center',

            }}
          >

            <img
              alt="Vercel"
              height={630}
              src="https://og-image-generation-tau.vercel.app/madeira.jpg"
              style={{ margin: '0 0px' }}
              width={1200}
            />
          </div>}
        <div
          style={{
            position: 'absolute',
            zIndex: '2',
            color: '#565656',
            opacity: '0.8',
            fontWeight: 'bold',
            textShadow: '5px 5px 7px rgba(255,255,225,.5)',
            display: 'flex',
          }}
        >
          {req.nextUrl.searchParams.get('message')}   <div
            style={{
              position: 'absolute',
              fontSize: 28,
              zIndex: '3',
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '325px',
              marginLeft: '720px',
            }}
          >{date}</div>
        </div>
      </div>
    ),
    {
      fonts: [
        {
          name: 'Montserrat',
          data: montserratFontData,
          style: 'normal',
        },
        {
          name: 'Fuzzy Bubbles',
          data: fuzzyBubblesFontData,
          style: 'normal',
        },
        {
          name: 'Press Start 2P',
          data: pressStart2PFontData,
          style: 'normal',
        },
        {
          name: 'Great Vibes',
          data: greatVibesFontData,
          style: 'normal',
        },
      ],
    }
  );
}