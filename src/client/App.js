import React, { Component } from 'react';
import axios from 'axios';

import { loadModules } from './lazyLoad';
import { debounce } from './tools/globalFunc';
import config from '../../config';

import LazyLoadModules from './LazyLoadModules';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      limit: 4,
      components: [],
      offset: 0,
      totalPageModules: 0,
      newComponents: [],
    };

    this.initComp = this.props.moduleList.moduleList.slice(0, 4);
  }

  componentDidMount() {
    this.setState({
      components: this.props.page.modules,
      totalPageModules: this.props.moduleList.moduleList.length,
    });
    this.setListenner();
    console.log(this.state.components);
    // this.handleScroll();
  }

  setListenner = () => {
    window.addEventListener('wheel', debounce(this.handleScroll, 50), {
      passive: false,
    });
    window.addEventListener('touchmove', debounce(this.handleScroll, 50), {
      passive: false,
    });
    window.addEventListener('scroll', debounce(this.handleScroll, 50), {
      passive: false,
    });
  };

  handleScroll = (event) => {
    event && event.preventDefault();

    if (
      window.innerHeight + Math.round(window.scrollY) >=
        document.body.offsetHeight &&
      !this.state.loading
    ) {
      console.log('app scroll listener');
      if (this.state.components.length < this.state.totalPageModules) {
        this.setState({
          offset:
            this.state.components.length + this.state.newComponents.length,
          loading: true,
        });
        this.loadNextComponents();
      }
    }
  };

  loadNextComponents = () => {
    return axios({
      method: 'GET',
      url: config.pageUrl,
      headers: {
        'x-api-key': config.apiKey,
      },
      params: {
        path: '/vamp/home',
        site: config.internalName,
        includeContent: true,
        moduleOffset: this.state.offset,
        moduleLimit: 4,
        languageCode: 'default',
        countryCode: 'IN',
      },
    })
      .then((res) => {
        this.setState((st) => ({
          newComponents: [...res.data.modules],
        }));
        console.log('State updated.', this.state.newComponents);
      })
      .then(() => this.setState({ loading: false }))
      .catch((err) => console.log(err.message));
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div>
        {loadModules(this.initComp, this.state.components)}
        <LazyLoadModules
          components={this.state.components}
          moduleList={this.props.moduleList.moduleList}
          offset={4}
        />
      </div>
    );
  }
}
