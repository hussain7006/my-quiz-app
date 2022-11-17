import React from 'react'

function index(props) {

    let { index, questions, selectOption } = props
    return (
        <div className="App">
            <div className="quizDiv">
                <div className="top">
                    <h1>Question</h1><span>{index + 1}/<span className='maxQo'>{questions.length}</span></span>
                </div>
                <div className="mid">
                    <h3>{questions[index].question}</h3>
                </div>
                <div className="end">
                    <div className="options">
                        {questions[index].answers.map((e, i) => <div key={i}><button onClick={() => selectOption(i)}>{e}</button></div>)}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default index
