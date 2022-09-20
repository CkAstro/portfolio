import type { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';
import { screen, fireEvent, customRender } from '@/test';
import { ClusterItem } from '@/components';
import { Cluster } from '..';

let user: UserEvent;
const mockItemProps1 = {
   title: 'mockItem1',
   components: 'test1',
   image: '',
   description: 'test item 1',
   link: '',
};

const mockItemProps2 = {
   title: 'mockItem2',
   components: 'test2',
   image: '',
   description: 'test item 2',
   link: '',
};

describe('Cluster (unit)', () => {
   test('', () => {});
});
