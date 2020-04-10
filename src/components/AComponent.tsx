import * as React from 'react';

interface Props {
  child: Object;
  link: string;
}

const AComponent: React.FC<Props> = (props: Props) => (
  <a href={props.link}>{props.child}</a>
)

export default AComponent;