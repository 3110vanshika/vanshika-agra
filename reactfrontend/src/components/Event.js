import React, {useState} from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export default function Event() {
    const [isLiked, setIsLiked] = useState(false); // Initially, the event is not liked

    const handleLikeToggle = () => {
      setIsLiked(!isLiked); // Toggle the like status when heart icon is clicked
    };
  
  return (
    <div className="EventSection">
      <Row>
        <Col>
          <div className="Events">
            <img src="/images/event.jpeg" alt="" />
            <div className="EventsTxt">
              <h2>Gifted 101: Learn to Spot and Nurture Gifted Kids</h2>
              <p>Thu, Aug 17, 2023 4:30 AM IST</p>
              {isLiked ? (
                <AiFillHeart onClick={handleLikeToggle} color="red" style={{ cursor: 'pointer' }} />
              ) : (
                <AiOutlineHeart onClick={handleLikeToggle}  style={{ cursor: 'pointer' }}/>
              )}
            </div>
          </div>
        </Col>
        <Col>
          <div className="Events">
            <img src="/images/event.jpeg" alt="" />
            <div className="EventsTxt">
              <h2>Gifted 101: Learn to Spot and Nurture Gifted Kids</h2>
              <p>Thu, Aug 17, 2023 4:30 AM IST</p>
              {isLiked ? (
                <AiFillHeart onClick={handleLikeToggle} color="red" style={{ cursor: 'pointer' }} />
              ) : (
                <AiOutlineHeart onClick={handleLikeToggle}  style={{ cursor: 'pointer' }}/>
              )}
            </div>
          </div>
        </Col>
        <Col>
          <div className="Events">
            <img src="/images/event.jpeg" alt="" />
            <div className="EventsTxt">
              <h2>Gifted 101: Learn to Spot and Nurture Gifted Kids</h2>
              <p>Thu, Aug 17, 2023 4:30 AM IST</p>
              {isLiked ? (
                <AiFillHeart onClick={handleLikeToggle} color="red" style={{ cursor: 'pointer' }} />
              ) : (
                <AiOutlineHeart onClick={handleLikeToggle}  style={{ cursor: 'pointer' }}/>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
