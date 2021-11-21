import { Badge, BadgeProps } from '@chakra-ui/react';
import * as React from 'react';

type LabelProps = JSX.IntrinsicElements['span'] & BadgeProps;

const Label: React.FC<LabelProps> = ({ className, children, ...rest }) => {
  if (className?.includes('feature--new')) {
    return (
      <Badge colorScheme="purple" fontSize="0.8em" {...rest}>
        {children}
      </Badge>
    );
  }

  if (className?.includes('feature--fixed')) {
    return (
      <Badge colorScheme="red" fontSize="0.8em" {...rest}>
        {children}
      </Badge>
    );
  }

  if (className?.includes('feature--changed')) {
    return (
      <Badge colorScheme="blue" fontSize="0.8em" {...rest}>
        {children}
      </Badge>
    );
  }

  if (className?.includes('feature--deprecated')) {
    return (
      <Badge colorScheme="yellow" fontSize="0.8em" {...rest}>
        {children}
      </Badge>
    );
  }

  return <span {...rest}>{children}</span>;
};

export default Label;
