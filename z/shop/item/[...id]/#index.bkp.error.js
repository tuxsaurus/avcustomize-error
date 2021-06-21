import React, { Component } from "react";

import Layout from "@/component/layout";

import { useRouter } from "next/router";

//const router = useRouter();

//function r() {
//  const router = useRouter();
//  return router;
//}
function getRouteData() {
  //const router = useRouter();
  const { asPath, route, query } = useRouter();
  const { id } = query;
  this.setState({
    asPath: asPath,
  });
  //const q = query;
  console.log("router");
  console.log(r());
  return asPath;
}

//const query = () => useRouter().query;
//const { asPath, route, query } = useRouter();

export default class PostID extends Component {
  constructor(props) {
    super(props);
    // N’appelez pas `this.setState()` ici !
    this.state = { asPath: "", route: "", query: "" };
    //this.getRouteData = this.getRouteData.bind(this);
  }

  componentDidMount() {
    // Runs after the first render() lifecycle
    //this.getRouteData();
    //const { asPath, route, query } = useRouter();
    //this.setState({
    //  asPath: asPath,
    //});
  }

  render() {
    return (
      <>
        <Layout>
          <h1>Item ID</h1>
          <ul>{getRouteData()}</ul>
        </Layout>
      </>
    );
  }
}
