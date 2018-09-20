import React from 'react'
import Pig from './Pig'

  const PigBrowser = (props) => {

    if (props.displayNameSorting === true) {
      props.displayPigs.sort(function(a, b) {
        return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
      })
    }

    if (props.displayWeightSorting === true) {
      props.displayPigs.sort(function(a, b) {
        return (a.weight > b.weight) ? -1 : (a.weight < b.weight) ? 1 : 0;
      })
    }

    return (
      <div className='PigBrowser'>
        {props.displayPigs.map(pig => {
          return (
            <Pig
              key={pig.name}
              name={pig.name}
              specialty={pig.specialty}
              greased={pig.greased}
              weight={pig.weight}
              highestMedalAchieved={pig.highestMedalAchieved}
            />
          )
        })}
      </div>
    )

  }

export default PigBrowser;
