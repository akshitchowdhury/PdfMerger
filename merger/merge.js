import PDFMerger from 'pdf-merger-js';

var merger = new PDFMerger();

const merge = async (p1,p2) => {
  await merger.add('./files/1.pdf');  //merge all pages. parameter is the path to file and filename.
  await merger.add('./files/2.pdf'); // merge only page 2
  
  let d = new Date().getTime()
  await merger.save(`public/${d}.pdf`); //save under given name and reset the internal document
  return d;
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
};

export default merge;