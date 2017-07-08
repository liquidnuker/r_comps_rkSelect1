// use export default for async wrap
export default class RkSelect1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          itemName: "item1"
        },
        {
          itemName: "item2"
        },
        {
          itemName: "item3"
        }
      ],
      selected: {
        itemName: "item1"
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      selected: {
        itemName: event.target.value
      }
    });
    console.log(event.target.value);

  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.selected.itemName);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>{this.state.items.itemName}</p>
        <select value={this.state.items.selected} onChange={this.handleChange}>
          
          {this.state.items.map((i) =>
            <option value={i.itemName}>{i.itemName}</option>
          )}

        </select>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

