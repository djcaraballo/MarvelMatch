import React from 'react'
import PropTypes from 'prop-types'

const Result = (props) => {
  return (
    <div className='result'>
      You match with...
      {props.quizResult}
    </div>
  )
}

Result.propTypes = {
  quizResult: PropTypes.string
}

export default Result
