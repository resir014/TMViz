import sidebarData from '../_data/sidebar-data.json';

export type SidebarData = {
  readonly id: string;
  readonly title: string;
  readonly url: string;
};

export default sidebarData as unknown as SidebarData[];
