export type ElementProps = {
  [key: string]: any;
  children?: string | ElementTree[];
}

type Id = number | string;

export type ElementTree = {
  id: Id;
  type: string;
  props: ElementProps;
}