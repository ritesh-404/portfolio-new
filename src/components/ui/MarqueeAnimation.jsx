import { motion } from "motion/react";

import ImgContainer from "../ui/ImgContainer";
import githubCardImg from "../../assets/images/github-card.png";
import illustrationImg from "../../assets/images/illustration.png";
import landingPageImg from "../../assets/images/landing page.png";
import pricingImg from "../../assets/images/pricing-colorful.png";
import quoraLoginImg from "../../assets/images/quora-login.png";

const images = [
  illustrationImg,
  githubCardImg,
  landingPageImg,
  pricingImg,
  quoraLoginImg,
];

const MarqueeAnimation = ({ speed = 35, direction = "left" }) => {
  const from = direction === "left" ? "0%" : "-100%";
  const to = direction === "left" ? "-100%" : "0%";

  // Wave config
  const waveAmplitude = 24; // Max vertical displacement in px
  const waveDuration = 2.5; // Seconds for one full wave cycle

  return (
    <div className="w-full overflow-hidden py-8">
      <div className="flex gap-12">
        {/* First copy */}
        <motion.div
          className="flex shrink-0 items-center gap-8"
          initial={{ x: from }}
          animate={{ x: to }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {images.map((src, i) => (
            <motion.div
              key={`a-${i}`}
              animate={{
                y: [0, -waveAmplitude, 0, waveAmplitude, 0],
              }}
              transition={{
                duration: waveDuration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: (i / images.length) * waveDuration,
              }}
              className="shrink-0"
              style={{
                rotate: i % 2 === 0 ? -1 : 1,
              }}
            >
              <ImgContainer alt={src} src={src} />
            </motion.div>
          ))}
        </motion.div>

        {/* Second copy — seamless loop */}
        <motion.div
          className="flex shrink-0 items-center gap-8"
          initial={{ x: from }}
          animate={{ x: to }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {images.map((src, i) => (
            <motion.div
              key={`b-${i}`}
              animate={{
                y: [0, -waveAmplitude, 0, waveAmplitude, 0],
              }}
              transition={{
                duration: waveDuration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: (i / images.length) * waveDuration,
              }}
              className="shrink-0"
              style={{
                rotate: i % 2 === 0 ? -1 : 1,
              }}
            >
              <ImgContainer alt={src} src={src} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MarqueeAnimation;
