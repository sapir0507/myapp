import { Alert, Button } from 'react-bootstrap';

export default function Demo1PropsChild(props) {
  return (
    <div className="container bd bd-2 p-3">
        <h4>
          <i>ChildComponent</i>
        </h4>
        <h5>
          <i>
            <Alert key={'info'} variant={'info'}>
              <Alert.Heading>
                {`${props.firstName} ${props.lastName}`}
              </Alert.Heading>
              <hr />
              <p>
                  this is some text
              </p>
            </Alert>
          </i>
        </h5>
        
    </div>
  )
}
