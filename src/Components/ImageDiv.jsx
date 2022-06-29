export default function ImageDiv(props) {
  return (
    <div id="img-div">
      <img src={props.image} id="image" />
      <p id="img-caption">{props.caption}</p>
    </div>
  );
}
