// @flow
import React, { Component } from 'react';

type Props = {
  history: {}
};

class TempComp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>Hello</div>
  }
}

export default class Root extends Component<Props> {
  render() {
    return <TempComp/>
  }
}
