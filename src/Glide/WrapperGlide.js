import React, { useState } from "react";
import { Form, Radio, Input, Checkbox, Button } from "semantic-ui-react";
import Glide from "./Glide";

function WrapperGlide() {
  const [type, setType] = useState("");
  const [perView, setPerView] = useState(5);
  const [autoplay, setAutoplay] = useState(false);
  const [visible, setVisible] = useState(true);


  return (
    <div style = {{width:1400}}>
      <Form>
        <Form.Field>
          <Checkbox
            label="Autoplay"
            checked={autoplay}
            onChange={() => setAutoplay(!autoplay)}
          />
        </Form.Field>
        <Form.Field>
          <Input
            style={{ width: 100 }}
            value={perView}
            type="numeric"
            onChange={(e) => setPerView(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="Carousel"
            name="type"
            value="carousel"
            checked={type === "carousel"}
            onChange={() => setType("carousel")}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="Slider"
            name="type"
            value="slider"
            checked={type === "slider"}
            onChange={() => setType("slider")}
          />
        </Form.Field>
      </Form>
      
      {visible && (
        <Glide options={{ autoplay: autoplay ? 2000 : false, type, perView }}>
          <img
            className="add-img"
            src="https://m.day.kyiv.ua/sites/default/files/main/articles/16012018/1japan.jpg"
            alt="japan"
          />
          <img
            className="add-img"
            src="https://static.ukrinform.com/photos/2018_10/thumb_files/630_360_1539783094-816.jpg"
            alt="japan"
          />
          <img
            className="add-img"
            src="https://techrocks.ru/wp-content/uploads/2019/09/japan-flower-spring-blossom-cherry-blossom-plant-1593208-pxhere.com-min-1024x683.jpg"
            alt="japan"
          />
          <img
            className="add-img"
            src="https://www.space-travel.ru/workdir/bgr_country/574c6130b3df61j.jpg"
            alt="japan"
          />
          <img
            className="add-img"
            src="https://soh3japan.files.wordpress.com/2018/01/japan_kyoto_parks_pagodas_autumn_pond_branches_531659_1400x1050.jpg?w=451&h=338"
            alt="japan"
          />
          <img
            className="add-img"
            src="https://www.telegraph.co.uk/content/dam/Travel/2020/March/japan.jpg?imwidth=1400"
            alt="japan"
          />
          <img
            className="add-img"
            src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fe3952b36-743b-4084-9584-b6a11d03a435.jpg?fit=scale-down&source=next&width=700"
            alt="japan"
          />
          <img
            className="add-img"
            src="https://specials-images.forbesimg.com/imageserve/5dbc3855b4d505000678b054/960x0.jpg?fit=scale"
            alt="japan"
          />
        </Glide>
      )}
      <Button onClick={() => setVisible(!visible)}>{visible ? "Remove Slider" : "Show Slider"}</Button>
    </div>
  );
}

export default WrapperGlide;
