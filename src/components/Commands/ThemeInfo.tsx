const ThemeInfo = (args: string[]) => {
  if (args.length > 0) return <p>theme: {args.join(' ')} is not valid</p>;
  return (
    <div
      className='mb-3 mt-1'
      data-testid='themeinfo'
    >
      <p className='font-bold leading-6 text-[#DDEEDD]'>Name: Arthur</p>
      <p className='font-bold leading-6 text-[#DDEEDD]'>foreground: #DDEEDD</p>
      <p className='font-bold leading-6 text-[#1C1C1C]'>background: #1C1C1C</p>
      <p className='font-bold leading-6 text-[#3D352A]'>Color_01: #3D352A</p>
      <p className='font-bold leading-6 text-[#CD5C5C]'>Color_02: #CD5C5C</p>
      <p className='font-bold leading-6 text-[#86AF80]'>Color_03: #86AF80</p>
      <p className='font-bold leading-6 text-[#E8AE5B]'>Color_04: #E8AE5B</p>
      <p className='font-bold leading-6 text-[#6495ED]'>Color_05: #6495ED</p>
      <p className='font-bold leading-6 text-[#DEB887]'>Color_06: #DEB887</p>
      <p className='font-bold leading-6 text-[#B0C4DE]'>Color_07: #B0C4DE</p>
      <p className='font-bold leading-6 text-[#BBAA99]'>Color_08: #BBAA99</p>
      <p className='font-bold leading-6 text-[#554444]'>Color_09: #554444</p>
      <p className='font-bold leading-6 text-[#CC5533]'>Color_10: #CC5533</p>
      <p className='font-bold leading-6 text-[#88AA22]'>Color_11: #88AA22</p>
      <p className='font-bold leading-6 text-[#FFA75D]'>Color_12: #FFA75D</p>
      <p className='font-bold leading-6 text-[#87CEEB]'>Color_13: #87CEEB</p>
      <p className='font-bold leading-6 text-[#996600]'>Color_14: #996600</p>
      <p className='font-bold leading-6 text-[#B0C4DE]'>Color_15: #B0C4DE</p>
      <p className='font-bold leading-6 text-[#DDCCBB]'>Color_16: #DDCCBB</p>
    </div>
  );
};

export default ThemeInfo;
