interface IStyleObject {
  readonly [key: string]: string;
}

const classList =
  (styleObject: IStyleObject) =>
  (...classNames: string[]) =>
    classNames.reduce((list, className) => {
      let output = list;
      if (styleObject[className]) {
        if (output) output += ' ';
        output += styleObject[className];
      }
      return output;
    }, '');

export default classList;
