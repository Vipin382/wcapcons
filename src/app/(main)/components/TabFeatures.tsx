import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { cardsData } from "@/lib/data";
import Card from "./Cards";

const TabFeatures = () => {
  return (
    <div className="px-8">
      <div className="px-2">
        <div className="text-2xl font-bold text-background-100">
          Tab into the features which let users come back
        </div>
        <div className="text-background-100">
          Whenever Passion rolls out new features, your app is updated
          automatically - at no extra cost.
        </div>
      </div>
      <TabGroup className={"mt-8"}>
        <TabList className="flex gap-x-5 w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base  sm:text-sm">
          <Tab className="data-[selected]:border-primary-800 hover:text-primary-800 transition-all text-xl outline-none border-b border-transparent font-bold hover:border-b hover:border-primary-800 text-background-100 font-lg data-[selected]:border-b data-[selected]:text-primary-800 ">
            Create
          </Tab>
          <Tab className="data-[selected]:border-primary-800 hover:text-primary-800 border-b text-xl outline-none border-transparent transition-all font-bold hover:border-b hover:border-primary-800 text-background-100 font-lg data-[selected]:border-b data-[selected]:text-primary-800 ">
            Engage
          </Tab>
          <Tab className="data-[selected]:border-primary-800 hover:text-primary-800 transition-all text-xl outline-none font-bold hover:border-b hover:border-primary-800 text-background-100 font-lg data-[selected]:border-b data-[selected]:text-primary-800 ">
            Monetize
          </Tab>
        </TabList>
        <TabPanels className={"mt-4 px-4"}>
          <TabPanel>
            <div className="grid grid-cols-3 gap-x-8">
              {cardsData.map((item, index) => {
                return (
                  <Card
                    key={index}
                    imageUrl={item.imageUrl}
                    description={item.description}
                    title={item.title}
                    href={item.href}
                  />
                );
              })}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-x-8">
              {cardsData.map((item, index) => {
                return (
                  <Card
                    key={index}
                    imageUrl={item.imageUrl}
                    description={item.description}
                    title={item.title}
                    href={item.href}
                  />
                );
              })}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-x-8">
              {cardsData.map((item, index) => {
                return (
                  <Card
                    key={index}
                    imageUrl={item.imageUrl}
                    description={item.description}
                    title={item.title}
                    href={item.href}
                  />
                );
              })}
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default TabFeatures;
