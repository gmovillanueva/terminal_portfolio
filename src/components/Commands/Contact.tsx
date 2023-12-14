const Contact = (args: string[]) => {
  if (args.length > 0)
    return <p>contact: {args.join(' ')} is not a valid command.</p>;
  return (
    <div
      className='mb-3 ml-5 mt-1'
      data-testid='contact'
    >
      <a
        className='text-color_11'
        href='https://www.linkedin.com/in/gmownewton/'
        target='_blank'
        rel='noreferrer'
      >
        LinkedIn &#60;- Click me!
      </a>
    </div>
  );
};

export default Contact;
