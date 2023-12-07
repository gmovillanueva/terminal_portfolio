const Contact = (args: string[]) => {
  if (args.length > 0) return <p>about: {args.join(' ')} is not valid</p>;
  return (
    <div
      className='mb-3 mt-1'
      data-testid='about'
    >
      <p className='font-bold leading-6 text-[#3D352A]'>Color_01</p>
      <p className='font-bold leading-6 text-[#CD5C5C]'>Color_02</p>
      <p className='font-bold leading-6 text-[#86AF80]'>Color_03</p>
      <p className='font-bold leading-6 text-[#E8AE5B]'>Color_04</p>
      <p className='font-bold leading-6 text-[#6495ED]'>Color_05</p>
      <p className='font-bold leading-6 text-[#DEB887]'>Color_06</p>
      <p className='font-bold leading-6 text-[#B0C4DE]'>Color_07</p>
      <p className='font-bold leading-6 text-[#BBAA99]'>Color_08</p>
      <p className='font-bold leading-6 text-[#554444]'>Color_09</p>
      <p className='font-bold leading-6 text-[#CC5533]'>Color_10</p>
      <p className='font-bold leading-6 text-[#88AA22]'>Color_11</p>
      <p className='font-bold leading-6 text-[#FFA75D]'>Color_12</p>
      <p className='font-bold leading-6 text-[#87CEEB]'>Color_13</p>
      <p className='font-bold leading-6 text-[#996600]'>Color_14</p>
      <p className='font-bold leading-6 text-[#B0C4DE]'>Color_15</p>
      <p className='font-bold leading-6 text-[#DDCCBB]'>Color_16</p>
    </div>
  );
};

export default Contact;
