import React from 'react';
import TypeIt from "typeit-react";
const AnimatedTyping = () => {
    return (
        <div>
            <TypeIt
              getBeforeInit={instance => {
                instance
                .options({speed: 100, })
                  .type("I'm a ")
                  .break()
                  .type("programmer💻")
                  .pause(500)
                  .delete(15)
                  .break()
                  .type("passionate💜")
                  .pause(500)
                  .delete(22)
                  .type("I'd love to be")
                  .break()
                  .type("a developer🎯")
                  .pause(500)
                  .go()
                // Remember to return it!
                return instance;
              }}
        />
        </div>
    );
};

export default AnimatedTyping;