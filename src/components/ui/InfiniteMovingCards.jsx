import React, { useEffect, useState, useRef} from "react";
import { Row, Col, Image } from "react-bootstrap";

import { cn } from "../../utils/cn";
import '../../styles/Experience.css'

const FeaturedProjectCard = ({ project, index }) => {
  return (
    <div key={index} className='w-[80vw] h-screen flex-shrink-0 snap-center space-y-5 flex flex-col pt-44 md:p-20'>
      <Row index={index}>
        <Col className={`experience-image-container ${index % 2 !== 0 && "odd"}`}>
          <div className='image-blurbox'>
            <a target="_blank" rel="noreferrer" href={project.livelink || project.gitlink || '#'}>
              <Image className="experience-image" src={project.image} rounded />
            </a>
          </div>
        </Col>
        <Col className={`featured-experience-info ${index % 2 !== 0 && "odd"}`}>
          <div className="experience-heading">
            <h3>{project.title}</h3>
          </div>

          <div className="experience-info">
            <p>{project.points}</p>
          </div>

          <div className="experience-tech">
            {project.tech.map((tech, subIndex) => 
              <label key={subIndex}>{tech}</label>
            )}
          </div>
          <div className="experience-links">
            {project.gitlink &&
              <a target="_blank" rel="noreferrer" href={project.gitlink}><i className="fab fa-github" /></a>
            }
            {project.livelink &&
              <a target="_blank" rel="noreferrer" href={project.livelink}><i className="fas fa-external-link-alt" /></a>
            }
          </div>
        </Col>
      </Row>
    </div>
  );
};
const InfiniteMovingCards = ({items, direction = "left", speed = "slow", pauseOnHover = true, className}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div ref={containerRef} className={cn( "scroller relative z-5 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]", className )}>
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((project, index) => (
          <FeaturedProjectCard project={project} index={index} key={`featured-${index}`} />
        ))}
      </ul>
    </div>
  );
};


export default InfiniteMovingCards;