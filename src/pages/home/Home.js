import React, { Component } from "react";
import Banner from "../../component/banner/banner";
import Popular from "../../component/popular/Popular";
import { Container } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "../../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "calc(98vw)",
    //   maxWidth: 360,
    backgroundColor: "black",
  },
}));
class Home extends Component {
  // classes = useStyles();
  
  componentDidMount() {
    this.props.requestApiData();
    // console.log(this.props.requestApiData());
  }
  render() {
    //  this.data = this.props.data;
    //
    var x =JSON.parse(JSON.stringify(this.props.data));
    // this.classes = useStyles();
    //  console.log(x);
    //  console.log( x.state);
     const { results = [] } = x.state;
    //  const [fabs,setFabs] =React.useState([]);

    //  console.log(results);
    return (
      <div style={{width: "calc(98vw)",
      //   maxWidth: 360,
      backgroundColor: "black", color: "#ba000d"}}>
      {/* <div className={''}> */}
        <Banner results={results} setDetails={this.props.setDetails}/>

        <Container>
          <Divider variant="middle" />

          <Popular  results={results} fabs ={this.props.fabs} setFabs={this.props.setFabs} setDetails={this.props.setDetails}/>
          <Divider variant="middle" />

          {/* <Popular /> */}
          <Divider variant="middle" />
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => ({ data: state });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
