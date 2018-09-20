import React from 'react'

class Pig extends React.Component {
  constructor () {
    super()
    this.state = {
      currentDisplay: "front"
    }
  }

  handleClick = (name) => {
    if (this.state.currentDisplay === "front") {
      this.setState({currentDisplay: "back"})
    } else if (this.state.currentDisplay === "back") {
      this.setState({currentDisplay: "front"})
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
            <p>specialty: {specialty}</p>
            <p>greased: {greased ? "yes" : "no"}</p>
            <p>weight: {weight} refrigerators</p>
            <p>highest medal achieved: {highestMedalAchieved}</p>
          </div>
        )
      }
    }
    return (
      <div className='pigTile' onClick={() => this.handleClick(name)}>
        <p>{name}</p>
        <img src={require(`../hog-imgs/${name.toLowerCase().split(" ").join("_")}.jpg`)} key={name} />
        {addDetails()}
      </div>
    )
  }

}

  // const Pig = ( {name, specialty, greased, weight, highestMedalAchieved} ) => {
  //
  //   const handleClick = (name) => {
  //     console.log(name);
  //   }
  //
  //   return (
  //     <div className='pigTile' onClick={() => handleClick(name)}>
  //         <p>{name}</p>
  //         <img src={require(`../hog-imgs/${name.toLowerCase().split(" ").join("_")}.jpg`)} key={name} />
  //     </div>
  //   )
  // }

export default Pig;
