import React, { useState } from 'react';
import * as c from './Components';
const App = () => {
  const [component, setComponent] = useState('ReRenderCounter');
  const components = ['ReRenderCounter', 'RefDomElements', 'ForwardingRefs'];
  return (
    <div className="p-3 bg-slate-900 text-yellow-100 min-h-screen flex flex-col items-center pt-6 gap-4">
      <div className=" flex gap-2 h-10">
        {components.map((item, index) => (
          <button
            className="bg-blue-600 hover:bg-green-400 py-2 px-4 rounded font-semibold "
            key={index}
            id={item}
            onClick={(e) => {
              setComponent(e.target.id);
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <div>
        {c[component] ? (
          React.createElement(c[component])
        ) : (
          <p> Component Not Found</p>
        )}
      </div>
    </div>
  );
};

export default App;
