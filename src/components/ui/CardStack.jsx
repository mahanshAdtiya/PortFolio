import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { Row, Col, Image } from "react-bootstrap";
import '../../styles/Experience.css';

let interval;
function CardStack({items, offset, scaleFactor }) {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()); 
        return newArray;
      });
    }, 5000);
  };

  return (
    (<div className="relative my-14 h-60 w-60 md:w-full">
      {cards.map((card, index) => {
        return ((
          <motion.div
              key={card.id}
              className="absolute bg-[#212529] rounded-3xl p-4 shadow-xl border border-white/[0.1]"
              style={{
                transformOrigin: "top center",
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR, 
                zIndex: cards.length - index, 
              }}>
              <div key={index} className='flex-shrink-0 snap-center space-y-5'>
                <Row index={index}>
                  <Col className={`experience-image-container ${index % 2 !== 0 && "odd"}`}>
                    <div className='image-blurbox'>
                      <a target="_blank" rel="noreferrer" href={card.livelink || card.gitlink || '#'}>
                        <Image className="experience-image" src={card.icon} rounded />
                      </a>
                    </div>
                  </Col>
                  <Col className={`featured-experience-info ${index % 2 !== 0 && "odd"}`}>
                    <div className="experience-heading">
                      <h5>{card.company_name}</h5>
                      <h3>{card.title}</h3>
                    </div>
                    <p className={`font-thin text-[15px] text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {card.date}
                    </p>

                    <div className="experience-info">
                      {card.points.map((point, subIndex) => 
                        <p key={subIndex}>{point}</p>
                      )}
                    </div>

                    <div className="experience-tech">
                      {card.tech.map((tech, subIndex) => 
                        <label key={subIndex}>{tech}</label>
                      )}
                    </div>
                    <div className="experience-links">
                      {card.gitlink &&
                        <a target="_blank" rel="noreferrer" href={card.gitlink}><i className="fab fa-github" /></a>
                      }
                      {card.livelink &&
                        <a target="_blank" rel="noreferrer" href={card.livelink}><i className="fas fa-external-link-alt" /></a>
                      }
                    </div>
                  </Col>
                </Row>
              </div> 
            </motion.div>
          ));
      })}
    </div>)
  );
}


export default CardStack
{/* <div key={index} className='w-screen h-screen flex-shrink-0 snap-center space-y-5 flex flex-col pt-44 md:p-20'>
<Row index={index}>
  <Col className={`experience-image-container ${index % 2 !== 0 && "odd"}`}>
    <div className='image-blurbox'>
      <a target="_blank" rel="noreferrer" href={card.livelink || card.gitlink || '#'}>
        <Image className="experience-image" src={card.icon} rounded />
      </a>
    </div>
  </Col>
  <Col className={`featured-experience-info ${index % 2 !== 0 && "odd"}`}>
    <div className="experience-heading">
      <h5>{card.company_name}</h5>
      <h3>{card.title}</h3>
    </div>
    <p className={`font-thin text-[15px] text-center md:text-left ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
      {card.date}
    </p>

    <div className="experience-info">
      {card.points.map((point, subIndex) => 
        <p key={subIndex}>{point}</p>
      )}
    </div>

    <div className="experience-tech">
      {card.tech.map((tech, subIndex) => 
        <label key={subIndex}>{tech}</label>
      )}
    </div>
    <div className="experience-links">
      {card.gitlink &&
        <a target="_blank" rel="noreferrer" href={card.gitlink}><i className="fab fa-github" /></a>
      }
      {card.livelink &&
        <a target="_blank" rel="noreferrer" href={card.livelink}><i className="fas fa-external-link-alt" /></a>
      }
    </div>
  </Col>
</Row>
</div> */}