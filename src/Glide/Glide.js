import React, { useEffect } from "react";
import GlideJs from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

function Glide({ options, children }) {
  const slider = React.createRef();
  let glider = null;

  useEffect(() => {
    glider = new GlideJs(slider.current, options).mount();
    if (options) {
      glider.update(options);

      return () => {
        glider.destroy();
      };
    }
  }, [options]);

  return (
    <div ref={slider} className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {children.map((img) => (
            <li className="glide__slide">{img}</li>
          ))}
        </ul>
      </div>
      <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
          prev
        </button>
        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
          next
        </button>
      </div>
      <div className="glide__bullets" data-glide-el="controls[nav]">
        {children.map((_, i) => (
          <button key={i} className="glide__bullet" data-glide-dir={`=${i}`} />
        ))}
      </div>
    </div>
  );
}

export default Glide;
