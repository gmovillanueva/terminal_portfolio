const Echo = (args: string[]) => {
  return (
    <div>
      echo <span>{args.join(' ')}</span>
    </div>
  );
};
export default Echo;
