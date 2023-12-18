const Echo = (args: string[]) => {
  return (
    <div>
      <span>{args.join(' ')}</span>
    </div>
  );
};
export default Echo;
