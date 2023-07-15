import { Component } from "react";
import Postbar from "./PostTopBar";

class PostSection extends Component {
  render() {
    return (
      <div className="posts-section">
        {[1,2,3].map ((a,b)=> (<Postbar key={b}/>
        ))}
        </div>

    );
  }
}

export default PostSection;