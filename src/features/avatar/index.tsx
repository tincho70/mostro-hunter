/*
 * Inspired by: https://github.com/arokettu/monsterid
 */
import React from 'react';

type AvatarParts = {
  arms: string;
  body: string;
  eyes: string;
  hair: string;
  legs: string;
  mouth: string;
};

/**
 * Given a segment (pubkey) and the number of options for that segment,
 * returns the index of the image to use for that segment.
 *
 * @param {string} segment - The segment of the pubkey to get the index for.
 * @param {number} optionsCount - The number of options available for that segment.
 * @return {number} The index of the image to use for that segment.
 */
const getPartIndex = (segment: string, optionsCount: number): number => {
  const numericValue = parseInt(segment, 16);
  return (numericValue % optionsCount) + 1;
};

/**
 * Given a public key in hexadecimal format, returns an object containing the paths to the various
 * image parts that make up the mostro avatar.
 *
 * @param {string} pubkey - The public key to generate the avatar for.
 * @return {AvatarParts} An object containing the paths to the various avatar
 * parts.
 */
const getAvatarParts = (pubkey: string): AvatarParts => {
  return {
    arms: `arms_${getPartIndex(pubkey.slice(0, 10), 5)}.png`,
    body: `body_${getPartIndex(pubkey.slice(10, 20), 15)}.png`,
    eyes: `eyes_${getPartIndex(pubkey.slice(20, 30), 15)}.png`,
    hair: `hair_${getPartIndex(pubkey.slice(30, 40), 5)}.png`,
    legs: `legs_${getPartIndex(pubkey.slice(40, 50), 5)}.png`,
    mouth: `mouth_${getPartIndex(pubkey.slice(50, 60), 10)}.png`,
  };
};

/**
 * A React component that generates a random mostro avatar based on its public key.
 *
 * @param {Object} props - An object containing the public key of the mostro.
 * @param {string} props.pubkey - A string representing the public key of the mostro.
 * @return {JSX.Element} A React component that renders a random mostro avatar.
 */
const RandomAvatar: React.FC<{ pubkey: string }> = ({
  pubkey,
}: {
  pubkey: string;
}): JSX.Element => {
  const parts = getAvatarParts(pubkey);
  console.log(pubkey, parts);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', backgroundColor: 'white' }}>
      <img
        src={`/parts/${parts.body}`}
        alt="Body"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
      <img
        src={`/parts/${parts.legs}`}
        alt="Legs"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
      <img
        src={`/parts/${parts.arms}`}
        alt="Arms"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
      <img
        src={`/parts/${parts.eyes}`}
        alt="Eyes"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
      <img
        src={`/parts/${parts.hair}`}
        alt="Hair"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
      <img
        src={`/parts/${parts.mouth}`}
        alt="Mouth"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default RandomAvatar;
