import React, {Component} from 'react';
import axios from 'axios';

import {loadModules} from './lazyLoad';
import {debounce} from './tools/globalFunc';
import config from '../../config';


export default class App extends Component  {
  constructor(props) {
    super(props);
      this.state = {
          limit: 4,
          components: [],
          offset: 0,
          totalPageModules:0   
      }
  }

  componentDidMount() {
    this.setState({
      components: this.props.page.modules,
      totalPageModules: this.props.moduleList.moduleList.length
    })
    this.setListenner();
    // this.handleScroll();
  }

  setListenner = () => {

    window.addEventListener("wheel", debounce(this.handleScroll, 50), {
			passive: false
		});
		window.addEventListener("touchmove", debounce(this.handleScroll, 50), {
			passive: false
		});
		window.addEventListener("scroll", debounce(this.handleScroll, 50), {
			passive: false
		});		
  }

  handleScroll = event => {
    event && event.preventDefault();

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      if(this.state.components.length < this.state.totalPageModules) {
        this.setState({offset: this.state.components.length})
        this.loadNextComponents();

      }
    }		
  };

  loadNextComponents = () => {
    return axios({
      method: "GET",
      url: config.pageUrl,
      headers: {
        "x-api-key": config.apiKey,
      },
      params : {
        path: '/',
        site: config.internalName,
        includeContent: true,
        moduleOffset: this.state.offset,
        moduleLimit: 4,
        languageCode : 'default',
        countryCode: 'IN'
      }
    })
    .then(res => this.setState(st => ({
      components: [...st.components, ...res.data.modules]
    })))
    .catch(err => console.log(err.message))

  }


  render() {
    return  (
      <div>
        {
          loadModules(this.state.components)
        }
      </div>
    )
  }
}
