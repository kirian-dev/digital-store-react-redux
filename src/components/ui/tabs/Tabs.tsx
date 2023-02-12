import { FC } from 'react';
import { Tab } from './Tab';

interface TabsProps {
  items: { id: string; category: string }[];
  activeId: string | "all";
  onClick: (id: string | "all") => void;
}

export const Tabs: FC<TabsProps> = ({ items, activeId, onClick }) => (
  <div className="border-b border-gray-200">
    <div className="flex justify-center">
      <Tab key="all" isActive={activeId === 'all'} onClick={() => onClick('all')}>
        All
      </Tab>
      {items.map((item) => (
        <Tab key={item.id} isActive={item.category === activeId} onClick={() => onClick(item.id)}>
          {item.category}
        </Tab>
      ))}
    </div>
  </div>
);
