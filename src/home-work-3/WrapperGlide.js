import React, { Component } from 'react';
import { Checkbox, Container, Radio, Form } from "semantic-ui-react";
import Glide from './Glide.js'
import './glide-module.css'

class WrapperGlide extends Component {
  state = {
    type: 'carousel',
    perView: 3,
    visible: true
  };

    render() {
      const { type, perView } = this.state;
        return (
      <div>
          <Form>
          <Form.Field>
            <Radio
              label='Carousel'
              name='type'
              value='carousel'
              checked={type === 'carousel'}
              onChange={() => this.setState({ type: 'carousel' })}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Slider'
              name='type'
              value='slider'
              checked={type === 'slider'}
              onChange={() => this.setState({ type: 'slider' })}
            />
          </Form.Field>
        </Form>
        <Glide options={{type, perView}}>
          <img className="add-img" src="https://m.day.kyiv.ua/sites/default/files/main/articles/16012018/1japan.jpg" 
          alt="japan"/>
          <img className="add-img"
          src="https://static.ukrinform.com/photos/2018_10/thumb_files/630_360_1539783094-816.jpg"
          alt="japan"/>
          <img className="add-img"
          src="https://techrocks.ru/wp-content/uploads/2019/09/japan-flower-spring-blossom-cherry-blossom-plant-1593208-pxhere.com-min-1024x683.jpg"
          alt="japan"/>
          <img className="add-img"
          src="https://www.space-travel.ru/workdir/bgr_country/574c6130b3df61j.jpg"
          alt="japan"/>
          <img className="add-img"
          src="https://soh3japan.files.wordpress.com/2018/01/japan_kyoto_parks_pagodas_autumn_pond_branches_531659_1400x1050.jpg?w=451&h=338"
          alt="japan"/>
        </Glide>
      </div>
        )
    }
}

export default WrapperGlide;