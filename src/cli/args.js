const ARG_PREFIX = '--';
const ARG_LIST_SEPARATOR = ', ';

const parseArgs = () => {
  const [execPath, appPath, ...args] = process.argv;
  const argNames = args
    .filter((arg) => arg.startsWith(ARG_PREFIX))
    .map((name) => name.slice(ARG_PREFIX.length));

  console.log(argNames.map((name, index) =>
    `${name} is ${args[index * 2 + 1]}`).join(ARG_LIST_SEPARATOR)
  );
};

parseArgs();
