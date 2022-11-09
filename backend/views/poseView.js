const React = require("React")

class New extends React.Component {
  render() {
    return (
      <div className="box3">
        <link rel="stylesheet" href="/css/app.css" />
        <h1 id="header">
          <i>Log New Yoga Pose</i>
        </h1>
        <form action="/products" method="POST">
          Name:
          <br></br>
          <input type="text" name="name" placeholder="name" />
          <br></br>
          Description:
          <br></br>
          <input type="text" name="description" placeholder="description" />
          <br></br>
          Image URL:
          <br></br>
          <input type="text" name="img" placeholder="url" />
          <br></br>
          Trainer Note:
          <br></br>
          <input type="text" name="note" placeholder="trainer-note" />
          <br></br>
          <input type="submit" name="" value="Log New Pose" />
          <br></br>
          <a href={`/products/`} style={{ marginLeft: 10 + "em" }}>
            Back{" "}
          </a>
        </form>
      </div>
    )
  }
}
module.exports = New
