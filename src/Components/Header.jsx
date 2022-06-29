

export default function Header(props){
    console.log(props)
    return (
        <h1 id="title">{props.name}</h1>
    )
}