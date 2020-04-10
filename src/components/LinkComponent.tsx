import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  child: Object;
  index: number;
  name: string;
}

const LinkComponent: React.FC<Props> = (props: Props) => (
  <Link to={`/${props.name}/${props.index}`}>{props.child}</Link>
)

export default LinkComponent;