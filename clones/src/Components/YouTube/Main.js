import React from 'react';
import HamburgerNav from './HamburgerNav';
import HeaderPill from './HeaderPill';
import thumb1 from "../../assets/pic1.jpg";
import uploader from "../../assets/uploader.jpg";

const Main = (props) => {
  const { hamburgerNavState } = props;
  return (
    <main className="flex flex-row flex-grow">
      <section className={
        hamburgerNavState
          ? "w-1/8 h-full bg-gray-800 border-r border-gray-700"
          : "w-1/16 h-full bg-gray-800 border-r border-gray-700"
      }>
        <HamburgerNav hamburgerNavState={hamburgerNavState} />
      </section>
      <section className="flex flex-col w-full h-screen bg-gray-800 border-b border-gray-700 overflow-x-auto overscroll-x-contain">
        <section className="hiddenScrollbar flex flex-row w-full h-16 bg-gray-800 border-b border-gray-700 overflow-x-auto overscroll-x-contain">
          <HeaderPill pillText="Django" />
          <HeaderPill pillText="React" />
          <HeaderPill pillText="Linux" />
          <HeaderPill pillText="PWA" />
          <HeaderPill pillText="Code" />
          <HeaderPill pillText="JavaScript" />
          <HeaderPill pillText="Design" />
          <HeaderPill pillText="Cars" />
          <HeaderPill pillText="Python" />
          <HeaderPill pillText="Food" />
          <HeaderPill pillText="Travel" />
          <HeaderPill pillText="Music" />
          <HeaderPill pillText="Figma" />
          <HeaderPill pillText="Vue" />
          <HeaderPill pillText="DevOps" />
          <HeaderPill pillText="Technology" />
          <HeaderPill pillText="Summer" />
          <HeaderPill pillText="UX" />
          <HeaderPill pillText="UI" />
          <HeaderPill pillText="Motorsports" />
          <HeaderPill pillText="Reviews" />
          <HeaderPill pillText="Ansible" />
          <HeaderPill pillText="Winter" />
          <HeaderPill pillText="Automation" />
        </section>
        <section className="grid grid-flow-row grid-cols-5 grid-rows-3 gap-4 h-screen bg-gray-900 py-6 px-6">
          <div className="flex flex-col">
            <div className="rounded-lg bg-blue-600 h-48 hover:shadow-lg border border-gray-700 hover:border-red-800">
              <img src={thumb1} alt="Thumbnail" className="rounded-lg object-cover w-full h-full"></img>
            </div>
            <div className="flex flex-row mt-2">
              <img alt="OP" src={uploader} className="rounded-full h-8 w-8 mr-4"></img>
              <div className="flex flex-col">
                <h4 className="text-lg text-gray-200 font-semibold">React Tutorial - 2021</h4>
                <h6 className="text-sm text-gray-400 font-medium">freeCodeCamp.Org</h6>
                <div className="flex flex-row divide-x divide-gray-400 divide-dotted">
                  <h6 className="text-sm text-gray-400 font-normal font-mono">1.8M<span className="mx-2 font-sans">views</span></h6>
                  <h6 className="px-2 text-sm text-gray-400 font-normal font-mono">7<span className="mx-2 font-sans">hours</span></h6>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="rounded-lg bg-blue-600 h-48 hover:shadow-lg border border-gray-700 hover:border-red-800">
              <img src={thumb1} alt="Thumbnail" className="rounded-lg object-cover w-full h-full"></img>
            </div>
            <div className="flex flex-row mt-2">
              <img alt="OP" src={uploader} className="rounded-full h-8 w-8 mr-4"></img>
              <div className="flex flex-col">
                <h4 className="text-lg text-gray-200 font-semibold">React Tutorial - 2021</h4>
                <h6 className="text-sm text-gray-400 font-medium">freeCodeCamp.Org</h6>
                <div className="flex flex-row divide-x divide-gray-400 divide-dotted">
                  <h6 className="text-sm text-gray-400 font-normal font-mono">1.8M<span className="mx-2 font-sans">views</span></h6>
                  <h6 className="px-2 text-sm text-gray-400 font-normal font-mono">7<span className="mx-2 font-sans">hours</span></h6>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="rounded-lg bg-blue-600 h-48 hover:shadow-lg border border-gray-700 hover:border-red-800">
              <img src={thumb1} alt="Thumbnail" className="rounded-lg object-cover w-full h-full"></img>
            </div>
            <div className="flex flex-row mt-2">
              <img alt="OP" src={uploader} className="rounded-full h-8 w-8 mr-4"></img>
              <div className="flex flex-col">
                <h4 className="text-lg text-gray-200 font-semibold">React Tutorial - 2021</h4>
                <h6 className="text-sm text-gray-400 font-medium">freeCodeCamp.Org</h6>
                <div className="flex flex-row divide-x divide-gray-400 divide-dotted">
                  <h6 className="text-sm text-gray-400 font-normal font-mono">1.8M<span className="mx-2 font-sans">views</span></h6>
                  <h6 className="px-2 text-sm text-gray-400 font-normal font-mono">7<span className="mx-2 font-sans">hours</span></h6>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="rounded-lg bg-blue-600 h-48 hover:shadow-lg border border-gray-700 hover:border-red-800">
              <img src={thumb1} alt="Thumbnail" className="rounded-lg object-cover w-full h-full"></img>
            </div>
            <div className="flex flex-row mt-2">
              <img alt="OP" src={uploader} className="rounded-full h-8 w-8 mr-4"></img>
              <div className="flex flex-col">
                <h4 className="text-lg text-gray-200 font-semibold">React Tutorial - 2021</h4>
                <h6 className="text-sm text-gray-400 font-medium">freeCodeCamp.Org</h6>
                <div className="flex flex-row divide-x divide-gray-400 divide-dotted">
                  <h6 className="text-sm text-gray-400 font-normal font-mono">1.8M<span className="mx-2 font-sans">views</span></h6>
                  <h6 className="px-2 text-sm text-gray-400 font-normal font-mono">7<span className="mx-2 font-sans">hours</span></h6>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="rounded-lg bg-blue-600 h-48 hover:shadow-lg border border-gray-700 hover:border-red-800">
              <img src={thumb1} alt="Thumbnail" className="rounded-lg object-cover w-full h-full"></img>
            </div>
            <div className="flex flex-row mt-2">
              <img alt="OP" src={uploader} className="rounded-full h-8 w-8 mr-4"></img>
              <div className="flex flex-col">
                <h4 className="text-lg text-gray-200 font-semibold">React Tutorial - 2021</h4>
                <h6 className="text-sm text-gray-400 font-medium">freeCodeCamp.Org</h6>
                <div className="flex flex-row divide-x divide-gray-400 divide-dotted">
                  <h6 className="text-sm text-gray-400 font-normal font-mono">1.8M<span className="mx-2 font-sans">views</span></h6>
                  <h6 className="px-2 text-sm text-gray-400 font-normal font-mono">7<span className="mx-2 font-sans">hours</span></h6>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="rounded-lg bg-blue-600 h-48 hover:shadow-lg border border-gray-700 hover:border-red-800">
              <img src={thumb1} alt="Thumbnail" className="rounded-lg object-cover w-full h-full"></img>
            </div>
            <div className="flex flex-row mt-2">
              <img alt="OP" src={uploader} className="rounded-full h-8 w-8 mr-4"></img>
              <div className="flex flex-col">
                <h4 className="text-lg text-gray-200 font-semibold">React Tutorial - 2021</h4>
                <h6 className="text-sm text-gray-400 font-medium">freeCodeCamp.Org</h6>
                <div className="flex flex-row divide-x divide-gray-400 divide-dotted">
                  <h6 className="text-sm text-gray-400 font-normal font-mono">1.8M<span className="mx-2 font-sans">views</span></h6>
                  <h6 className="px-2 text-sm text-gray-400 font-normal font-mono">7<span className="mx-2 font-sans">hours</span></h6>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="rounded-lg bg-blue-600 h-48 hover:shadow-lg border border-gray-700 hover:border-red-800">
              <img src={thumb1} alt="Thumbnail" className="rounded-lg object-cover w-full h-full"></img>
            </div>
            <div className="flex flex-row mt-2">
              <img alt="OP" src={uploader} className="rounded-full h-8 w-8 mr-4"></img>
              <div className="flex flex-col">
                <h4 className="text-lg text-gray-200 font-semibold">React Tutorial - 2021</h4>
                <h6 className="text-sm text-gray-400 font-medium">freeCodeCamp.Org</h6>
                <div className="flex flex-row divide-x divide-gray-400 divide-dotted">
                  <h6 className="text-sm text-gray-400 font-normal font-mono">1.8M<span className="mx-2 font-sans">views</span></h6>
                  <h6 className="px-2 text-sm text-gray-400 font-normal font-mono">7<span className="mx-2 font-sans">hours</span></h6>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="rounded-lg bg-blue-600 h-48 hover:shadow-lg border border-gray-700 hover:border-red-800">
              <img src={thumb1} alt="Thumbnail" className="rounded-lg object-cover w-full h-full"></img>
            </div>
            <div className="flex flex-row mt-2">
              <img alt="OP" src={uploader} className="rounded-full h-8 w-8 mr-4"></img>
              <div className="flex flex-col">
                <h4 className="text-lg text-gray-200 font-semibold">React Tutorial - 2021</h4>
                <h6 className="text-sm text-gray-400 font-medium">freeCodeCamp.Org</h6>
                <div className="flex flex-row divide-x divide-gray-400 divide-dotted">
                  <h6 className="text-sm text-gray-400 font-normal font-mono">1.8M<span className="mx-2 font-sans">views</span></h6>
                  <h6 className="px-2 text-sm text-gray-400 font-normal font-mono">7<span className="mx-2 font-sans">hours</span></h6>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="rounded-lg bg-blue-600 h-48 hover:shadow-lg border border-gray-700 hover:border-red-800">
              <img src={thumb1} alt="Thumbnail" className="rounded-lg object-cover w-full h-full"></img>
            </div>
            <div className="flex flex-row mt-2">
              <img alt="OP" src={uploader} className="rounded-full h-8 w-8 mr-4"></img>
              <div className="flex flex-col">
                <h4 className="text-lg text-gray-200 font-semibold">React Tutorial - 2021</h4>
                <h6 className="text-sm text-gray-400 font-medium">freeCodeCamp.Org</h6>
                <div className="flex flex-row divide-x divide-gray-400 divide-dotted">
                  <h6 className="text-sm text-gray-400 font-normal font-mono">1.8M<span className="mx-2 font-sans">views</span></h6>
                  <h6 className="px-2 text-sm text-gray-400 font-normal font-mono">7<span className="mx-2 font-sans">hours</span></h6>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="rounded-lg bg-blue-600 h-48 hover:shadow-lg border border-gray-700 hover:border-red-800">
              <img src={thumb1} alt="Thumbnail" className="rounded-lg object-cover w-full h-full"></img>
            </div>
            <div className="flex flex-row mt-2">
              <img alt="OP" src={uploader} className="rounded-full h-8 w-8 mr-4"></img>
              <div className="flex flex-col">
                <h4 className="text-lg text-gray-200 font-semibold">React Tutorial - 2021</h4>
                <h6 className="text-sm text-gray-400 font-medium">freeCodeCamp.Org</h6>
                <div className="flex flex-row divide-x divide-gray-400 divide-dotted">
                  <h6 className="text-sm text-gray-400 font-normal font-mono">1.8M<span className="mx-2 font-sans">views</span></h6>
                  <h6 className="px-2 text-sm text-gray-400 font-normal font-mono">7<span className="mx-2 font-sans">hours</span></h6>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="rounded-lg bg-blue-600 h-48 hover:shadow-lg border border-gray-700 hover:border-red-800">
              <img src={thumb1} alt="Thumbnail" className="rounded-lg object-cover w-full h-full"></img>
            </div>
            <div className="flex flex-row mt-2">
              <img alt="OP" src={uploader} className="rounded-full h-8 w-8 mr-4"></img>
              <div className="flex flex-col">
                <h4 className="text-lg text-gray-200 font-semibold">React Tutorial - 2021</h4>
                <h6 className="text-sm text-gray-400 font-medium">freeCodeCamp.Org</h6>
                <div className="flex flex-row divide-x divide-gray-400 divide-dotted">
                  <h6 className="text-sm text-gray-400 font-normal font-mono">1.8M<span className="mx-2 font-sans">views</span></h6>
                  <h6 className="px-2 text-sm text-gray-400 font-normal font-mono">7<span className="mx-2 font-sans">hours</span></h6>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="rounded-lg bg-blue-600 h-48 hover:shadow-lg border border-gray-700 hover:border-red-800">
              <img src={thumb1} alt="Thumbnail" className="rounded-lg object-cover w-full h-full"></img>
            </div>
            <div className="flex flex-row mt-2">
              <img alt="OP" src={uploader} className="rounded-full h-8 w-8 mr-4"></img>
              <div className="flex flex-col">
                <h4 className="text-lg text-gray-200 font-semibold">React Tutorial - 2021</h4>
                <h6 className="text-sm text-gray-400 font-medium">freeCodeCamp.Org</h6>
                <div className="flex flex-row divide-x divide-gray-400 divide-dotted">
                  <h6 className="text-sm text-gray-400 font-normal font-mono">1.8M<span className="mx-2 font-sans">views</span></h6>
                  <h6 className="px-2 text-sm text-gray-400 font-normal font-mono">7<span className="mx-2 font-sans">hours</span></h6>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="rounded-lg bg-blue-600 h-48 hover:shadow-lg border border-gray-700 hover:border-red-800">
              <img src={thumb1} alt="Thumbnail" className="rounded-lg object-cover w-full h-full"></img>
            </div>
            <div className="flex flex-row mt-2">
              <img alt="OP" src={uploader} className="rounded-full h-8 w-8 mr-4"></img>
              <div className="flex flex-col">
                <h4 className="text-lg text-gray-200 font-semibold">React Tutorial - 2021</h4>
                <h6 className="text-sm text-gray-400 font-medium">freeCodeCamp.Org</h6>
                <div className="flex flex-row divide-x divide-gray-400 divide-dotted">
                  <h6 className="text-sm text-gray-400 font-normal font-mono">1.8M<span className="mx-2 font-sans">views</span></h6>
                  <h6 className="px-2 text-sm text-gray-400 font-normal font-mono">7<span className="mx-2 font-sans">hours</span></h6>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="rounded-lg bg-blue-600 h-48 hover:shadow-lg border border-gray-700 hover:border-red-800">
              <img src={thumb1} alt="Thumbnail" className="rounded-lg object-cover w-full h-full"></img>
            </div>
            <div className="flex flex-row mt-2">
              <img alt="OP" src={uploader} className="rounded-full h-8 w-8 mr-4"></img>
              <div className="flex flex-col">
                <h4 className="text-lg text-gray-200 font-semibold">React Tutorial - 2021</h4>
                <h6 className="text-sm text-gray-400 font-medium">freeCodeCamp.Org</h6>
                <div className="flex flex-row divide-x divide-gray-400 divide-dotted">
                  <h6 className="text-sm text-gray-400 font-normal font-mono">1.8M<span className="mx-2 font-sans">views</span></h6>
                  <h6 className="px-2 text-sm text-gray-400 font-normal font-mono">7<span className="mx-2 font-sans">hours</span></h6>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main >
  );
};

export default Main;
