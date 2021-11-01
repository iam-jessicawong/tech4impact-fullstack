import { CardContainer, CardImage, CardBody, CardTitle, CardText, CardPrice, CardProductName } from './styles/Card';

import Button from './Button';


const Card = (props) => {
  return (
    <CardContainer width="500px">
      <CardImage src={props.src} />
      <CardBody>
        <CardPrice>{props.price}</CardPrice>
        <CardProductName>{props.productname}</CardProductName>
        <Button fullWidth={true}/>
      </CardBody>
    </CardContainer>
  );
}
export default Card;
