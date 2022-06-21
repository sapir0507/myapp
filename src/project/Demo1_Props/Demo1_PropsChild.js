export default function Demo1PropsChild(props) {
  return (
    <div>
        <h3>
          <i>ChildComponent</i>
        </h3>
        <h3>
          <i>
            {`${props.firstName} ${props.lastName}`}
        
          </i>
        </h3>
        
    </div>
  )
}
