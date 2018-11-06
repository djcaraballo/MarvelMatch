import React from 'react'
import PropTypes from 'prop-types'

const Result = ({ quizResult }) => {
  return (
    <div className='result'>
      You match with...
      {quizResult}
    </div>
  )
}

Result.propTypes = {
  quizResult: PropTypes.string
}

export default Result
