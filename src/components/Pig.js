import React from 'react';

export default class Pig extends React.Component {
  constructor(){
    super()
    this.state={
      currentDisplay: "front"
    }
  }

  handleClick = (name) => {
    if (this.state.currentDisplay === "front"){
      // console.log(this.state)
      this.setState({
        currentDisplay: "back"
      })
    }else if (this.state.currentDisplay === "back") {
      this.setState({
        currentDisplay: "front"
      })
      // console.log(this.state)
      //toggle state to = "back"
      //flip tileDisplay to back of card with Pigs Data diplayed
    }

  }

  render() {
    let {name, specialty, greased, weight, highestMedalAchieved} = this.props
    const addDetails = () => {
      if (this.state.currentDisplay === "front") {
        return null

      } else {
        return (
          <div>
            <p key={name}>Specialty: {specialty}</p>
            <p>Greased: {greased ? "yes": "no"}</p>
            <p>Weight: {weight} Refrigerators</p>
            <p>Highest Medal Acheived: {highestMedalAchieved}</p>
          </div>
        )
      }
    }
    return(
      <div className="pigTile"  onClick={()=>this.handleClick(name)}>
        <h1>{name}</h1>
        <img src={require(`../hog-imgs/${name.toLowerCase().split(' ').join('_')}.jpg`)} key={name}/>
        {addDetails()}
      </div>
    )
  }
}
//
// const Pig = ({ name, specialty, greased, weight, highestMedalAchieved }) => {
//   const handleClick = (event) => {
//     console.log(name)
//   }
//   return(
//     <div className="pigTile" key={name} onClick={()=>handleClick(name)}>
//       <a className="header">
//       <h1>{name}</h1>
//       <img src={require(`../hog-imgs/${name.toLowerCase().split(' ').join('_')}.jpg`)} key={name}/>
//     </a>
//     </div>
//   )
// }
