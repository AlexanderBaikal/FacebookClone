import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        profileSrc="https://avatars.githubusercontent.com/u/1968?s=40&v=4"
        title="Paul Walker"
      />

      <Story
        image="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
        profileSrc="https://avatars.githubusercontent.com/u/15021421?s=40&v=4"
        title="Jason Statham"
      />

      <Story
        image="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
        profileSrc="https://avatars.githubusercontent.com/u/41175493?s=40&v=4"
        title="Mark Zukerberg"
      />

      <Story
        image="https://www.movementrights.org/wp/wp-content/uploads/2019/07/24701-nature-natural-beauty.jpg"
        profileSrc="https://avatars.githubusercontent.com/u/38958308?s=40&u=0662cae2acef8a06634c2d6472957fdd182080fd&v=4"
        title="Conor McGregor"
      />

      <Story
        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        profileSrc="https://avatars.githubusercontent.com/u/26739?s=40&u=a88c9c6e908b2fa16d426405fd7aaf027c8382c2&v=4"
        title="Jon Jones"
      />
    </div>
  );
}

export default StoryReel;
