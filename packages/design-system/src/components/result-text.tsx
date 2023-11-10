import { Text } from '.';

type IProps = {
  result?: string | number;
}

export const ResultText = (props: IProps) => {
  return (
    <Text
      variant='h6'
      color='black'
      fontWeight={700}
    >
      {props.result || 0} Template Matches
    </Text>
  )
}