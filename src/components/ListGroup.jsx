import Message from './Message';
const ListGroup = (props) => {
  return (
    <div>
      <Message text={props.text} />
      <ul className="list-group">
        {props.data.map(function (item) {
          return (
            <li key={item.id} className="list-group-item">
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListGroup;
