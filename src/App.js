// @ts-nocheck
import React from 'react';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: false
    }
  }

  componentDidMount() {
    let url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp)
        this.setState({ data: resp })
      })
    }).catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const data = this.state.data;
    // console.log(data);
    return (
      <div>
        {
          data ?
            <div style={{
              display: 'flex',
              maxWidth: 1210,
              margin: '0 auto',
              flexWrap: 'wrap',
              gap: 35
            }}>
              {data.map(element => {
                return (

                  <div key={element.id} style={{
                    flexBasis: 380,
                    textAlign: 'justify',
                    boxShadow: '0px 0px 33px #b4b0e8',
                    padding: 15
                  }}>
                    {element.title}
                    <br />
                    {element.body}
                  </div>
                )
              })}
            </div> : <p>Please wait...</p>
        }
      </div>
    )
  }
}
